import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CreateCfarOfferCustomerRequest, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { GlobalComponent } from '../global.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { MatDialog } from '@angular/material/dialog';
import { CfarOfferDialogComponent } from '../cfar-offer-dialog/cfar-offer-dialog.component';
import { DialogUtils } from '../../utils/dialog.utils';

@Component({
  selector: 'hopper-cfar-offer-banner',
  templateUrl: './cfar-offer-banner.component.html',
  styleUrls: ['./cfar-offer-banner.component.scss']
})
export class CfarOfferBannerComponent extends GlobalComponent implements OnInit {

  public cheapestOffer!: CfarOfferCustomer;
  public isLoading!: boolean;

  private _cfarOffers!: CfarOfferCustomer[];

  @Input() hCSessionId!: string;
  @Input() itineraries!: CfarItinerary[];
  @Input() currentTheme!: string;

  @Output() offerAccepted = new EventEmitter();
  @Output() offersLoaded = new EventEmitter();
  
  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _hopperCfarService: HopperCfarService,
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
      this.offersLoaded.emit(this._cfarOffers);
    } else {
      this.isLoading = true;

      this._hopperCfarService
        .postCfarOffers(this.basePath, this.hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest()))
        .pipe(take(1))
        .subscribe({
          next: (cfarOffers) => {
            let results: CfarOfferCustomer[] = [];

            if (cfarOffers) {
              cfarOffers.forEach(cfarOffer => {
                results.push(ApiTranslatorUtils.modelToCamelCase(cfarOffer) as CfarOfferCustomer);
              });
            }
            
            this._cfarOffers = results;
            this.cheapestOffer = this._getCheapestOffer(this._cfarOffers);
            this.offersLoaded.emit(this._cfarOffers);
            
            this.isLoading = false;
          },
          error: (error: any) => {
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

  public onSubmit(cfarOffer: CfarOfferCustomer): void {
    const dialogData = { 
      currentLang: this.currentLang,
      basePath: this.basePath,
      hCSessionId: this.hCSessionId,
      cfarOffers: this._cfarOffers
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
    const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (result: CfarContractCustomer) => {
          if (result) {
            this.offerAccepted.emit(result);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _buildCreateCfarOfferRequest(): CreateCfarOfferCustomerRequest {
    return {
      itinerary: this.itineraries,
      requestType: RequestType.Ancillary
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
        offerDescription: {
          "en": [
            "Add the flexibility to cancel your flight for any reason up to <b> 24 hours </b> before departure",
            "Cancel and get a refund of your flight base fare and taxes, excluding additional services (paid seats, paid bags...)",
            "Get instant resolution, no forms or claims required"
          ],
          "fr": [
            "Offrez-vous la flexibilité d'une annulation sans aucune justification jusqu'à <b>24 heures</b> avant le départ",
            "Annulez et recevez un rembousement du prix de votre vol avec les taxes, à l'exclusion des services additionnels (sièges payant, bagages supplémentaires...)",
            "Traitement instantané, aucun formulaire ou dossier à remplir"
          ],
          "es": ["Date la flexibilidad de una cancelación sin justificación hasta <b>24 horas</b> antes de la salida",
            "Cancela y recibe un reembolso del precio de tu vuelo con impuestos, excluyendo servicios adicionales (asientos pagados, equipaje adicional, etc.)",
            "Procesamiento instantáneo, sin formularios ni archivos para completar"
          ],
          "zh": [
            "在出发前 <b>24 小时</b> 之前，让自己在没有任何理由的情况下灵活取消",
            "取消并获得含税的航班价格退款，不包括额外服务（付费座位、额外行李等）",
            "即时处理，无需填写表格或文件"
          ]
        }
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
        offerDescription: {
          "en": [
            "Add the flexibility to cancel your flight for any reason up to <b> 24 hours </b> before departure",
            "Cancel and get a refund of your flight base fare and taxes, excluding additional services (paid seats, paid bags...)",
            "Get instant resolution, no forms or claims required"
          ],
          "fr": [
            "Offrez-vous la flexibilité d'une annulation sans aucune justification jusqu'à <b>24 heures</b> avant le départ",
            "Annulez et recevez un rembousement du prix de votre vol avec les taxes, à l'exclusion des services additionnels (sièges payant, bagages supplémentaires...)",
            "Traitement instantané, aucun formulaire ou dossier à remplir"
          ],
          "es": ["Date la flexibilidad de una cancelación sin justificación hasta <b>24 horas</b> antes de la salida",
            "Cancela y recibe un reembolso del precio de tu vuelo con impuestos, excluyendo servicios adicionales (asientos pagados, equipaje adicional, etc.)",
            "Procesamiento instantáneo, sin formularios ni archivos para completar"
          ],
          "zh": [
            "在出发前 <b>24 小时</b> 之前，让自己在没有任何理由的情况下灵活取消",
            "取消并获得含税的航班价格退款，不包括额外服务（付费座位、额外行李等）",
            "即时处理，无需填写表格或文件"
          ]
        }
      }
    ];
  }
}
