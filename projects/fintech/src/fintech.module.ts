import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CfarContractChoiceComponent } from './components/cfar-contract-choice/cfar-contract-choice.component';
import { CfarContractDialogComponent } from './components/cfar-contract-dialog/cfar-contract-dialog.component';
import { CfarExerciseDialogComponent } from './components/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { EventButtonComponent } from './components/event-button/event-button.component';

import { HopperEventsDirective } from './directives/hopper-events.directive';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { ApiModule } from './apis/hopper-cloud-airlines/v1';

@NgModule({
  declarations: [
    // Component
    EventButtonComponent,
    CfarContractChoiceComponent,
    CfarContractDialogComponent,
    CfarExerciseDialogComponent,

    // Directive
    HopperEventsDirective,
  ],
  imports: [
    // Angular Module
    CommonModule,
    HttpClientModule,

    // Flex Layout
    FlexLayoutModule,

    // Angular Material
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSelectModule,

    // APIs
    ApiModule
  ],
  exports: [
    // Component
    EventButtonComponent,
    CfarContractChoiceComponent,
    CfarContractDialogComponent,
    CfarExerciseDialogComponent,

    // Directive
    HopperEventsDirective
  ],
  entryComponents: [
    // Component
    CfarContractDialogComponent,
    CfarExerciseDialogComponent,

    // Directive
    HopperEventsDirective
  ]
})
export class HopperFintechModule { }
