import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component') },
  { path: 'about', loadComponent: () => import('./about/about.component') },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component'),
  },
  {
    path: 'education',
    loadComponent: () => import('./education/education.component'),
  },
  {
    path: 'team',
    loadComponent: () => import('./team/team.component'),
  },
  {
    path: 'historia',
    loadComponent: () => import('./historia/historia.component'),
  },
  {
    path: 'objetivos',
    loadComponent: () => import('./objetivos/objetivos.component'),
  },
  {
    path: 'equipotrabajo',
    loadComponent: () => import('./teamjob/teamjob.component'),
  },
  {
    path: 'colaboracion',
    loadComponent: () => import('./colaboracion/colaboracion.component'),
  },
];
export default routes;
