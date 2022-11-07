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
import { CfarContractCustomer } from "projects/angular-sdk/src/apis/hopper-cloud-airline/v1";
import { ErrorSdkModel } from "projects/angular-sdk/src/models";


@Component({
  selector: "app-cfar-offer-dialog",
  templateUrl: "./cfar-offer-dialog.component.html",
  styleUrls: ["./cfar-offer-dialog.component.scss"],
})
export class CfarOfferDialogPageComponent extends CommonGuidesComponent {

  public htmlCode: string = `
    <button mat-flat-button color="primary" aria-label="Open CFAR offer dialog" (click)="onOpenCfarOfferDialog()">
      Open CFAR offer dialog
    </button>
  `;

  public tsCode: string = `
    import { CfarContractCustomer } from "@hopper-cloud-airlines/angular-sdk/apis/hopper-cloud-airline/v1";
    import { CfarOfferDialogComponent, DialogUtils } from "@hopper-cloud-airlines/angular-sdk";
    import { ErrorSdkModel } from "@hopper-cloud-airlines/angular-sdk/models";
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
        imageBasePath: this.imageBasePath,
        hCSessionId: this.hCSessionId,
        // Choice 1 : The component will create offers based of the itineraries
        itineraries: this.itineraries
        // Choice 2 : The component will load directly the offers
        cfarOffers: this.cfarOffers
      };
      const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
      const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

      // Declare a dialogErrorOccurredSubscription variable in case you want 
      // to subscribe to the event ErrorOccurred managed in the dialog
      const dialogErrorOccurredSubscription = dialogRef.componentInstance.errorOccurred
        .pipe(take(1))
        .subscribe((error: ErrorSdkModel) => {
          console.log(error);
        });

      dialogRef.afterClosed()
        .pipe(take(1))
        .subscribe({
          next: (result: CfarContractCustomer) => {
            if (result) {
              console.log(result);
            } else {
              console.log("Close dialog")
            }
          },
          error: (error) => console.log(error)
        })
        // Add this block in case you have to unsubscribe to the event ErrorOccurred managed in the dialog      
        .add(() => {
          dialogErrorOccurredSubscription.unsubscribe();
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
        name: 'imageBasePath',
        description: `
          The basePath for images (empty by default)
        `,
        required: false
      },
      {
        name: 'currentTheme',
        description: `
          The active theme managed by Hopper.
          If you have an Angular material theme, this field can be ignored
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
          Itineraries are required in order to create new offers <br />
          See <a target="_blank" aria-describedby="api documentation" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCustomerCfar_offers">
            API documentation
          </a> <br />
          You need to pass itineraries OR cfarOffers.
        `,
        required: true
      },
      {
        name: 'cfarOffers',
        description: `
          CfarOffers are loaded directly into the component (without creating new offers) <br />
          See <a target="_blank" aria-describedby="api documentation" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCustomerCfar_offers">
            API documentation
          </a> <br />
          You need to pass itineraries OR cfarOffers.
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
          When the submit button is pressed, the dialog returns a CfarContractCustomer object
        `
      },
      {
        name: 'Event on Close button',
        description: `
          When the close/cancel button is pressed, the dialog returns nothing
        `
      },
      {
        name: 'errorOccurred',
        description: `
          Event triggered when an error occurs into the SDK<br />
          Returns a ErrorSdkModel : { endpoint: string, errorCode: string, errorDescription: string }<br />
          If you want to subscribe to this event, you must implement this subscription into the component which opens the dialog component.
        `
      }
    ];
  }

  public onOpenCfarOfferDialog(): void {
    const dialogData = { 
      isFakeBackend: this.isFakeBackend,
      basePath: this.basePath,
      imageBasePath: this.imageBasePath,
      currentLang: this.currentLang,
      hCSessionId: this.hCSessionId,
      itineraries: this.itineraries,
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData);
    const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

    const dialogErrorOccurredSubscription = dialogRef.componentInstance.errorOccurred
      .pipe(take(1))
      .subscribe((error: ErrorSdkModel) => {
        console.log(error);
      });

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (result: CfarContractCustomer) => {
          if (result) {
            console.log("Submit cfar offer dialog :")
            console.log(result);
          } else {
            console.log("Close dialog")
          }
        },
        error: (error) => console.log(error)
      })
      .add(() => {
        dialogErrorOccurredSubscription.unsubscribe();
      });
  }
}
