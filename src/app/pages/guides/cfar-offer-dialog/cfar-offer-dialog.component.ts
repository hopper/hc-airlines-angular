import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { take } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';
import { Locales } from "projects/angular-sdk/src/i18n";
import { DialogUtils } from "projects/angular-sdk/src/utils/dialog.utils";
import { CfarOfferDialogComponent } from "projects/angular-sdk/src/components/cfar-offer-dialog/cfar-offer-dialog.component";
import { CfarContract } from "projects/angular-sdk/src/apis/hopper-cloud-airline/v1";


@Component({
  selector: "app-cfar-offer-dialog",
  templateUrl: "./cfar-offer-dialog.component.html",
  styleUrls: ["./cfar-offer-dialog.component.scss"],
})
export class CfarOfferDialogPageComponent extends CommonGuidesComponent {

  public htmlCode: string = `
    <button mat-flat-button color="primary" (click)="onOpenCfarOfferDialog()">
      Open CFAR offer dialog
    </button>
  `;

  public tsCode: string = `
    import { DialogUtils } from "@hopper-cloud-airlines/angular-sdk/src/utils/dialog.utils";
    import { CfarContract } from "@hopper-cloud-airlines/angular-sdk/src/apis/hopper-cloud-airline/v1";
    import { CfarOfferDialogComponent } from "@hopper-cloud-airlines/angular-sdk/src/components/cfar-offer-dialog/cfar-offer-dialog.component";
    import { MatDialog } from "@angular/material/dialog";
    import { take } from "rxjs/operators";
    
    // ...

    constructor(
      private _dialog: MatDialog
    ) { }

    // ...

    public onOpenCfarOfferDialog(): void {
      const dialogData = { 
        currentLang: this.currentLang,
        basePath: this.basePath,
        hCSessionId: this.hCSessionId,
        itineraries: this.itineraries
      };
      const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
      const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

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

  public getInputs(): InputModel[] {
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
          The active theme managed by Hopper.
          If you have an Angular material theme, this field can be removed
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
        name: 'itineraries',
        description: `
          You need to pass itineraries in order to create new offers <br />
          See <a target="_blank" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCfar_offers">
            API documentation
          </a>
        `,
        required: true
      }
    ];
  }

  public getOutputs(): OutputModel[] {
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

  public onOpenCfarOfferDialog(): void {
    const dialogData = { 
      isFakeBackend: this.isFakeBackend,
      basePath: this.basePath,
      currentLang: this.currentLang,
      hCSessionId: this.hCSessionId,
      itineraries: this.itineraries,
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData);
    const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(
        (result: CfarContract) => {
          if (result) {
            console.log("Submit cfar offer dialog :")
            console.log(result);
          } else {
            console.log("Close dialog")
          }
        },
        (error) => console.log(error)
      );
  }
}
