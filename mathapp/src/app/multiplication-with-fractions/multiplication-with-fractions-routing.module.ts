import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicationWithFractionsPage } from './multiplication-with-fractions.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicationWithFractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicationWithFractionsPageRoutingModule {}
