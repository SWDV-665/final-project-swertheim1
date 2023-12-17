import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionWithWholeNumbersPage } from './division-with-whole-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionWithWholeNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionWithWholeNumbersPageRoutingModule {}
