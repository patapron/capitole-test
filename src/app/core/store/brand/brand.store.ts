import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { Brand } from '@features/brands/models/brand.model';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { inject } from '@angular/core';
import { BrandsService } from '@features/brands/services/brands.service';
export interface BrandState {
  brands: Brand[];
}

const initialState: BrandState = {
  brands: [],
};

export const BrandStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    ({ brands, ...store }, brandsService = inject(BrandsService)) => ({
      loadBrands: rxMethod<void>(
        pipe(
          switchMap(() => {
            return brandsService.getBrands().pipe(
              tap((brands) => {
                patchState(store, { brands });
                console.log(brands);
              })
            );
          })
        )
      ),
    })
  )
);
