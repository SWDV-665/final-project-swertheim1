import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionWithWholeNumbersPageRoutingModule } from './addition-with-whole-numbers-routing.module';
import { AdditionWithWholeNumbersPage } from './addition-with-whole-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionWithWholeNumbersPageRoutingModule
  ],
  declarations: [AdditionWithWholeNumbersPage]
})
export class AdditionWithWholeNumbersPageModule {}
