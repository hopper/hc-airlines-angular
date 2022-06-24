import { Directive, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { getCurrentLang, getCurrentTheme } from "src/app/shared/ngrx/global/global.selectors";
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MapString } from "projects/cloud-airlines-angular-sdk/src/apis/hopper-cloud-airline/v1";

@Directive({
  selector: '[CommonGuidesComponent]'
})
export abstract class CommonGuidesComponent implements OnInit, OnDestroy {
    
  public currentTheme!: string;
  public currentLang!: string;
  public basePath!: string;
  public isFakeBackend!: boolean;

  protected _unsubcriber: Subject<any>;

  public abstract tsCode: string;
  public abstract htmlCode: string;

  // Parameters
  public partnerId = "23459807-1a9a-4227-a7aa-226e3c5552d1";
  public hCSessionId = "6c966d68-cd8e-4c04-9783-d81a1887b7c3";

  public originAirport = "LGA";
  public destinationAirport = "BOS";
  public departureDateTime = "2022-06-28T18:34:30";
  public arrivalDateTime = "2022-06-28T19:12:30";
  public flightNumber = "JB776";
  public carrierCode = "B6";
  public fareClass: any = "basic_economy";
  public currency = "EUR";
  public totalPrice = "91.65";
  public passengers: any[] = [
    {
      passengerCount: {
        count: 3,
        type: "adult"
      }
    }
  ];
  public ancillaryPrice = "30.55";
  public ancillaryType = "travel_insurance";
  public bookingDateTime = new Date();
  public paymentType = "offline_reconciliation";
  public pnrReference = "123456";
  public contractId = "1ece89da-263c-6689-bec4-f56934b83f44";
  public extAttributes: MapString = {
    property1: "value1",
    property2: "value2"
  };

  public itinerary = [{
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
  }];

  constructor(
    protected _store: Store<AppState>,
    protected _clipboard: Clipboard,
    protected _snackBar: MatSnackBar
  ) {
    this._unsubcriber = new Subject<any>();
    
    // Active fake data in components
    this.isFakeBackend = true;

    // For local usage
    this.basePath = 'http://localhost:7071/airline/v1.0/customer';
  }
  
  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    // update the currentLang when it's changing
    this._store.pipe(
      select(getCurrentLang),
      takeUntil(this._unsubcriber)
    ).subscribe((currentLanguage: string) => this.currentLang = currentLanguage);

    // update the currentTheme when it's changing
    this._store.pipe(
      select(getCurrentTheme),
      takeUntil(this._unsubcriber)
    ).subscribe((currentTheme: string) => this.currentTheme = currentTheme);
  }

  ngOnDestroy(): void {
    this._unsubcriber.next();
    this._unsubcriber.complete();
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public abstract getInputs(): InputModel[];

  public abstract getOutputs(): OutputModel[];

  public onCopySourceCode(sourceCode: string): void {
    // Copy the text in the clipboard
    this._clipboard.copy(sourceCode);

    // Display a snackbar
    this._snackBar.open('Code copied', 'close', {
      duration: 2500
    })
  }
}