import { ChangeDetectorRef, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { CfarContract } from "projects/cloud-airlines-angular-sdk/src/apis/hopper-cloud-airline/v1";
import { CfarContractDialogComponent } from "projects/cloud-airlines-angular-sdk/src/components/cfar-contract-dialog/cfar-contract-dialog.component";
import { Locales } from "projects/cloud-airlines-angular-sdk/src/i18n";
import { DialogUtils } from "projects/cloud-airlines-angular-sdk/src/utils/dialog.utils";
import { take } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: "app-cfar-contract-dialog",
  templateUrl: "./cfar-contract-dialog.component.html",
  styleUrls: ["./cfar-contract-dialog.component.scss"],
})
export class CfarContractDialogPageComponent extends CommonGuidesComponent {

  public override htmlCode: string = `
    <button mat-flat-button color="primary" (click)="onOpenCfarContractDialog()">Open CFAR Contract dialog</button>
  `;

  public override tsCode: string = `
    public onOpenCfarContractDialog(): void {
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
      const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
      const dialogRef = this._dialog.open(CfarContractDialogComponent, dialogConfig);

      dialogRef.afterClosed()
        .pipe(take(1))
        .subscribe(
          (result: CfarContract) => {
            if (result) {
              console.log(result);
            } else {
              console.log("Close dialog")
            }
          },
          (error) => console.log(error)
        );
    }
  `;

  constructor(
    protected _store: Store<AppState>,
    protected _clipboard: Clipboard,
    protected _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {
    super(_store, _clipboard, _snackBar);
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public override getInputs(): InputModel[] {
    return [
      {
        name: 'currentLang',
        description: `
          The language to apply to the component. <br />
          <b>Supported Languages</b> : ${Locales.map(x => ' ' + x.lang)} <br />
          <b>By default</b> : en
        `,
        required: false
      },
      {
        name: 'currentTheme',
        description: `
          The active theme managed by Hopper
        `,
        required: false
      },
      {
        name: 'partnerId',
        description: `
          The partner's unique identifier provided by Hopper
        `,
        required: false
      },
      {
        name: 'hCSessionId',
        description: `
          Example: 9fd3f2f9-e5aa-4128-ace9-3c4ee37b685f <br />
          The ID of the current airline session.
        `,
        required: true
      },
      {
        name: 'originAirport',
        description: `
          IATA airport code of origin (3 characters)
        `,
        required: true
      },
      {
        name: 'destinationAirport',
        description: `
          IATA airport code of destination (3 characters)
        `,
        required: true
      },
      {
        name: 'departureDateTime',
        description: `
          The local date and time of departure in ISO Local Date Time format
        `,
        required: true
      },
      {
        name: 'arrivalDateTime',
        description: `
          The local date and time of arrival in ISO Local Date Time format
        `,
        required: true
      },
      {
        name: 'flightNumber',
        description: `
          The number of the flight. <br />
          Format: [A-Z0-9]{2}[0-9]{1,4}
        `,
        required: true
      },
      {
        name: 'carrierCode',
        description: `
          The IATA airline code of the validating carrier for this segment. <br />
          Format: [A-Z0-9]{2}
        `,
        required: true
      },
      {
        name: 'fareClass',
        description: `
          Fare class of the segment. <br />
          Possible value (FareClass enum) : "basic_economy", "economy", "premium_economy", "business", "first"
        `,
        required: true
      },
      {
        name: 'currency',
        description: `
          Currency of pricing fields
        `,
        required: true
      },
      {
        name: 'totalPrice',
        description: `
          Total price of ancillaries of this type attached to fare. (>= 0)
        `,
        required: true
      },
      {
        name: 'passengers',
        description: `
          List of passenger for a fare <br />
          { count: number; type: string; }[] <br />
          count : Number of passenger type (> 0)<br />
          type (enum): "adult" "child" "seated_infant" "lap_infant" <br />
          The type of passenger:
          <ul>
            <li>adult - 12+ years of age</li>
            <li>child - 2-11 years of age</li>
            <li>seated_infant - < 2 years of age, in their own seat</li>
            <li>lap_infant - < 2 years of age, not in their own seat</li>
          </ul>
        `,
        required: true
      },
      {
        name: 'ancillaryPrice',
        description: `
          Total price of ancillaries of this type attached to fare
        `,
        required: true
      },
      {
        name: 'ancillaryType',
        description: `
          'travel_insurance' or 'unclassified'
        `,
        required: true
      },
      {
        name: 'bookingDateTime',
        description: `
          string date-time
        `,
        required: true
      }
    ];
  }

  public override getOutputs(): OutputModel[] {
    return [
      {
        name: 'Event on submit button',
        description: `
          When the submit button is pressed, the dialog returns a CfarContract object
        `
      },
      {
        name: 'Event on Close button',
        description: `
          When the close/cancel button is pressed, the dialog returns nothing
        `
      }
    ];
  }

  public onOpenCfarContractDialog(): void {
    const dialogData = { 
      isFakeBackend: this.isFakeBackend,
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
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
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
}
