import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    data: { layout: 'no-navbar-footer' },
  },
  {
    path: '',
    loadChildren: () => import('./features/pages/home.routes'),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
