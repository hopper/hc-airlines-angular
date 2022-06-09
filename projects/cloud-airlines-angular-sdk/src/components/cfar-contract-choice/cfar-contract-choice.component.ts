import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CancelForAnyReasonCFARService, CfarOffer, CreateCfarOfferRequest, FareClass, PassengerPricing, PassengerType, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { AbstractComponent } from '../abstract.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';

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
    private _cancelForAnyReasonCFARService: CancelForAnyReasonCFARService
  ) {
    super(_adapter, _translateService, _cancelForAnyReasonCFARService);
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

    this.isLoading = true;

    this._cancelForAnyReasonCFARService
      .postCfarOffers(ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest()), this.hCSessionId)
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
        (error) => this.isLoading = false);
    
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
