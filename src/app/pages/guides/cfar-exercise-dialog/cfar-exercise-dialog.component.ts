import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { CfarExerciseDialogComponent } from "projects/cloud-airlines-angular-sdk/src/components/cfar-exercise-dialog/cfar-exercise-dialog.component";
import { Locales } from "projects/cloud-airlines-angular-sdk/src/i18n";
import { DialogUtils } from "projects/cloud-airlines-angular-sdk/src/utils/dialog.utils";
import { take } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";

@Component({
  selector: "app-cfar-exercise-dialog",
  templateUrl: "./cfar-exercise-dialog.component.html",
  styleUrls: ["./cfar-exercise-dialog.component.scss"],
})
export class CfarExerciseDialogPageComponent extends CommonGuidesComponent {

  public override htmlCode: string = `
    <button mat-flat-button color="primary" (click)="onOpenCfarExerciseDialog()">Open CFAR Exercise dialog</button>
  `;

  public override tsCode: string = `
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
          console.log(result);
        });
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
      },
      {
        name: 'pnrReference',
        description: 'TODO',
        required: true
      },
      {
        name: 'contractId',
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

  public onOpenCfarExerciseDialog(): void {
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
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
    const dialogRef = this._dialog.open(CfarExerciseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        console.log(result);
      });
  }
}
