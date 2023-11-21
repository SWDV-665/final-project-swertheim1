import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemsPagePageRoutingModule } from './problems-page-routing.module';

import { ProblemsPagePage } from './problems-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemsPagePageRoutingModule
  ],
  declarations: [ProblemsPagePage]
})
export class ProblemsPagePageModule {}
