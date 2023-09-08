import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefroidissementPage } from './refroidissement.page';

const routes: Routes = [
  {
    path: '',
    component: RefroidissementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefroidissementPageRoutingModule {}
