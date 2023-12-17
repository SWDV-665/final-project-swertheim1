import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtractionWithFractionsPageRoutingModule } from './subtraction-with-fractions-routing.module';

import { SubtractionWithFractionsPage } from './subtraction-with-fractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtractionWithFractionsPageRoutingModule
  ],
  declarations: [SubtractionWithFractionsPage]
})
export class SubtractionWithFractionsPageModule {}
