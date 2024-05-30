import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DecimalPipe, registerLocaleData } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CfarOfferBannerComponent } from './components/cfar-offer-banner/cfar-offer-banner.component';
import { CfarOfferDialogComponent } from './components/cfar-offer-dialog/cfar-offer-dialog.component';

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
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

import { ApiModule } from './apis/hopper-cloud-airline/v1';

import { CfarOfferBannerLargeComponent } from './components/cfar-offer-banner-large/cfar-offer-banner-large.component';
import { GlobalComponent } from './components/global.component';
import { HopperCfarService } from './services/hopper-cfar.service';
import { HopperEventsService } from './services/hopper-events.service';
import { GlobalEventComponent } from './components/global-event.component';
import { LoggerService } from './services/logger.service';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeZh from '@angular/common/locales/zh';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeZh, 'zh');

@NgModule({
  declarations: [
    // Component
    GlobalComponent,
    GlobalEventComponent,
    CfarOfferBannerComponent,
    CfarOfferBannerLargeComponent,
    CfarOfferDialogComponent,
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
  ],
  providers: [
    HopperCfarService,
    HopperEventsService,
    LoggerService,
    DecimalPipe,
  ],
})
export class HopperCloudAirlinesAngularSdkModule {}
