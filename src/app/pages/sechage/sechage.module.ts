import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SechagePageRoutingModule } from './sechage-routing.module';

import { SechagePage } from './sechage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SechagePageRoutingModule
  ],
  declarations: [SechagePage]
})
export class SechagePageModule {}
