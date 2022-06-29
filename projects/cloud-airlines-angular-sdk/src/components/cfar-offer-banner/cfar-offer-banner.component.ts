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

  public cfarOffers!: CfarOffer[];
  public isLoading!: boolean;

  @Input() partnerId!: string;
  @Input() hCSessionId!: string;
  @Input() bookingDateTime!: Date;
  @Input() itinerary!: CfarItinerary[];

  @Output() emitSubmit = new EventEmitter();
  
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
      this.cfarOffers = this._buildFakePostCfarOffersResponse();
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
      partnerId: this.partnerId,
      hCSessionId: this.hCSessionId,
      cfarOffers: this.cfarOffers,
      extAttributes: this.extAttributes
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData);
    const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(
        (result: CfarContract) => {
          if (result) {
            this.emitSubmit.emit(result);
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
      partnerId: this.partnerId,
      itinerary: this.itinerary,
      requestType: RequestType.Ancillary,
      bookingDateTime: this.bookingDateTime,
      extAttributes: this.extAttributes
    };
  }

  private _buildFakePostCfarOffersResponse(): CfarOffer[] {
    return [
      {
        "id": "1ecf0aa8-8892-6ace-8c08-63e55c467dd8",
        "premium": "180.00",
        "coverage": "481.32",
        "currency": "CAD",
        "requestType": "fare",
        "toUsdExchangeRate": "0.7658463176194433063117224266606420",
        "contractExpiryDateTime": new Date("2022-07-09T22:34:30Z"),
        "createdDateTime": new Date("2022-06-20T15:06:16.744Z"),
        "itinerary": {
          "passengerPricing": [
            {
              "passengerCount": {
                "count": 3,
                "type": "adult"
              },
              "individualPrice": "0.0"
            }
          ],
          "currency": "CAD",
          "slices": [
            {
              "segments": [
                {
                  "originAirport": "LGA",
                  "destinationAirport": "BOS",
                  "departureDateTime": "2022-07-10T18:34:30",
                  "arrivalDateTime": "2022-07-10T19:12:30",
                  "flightNumber": "JB776",
                  "validatingCarrierCode": "B6",
                  "fareClass": "basic_economy"
                }
              ]
            }
          ],
          "ancillaries": [
            {
              "totalPrice": "200.55",
              "type": "travel_insurance"
            }
          ],
          "totalPrice": "601.65"
        },
        "offerDescription": [
          "Add the flexibility to cancel your flight for any reason up to 3 hours before departure",
          "Cancel and choose between a 80% refund of your flight base fare and taxes or 100% airline travel credit",
          "Get instant resolution, no forms or claims required"
        ],
        "extAttributes": {
          "property1": "test1",
          "property2": "test2"
        }
      }
    ];
  }
}
