import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CfarOfferBannerPageComponent } from './guides/cfar-offer-banner/cfar-offer-banner.component';
import { CfarOfferDialogPageComponent } from './guides/cfar-offer-dialog/cfar-offer-dialog.component';
import { GuidesPageComponent } from './guides/guides.component';
import { CfarOfferBannerLargePageComponent } from './guides/cfar-offer-banner-large/cfar-offer-banner-large.component';
import { CfarExerciseFlowPageComponent } from './guides/cfar-exercise-flow/cfar-exercise-flow.component';

const routes: Routes = [
  {
    path: '',
    component: GuidesPageComponent
  },
  {
    path: 'cfar-offer-dialog',
    component: CfarOfferDialogPageComponent,
    data: { path: 'cfar-offer-dialog' }
  },
  {
    path: 'cfar-offer-banner',
    component: CfarOfferBannerPageComponent,
    data: { path: 'cfar-offer-banner' }
  },
  {
    path: 'cfar-offer-banner-large',
    component: CfarOfferBannerLargePageComponent,
    data: { path: 'cfar-offer-banner-large' }
  },
  {
    path: 'cfar-exercise-flow',
    component: CfarExerciseFlowPageComponent,
    data: { path: 'cfar-exercise-flow' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
