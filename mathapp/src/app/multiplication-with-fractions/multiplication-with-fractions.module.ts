import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicationWithFractionsPageRoutingModule } from './multiplication-with-fractions-routing.module';

import { MultiplicationWithFractionsPage } from './multiplication-with-fractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicationWithFractionsPageRoutingModule
  ],
  declarations: [MultiplicationWithFractionsPage]
})
export class MultiplicationWithFractionsPageModule {}
