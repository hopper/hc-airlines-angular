import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CfarOfferBannerPageComponent } from './guides/cfar-offer-banner/cfar-offer-banner.component';
import { CfarOfferDialogPageComponent } from './guides/cfar-offer-dialog/cfar-offer-dialog.component';
import { CfarExerciseDialogPageComponent } from './guides/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { GuidesPageComponent } from './guides/guides.component';

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
    path: 'cfar-exercise-dialog',
    component: CfarExerciseDialogPageComponent,
    data: { path: 'cfar-exercise-dialog' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
