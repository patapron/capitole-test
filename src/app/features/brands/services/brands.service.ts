import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { map, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Brand, BrandApiResponse } from '@features/brands/models/brand.model';
import { mapBrandResponse } from '@features/brands/mappers/brand.mapper';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly BRANDS_KEY = '/vehicles/GetAllMakes';
  private readonly RESPONSE_FORMAT_KEY = '?format=json';
  private _destroyRef = inject(DestroyRef);

  public getBrands(): Observable<Brand[]> {
    return this._http
      .get<BrandApiResponse>(
        `${this._endPoint}${this.BRANDS_KEY}${this.RESPONSE_FORMAT_KEY}`
      )
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        map((brandsApiResponse: BrandApiResponse) =>
          brandsApiResponse.Results.map(mapBrandResponse)
        )
      );
  }
}
