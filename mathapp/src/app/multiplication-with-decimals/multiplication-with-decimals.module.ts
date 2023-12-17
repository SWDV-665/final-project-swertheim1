import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicationWithDecimalsPageRoutingModule } from './multiplication-with-decimals-routing.module';

import { MultiplicationWithDecimalsPage } from './multiplication-with-decimals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicationWithDecimalsPageRoutingModule
  ],
  declarations: [MultiplicationWithDecimalsPage]
})
export class MultiplicationWithDecimalsPageModule {}
