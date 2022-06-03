import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CancelForAnyReasonCFARService, CfarOffer, CreateCfarOfferRequest, FareClass, PassengerPricing, PassengerType, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'hopper-cfar-contract-choice',
  templateUrl: './cfar-contract-choice.component.html',
  styleUrls: ['./cfar-contract-choice.component.scss']
})
export class CfarContractChoiceComponent extends AbstractComponent implements OnInit {

  public rules!: string[];
  public cfarOffers!: CfarOffer[];

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
    private _cancelForAnyReasonCFARService: CancelForAnyReasonCFARService
  ) {
    super(_cancelForAnyReasonCFARService);
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

    // ----------- MOCK -----------
    this.cfarOffers = [
      {
        id: "1ecdc0ec-8ea8-6c3d-84a2-a7c5ee1c8713",
        premium: "27.00",
        coverage: "73.32",
        currency: "CAD",
        requestType: RequestType.Ancillary,
        toUsdExchangeRate: "0.7792270535165348084620941103681614",
        contractExpiryDateTime: new Date("2022-05-27T22:34:30Z"),
        createdDateTime: new Date("2022-05-25T09:41:00.011Z"),
        itinerary: {
          passengerPricing: [
            {
              passengerCount: {
                count: 3,
                type: "adult"
              }
            }
          ],
          currency: "CAD",
          slices: [
            {
              segments: [
                {
                  originAirport: "LGA",
                  destinationAirport: "BOS",
                  departureDateTime: "2022-05-28T18:34:30",
                  arrivalDateTime: "2022-05-28T19:12:30",
                  flightNumber: "JB776",
                  validatingCarrierCode: "B6",
                  fareClass: FareClass.BasicEconomy
                }
              ]
            }
          ],
          ancillaries: [
            {
              totalPrice: "30.55",
              type: "travel_insurance"
            }
          ],
          totalPrice: "91.65"
        },
        offerDescription: [
            ""
        ],
        extAttributes: {
          property1: "test1",
          property2: "test2"
        }
      }
    ];
    // ----------------------------

    /*
    this._cancelForAnyReasonCFARService
      .postCfarOffers(this._buildCreateCfarOfferRequest(), this.hCSessionId)
      .pipe(take(1))
      .subscribe(cfarOffers => this.cfarOffers = cfarOffers);
    */
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
}
