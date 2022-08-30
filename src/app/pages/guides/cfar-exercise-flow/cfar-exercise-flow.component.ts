import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { Locales } from "projects/angular-sdk/src/i18n";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: "app-cfar-exercise-flow",
  templateUrl: "./cfar-exercise-flow.component.html",
  styleUrls: ["./cfar-exercise-flow.component.scss"],
})
export class CfarExerciseFlowPageComponent extends CommonGuidesComponent {

  public  htmlCode: string = `
    <hopper-cfar-exercise-flow
      [basePath]="basePath"
      [imageBasePath]="imageBasePath"
      [currentLang]="currentLang"
      [hCSessionId]="hCSessionId"
      [contractId]="contractId"
      [hyperwalletUrl]="hyperwalletUrl"
      (airlineRefundSelected)="onAirlineRefundSelected($event)"
      (flowCompleted)="onFlowCompleted()"
    ></hopper-cfar-exercise-flow>
  `;

  public  tsCode: string = `
    public onAirlineRefundSelected(data: string): void {
      console.log(data);
    }

    public onFlowCompleted(): void {
      // Do something
    }
  `;

  constructor(
    protected _store: Store<AppState>,
    protected _clipboard: Clipboard,
    protected _snackBar: MatSnackBar,
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
        name: 'contractId',
        description: `
          A unique identifier for a CFAR contract
        `,
        required: true
      },
      {
        name: 'hyperwalletUrl',
        description: `
          Url for hyperwallet integration
        `,
        required: true
      }
    ];
  }

  public  getOutputs(): OutputModel[] {
    return [
      {
        name: 'airlineRefundSelected',
        description: `
          Event triggered when the user select the airline refund method<br />
          Returns a string (AIRLINE_REFUND)
        `
      },
      {
        name: 'flowCompleted',
        description: `
          Event triggered when the flow is completed
        `
      }
    ];
  }

  public onAirlineRefundSelected(data: string): void {
    console.log(data);
  }

  public onFlowCompleted(): void {
    // Do something
  }
}
