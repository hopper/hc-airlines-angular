import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarOffer, CreateCfarOfferRequest, FareClass, PassengerPricing, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { AbstractComponent } from '../abstract.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperProxyService } from '../../services/hopper-proxy.service';

@Component({
  selector: 'hopper-cfar-contract-choice',
  templateUrl: './cfar-contract-choice.component.html',
  styleUrls: ['./cfar-contract-choice.component.scss']
})
export class CfarContractChoiceComponent extends AbstractComponent implements OnInit {

  public rules!: string[];
  public cfarOffers!: CfarOffer[];
  public isLoading!: boolean;

  @Input() partnerId!: string;
  @Input() hCSessionId!: string;
  @Input() originAirport!: string;
  @Input() destinationAirport!: string;
  @Input() departureDateTime!: string;
  @Input() arrivalDateTime!: string;
  @Input() flightNumber!: string;
  @Input() carrierCode!: string;
  @Input() fareClass!: FareClass;
  @Input() currency!: string;
  @Input() totalPrice!: string;
  @Input() passengers!: PassengerPricing[];
  @Input() ancillaryPrice!: string;
  @Input() ancillaryType!: string;
  @Input() bookingDateTime!: Date;

  @Output() emitSubmit = new EventEmitter();
  
  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _hopperProxyService: HopperProxyService
  ) {
    super(_adapter, _translateService);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    // FIXME : To remove later
    this.rules = [
      'Add the flexibility to cancel your flight for any reason up to 3 hours before departure',
      'No forms or claims required, without talking to customer service',
    ];

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
    this.emitSubmit.emit(cfarOffer);
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _buildCreateCfarOfferRequest(): CreateCfarOfferRequest {
    return {
      partnerId: this.partnerId,
      itinerary: [
        {
          currency: this.currency,
          passengerPricing: this.passengers,
          slices: [
            {
              segments: [
                {
                  originAirport: this.originAirport,
                  destinationAirport: this.destinationAirport,
                  departureDateTime: this.departureDateTime,
                  arrivalDateTime: this.arrivalDateTime,
                  flightNumber: this.flightNumber,
                  validatingCarrierCode: this.carrierCode,
                  fareClass: this.fareClass
                }
              ]
            }
          ],
          totalPrice: this.totalPrice,
          ancillaries: [
            {
              totalPrice: this.ancillaryPrice,
              type: this.ancillaryType
            }
          ]
        }
      ],
      requestType: RequestType.Ancillary,
      bookingDateTime: this.bookingDateTime,
      extAttributes: {}
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
          ""
        ],
        "extAttributes": {
          "property1": "test1",
          "property2": "test2"
        }
      }
    ];
  }
}
