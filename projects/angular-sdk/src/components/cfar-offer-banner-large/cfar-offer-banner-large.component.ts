import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, RequestType, UiSource } from '../../apis/hopper-cloud-airline/v1';
import { GlobalComponent } from '../global.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperProxyService } from '../../services/hopper-proxy.service';

@Component({
  selector: 'hopper-cfar-offer-banner-large',
  templateUrl: './cfar-offer-banner-large.component.html',
  styleUrls: ['./cfar-offer-banner-large.component.scss']
})
export class CfarOfferBannerLargeComponent extends GlobalComponent implements OnInit {

  public cfarOffers!: CfarOfferCustomer[];
  public selectedCfarOffer!: CfarOfferCustomer;
  public isLoading!: boolean;
  public selectedChoice!: number;
  public currency!: string;

  @Input() hCSessionId!: string;
  @Input() itineraries!: CfarItinerary[];
  @Input() hasNoCoverageOption: boolean = true;
  @Input() hasWarningCoverageMessage: boolean = false;

  @Output() chooseCoverage = new EventEmitter();
  @Output() offersLoaded = new EventEmitter();

  private contractsByChoiceIndex = new Map<number, CfarContractCustomer>();
  private uiSource!: UiSource;

  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _hopperProxyService: HopperProxyService,
  ) {
    super(_adapter, _translateService);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    if (this.isFakeBackend) {
      this.cfarOffers = this._buildFakePostCfarOffersResponse();
      this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
      this.offersLoaded.emit(this.cfarOffers);
    } else {
      this.isLoading = true;

      this._initUiSource();

      this._hopperProxyService
        .postCfarOffers(this.basePath, this.hCSessionId, this.currentLang, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest()))
        .pipe(take(1))
        .subscribe({
          next: (cfarOffers) => {
            let results: CfarOfferCustomer[] = [];

            if (cfarOffers) {
              cfarOffers.forEach(cfarOffer => {
                results.push(ApiTranslatorUtils.modelToCamelCase(cfarOffer) as CfarOfferCustomer);
              });
            }
            
            this.cfarOffers = results;
            this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
            this.offersLoaded.emit(this.cfarOffers);
            
            this.isLoading = false;
          },
          error: (error) => {
            console.error(error);
            this.offersLoaded.emit();
            this.isLoading = false;
          }
        });
    }
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public computePercentage(offer: CfarOfferCustomer): number {
    if (offer) {
      const coverage = Number.parseFloat(offer.coverage);
      const totalPrice = Number.parseFloat(offer.itinerary.totalPrice);
  
      return coverage / (totalPrice || 1.0);
    }

    return 0;
  }

  public onChooseCoverage(): void {
    // After the first choice, we force the display of the 'decline' option
    this.hasNoCoverageOption = true;
    
    // Update descriptions
    this.selectedCfarOffer = this.selectedChoice > -1 ? this.cfarOffers[this.selectedChoice] : this._getCheapestOffer(this.cfarOffers);
  
    if (this.selectedChoice != -1) {

      if (this.isFakeBackend) {
        this.chooseCoverage.emit(this._buildFakePostCfarContractsResponse());
      } else {
        // Emit the cached element
        if (this.contractsByChoiceIndex.has(this.selectedChoice)) {
          this.chooseCoverage.emit(this.contractsByChoiceIndex.get(this.selectedChoice));
        // Backend call
        } else {
          this.isLoading = true;

          // Create CFAR Contract
          this._hopperProxyService
            .postCfarContracts(this.basePath, this.hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractRequest()))
            .pipe(take(1))
            .subscribe({
              next: (cfarContract: CfarContractCustomer) => {
                // Cache the result into a map (for API performance)
                this.contractsByChoiceIndex.set(this.selectedChoice, cfarContract);
  
                this.chooseCoverage.emit(cfarContract);
                this.isLoading = false;
              },
              error: (error) => {
                console.error(error);
                this.isLoading = false;
              }
            });
        } 
      }
    } else {
      this.chooseCoverage.emit(null);
    }
  }

  public getPricePerTraveler(offer: CfarOfferCustomer): number {
    var nbTravelers = 0;
    
    offer.itinerary.passengerPricing.forEach(pp => {
      nbTravelers += pp.passengerCount.count
    });

    return +offer.coverage / (nbTravelers || 1);
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  /**
   * Actually, The UI Source is fixed using the parameters of the component.
   * FIXME In the future, use a dedicated parameter, passed by the airline. 
   * WARN /!\ Call this method only when initializing the component (i.e. ngOnInit).
   * @returns 
   */
  private _initUiSource() {
    this.uiSource = this.hasNoCoverageOption ? UiSource.BannerVariantA : UiSource.BannerVariantB;
  }

  private _buildCreateCfarOfferRequest(): CreateCfarOfferCustomerRequest {
    return {
      itinerary: this.itineraries,
      requestType: RequestType.Ancillary
    };
  }

  private _buildCreateCfarContractRequest(): CreateCfarContractCustomerRequest {
    return {
      offerIds: [this.selectedCfarOffer.id],
      itinerary: this.selectedCfarOffer.itinerary,
      uiSource: this.uiSource
    };
  } 

  private _buildFakePostCfarOffersResponse(): CfarOfferCustomer[] {   
    return [
      {
        id: "1ecf859e-8785-625f-8eda-198d1ce0d6c4",
        premium: "8.00",
        coverage: "57.78",
        currency: "CAD",
        requestType: "ancillary",
        toUsdExchangeRate: "0.7744877537996369201410187302118379",
        contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
        createdDateTime: new Date("2022-06-30T09:49:17.762Z"),
        itinerary: {
          passengerPricing: [
            {
              passengerCount: {
                  count: 3,
                  type: "adult"
              },
              individualPrice: "null"
            }
          ],
          "currency": "CAD",
          slices: [
            {
              segments: [
                {
                  originAirport: "YYZ",
                  destinationAirport: "YUL",
                  departureDateTime: "2022-07-09T18:00",
                  arrivalDateTime: "2022-07-09T19:14",
                  flightNumber: "AC894",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                },
                {
                  originAirport: "YUL",
                  destinationAirport: "NCE",
                  departureDateTime: "2022-07-09T20:50",
                  arrivalDateTime: "2022-07-10T10:25",
                  flightNumber: "AC878",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                }
              ]
            },
            {
              segments: [
                {
                  originAirport: "NCE",
                  destinationAirport: "YUL",
                  departureDateTime: "2022-07-15T13:15",
                  arrivalDateTime: "2022-07-15T15:55",
                  flightNumber: "AC879",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                },
                {
                  originAirport: "YUL",
                  destinationAirport: "YYZ",
                  departureDateTime: "2022-07-15T17:30",
                  arrivalDateTime: "2022-07-15T18:50",
                  flightNumber: "AC895",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                }
              ]
            }
          ],
          ancillaries: [],
          totalPrice: "71.96"
        },
        offerDescription: [
          "Add the flexibility to cancel your flight for any reason up to <b>24 hours</b> before departure",
          "Cancel and get a refund of your flight base fare and taxes, excluding additional services (paid seats, paid bags...)",
          "Get instant resolution, no forms or claims required"
        ]
      },
      {
        id: "1ecf859e-8785-625f-8eda-198d1ce0d6c5",
        premium: "10.00",
        coverage: "71.96",
        currency: "CAD",
        requestType: "ancillary",
        toUsdExchangeRate: "0.7744877537996369201410187302118379",
        contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
        createdDateTime: new Date("2022-06-30T09:49:17.762Z"),
        itinerary: {
          passengerPricing: [
            {
              passengerCount: {
                  count: 3,
                  type: "adult"
              },
              individualPrice: "null"
            }
          ],
          currency: "CAD",
          slices: [
            {
              segments: [
                {
                  originAirport: "YYZ",
                  destinationAirport: "YUL",
                  departureDateTime: "2022-07-09T18:00",
                  arrivalDateTime: "2022-07-09T19:14",
                  flightNumber: "AC894",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                },
                {
                  originAirport: "YUL",
                  destinationAirport: "NCE",
                  departureDateTime: "2022-07-09T20:50",
                  arrivalDateTime: "2022-07-10T10:25",
                  flightNumber: "AC878",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                }
              ]
            },
            {
              segments: [
                {
                  originAirport: "NCE",
                  destinationAirport: "YUL",
                  departureDateTime: "2022-07-15T13:15",
                  arrivalDateTime: "2022-07-15T15:55",
                  flightNumber: "AC879",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                },
                {
                  originAirport: "YUL",
                  destinationAirport: "YYZ",
                  departureDateTime: "2022-07-15T17:30",
                  arrivalDateTime: "2022-07-15T18:50",
                  flightNumber: "AC895",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                }
              ]
            }
          ],
          ancillaries: [],
          totalPrice: "71.96"
        },
        offerDescription: [
          "Add the flexibility to cancel your flight for any reason up to <b>24 hours</b> before departure",
          "Cancel and get a refund of your flight base fare and taxes, excluding additional services (paid seats, paid bags...)",
          "Get instant resolution, no forms or claims required"
        ]
      }
    ];
  }

  private _buildFakePostCfarContractsResponse(): CfarContractCustomer {
    return {
      id: "1ecf85ab-211f-68b7-9bb3-4b1a314f1a42",
      premium: "10.00"
    };
  }
}
