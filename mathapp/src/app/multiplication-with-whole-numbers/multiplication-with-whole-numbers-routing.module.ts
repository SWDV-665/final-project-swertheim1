import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicationWithWholeNumbersPage } from './multiplication-with-whole-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicationWithWholeNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicationWithWholeNumbersPageRoutingModule {}
