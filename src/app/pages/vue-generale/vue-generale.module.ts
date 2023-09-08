import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueGeneralePageRoutingModule } from './vue-generale-routing.module';

import { VueGeneralePage } from './vue-generale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueGeneralePageRoutingModule
  ],
  declarations: [VueGeneralePage]
})
export class VueGeneralePageModule {}
