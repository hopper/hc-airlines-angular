import { Directive, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { getCurrentLang, getCurrentTheme } from "src/app/shared/ngrx/global/global.selectors";
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from "@angular/material/snack-bar";
import { CfarItinerary, MapString, PassengerPricing } from "projects/angular-sdk/src/apis/hopper-cloud-airline/v1";

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
  public hCSessionId = "84310cea-566a-479a-bd27-385eab32d10c";
  public currency = "EUR";
  public passengers: PassengerPricing[] = [
    {
      passengerCount: {
        count: 3,
        type: "adult"
      }
    }
  ];
  public pnrReference = "123456";
  public contractId = "1ece89da-263c-6689-bec4-f56934b83f44";
  public itineraries: CfarItinerary[] = [{
    currency: this.currency,
    passengerPricing: this.passengers,
    slices: [
      {
        segments: [
          {
            originAirport: "LGA",
            destinationAirport: "BOS",
            departureDateTime: "2022-07-30T18:34:30",
            arrivalDateTime: "2022-07-30T19:12:30",
            flightNumber: "JB776",
            validatingCarrierCode: "B6",
            fareClass: "basic_economy"
          }
        ]
      }
    ],
    totalPrice: "91.65",
    ancillaries: [
      {
        totalPrice: "30.55",
        type: "travel_insurance"
      }
    ]
  }];
  public itinerary: CfarItinerary = {
    currency: this.currency,
    passengerPricing: this.passengers,
    slices: [
      {
        segments: [
          {
            originAirport: "LGA",
            destinationAirport: "BOS",
            departureDateTime: "2022-07-30T18:34:30",
            arrivalDateTime: "2022-07-30T19:12:30",
            flightNumber: "JB776",
            validatingCarrierCode: "B6",
            fareClass: "basic_economy"
          }
        ]
      }
    ],
    totalPrice: "91.65",
    ancillaries: [
      {
        totalPrice: "30.55",
        type: "travel_insurance"
      }
    ]
  };
  public hyperwalletUrl = "https://sandbox.hyperwallet.com/rest/widgets/transfer-methods/";
  public hasNoCoverageOption = false;

  constructor(
    protected _store: Store<AppState>,
    protected _clipboard: Clipboard,
    protected _snackBar: MatSnackBar
  ) {
    this._unsubcriber = new Subject<any>();
    
    // Active fake data in components
    this.isFakeBackend = true;

    // For local usage
    this.basePath = 'http://localhost:7071/airline/v1.0';
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