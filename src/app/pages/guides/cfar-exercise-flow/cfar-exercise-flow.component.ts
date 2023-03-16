import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { Locales } from "projects/angular-sdk/src/i18n";
import { InputModel, OutputModel } from "src/app/shared/models";
import { AppState } from "src/app/shared/ngrx";
import { CommonGuidesComponent } from "../common-guides.component";
import { Clipboard } from '@angular/cdk/clipboard';
import { ErrorSdkModel } from "projects/angular-sdk/src/models";

@Component({
  selector: "app-cfar-exercise-flow",
  templateUrl: "./cfar-exercise-flow.component.html",
  styleUrls: ["./cfar-exercise-flow.component.scss"],
})
export class CfarExerciseFlowPageComponent extends CommonGuidesComponent {

  public  htmlCode: string = `
    <div id="parentDiv" #scrollAnchor>
      <hopper-cfar-exercise-flow
        [basePath]="basePath"
        [imageBasePath]="imageBasePath"
        [currentLang]="currentLang"
        [hCSessionId]="hCSessionId"
        [exerciseId]="exerciseId"
        [hyperwalletUrl]="hyperwalletUrl"
        [contactFormUrl]="contactFormUrl"
        (flowCompleted)="onFlowCompleted($event)"
        (errorOccurred)="onErrorOccurred($event)"
      ></hopper-cfar-exercise-flow>
    </div>
  `;

  public  tsCode: string = `
    import { ErrorSdkModel } from "@hopper-cloud-airlines/angular-sdk/models";

    @ViewChild('scrollAnchor') public anchor!: ElementRef;

    // ....

    public onFlowCompleted(data: string): void {
      console.log(data);
    }

    public onErrorOccurred(error: ErrorSdkModel): void {
      console.log(error);
    }

    public onStepCompleted(timer?: number): void {
      // Scroll to top of component (timer due to rendering delay)
      setTimeout(() => this.anchor.nativeElement.scrollTo(0,0), timer || 0);
    }
  `;

  @ViewChild('scrollAnchor') public anchor!: ElementRef;

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
        name: 'exerciseId',
        description: `
          A unique identifier for a CFAR exercise
        `,
        required: true
      },
      {
        name: 'hyperwalletUrl',
        description: `
          Url for hyperwallet integration
        `,
        required: true
      },
      {
        name: 'contactFormUrl',
        description: `
          Url for support
        `,
        required: true
      }
    ];
  }

  public  getOutputs(): OutputModel[] {
    return [
      {
        name: 'flowCompleted',
        description: `
          Event triggered when the flow is completed
        `
      },
      {
        name: 'errorOccurred',
        description: `
          Event triggered when an error occurs into the SDK<br />
          Returns a ErrorSdkModel : { endpoint: string, errorCode: string, errorDescription?: string }
        `
      },
      {
        name: 'stepCompleted',
        description: `
          Event triggered when a step is completed
        `
      },
    ];
  }

  public onFlowCompleted(data: string): void {
    console.log(data);
  }

  public onErrorOccurred(error: ErrorSdkModel): void {
    console.log(error);
  }

  public onStepCompleted(timer?: number): void {
    // Scroll to top of component (timer due to rendering delay)
    setTimeout(() => this.anchor.nativeElement.scrollTo(0,0), timer || 0);
  }
}
