import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes'), // Aquí cargamos el módulo de rutas
    data: { layout: 'no-navbar-footer' },
  },

  // Ruta principal (Home)
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./features/pages/home.routes'),
  },
  // Ruta para páginas no encontradas
  {
    path: '**',
    redirectTo: '',
  },
  // mapa de calor, CHM Data viewer, np https://www.lufft.com/products/accessories-310/chm-data-viewer-software-1922/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
