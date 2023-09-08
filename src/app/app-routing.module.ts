import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'vue-generale',
    loadChildren: () => import('./pages/vue-generale/vue-generale.module').then( m => m.VueGeneralePageModule)
  },
  {
    path: 'sechage',
    loadChildren: () => import('./pages/sechage/sechage.module').then( m => m.SechagePageModule)
  },
  {
    path: 'prechauffement',
    loadChildren: () => import('./pages/prechauffement/prechauffement.module').then( m => m.PrechauffementPageModule)
  },
  {
    path: 'calcination',
    loadChildren: () => import('./pages/calcination/calcination.module').then( m => m.CalcinationPageModule)
  },
  {
    path: 'refroidissement',
    loadChildren: () => import('./pages/refroidissement/refroidissement.module').then( m => m.RefroidissementPageModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./user/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'edit-user/:id',
    loadChildren: () => import('./user/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
 
  {
    path: 'registration',
    loadChildren: () => import('./user/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
