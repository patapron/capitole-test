import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'brands',
    loadChildren: () => import('@features/brands/brands.router'),
  },
  {
    path: '',
    redirectTo: '/brands',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/brands',
  },
];
