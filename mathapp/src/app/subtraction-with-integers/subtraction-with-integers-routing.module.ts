import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtractionWithIntegersPage } from './subtraction-with-integers.page';

const routes: Routes = [
  {
    path: '',
    component: SubtractionWithIntegersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtractionWithIntegersPageRoutingModule {}
