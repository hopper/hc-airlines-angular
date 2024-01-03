import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { CfarContractCustomer, CfarOfferCustomer } from "projects/angular-sdk/src/apis/hopper-cloud-airline/v1";
import { Locales } from "projects/angular-sdk/src/i18n";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';
import { ErrorSdkModel } from "projects/angular-sdk/src/models";

@Component({
  selector: "app-cfar-offer-banner-large",
  templateUrl: "./cfar-offer-banner-large.component.html",
  styleUrls: ["./cfar-offer-banner-large.component.scss"],
})
export class CfarOfferBannerLargePageComponent extends CommonGuidesComponent {

  public  htmlCode: string = `
    <hopper-cfar-offer-banner-large
      [env]="env"
      [basePath]="basePath"
      [imageBasePath]="imageBasePath"
      [currentLang]="currentLang"
      [hCSessionId]="hCSessionId"
      [itineraries]="itineraries"
      [hasNoCoverageOption]="hasNoCoverageOption"
      [hasWarningCoverageMessage]="hasWarningCoverageMessage"
      [uiVariant]="uiVariant"
      (chooseCoverage)="onChooseCoverage($event)"
      (offersLoaded)="onOffersLoaded($event)"
      (errorOccurred)="onErrorOccurred($event)"
    ></hopper-cfar-offer-banner-large>
  `;

  public  tsCode: string = `
    import { CfarContractCustomer, CfarOfferCustomer } from "@hopper-cloud-airlines/angular-sdk/apis/hopper-cloud-airline/v1";
    import { ErrorSdkModel } from "@hopper-cloud-airlines/angular-sdk/models";
    
    // ...

    onChooseCoverage(cfarContract: CfarContractCustomer): void {
      console.log(cfarContract);
    }

    onOffersLoaded(cfarOffers: CfarOfferCustomer[]): void {
      console.log(cfarOffers);
    }

    onErrorOccurred(error: ErrorSdkModel): void {
      console.log(error);
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

  public  getInputs(): InputModel[] {
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
          See <a target="_blank" aria-describedby="api documentation" href="https://airlines-api.staging.hopper.com/airline/v1.1/docs/index.html#operation/postCfar_offers">API documentation</a>
        `,
        required: true
      },
      {
        name: 'hasNoCoverageOption',
        description: `
          True by default. If it's false, the 'decline coverage' option is hidden.
        `,
        required: false
      },
      {
        name: 'hasWarningCoverageMessage',
        description: `
          False by default. If it's true, a warning message is displayed when no choice has been selected.
        `,
        required: false
      },
      {
        name: 'uiVariant',
        description: `
          Used to do AB testing with differents displays of the component. <br />
          Possibles values: 'variant_a', 'variant_b' or 'variant_c'
        `,
        required: true
      },
      {
        name: 'env',
        description: `
          Used for logging purpose. <br />
          Possibles values: 'development', 'production'
          Default value: 'production'
        `,
        required: false
      }
    ];
  }

  public  getOutputs(): OutputModel[] {
    return [
      {
        name: 'chooseCoverage',
        description: `
          Event triggered when the user chooses a coverage (or not)<br />
          Returns a CfarContractCustomer or null
        `
      },
      {
        name: 'offersLoaded',
        description: `
          Event triggered when the offers are loaded (or not)<br />
          Returns a CfarOfferCustomer array or null
        `
      },
      {
        name: 'errorOccurred',
        description: `
          Event triggered when an error occurs into the SDK<br />
          Returns a ErrorSdkModel : { endpoint: string, errorCode: string, errorDescription?: string }
        `
      }
    ];
  }

  onChooseCoverage(cfarContract: CfarContractCustomer): void {
    console.log(cfarContract);
  }

  onOffersLoaded(cfarOffers: CfarOfferCustomer[]): void {
    console.log(cfarOffers);
  }

  onErrorOccurred(error: ErrorSdkModel): void {
    console.log(error);
  }
}
