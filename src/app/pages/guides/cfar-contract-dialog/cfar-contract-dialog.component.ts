import { ChangeDetectorRef, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { CfarContract } from "projects/cloud-airlines-angular-sdk/src/apis/hopper-cloud-airline/v1";
import { CfarContractDialogComponent } from "projects/cloud-airlines-angular-sdk/src/components/cfar-contract-dialog/cfar-contract-dialog.component";
import { Locales } from "projects/cloud-airlines-angular-sdk/src/i18n";
import { DialogUtils } from "projects/cloud-airlines-angular-sdk/src/utils/dialog.utils";
import { take } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";

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
    private _dialog: MatDialog,
    protected _store: Store<AppState>
  ) {
    super(_store);
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
        description: 'TODO',
        required: true
      },
      {
        name: 'partnerId',
        description: 'TODO',
        required: true
      },
      {
        name: 'hCSessionId',
        description: 'TODO',
        required: true
      },
      {
        name: 'originAirport',
        description: 'TODO',
        required: true
      },
      {
        name: 'destinationAirport',
        description: 'TODO',
        required: true
      },
      {
        name: 'departureDateTime',
        description: 'TODO',
        required: true
      },
      {
        name: 'arrivalDateTime',
        description: 'TODO',
        required: true
      },
      {
        name: 'flightNumber',
        description: 'TODO',
        required: true
      },
      {
        name: 'carrierCode',
        description: 'TODO',
        required: true
      },
      {
        name: 'fareClass',
        description: 'TODO',
        required: true
      },
      {
        name: 'currency',
        description: 'TODO',
        required: true
      },
      {
        name: 'totalPrice',
        description: 'TODO',
        required: true
      },
      {
        name: 'passengers',
        description: 'TODO',
        required: true
      },
      {
        name: 'ancillaryPrice',
        description: 'TODO',
        required: true
      },
      {
        name: 'ancillaryType',
        description: 'TODO',
        required: true
      },
      {
        name: 'bookingDateTime',
        description: 'TODO',
        required: true
      }
    ];
  }

  public override getOutputs(): OutputModel[] {
    return [
      {
        name: 'Event on submit button',
        description: 'TODO'
      },
      {
        name: 'Event on Close button',
        description: 'TODO'
      }
    ];
  }

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
