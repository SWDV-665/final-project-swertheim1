import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicationWithWholeNumbersPageRoutingModule } from './multiplication-with-whole-numbers-routing.module';

import { MultiplicationWithWholeNumbersPage } from './multiplication-with-whole-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicationWithWholeNumbersPageRoutingModule
  ],
  declarations: [MultiplicationWithWholeNumbersPage]
})
export class MultiplicationWithWholeNumbersPageModule {}
