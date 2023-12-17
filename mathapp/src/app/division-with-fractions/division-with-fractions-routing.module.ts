import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionWithFractionsPage } from './division-with-fractions.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionWithFractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionWithFractionsPageRoutingModule {}
