import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cocktails'
  },
  {
    path: 'cocktails',
    loadChildren: () => import('./cocktails/cocktails.routes')
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
