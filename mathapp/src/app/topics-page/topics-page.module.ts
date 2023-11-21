import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicsPagePageRoutingModule } from './topics-page-routing.module';

import { TopicsPagePage } from './topics-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicsPagePageRoutingModule
  ],
  declarations: [TopicsPagePage]
})
export class TopicsPagePageModule {}
