import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarContract, CfarItinerary, CfarOffer, CreateCfarOfferRequest, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { AbstractComponent } from '../abstract.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperProxyService } from '../../services/hopper-proxy.service';
import { CfarOfferDialogComponent, DialogUtils } from '../../public-api';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'hopper-cfar-offer-banner',
  templateUrl: './cfar-offer-banner.component.html',
  styleUrls: ['./cfar-offer-banner.component.scss']
})
export class CfarOfferBannerComponent extends AbstractComponent implements OnInit {

  public cheapestOffer!: CfarOffer;
  public isLoading!: boolean;

  private _cfarOffers!: CfarOffer[];

  @Input() hCSessionId!: string;
  @Input() itineraries!: CfarItinerary[];
  @Input() currentTheme!: string;

  @Output() offerAccepted = new EventEmitter();
  
  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _hopperProxyService: HopperProxyService,
    private _dialog: MatDialog
  ) {
    super(_adapter, _translateService);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    if (this.isFakeBackend) {
      this._cfarOffers = this._buildFakePostCfarOffersResponse();
      this.cheapestOffer = this._getCheapestOffer(this._cfarOffers);
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
            
            this._cfarOffers = results;
            this.cheapestOffer = this._getCheapestOffer(this._cfarOffers);
            this.isLoading = false;
          },
          (error) => this.isLoading = false
        );
    }
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public onSubmit(cfarOffer: CfarOffer): void {
    const dialogData = { 
      currentLang: this.currentLang,
      basePath: this.basePath,
      hCSessionId: this.hCSessionId,
      cfarOffers: this._cfarOffers,
      extAttributes: this.extAttributes
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
    const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(
        (result: CfarContract) => {
          if (result) {
            this.offerAccepted.emit(result);
          } else {
            console.log("Close dialog");
          }
        },
        (error) => console.log(error)
      );
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _buildCreateCfarOfferRequest(): CreateCfarOfferRequest {
    return {
      itinerary: this.itineraries,
      requestType: RequestType.Ancillary,
      extAttributes: this.extAttributes
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
