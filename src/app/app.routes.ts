import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
  },
  // {
  //   path: 'dashboard',
  //   loadComponent: () => import('./dashboard/dashboard.component'),
  //   data: { layout: 'no-navbar-footer' },
  // },
  // mapa de calor, CHM Data viewer, np https://www.lufft.com/products/accessories-310/chm-data-viewer-software-1922/
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes'), // Aquí cargamos el módulo de rutas
    data: { layout: 'no-navbar-footer' },
  },
  // {
  //   path: 'clima',
  //   loadComponent: () => import('./gica/clima/clima.component'),
  // },
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
