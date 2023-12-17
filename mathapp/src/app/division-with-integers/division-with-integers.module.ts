import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionWithIntegersPageRoutingModule } from './division-with-integers-routing.module';

import { DivisionWithIntegersPage } from './division-with-integers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionWithIntegersPageRoutingModule
  ],
  declarations: [DivisionWithIntegersPage]
})
export class DivisionWithIntegersPageModule {}
