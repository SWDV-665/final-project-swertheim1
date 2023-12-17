import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtractionWithFractionsPage } from './subtraction-with-fractions.page';

const routes: Routes = [
  {
    path: '',
    component: SubtractionWithFractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtractionWithFractionsPageRoutingModule {}
