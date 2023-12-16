import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdditionWithDecimalsPageRoutingModule } from './addition-with-decimals-routing.module';
import { AdditionWithDecimalsPage } from './addition-with-decimals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionWithDecimalsPageRoutingModule
  ],
  declarations: [AdditionWithDecimalsPage]
})
export class AdditionWithDecimalsPageModule {}
