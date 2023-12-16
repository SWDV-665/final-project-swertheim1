import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionWithWholeNumbersPage } from './addition-with-whole-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionWithWholeNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionWithWholeNumbersPageRoutingModule {}
