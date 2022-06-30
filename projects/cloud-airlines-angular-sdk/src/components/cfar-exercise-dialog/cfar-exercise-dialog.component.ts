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
      id: "1ecf85ab-211f-68b7-9bb3-4b1a314f1a42",
      offers: [
        {
          id: "1ecf85a8-1c43-6fad-9bb3-0dca2ca4e73a",
          premium: "1434.00",
          coverage: "5736.78",
          currency: "CAD",
          requestType: "ancillary",
          toUsdExchangeRate: "0.7743486179425866960712648520064921",
          contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
          createdDateTime: new Date("2022-06-30T09:53:34.950Z"),
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
            "Cancel and choose between a 80% refund of your flight base fare and taxes or 100% airline travel credit",
            "Get instant resolution, no forms or claims required"
          ],
          extAttributes: {}
        }
      ],
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
      coverage: "5736.78",
      premium: "1434.00",
      currency: "CAD",
      createdDateTime: new Date("2022-06-30T09:54:55.989Z"),
      expiryDateTime: new Date("2022-07-08T22:00:00Z"),
      status: "created",
      extAttributes: {}
    };
  }
}
