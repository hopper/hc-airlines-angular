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
  selector: "app-cfar-offer-banner",
  templateUrl: "./cfar-offer-banner.component.html",
  styleUrls: ["./cfar-offer-banner.component.scss"],
})
export class CfarOfferBannerPageComponent extends CommonGuidesComponent {

  public  htmlCode: string = `
    <hopper-cfar-offer-banner
      [basePath]="basePath"
      [imageBasePath]="imageBasePath"
      [currentLang]="currentLang"
      [currentTheme]="currentTheme"
      [hCSessionId]="hCSessionId"
      [itineraries]="itineraries"
      (offerAccepted)="onOfferAccepted($event)"
      (offersLoaded)="onOffersLoaded($event)"
      (errorOccurred)="onErrorOccurred($event)"
    ></hopper-cfar-offer-banner>
  `;

  public  tsCode: string = `
    import { CfarContractCustomer, CfarOfferCustomer } from "@hopper-cloud-airlines/angular-sdk/apis/hopper-cloud-airline/v1";
    import { ErrorSdkModel } from "@hopper-cloud-airlines/angular-sdk/models";
    
    // ...

    onOfferAccepted(cfarContract: CfarContractCustomer): void {
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
          See <a target="_blank" aria-describedby="api documentation" href="https://airlines-api.staging.hopper.com/airline/v1.0/docs/index.html#operation/postCfar_offers">API documentation</a>
        `,
        required: true
      }
    ];
  }

  public  getOutputs(): OutputModel[] {
    return [
      {
        name: 'offerAccepted',
        description: `
          Event triggered when the user accepts a CFAR offer <br />
          Returns a CfarContractCustomer
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

  onOfferAccepted(cfarContract: CfarContractCustomer): void {
    console.log(cfarContract);
  }

  onOffersLoaded(cfarOffers: CfarOfferCustomer[]): void {
    console.log(cfarOffers);
  }

  onErrorOccurred(error: ErrorSdkModel): void {
    console.log(error);
  }
}
