import { ErrorHandler, NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  registerLocaleData,
} from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CfarOfferBannerComponent } from './components/cfar-offer-banner/cfar-offer-banner.component';
import { CfarOfferDialogComponent } from './components/cfar-offer-dialog/cfar-offer-dialog.component';
import { CfarExerciseFlowComponent } from './components/cfar-exercise-flow/cfar-exercise-flow.component';

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

import { ApiModule } from './apis/hopper-cloud-airline/v1';

import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';

import localeZh from '@angular/common/locales/zh';
import localeZhExtra from '@angular/common/locales/extra/zh';

import { CfarOfferBannerLargeComponent } from './components/cfar-offer-banner-large/cfar-offer-banner-large.component';
import { GlobalComponent } from './components/global.component';
import { HopperCfarService } from './services/hopper-cfar.service';
import { HopperEventsService } from './services/hopper-events.service';
import { GlobalEventComponent } from './components/global-event.component';
import { HopperErrorHandlerService } from './services/hopper-error-handler.service';
import { LoggerService } from './services/logger.service';

// Supported Languages for Datepicker
registerLocaleData(localeFr, 'fr', localeFrExtra);
registerLocaleData(localeEn, 'en', localeEnExtra);
registerLocaleData(localeZh, 'zh', localeZhExtra);

@NgModule({
  declarations: [
    // Component
    GlobalComponent,
    GlobalEventComponent,
    CfarOfferBannerComponent,
    CfarOfferBannerLargeComponent,
    CfarOfferDialogComponent,
    CfarExerciseFlowComponent,
  ],
  imports: [
    // Angular Module
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    // APIs
    ApiModule,
    // I18n
    TranslateModule.forRoot(),
  ],
  exports: [
    // Component
    CfarOfferBannerComponent,
    CfarOfferBannerLargeComponent,
    CfarOfferDialogComponent,
    CfarExerciseFlowComponent,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: ErrorHandler, useClass: HopperErrorHandlerService },
    HopperCfarService,
    HopperEventsService,
    LoggerService,
    DatePipe,
    DecimalPipe,
  ],
})
export class HopperCloudAirlinesAngularSdkModule {}
