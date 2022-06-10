import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CancelForAnyReasonCFARService, CfarContract, CfarOffer, CreateCfarContractRequest, CreateCfarOfferRequest, FareClass, PassengerPricing, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { AbstractComponent } from '../abstract.component';
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';

@Component({
  selector: 'hopper-cfar-contract-dialog',
  templateUrl: './cfar-contract-dialog.component.html',
  styleUrls: ['./cfar-contract-dialog.component.scss']
})
export class CfarContractDialogComponent extends AbstractComponent implements OnInit, OnChanges {

  public rules!: string[];
  public cfarOffers!: CfarOffer[];
  public selectedCfarOffer!: CfarOffer;
  public isLoading!: boolean;

  // Mandatory data
  private _partnerId!: string;
  private _hCSessionId!: string;
  private _originAirport!: string;
  private _destinationAirport!: string;
  private _departureDateTime!: string;
  private _arrivalDateTime!: string;
  private _flightNumber!: string;
  private _carrierCode!: string;
  private _fareClass!: FareClass;
  private _currency!: string;
  private _totalPrice!: string;
  private _passengers!: PassengerPricing[];
  private _ancillaryPrice!: string;
  private _ancillaryType!: string;
  private _bookingDateTime!: Date;
  private _paymentType!: string;

  // Optional data
  private _pnrReference?: string;

  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _cancelForAnyReasonCFARService: CancelForAnyReasonCFARService,
    private _dialogRef: MatDialogRef<CfarContractDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(_adapter, _translateService, _cancelForAnyReasonCFARService);

    // Mandatory data
    this._partnerId = data.partnerId;
    this._hCSessionId = data.hCSessionId;
    this._originAirport = data.originAirport;
    this._destinationAirport = data.destinationAirport;
    this._departureDateTime = data.departureDateTime;
    this._arrivalDateTime = data.arrivalDateTime;
    this._flightNumber = data.flightNumber;
    this._carrierCode = data.carrierCode;
    this._fareClass = data.fareClass;
    this._currency = data.currency;
    this._totalPrice = data.totalPrice;
    this._passengers = data.passengers;
    this._ancillaryPrice = data.ancillaryPrice;
    this._ancillaryType = data.ancillaryType;
    this._bookingDateTime = data.bookingDateTime;
    this._paymentType = data.paymentType;

    // Optional data
    this._pnrReference = data.pnrReference;

    // Update CurrentLang manually (Dialog limitation)
    this.currentLang = data.currentLang;
    this._translateService.use(this.currentLang);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    // FIXME : To Remove later
    this.rules = [
      'Add the flexibility to cancel your flight for any reason up to 3 hours before departure',
      'Cancel and choose between an XX% refund of your flightase fare and taxes or XX% airline travel credit',
      'Get instant resolution through Air Canada, no form or claims required!',
    ];

    this.isLoading = true;

    this._cancelForAnyReasonCFARService
      .postCfarOffers(ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest()), this._hCSessionId)
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
          // The first one by default
          this.selectedCfarOffer = results[0];
          this.isLoading = false;
        },
        (error) => this.isLoading = false);
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  onClose(): void {
    this._dialogRef.close();
  }

  onSubmit(): void {
    this.isLoading = true;

    // Create CFAR Contract
    this._cancelForAnyReasonCFARService
      .postCfarContracts(ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractRequest()), this._hCSessionId)
      .pipe(take(1))
      .subscribe(
        (cfarContract: CfarContract) => {
          this._dialogRef.close(ApiTranslatorUtils.modelToCamelCase(cfarContract) as CfarContract);
        },
        (error) => this.isLoading = false
      );
  }

  onSelectOffer(cfarOffer: CfarOffer): void {
    this.selectedCfarOffer = cfarOffer;
  }

  onViewDetails(offer: CfarOffer): void {
    this.onSelectOffer(offer);

    // TODO
  }

  computePercentage(offer: CfarOffer): number {
    if (offer) {
      const coverage = Number.parseFloat(offer.coverage);
      const totalPrice = Number.parseFloat(offer.itinerary.totalPrice);
  
      return coverage / (totalPrice || 1.0);
    }

    return 0;
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _buildCreateCfarOfferRequest(): CreateCfarOfferRequest {
    return {
      partnerId: this._partnerId,
      itinerary: [
        {
          currency: this._currency,
          passengerPricing: this._passengers,
          slices: [
            {
              segments: [
                {
                  originAirport: this._originAirport,
                  destinationAirport: this._destinationAirport,
                  departureDateTime: this._departureDateTime,
                  arrivalDateTime: this._arrivalDateTime,
                  flightNumber: this._flightNumber,
                  validatingCarrierCode: this._carrierCode,
                  fareClass: this._fareClass
                }
              ]
            }
          ],
          totalPrice: this._totalPrice,
          ancillaries: [
            {
              totalPrice: this._ancillaryPrice,
              type: this._ancillaryType
            }
          ]
        }
      ],
      requestType: RequestType.Ancillary,
      bookingDateTime: this._bookingDateTime,
      extAttributes: {}
    };
  }

  private _buildCreateCfarContractRequest(): CreateCfarContractRequest {
    return {
      offerIds: [this.selectedCfarOffer.id],
      itinerary: {
        currency: this._currency,
        passengerPricing: this._passengers,
        slices: [
          {
            segments: [
              {
                originAirport: this._originAirport,
                destinationAirport: this._destinationAirport,
                departureDateTime: this._departureDateTime,
                arrivalDateTime: this._arrivalDateTime,
                flightNumber: this._flightNumber,
                validatingCarrierCode: this._carrierCode,
                fareClass: this._fareClass
              }
            ]
          }
        ],
        totalPrice: this._totalPrice,
        ancillaries: [
          {
            totalPrice: this._ancillaryPrice,
            type: this._ancillaryType
          }
        ]
      },
      paymentMethod: {
        type: this._paymentType
      },
      extAttributes: {},
      pnrReference: this._pnrReference
    };
  } 
}
