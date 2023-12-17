import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionWithDecimalsPage } from './division-with-decimals.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionWithDecimalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionWithDecimalsPageRoutingModule {}
