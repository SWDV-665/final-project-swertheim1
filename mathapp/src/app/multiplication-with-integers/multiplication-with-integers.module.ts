import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicationWithIntegersPageRoutingModule } from './multiplication-with-integers-routing.module';

import { MultiplicationWithIntegersPage } from './multiplication-with-integers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicationWithIntegersPageRoutingModule
  ],
  declarations: [MultiplicationWithIntegersPage]
})
export class MultiplicationWithIntegersPageModule {}
