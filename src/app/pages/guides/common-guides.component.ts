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
  public hCSessionId = "8f6ad31c-8919-476b-ab57-a5821cfeca9e";
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
  public contractId = "1ed2df96-ee3c-61e6-a57a-a7e77771ba29";
  public itineraries: CfarItinerary[] = [
    {
      currency: this.currency,
      passengerPricing: this.passengers,
      slices: [
        {
          segments: [
            {
              originAirport: "LGA",
              destinationAirport: "BOS",
              departureDateTime: "2022-11-01T18:34:30",
              arrivalDateTime: "2022-11-02T19:12:30",
              flightNumber: "JB776",
              validatingCarrierCode: "B6",
              fareClass: "basic_economy"
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
        segments: [
          {
            originAirport: "LGA",
            destinationAirport: "BOS",
            departureDateTime: "2022-11-01T18:34:30",
            arrivalDateTime: "2022-10-1-02T19:12:30",
            flightNumber: "JB776",
            validatingCarrierCode: "B6",
            fareClass: "basic_economy"
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
  public exerciseId = "1ed56cb3-e482-6a5d-af17-c996464a398c";
  public hyperwalletUrl: string = "https://sandbox.hyperwallet.com/rest/widgets/transfer-methods/";
  public hasNoCoverageOption = false;
  public hasWarningCoverageMessage = true;
  public uiVariant = UiVariant.A;
  public termsLink = "http://hopper.com/legal/Air-Canada-CFAR";
  
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