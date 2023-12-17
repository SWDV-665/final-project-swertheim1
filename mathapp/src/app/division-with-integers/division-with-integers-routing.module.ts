import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionWithIntegersPage } from './division-with-integers.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionWithIntegersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionWithIntegersPageRoutingModule {}
