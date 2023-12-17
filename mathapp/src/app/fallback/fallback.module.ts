import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FallbackPageRoutingModule } from './fallback-routing.module';

import { FallbackPage } from './fallback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FallbackPageRoutingModule
  ],
  declarations: [FallbackPage]
})
export class FallbackPageModule {}
