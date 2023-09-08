import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcinationPageRoutingModule } from './calcination-routing.module';

import { CalcinationPage } from './calcination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcinationPageRoutingModule
  ],
  declarations: [CalcinationPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CalcinationPageModule {}
