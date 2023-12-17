import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionWithDecimalsPageRoutingModule } from './division-with-decimals-routing.module';

import { DivisionWithDecimalsPage } from './division-with-decimals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionWithDecimalsPageRoutingModule
  ],
  declarations: [DivisionWithDecimalsPage]
})
export class DivisionWithDecimalsPageModule {}
