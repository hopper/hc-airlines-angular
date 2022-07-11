import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Custom LIB (from local access)
import { HopperCloudAirlinesAngularSdkModule } from 'projects/angular-sdk/src/angular-sdk.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotFoundPageComponent } from './not-found/not-found.component';
import { CfarOfferDialogPageComponent } from './guides/cfar-offer-dialog/cfar-offer-dialog.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HighlightModule } from 'ngx-highlightjs';
import { CfarOfferBannerPageComponent } from './guides/cfar-offer-banner/cfar-offer-banner.component';
import { CfarExerciseDialogPageComponent } from './guides/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { GuidesPageComponent } from './guides/guides.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CfarOfferBannerLargePageComponent } from './guides/cfar-offer-banner-large/cfar-offer-banner-large.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    GuidesPageComponent,
    CfarOfferDialogPageComponent,
    CfarOfferBannerPageComponent,
    CfarOfferBannerLargePageComponent,
    CfarExerciseDialogPageComponent
  ],
  imports: [
    // Angular Module
    CommonModule,

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
    MatCardModule,

    // Misc Modules
    FlexLayoutModule,
    HighlightModule,
    
    // Custom Modules
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
