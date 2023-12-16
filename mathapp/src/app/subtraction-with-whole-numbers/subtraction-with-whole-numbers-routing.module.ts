import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtractionWithWholeNumbersPage } from './subtraction-with-whole-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: SubtractionWithWholeNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtractionWithWholeNumbersPageRoutingModule {}
