import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtractionWithDecimalsPageRoutingModule } from './subtraction-with-decimals-routing.module';

import { SubtractionWithDecimalsPage } from './subtraction-with-decimals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtractionWithDecimalsPageRoutingModule
  ],
  declarations: [SubtractionWithDecimalsPage]
})
export class SubtractionWithDecimalsPageModule {}
