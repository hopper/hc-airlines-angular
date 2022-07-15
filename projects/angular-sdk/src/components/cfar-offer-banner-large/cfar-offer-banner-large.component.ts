import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarContract, CfarItinerary, CfarOffer, CreateCfarContractRequest, CreateCfarOfferRequest, RequestType } from '../../apis/hopper-cloud-airline/v1';
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

  public cfarOffers!: CfarOffer[];
  public selectedCfarOffer!: CfarOffer;
  public isLoading!: boolean;
  public selectedChoice!: number;

  @Input() hCSessionId!: string;
  @Input() itineraries!: CfarItinerary[];

  @Output() chooseCoverage = new EventEmitter();

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
    } else {
      this.isLoading = true;

      this._hopperProxyService
        .postCfarOffers(this.basePath, this.hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest()))
        .pipe(take(1))
        .subscribe(
          (cfarOffers) => {
            let results: CfarOffer[] = [];

            if (cfarOffers) {
              cfarOffers.forEach(cfarOffer => {
                results.push(ApiTranslatorUtils.modelToCamelCase(cfarOffer) as CfarOffer);
              });
            }
            
            this.cfarOffers = results;
            this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
            this.isLoading = false;
          },
          (error) => this.isLoading = false
        );
    }
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public onSubmit(): void {
    if (this.selectedChoice != -1) {
      this.isLoading = true;

      // Create CFAR Contract
      this._hopperProxyService
        .postCfarContracts(this.basePath, this.hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractRequest()))
        .pipe(take(1))
        .subscribe(
          (cfarContract: CfarContract) => {
            this.chooseCoverage.emit(cfarContract);
            this.isLoading = false;
          },
          (error) => this.isLoading = false
        );
    } else {
      this.chooseCoverage.emit(null);
    }
  }

  public computePercentage(offer: CfarOffer): number {
    if (offer) {
      const coverage = Number.parseFloat(offer.coverage);
      const totalPrice = Number.parseFloat(offer.itinerary.totalPrice);
  
      return coverage / (totalPrice || 1.0);
    }

    return 0;
  }

  public onChangeChoice(): void {
    // Update descriptions
    this.selectedCfarOffer = this.selectedChoice > -1 ? this.cfarOffers[this.selectedChoice] : this._getCheapestOffer(this.cfarOffers);
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _buildCreateCfarOfferRequest(): CreateCfarOfferRequest {
    return {
      itinerary: this.itineraries,
      requestType: RequestType.Ancillary,
      extAttributes: {}
    };
  }

  private _buildCreateCfarContractRequest(): CreateCfarContractRequest {
    return {
      offerIds: [this.selectedCfarOffer.id],
      itinerary: this.selectedCfarOffer.itinerary,
      extAttributes: {}
    };
  } 

  private _buildFakePostCfarOffersResponse(): CfarOffer[] {   
    return [
      {
        id: "1ecf859e-8785-625f-8eda-198d1ce0d6c4",
        premium: "861.00",
        coverage: "5736.78",
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
          totalPrice: "7170.96"
        },
        offerDescription: [
          "Add the flexibility to cancel your flight for any reason up to 3 hours before departure",
          "Cancel and choose between a 80% refund of your flight base fare and taxes or 100% airline travel credit",
          "Get instant resolution, no forms or claims required"
        ],
        extAttributes: {}
      },
      {
        id: "1ecf859e-8785-625f-8eda-198d1ce0d6c5",
        premium: "1076.00",
        coverage: "7170.96",
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
          totalPrice: "7170.96"
        },
        offerDescription: [
          "Add the flexibility to cancel your flight for any reason up to 3 hours before departure",
          "Cancel and choose between a 100% refund of your flight base fare and taxes or 100% airline travel credit",
          "Get instant resolution, no forms or claims required"
        ],
        extAttributes: {}
      }
    ];
  }
}
