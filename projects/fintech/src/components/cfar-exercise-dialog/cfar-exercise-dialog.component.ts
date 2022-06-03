import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, take } from 'rxjs/operators';
import { CancelForAnyReasonCFARService, CfarContract, CfarOffer, CfarContractExercise, CreateCfarContractExerciseRequest, PassengerPricing, FareClass, CfarItinerary } from '../../apis/hopper-cloud-airline/v1';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'hopper-cfar-exercise-dialog',
  templateUrl: './cfar-exercise-dialog.component.html',
  styleUrls: ['./cfar-exercise-dialog.component.scss']
})
export class CfarExerciseDialogComponent extends AbstractComponent implements OnInit {

  public selectedCfarOffer!: CfarOffer;
  public selectedRefundMethod!: 'ftc' | 'cash';
  public cfarContract!: CfarContract;
  public refundMethods!: { value: 'ftc' | 'cash', label: string }[];
  public isHopperRefund!: boolean;

  // Mandatory data
  private _hCSessionId!: string;
  private _pnrReference!: string;
  private _contractId!: string;
  private _currency!: string;
  private _originAirport!: string;
  private _destinationAirport!: string;
  private _departureDateTime!: string;
  private _arrivalDateTime!: string;
  private _flightNumber!: string;
  private _carrierCode!: string;
  private _fareClass!: FareClass;
  private _totalPrice!: string;
  private _passengers!: PassengerPricing[];
  private _ancillaryPrice!: string;
  private _ancillaryType!: string;

  // Optional data
  private _airlineRefundAllowance?: string;

  constructor(
    private _cancelForAnyReasonCFARService: CancelForAnyReasonCFARService,
    private _dialogRef: MatDialogRef<CfarExerciseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(_cancelForAnyReasonCFARService);

    // Mandatory data
    this._hCSessionId = data.hCSessionId;
    this._pnrReference = data.pnrReference;
    this._contractId = data.contractId;
    this._currency = data.currency;
    this._originAirport = data.originAirport;
    this._destinationAirport = data.destinationAirport;
    this._departureDateTime = data.departureDateTime;
    this._arrivalDateTime = data.arrivalDateTime;
    this._flightNumber = data.flightNumber;
    this._carrierCode = data.carrierCode;
    this._fareClass = data.fareClass;
    this._totalPrice = data.totalPrice;
    this._passengers = data.passengers;
    this._ancillaryPrice = data.ancillaryPrice;
    this._ancillaryType = data.ancillaryType;

    // Optional data
    this._currency = data.currency;
    this._airlineRefundAllowance = data.airlineRefundAllowance;
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    // ----------- MOCK -----------
    this.cfarContract = {
      id: "1ecdc0ed-2d10-6868-84a2-fd8a8e4ae6c1",
      offers: [
        {
          id: "1ecdc0ec-8ea8-6c3d-84a2-a7c5ee1c8713",
          premium: "27.00",
          coverage: "73.32",
          currency: "CAD",
          requestType: "fare",
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
                    fareClass: "basic_economy"
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
      ],
      coverage: "146.64",
      premium: "51.00",
      currency: "CAD",
      createdDateTime: new Date("2022-05-25T09:41:16.621Z"),
      expiryDateTime: new Date("2022-05-27T22:34:30Z"),
      status: "created",
      contractExercise: {
        contractId: '123456',
        exerciseInitiatedDateTime: new Date(),
        hopperRefund: '25.0',
        hopperRefundMethod: 'cash',
        airlineRefundAllowance: '50.0',
        airlineRefundMethod: 'cash',
        id: '1',
        currency: 'CAD',
        extAttributes: {}
      },
      pnrReference: "ABC123",
      extAttributes: {
          property1: "azerty",
          property2: "qwerty"
      }, 
      itinerary: {
        passengerPricing: [
          {
            passengerCount: {
              count: 2,
              type: "adult"
            }
          },
          {
            passengerCount: {
              count: 1,
              type: "child"
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
                fareClass: "basic_economy"
              },
              {
                originAirport: "BOS",
                destinationAirport: "LGA",
                departureDateTime: "2022-06-28T18:34:30",
                arrivalDateTime: "2022-06-28T19:12:30",
                flightNumber: "JB777",
                validatingCarrierCode: "B6",
                fareClass: "basic_economy"
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
      }
    };
    // ----------------------------

    /*

    // Create Contract Exercise
    this.cancelForAnyReasonCFARService
      .postCfarContractExercises(this._buildCreateCfarContractExerciseRequest(), this._hCSessionId)
      .pipe(take(1))
      .subscribe((cfarContractExercise: CfarContractExercise) => {
        // Get the contract with the exercise
        this.cancelForAnyReasonCFARService
          .getCfarContractsId(this._contractId, this._hCSessionId)
          .pipe(take(1))
          .subscribe((cfarContract: CfarContract) => {
            this.cfarContract = cfarContract;
            // Hopper offer by default
            this.isHopperRefund = true;
          });
      });

    */

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
      pnrReference: this._pnrReference,
      airlineRefundAllowance: this._airlineRefundAllowance,
      airlineRefundMethod: this.selectedRefundMethod,
      currency: this._currency,
      extAttributes: {}
    };
  }
}
