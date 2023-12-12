import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtractionPage } from './subtraction.page';

const routes: Routes = [
  {
    path: '',
    component: SubtractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtractionPageRoutingModule {}
