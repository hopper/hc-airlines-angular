import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { CfarContract } from "projects/angular-sdk/src/apis/hopper-cloud-airline/v1";
import { Locales } from "projects/angular-sdk/src/i18n";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: "app-cfar-offer-banner-large",
  templateUrl: "./cfar-offer-banner-large.component.html",
  styleUrls: ["./cfar-offer-banner-large.component.scss"],
})
export class CfarOfferBannerLargePageComponent extends CommonGuidesComponent {

  public override htmlCode: string = `
    <hopper-cfar-offer-banner-large
      [basePath]="basePath"
      [currentLang]="currentLang"
      [currentTheme]="currentTheme"
      [hCSessionId]="hCSessionId"
      [itineraries]="itineraries"
      (chooseCoverage)="onChooseCoverage($event)"
    ></hopper-cfar-offer-banner-large>
  `;

  public override tsCode: string = `
    import { CfarContract } from "@hopper-cloud-airlines/angular-sdk/src/apis/hopper-cloud-airline/v1";
    
    // ...

    onChooseCoverage(cfarContract: CfarContract): void {
      console.log(cfarContract);
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
        name: 'currentTheme',
        description: `
          The active theme managed by Hopper (for the Offer Banner Dialog)
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
          See <a target="_blank" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCfar_offers">API documentation</a>
        `,
        required: true
      }
    ];
  }

  public override getOutputs(): OutputModel[] {
    return [
      {
        name: 'choiceCoverage',
        description: `
          Event triggered when the user chooses a coverage (or not)<br />
          Returns a CfarContract or Nothing
        `
      }
    ];
  }

  onChooseCoverage(cfarContract: CfarContract): void {
    console.log(cfarContract);
  }
}
