import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallbackPage } from './fallback.page';

const routes: Routes = [
  {
    path: '',
    component: FallbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallbackPageRoutingModule {}
