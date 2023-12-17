import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionWithWholeNumbersPageRoutingModule } from './division-with-whole-numbers-routing.module';

import { DivisionWithWholeNumbersPage } from './division-with-whole-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionWithWholeNumbersPageRoutingModule
  ],
  declarations: [DivisionWithWholeNumbersPage]
})
export class DivisionWithWholeNumbersPageModule {}
