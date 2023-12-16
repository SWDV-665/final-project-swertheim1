import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionWithFractionsPage } from './addition-with-fractions.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionWithFractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionWithFractionsPageRoutingModule {}
