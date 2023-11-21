import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSubMulDivTopicsPage } from './add-sub-mul-div-topics.page';

const routes: Routes = [
  {
    path: '',
    component: AddSubMulDivTopicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSubMulDivTopicsPageRoutingModule {}
