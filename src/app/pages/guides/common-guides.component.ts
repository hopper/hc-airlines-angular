import { Directive, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { getCurrentLang, getCurrentTheme } from "src/app/shared/ngrx/global/global.selectors";
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from "@angular/material/snack-bar";
import { CfarItinerary, PassengerPricing, UiVariant } from "projects/angular-sdk/src/apis/hopper-cloud-airline/v1";

@Directive({
  selector: '[CommonGuidesComponent]'
})
export abstract class CommonGuidesComponent implements OnInit, OnDestroy {
    
  public currentTheme!: string;
  public currentLang!: string;
  public basePath: string = 'http://localhost:7071/airline/v1.0';
  // public basePath: string = 'http://unit.hc-airlines.svc.cluster.local:7070/airline/v1.0';
  // public basePath: string = 'https://airlines-api.staging.hopper.com/airline/v1.0';
  public imageBasePath: string = ''; // 'http://localhost:4200/';
  public isFakeBackend!: boolean;

  protected _unsubcriber: Subject<any>;
  
  public abstract tsCode: string;
  public abstract htmlCode: string;
  
  // Parameters
  public hCSessionId = "898edbd2-7807-4e47-917b-d8cded6161b5";
  public contractId = "1ed5f483-6287-6b77-acb5-9719296bfa68";
  public exerciseId = "1ed603b2-c4db-6380-a242-2f6178643d87";
  public currency = "EUR";
  public passengers: PassengerPricing[] = [
    {
      passengerCount: {
        count: 3,
        type: "adult"
      },
      individualPrice: "50.10"
    }
  ];
  public pnrReference = "123456";
  public itineraries: CfarItinerary[] = [
    {
      currency: this.currency,
      passengerPricing: this.passengers,
      slices: [
        {
          fareBrand: "comfort",
          segments: [
            {
              originAirport: "LGA",
              destinationAirport: "BOS",
              departureDateTime: "2022-12-01T18:34:30",
              arrivalDateTime: "2022-12-02T19:12:30",
              flightNumber: "JB776",
              validatingCarrierCode: "B6",
              fareClass: "economy",
              fareBrand: "comfort"
            }
          ]
        }
      ],
      totalPrice: "150.30",
      ancillaries: [
        {
          totalPrice: "30.55",
          type: "travel_insurance"
        }
      ]
    }
  ];
  public itinerary: CfarItinerary = {
    currency: this.currency,
    passengerPricing: this.passengers,
    slices: [
      {
        fareBrand: "comfort",
        segments: [
          {
            originAirport: "LGA",
            destinationAirport: "BOS",
            departureDateTime: "2022-12-01T18:34:30",
            arrivalDateTime: "2022-12-02T19:12:30",
            flightNumber: "JB776",
            validatingCarrierCode: "B6",
            fareClass: "economy",
            fareBrand: "comfort"
          }
        ]
      }
    ],
    totalPrice: "150.30",
    ancillaries: [
      {
        totalPrice: "30.55",
        type: "travel_insurance"
      }
    ]
  };
  public hyperwalletUrl: string = "https://uat.hyperwallet.com/rest/widgets/transfer-methods/";
  public contactFormUrl: string = "https://www.google.com";
  public hasNoCoverageOption = false;
  public hasWarningCoverageMessage = true;
  public uiVariant = UiVariant.A;
  
  constructor(
    protected _store: Store<AppState>,
    protected _clipboard: Clipboard,
    protected _snackBar: MatSnackBar
  ) {
    this._unsubcriber = new Subject<any>();
    
    // Active fake data in components
    this.isFakeBackend = true;
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
    this._unsubcriber.next(null);
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