import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { CfarContract } from "projects/cloud-airlines-angular-sdk/src/apis/hopper-cloud-airline/v1";
import { CfarOfferDialogComponent } from "projects/cloud-airlines-angular-sdk/src/components/cfar-offer-dialog/cfar-offer-dialog.component";
import { Locales } from "projects/cloud-airlines-angular-sdk/src/i18n";
import { DialogUtils } from "projects/cloud-airlines-angular-sdk/src/utils/dialog.utils";
import { take } from "rxjs/operators";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: "app-cfar-offer-dialog",
  templateUrl: "./cfar-offer-dialog.component.html",
  styleUrls: ["./cfar-offer-dialog.component.scss"],
})
export class CfarOfferDialogPageComponent extends CommonGuidesComponent {

  public override htmlCode: string = `
    <button mat-flat-button color="primary" (click)="onOpenCfarOfferDialog()">
      Open CFAR offer dialog
    </button>
  `;

  public override tsCode: string = `
    public onOpenCfarOfferDialog(): void {
      const dialogData = { 
        currentLang: this.currentLang,
        basePath: this.basePath,
        partnerId: this.partnerId,
        hCSessionId: this.hCSessionId,
        extAttributes: this.extAttributes,
        // Choice 1 - create new offers
        itinerary: this.itinerary,
        bookingDateTime: this.bookingDateTime,
        // Choice 2 - load existing offers
        // cfarOffers: this.cfarOffers
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
        name: 'itinerary',
        description: `
          You can pass itinerary if you want to create new offers <br />
          See <a target="_blank" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCfar_offers">
            API documentation
          </a>
        `,
        required: true
      },
      {
        name: 'cfarOffers',
        description: `
          You can pass offers if you want to load existing offers <br />
          See <a target="_blank" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCfar_offers">
            Response of the 'Create a CFAR Offer' api call for data structure
          </a>
        `,
        required: true
      },
      {
        name: 'bookingDateTime',
        description: `
          string date-time
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
      partnerId: this.partnerId,
      hCSessionId: this.hCSessionId,
      itinerary: this.itinerary,
      bookingDateTime: this.bookingDateTime,
      extAttributes: this.extAttributes
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
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
