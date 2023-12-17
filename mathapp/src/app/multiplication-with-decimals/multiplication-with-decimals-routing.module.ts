import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicationWithDecimalsPage } from './multiplication-with-decimals.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicationWithDecimalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicationWithDecimalsPageRoutingModule {}
