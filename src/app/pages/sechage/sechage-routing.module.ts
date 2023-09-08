import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SechagePage } from './sechage.page';

const routes: Routes = [
  {
    path: '',
    component: SechagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SechagePageRoutingModule {}
