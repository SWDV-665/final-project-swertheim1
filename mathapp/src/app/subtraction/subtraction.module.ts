import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtractionPageRoutingModule } from './subtraction-routing.module';

import { SubtractionPage } from './subtraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtractionPageRoutingModule
  ],
  declarations: [SubtractionPage]
})
export class SubtractionPageModule {}
