import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionWithFractionsPageRoutingModule } from './division-with-fractions-routing.module';

import { DivisionWithFractionsPage } from './division-with-fractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionWithFractionsPageRoutingModule
  ],
  declarations: [DivisionWithFractionsPage]
})
export class DivisionWithFractionsPageModule {}
