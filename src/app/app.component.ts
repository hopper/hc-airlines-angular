import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CfarContract, CfarOffer } from 'projects/cloud-airlines-angular-sdk/src/apis/hopper-cloud-airline/v1';
import { CfarContractDialogComponent } from 'projects/cloud-airlines-angular-sdk/src/components/cfar-contract-dialog/cfar-contract-dialog.component';
import { CfarExerciseDialogComponent } from 'projects/cloud-airlines-angular-sdk/src/components/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { Locales } from 'projects/cloud-airlines-angular-sdk/src/i18n';
import { DialogUtils } from 'projects/cloud-airlines-angular-sdk/src/utils/dialog.utils';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.theme.scss']
})
export class AppComponent implements OnInit {

  public currentLang!: string;
  public languages!: string[];

  // Mock
  public partnerId = "23459807-1a9a-4227-a7aa-226e3c5552d1";
  public hCSessionId = "a697a468-ce34-4786-9546-bd094c5f5a66";
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

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // Add Angular Material theme to the body
    this._document.body.classList.add(environment.defaultTheme);

    // Language by default
    this.currentLang = 'en';

    this.languages = Locales.map(x => x.lang);

    // Add SVG icons for each languages
    this.languages.forEach(language => {
      this._matIconRegistry.addSvgIcon("flag_" + language, this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/flags/" + language + ".svg"));
    });
  }

  onOpenCfarContractDialog(): void {
    const dialogData = { 
      currentLang: this.currentLang,
      partnerId: this.partnerId,
      hCSessionId: this.hCSessionId,
      originAirport: this.originAirport,
      destinationAirport: this.destinationAirport,
      departureDateTime: this.departureDateTime,
      arrivalDateTime: this.arrivalDateTime,
      flightNumber: this.flightNumber,
      carrierCode: this.carrierCode,
      fareClass: this.fareClass,
      currency: this.currency,
      totalPrice: this.totalPrice,
      passengers: this.passengers,
      ancillaryPrice: this.ancillaryPrice,
      ancillaryType: this.ancillaryType,
      bookingDateTime: this.bookingDateTime,
      paymentType: this.paymentType
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData);
    const dialogRef = this._dialog.open(CfarContractDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(
        (result: CfarContract) => {
          if (result) {
            console.log("Submit cfar contract dialog :")
            console.log(result);
          } else {
            console.log("Close dialog")
          }
        },
        (error) => console.log(error)
      );
  }

  onOpenCfarExerciseDialog(): void {
    const dialogData = { 
      currentLang: this.currentLang,
      hCSessionId: this.hCSessionId,
      pnrReference: this.pnrReference,
      contractId: this.contractId,
      currency: this.currency,
      originAirport: this.originAirport,
      destinationAirport: this.destinationAirport,
      departureDateTime: this.departureDateTime,
      arrivalDateTime: this.arrivalDateTime,
      flightNumber: this.flightNumber,
      carrierCode: this.carrierCode,
      fareClass: this.fareClass,
      totalPrice: this.totalPrice,
      passengers: this.passengers,
      ancillaryPrice: this.ancillaryPrice,
      ancillaryType: this.ancillaryType
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData);
    const dialogRef = this._dialog.open(CfarExerciseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        // No action when dialog is closed  
        console.log(result);
      });
  }

  isDarkMode(): boolean {
    return this._document.body.classList.contains('theme-dark-hopper');
  }

  onSwitchThemeMode(): void {
    if (this.isDarkMode()) {
      this._document.body.classList.remove("theme-dark-hopper");
      this._document.body.classList.add("theme-light-hopper");
    } else {
      this._document.body.classList.remove("theme-light-hopper");
      this._document.body.classList.add("theme-dark-hopper");
    }
  }

  onSetCurrentLang(newLanguage: string): void {
    this.currentLang = newLanguage;
  }

  onEmitSubmitCfarContractChoice(cfarOffer: CfarOffer): void {
    console.log("cfar offer callback");
    console.log(cfarOffer);
  }
}
