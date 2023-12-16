import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionWithIntegersPageRoutingModule } from './addition-with-integers-routing.module';

import { AdditionWithIntegersPage } from './addition-with-integers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionWithIntegersPageRoutingModule
  ],
  declarations: [AdditionWithIntegersPage]
})
export class AdditionWithIntegersPageModule {}
