import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '@features/vehicles/components/vehicle-layout/vehicle-layout.component'
      ),
  },
];
export default routes;
