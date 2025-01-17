import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { map, Observable, tap } from 'rxjs';
import { mapBrandResponse } from '../mappers/brand.mapper';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { VehicleBrand, VehicleBrandResponse } from '../models/brand.model';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly BRANDS_KEY = '/vehicles/GetAllMakes?format=json';
  private _destroyRef = inject(DestroyRef);

  public getBrands(): Observable<VehicleBrand[]> {
    return this._http
      .get<VehicleBrandResponse[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        map((brandsResponse: VehicleBrandResponse[]) =>
          brandsResponse.map(mapBrandResponse)
        )
      );
  }
}
