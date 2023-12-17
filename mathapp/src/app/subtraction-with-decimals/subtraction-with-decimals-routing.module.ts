import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtractionWithDecimalsPage } from './subtraction-with-decimals.page';

const routes: Routes = [
  {
    path: '',
    component: SubtractionWithDecimalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtractionWithDecimalsPageRoutingModule {}
