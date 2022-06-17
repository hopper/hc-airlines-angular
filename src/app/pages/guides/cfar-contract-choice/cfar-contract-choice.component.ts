import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CfarOffer } from "projects/cloud-airlines-angular-sdk/src/apis/hopper-cloud-airline/v1";
import { Locales } from "projects/cloud-airlines-angular-sdk/src/i18n";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";

@Component({
  selector: "app-cfar-contract-choice",
  templateUrl: "./cfar-contract-choice.component.html",
  styleUrls: ["./cfar-contract-choice.component.scss"],
})
export class CfarContractChoicePageComponent extends CommonGuidesComponent {

  public override htmlCode: string = `
    <hopper-cfar-contract-choice
      [currentLang]="currentLang"
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
      }
    ];
  }

  public override getOutputs(): OutputModel[] {
    return [
      {
        name: 'emitSubmit',
        description: 'TODO'
      }
    ];
  }

  onEmitSubmitCfarContractChoice(cfarOffer: CfarOffer): void {
    console.log(cfarOffer);
  }
}
