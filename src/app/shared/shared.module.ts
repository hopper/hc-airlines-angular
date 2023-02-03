import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';

import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputsComponent } from './components/inputs/inputs.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OutputsComponent } from './components/outputs/outputs.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    LayoutComponent,
    InputsComponent,
    OutputsComponent
  ],
  imports: [
    // Angular Modules
    CommonModule,
    RouterModule,
    HttpClientModule,

    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    LayoutModule,

    // Misc Modules
    FlexLayoutModule
  ],
  exports: [
    LayoutComponent,
    InputsComponent,
    OutputsComponent
  ],
  providers: []
})
export class SharedModule { }
