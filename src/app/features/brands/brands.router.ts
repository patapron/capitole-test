import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/brand-layout/brand-layout.component'),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./components/brand-detail/brand-detail.component'),
  },
];
export default routes;
