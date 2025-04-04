import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/pages/home.routes'),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
