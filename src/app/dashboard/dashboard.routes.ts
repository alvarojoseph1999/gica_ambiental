import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./gica/gica-dashboard/gica-dashboard.component').then(
        (m) => m.GicaDashboardComponent
      ),
    children: [
      {
        path: 'principal',
        loadComponent: () =>
          import('./gica/principal/principal.component').then(
            (m) => m.PrincipalComponent
          ),
      },
      {
        path: 'clima',
        loadComponent: () =>
          import('./gica/clima/clima.component').then((m) => m.ClimaComponent),
      },
      {
        path: 'temperatura',
        loadComponent: () =>
          import('./gica/temperatura/temperatura.component').then(
            (m) => m.TemperaturaComponent
          ),
      },
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'principal',
  },
];

export default dashboardRoutes;
