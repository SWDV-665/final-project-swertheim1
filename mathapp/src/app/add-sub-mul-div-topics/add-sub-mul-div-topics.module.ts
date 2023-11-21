import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSubMulDivTopicsPageRoutingModule } from './add-sub-mul-div-topics-routing.module';

import { AddSubMulDivTopicsPage } from './add-sub-mul-div-topics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSubMulDivTopicsPageRoutingModule
  ],
  declarations: [AddSubMulDivTopicsPage]
})
export class AddSubMulDivTopicsPageModule {}
