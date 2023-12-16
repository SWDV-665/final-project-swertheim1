import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtractionWithWholeNumbersPageRoutingModule } from './subtraction-with-whole-numbers-routing.module';

import { SubtractionWithWholeNumbersPage } from './subtraction-with-whole-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtractionWithWholeNumbersPageRoutingModule
  ],
  declarations: [SubtractionWithWholeNumbersPage]
})
export class SubtractionWithWholeNumbersPageModule {}
