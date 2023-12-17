import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicationWithIntegersPage } from './multiplication-with-integers.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicationWithIntegersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicationWithIntegersPageRoutingModule {}
