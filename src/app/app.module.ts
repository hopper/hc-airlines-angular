import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Custom LIB (from local access)
import { HopperCloudAirlinesAngularSdkModule } from 'projects/cloud-airlines-angular-sdk/src/cloud-airlines-angular-sdk.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // My library
    HopperCloudAirlinesAngularSdkModule,

    // Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    // FlexLayoutModule
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
