import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { CfarExerciseDialogComponent } from "projects/cloud-airlines-angular-sdk/src/components/cfar-exercise-dialog/cfar-exercise-dialog.component";
import { Locales } from "projects/cloud-airlines-angular-sdk/src/i18n";
import { DialogUtils } from "projects/cloud-airlines-angular-sdk/src/utils/dialog.utils";
import { take } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: "app-cfar-exercise-dialog",
  templateUrl: "./cfar-exercise-dialog.component.html",
  styleUrls: ["./cfar-exercise-dialog.component.scss"],
})
export class CfarExerciseDialogPageComponent extends CommonGuidesComponent {

  public override htmlCode: string = `
    <button mat-flat-button color="primary" (click)="onOpenCfarExerciseDialog()">
      Open CFAR Exercise dialog
    </button>
  `;

  public override tsCode: string = `
    import { DialogUtils } from "@hopper/cloud-airlines-angular-sdk/src/utils/dialog.utils";
    import { CfarExerciseDialogComponent } from "@hopper/cloud-airlines-angular-sdk/src/components/cfar-exercise-dialog/cfar-exercise-dialog.component";
    import { MatDialog } from "@angular/material/dialog";
    import { take } from "rxjs/operators";
    
    // ...

    constructor(
      private _dialog: MatDialog
    ) { }

    // ...

    onOpenCfarExerciseDialog(): void {
      const dialogData = { 
        currentLang: this.currentLang,
        basePath: this.basePath,
        hCSessionId: this.hCSessionId,
        pnrReference: this.pnrReference,
        contractId: this.contractId,
        currency: this.currency,
        itinerary: this.itinerary,
        extAttributes: this.extAttributes
      };
      const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
      const dialogRef = this._dialog.open(CfarExerciseDialogComponent, dialogConfig);

      dialogRef.afterClosed()
        .pipe(take(1))
        .subscribe(result => {
          console.log(result);
        });
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
        name: 'basePath',
        description: `
          The Hopper Cloud Airlines API url base path
        `,
        required: true
      },
      {
        name: 'currentTheme',
        description: `
          The active theme managed by Hopper
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
        name: 'itinerary',
        description: `
          See <a target="_blank" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCfar_contract_exercises">API documentation</a>
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
        name: 'pnrReference',
        description: `
          string
        `,
        required: true
      },
      {
        name: 'contractId',
        description: `
          A unique identifier for a CFAR contract
        `,
        required: true
      },
      {
        name: 'extAttributes',
        description: `
          object (map_string) <br />
          can be empty ({ })
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
          To be defined
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

  public onOpenCfarExerciseDialog(): void {
    const dialogData = { 
      isFakeBackend: this.isFakeBackend,
      basePath: this.basePath,
      currentLang: this.currentLang,
      hCSessionId: this.hCSessionId,
      pnrReference: this.pnrReference,
      contractId: this.contractId,
      currency: this.currency,
      itinerary: this.itinerary,
      extAttributes: this.extAttributes
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData);
    const dialogRef = this._dialog.open(CfarExerciseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        console.log(result);
      });
  }
}
