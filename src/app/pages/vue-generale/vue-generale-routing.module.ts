import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueGeneralePage } from './vue-generale.page';

const routes: Routes = [
  {
    path: '',
    component: VueGeneralePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueGeneralePageRoutingModule {}
