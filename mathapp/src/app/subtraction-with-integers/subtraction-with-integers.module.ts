import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtractionWithIntegersPageRoutingModule } from './subtraction-with-integers-routing.module';

import { SubtractionWithIntegersPage } from './subtraction-with-integers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtractionWithIntegersPageRoutingModule
  ],
  declarations: [SubtractionWithIntegersPage]
})
export class SubtractionWithIntegersPageModule {}
