import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Custom LIB (from local access)
import { HopperCloudAirlinesAngularSdkModule } from 'projects/cloud-airlines-angular-sdk/src/cloud-airlines-angular-sdk.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotFoundPageComponent } from './not-found/not-found.component';
import { CfarContractDialogPageComponent } from './guides/cfar-contract-dialog/cfar-contract-dialog.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HighlightModule } from 'ngx-highlightjs';
import { CfarContractChoicePageComponent } from './guides/cfar-contract-choice/cfar-contract-choice.component';
import { CfarExerciseDialogPageComponent } from './guides/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { GuidesPageComponent } from './guides/guides.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    GuidesPageComponent,
    CfarContractDialogPageComponent,
    CfarContractChoicePageComponent,
    CfarExerciseDialogPageComponent
  ],
  imports: [
    // My library Module
    HopperCloudAirlinesAngularSdkModule,

    // Angular Material Modules
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,

    // Misc Modules
    FlexLayoutModule,
    HighlightModule,
    
    // Custom Modules
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
