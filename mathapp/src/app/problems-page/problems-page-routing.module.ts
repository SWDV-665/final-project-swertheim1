import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemsPagePage } from './problems-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemsPagePageRoutingModule {}
