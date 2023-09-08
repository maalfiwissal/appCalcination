import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrechauffementPageRoutingModule } from './prechauffement-routing.module';

import { PrechauffementPage } from './prechauffement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrechauffementPageRoutingModule
  ],
  declarations: [PrechauffementPage]
})
export class PrechauffementPageModule {}
