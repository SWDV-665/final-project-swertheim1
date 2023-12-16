import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionWithFractionsPageRoutingModule } from './addition-with-fractions-routing.module';
import { AdditionWithFractionsPage } from './addition-with-fractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionWithFractionsPageRoutingModule
  ],
  declarations: [AdditionWithFractionsPage]
})
export class AdditionWithFractionsPageModule {}
