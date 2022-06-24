import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { CfarOffer } from "projects/cloud-airlines-angular-sdk/src/apis/hopper-cloud-airline/v1";
import { Locales } from "projects/cloud-airlines-angular-sdk/src/i18n";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: "app-cfar-contract-choice",
  templateUrl: "./cfar-contract-choice.component.html",
  styleUrls: ["./cfar-contract-choice.component.scss"],
})
export class CfarContractChoicePageComponent extends CommonGuidesComponent {

  public override htmlCode: string = `
    <hopper-cfar-contract-choice
      [basePath]="basePath"
      [currentLang]="currentLang"
      [partnerId]="partnerId"
      [hCSessionId]="hCSessionId"
      [itinerary]="itinerary"
      [paymentType]="paymentType"
      [bookingDateTime]="bookingDateTime"
      (emitSubmit)="onEmitSubmitCfarContractChoice($event)"
    ></hopper-cfar-contract-choice>
  `;

  public override tsCode: string = `
    onEmitSubmitCfarContractChoice(cfarOffer: CfarOffer): void {
      console.log(cfarOffer);
    }
  `;

  constructor(
    protected _store: Store<AppState>,
    protected _clipboard: Clipboard,
    protected _snackBar: MatSnackBar
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
          See <a target="_blank" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCfar_offers">API documentation</a>
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
        name: 'emitSubmit',
        description: 'Event triggered when the user clicks on the button'
      }
    ];
  }

  onEmitSubmitCfarContractChoice(cfarOffer: CfarOffer): void {
    console.log(cfarOffer);
  }
}
