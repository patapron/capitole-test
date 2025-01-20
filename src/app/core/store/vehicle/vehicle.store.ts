import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { inject } from '@angular/core';
import { VehiclesService } from '@features/vehicles/services/vehicles.service';
import { Vehicle } from '@features/vehicles/models/vehicle.model';
export interface VehicleState {
  vehicles: Vehicle[];
}

const initialState: VehicleState = {
  vehicles: [],
};

export const VehicleStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    ({ vehicles, ...store }, vehiclesService = inject(VehiclesService)) => ({
      loadVehicles: rxMethod<string>(
        pipe(
          switchMap((brandId) => {
            return vehiclesService.getVehiclesByBrandId(brandId).pipe(
              tap((vehicles) => {
                patchState(store, { vehicles });
                console.log(vehicles);
              })
            );
          })
        )
      ),
    })
  )
);
