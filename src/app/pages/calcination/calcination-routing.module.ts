import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcinationPage } from './calcination.page';

const routes: Routes = [
  {
    path: '',
    component: CalcinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcinationPageRoutingModule {}
