import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CfarContract, CfarOffer, CfarContractExercise, CreateCfarContractExerciseRequest, PassengerPricing, FareClass, CfarItinerary } from '../../apis/hopper-cloud-airline/v1';
import { AbstractComponent } from '../abstract.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperProxyService } from '../../services/hopper-proxy.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hopper-cfar-exercise-dialog',
  templateUrl: './cfar-exercise-dialog.component.html',
  styleUrls: ['./cfar-exercise-dialog.component.scss']
})
export class CfarExerciseDialogComponent extends AbstractComponent implements OnInit {

  public selectedCfarOffer!: CfarOffer;
  public selectedRefundMethod?: 'ftc' | 'cash';
  public cfarContract!: CfarContract;
  public refundMethods!: { value: 'ftc' | 'cash', label: string }[];
  public isHopperRefund!: boolean;
  public isLoading!: boolean;

  // Mandatory data
  private _hCSessionId!: string;
  private _pnrReference!: string;
  private _contractId!: string;
  private _itinerary!: CfarItinerary;
  private _currency!: string;

  // Optional data
  private _airlineRefundAllowance?: string;

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _dialogRef: MatDialogRef<CfarExerciseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _hopperProxyService: HopperProxyService
  ) {
    super(_adapter, _translateService);

    // Mandatory data
    this._hCSessionId = data.hCSessionId;
    this._pnrReference = data.pnrReference;
    this._contractId = data.contractId;
    this._itinerary = data.itinerary;
    this._currency = data.currency;

    // Optional data
    this._currency = data.currency;
    this._airlineRefundAllowance = data.airlineRefundAllowance;

    // Update parents @inputs manually (Dialog limitation)
    this.isFakeBackend = data.isFakeBackend;
    this.currentLang = data.currentLang;
    this.basePath = data.basePath;
    this.extAttributes = this.extAttributes;

    this._translateService.use(data.currentLang);

    // Create material icon for refundable ticket
    this._matIconRegistry.addSvgIcon("refundable_ticket", this._domSanitizer.bypassSecurityTrustResourceUrl("assets/refundable-ticket.svg"));
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    if (this.isFakeBackend) {
      this.cfarContract = this._buildFakeCfarContractExercisesResponse();
    } else {
      this.isLoading = true;

      // Create Contract Exercise
      this._hopperProxyService
        .postCfarContractExercises(
          this.basePath, this._hCSessionId, 
          ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractExerciseRequest())
        )
        .pipe(take(1))
        .subscribe(
          (cfarContractExercise: CfarContractExercise) => {
            // Get the contract with the exercise
            this._hopperProxyService
              .getCfarContractsId(this.basePath, this._contractId, this._hCSessionId)
              .pipe(take(1))
              .subscribe((cfarContract: CfarContract) => {
                const result = ApiTranslatorUtils.modelToCamelCase(cfarContract) as CfarContract;
  
                this.cfarContract = result;
  
                // Hopper offer by default
                this.isHopperRefund = true;
              });
          },
          (error) => this.isLoading = false
        );
    }

    this.refundMethods = [
      { value: 'ftc', label: 'FTC' },
      { value: 'cash', label: 'CASH' }
    ];
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  onClose(): void {
    this._dialogRef.close();
  }

  onSubmit(): void {
    // TODO
  }

  onSelectRefundType(type: string): void {
    this.isHopperRefund = type == 'hopper';
  }

  onSelectRefundMethod(method: { value: 'ftc' | 'cash', label: string }): void {
    this.selectedRefundMethod = method.value;
  }

  getNbPassengers(itinerary: CfarItinerary): number {
    let nbPassengers = 0;

    if (itinerary && itinerary?.passengerPricing) {
      itinerary.passengerPricing.forEach(pp => nbPassengers += pp.passengerCount.count);
    } 

    return nbPassengers;
  }

  getMapPassengers(itinerary: CfarItinerary): Map<string, number> {
    const mapPassengers = new Map<string, number>();

    itinerary.passengerPricing.forEach(pp => {
      const passengerType = pp.passengerCount.type;
      const passengerCount = pp.passengerCount.count;

      mapPassengers.set(passengerType, passengerCount + (mapPassengers.get(passengerType) || 0));
    });

    return mapPassengers;
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _buildCreateCfarContractExerciseRequest(): CreateCfarContractExerciseRequest {
    return {
      contractId: this._contractId,
      exerciseInitiatedDateTime: new Date(),
      itinerary: this._itinerary,
      pnrReference: this._pnrReference,
      airlineRefundAllowance: this._airlineRefundAllowance,
      airlineRefundMethod: this.selectedRefundMethod,
      currency: this._currency,
      extAttributes: this.extAttributes
    };
  }

  private _buildFakeCfarContractExercisesResponse(): CfarContract {
    return {
      "id": "1ecdc0ed-2d10-6868-84a2-fd8a8e4ae6c1",
      "offers": [
        {
          "id": "1ecdc0ec-8ea8-6c3d-84a2-a7c5ee1c8713",
          "premium": "27.00",
          "coverage": "73.32",
          "currency": "CAD",
          "requestType": "fare",
          "toUsdExchangeRate": "0.7792270535165348084620941103681614",
          "contractExpiryDateTime": new Date("2022-05-27T22:34:30Z"),
          "createdDateTime": new Date("2022-05-25T09:41:00.011Z"),
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
                    "departureDateTime": "2022-05-28T18:34:30",
                    "arrivalDateTime": "2022-05-28T19:12:30",
                    "flightNumber": "JB776",
                    "validatingCarrierCode": "B6",
                    "fareClass": "basic_economy"
                  }
                ]
              }
            ],
            "ancillaries": [
              {
                "totalPrice": "30.55",
                "type": "travel_insurance"
              }
            ],
            "totalPrice": "91.65"
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
        },
        {
          "id": "1ecdc0ec-9117-652e-84a2-f1b1c8c82794",
          "premium": "24.00",
          "coverage": "73.32",
          "currency": "CAD",
          "requestType": "fare",
          "toUsdExchangeRate": "0.7792270535165348084620941103681614",
          "contractExpiryDateTime": new Date("2022-05-27T22:34:30Z"),
          "createdDateTime": new Date("2022-05-25T09:41:00.266Z"),
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
                    "departureDateTime": "2022-05-28T18:34:30",
                    "arrivalDateTime": "2022-05-28T19:12:30",
                    "flightNumber": "JB777",
                    "validatingCarrierCode": "B6",
                    "fareClass": "basic_economy"
                  }
                ]
              }
            ],
            "ancillaries": [
              {
                "totalPrice": "30.55",
                "type": "travel_insurance"
              }
            ],
            "totalPrice": "91.65"
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
      ],
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
                "departureDateTime": "2022-05-28T18:34:30",
                "arrivalDateTime": "2022-05-28T19:12:30",
                "flightNumber": "JB777",
                "validatingCarrierCode": "B6",
                "fareClass": "basic_economy"
              }
            ]
          }
        ],
        "ancillaries": [
          {
            "totalPrice": "30.55",
            "type": "travel_insurance"
          }
        ],
        "totalPrice": "91.65"
      },
      "coverage": "146.64",
      "premium": "51.00",
      "currency": "CAD",
      "createdDateTime": new Date("2022-05-25T09:41:16.621Z"),
      "expiryDateTime": new Date("2022-05-27T22:34:30Z"),
      "status": "created",
      "pnrReference": "ABC123",
      "extAttributes": {
        "property1": "string",
        "property2": "string"
      }
    };
  }
}
