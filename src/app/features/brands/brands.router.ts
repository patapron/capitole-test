import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/brands/components/brand-layout/brand-layout.component'),
  },
  {
    path: ':id',
    loadComponent: () =>
      import(
        '@features/vehicles/components/vehicle-layout/vehicle-layout.component'
      ),
  },
  // {
  //   path: ':id',
  //   loadChildren: () => import('@features/vehicles/vehicles.router'),
  // },
];
export default routes;
