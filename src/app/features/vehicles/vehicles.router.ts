import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('./components/vehicle-layout/vehicle-layout.component'),
  },
];
export default routes;
