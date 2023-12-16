import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionWithDecimalsPage } from './addition-with-decimals.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionWithDecimalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionWithDecimalsPageRoutingModule {}
