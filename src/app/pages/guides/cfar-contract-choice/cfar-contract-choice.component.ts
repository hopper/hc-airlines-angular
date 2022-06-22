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
      [currentLang]="currentLang"
      [basePath]="basePath"
      [partnerId]="partnerId"
      [hCSessionId]="hCSessionId"
      [originAirport]="originAirport"
      [destinationAirport]="destinationAirport"
      [departureDateTime]="departureDateTime"
      [arrivalDateTime]="arrivalDateTime"
      [flightNumber]="flightNumber"
      [carrierCode]="carrierCode"
      [fareClass]="fareClass"
      [currency]="currency"
      [totalPrice]="totalPrice"
      [passengers]="passengers"
      [ancillaryPrice]="ancillaryPrice"
      [ancillaryType]="ancillaryType"
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
          The Hopper API url base path
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
        name: 'originAirport',
        description: `
          IATA airport code of origin (3 characters)
        `,
        required: true
      },
      {
        name: 'destinationAirport',
        description: `
          IATA airport code of destination (3 characters)
        `,
        required: true
      },
      {
        name: 'departureDateTime',
        description: `
          The local date and time of departure in ISO Local Date Time format
        `,
        required: true
      },
      {
        name: 'arrivalDateTime',
        description: `
          The local date and time of arrival in ISO Local Date Time format
        `,
        required: true
      },
      {
        name: 'flightNumber',
        description: `
          The number of the flight. <br />
          Format: [A-Z0-9]{2}[0-9]{1,4}
        `,
        required: true
      },
      {
        name: 'carrierCode',
        description: `
          The IATA airline code of the validating carrier for this segment. <br />
          Format: [A-Z0-9]{2}
        `,
        required: true
      },
      {
        name: 'fareClass',
        description: `
          Fare class of the segment. <br />
          Possible value (FareClass enum) : "basic_economy", "economy", "premium_economy", "business", "first"
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
        name: 'totalPrice',
        description: `
          Total price of ancillaries of this type attached to fare. (>= 0)
        `,
        required: true
      },
      {
        name: 'passengers',
        description: `
          List of passenger for a fare <br />
          { count: number; type: string; }[] <br />
          count : Number of passenger type (> 0)<br />
          type (enum): "adult" "child" "seated_infant" "lap_infant" <br />
          The type of passenger:
          <ul>
            <li>adult - 12+ years of age</li>
            <li>child - 2-11 years of age</li>
            <li>seated_infant - < 2 years of age, in their own seat</li>
            <li>lap_infant - < 2 years of age, not in their own seat</li>
          </ul>
        `,
        required: true
      },
      {
        name: 'ancillaryPrice',
        description: `
          Total price of ancillaries of this type attached to fare
        `,
        required: true
      },
      {
        name: 'ancillaryType',
        description: `
          'travel_insurance' or 'unclassified'
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
