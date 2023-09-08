import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefroidissementPageRoutingModule } from './refroidissement-routing.module';

import { RefroidissementPage } from './refroidissement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefroidissementPageRoutingModule
  ],
  declarations: [RefroidissementPage]
})
export class RefroidissementPageModule {}
