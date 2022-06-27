import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CfarOfferBannerComponent } from './components/cfar-offer-banner/cfar-offer-banner.component';
import { CfarContractDialogComponent } from './components/cfar-contract-dialog/cfar-contract-dialog.component';
import { CfarExerciseDialogComponent } from './components/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { EventButtonComponent } from './components/event-button/event-button.component';

import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { HopperEventsDirective } from './directives/hopper-events.directive';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ApiModule } from './apis/hopper-cloud-airline/v1';

import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';

import localeZh from '@angular/common/locales/zh';
import localeZhExtra from '@angular/common/locales/extra/zh';

import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { HopperProxyService } from './services/hopper-proxy.service';

// Supported Languages for Datepicker
registerLocaleData(localeFr, 'fr', localeFrExtra);
registerLocaleData(localeEn, 'en', localeEnExtra);
registerLocaleData(localeEs, 'es', localeEsExtra);
registerLocaleData(localeZh, 'zh', localeZhExtra);


@NgModule({
  declarations: [
    // Component
    EventButtonComponent,
    CfarOfferBannerComponent,
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
    MatProgressSpinnerModule,

    // APIs
    ApiModule,

    // I18n
    TranslateModule.forRoot()
  ],
  exports: [
    // Component
    EventButtonComponent,
    CfarOfferBannerComponent,
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
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    HopperProxyService
  ]
})
export class HopperCloudAirlinesAngularSdkModule { }
