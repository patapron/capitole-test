import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '@envs/environment.development';
import { map, Observable } from 'rxjs';
import { mapVehicleResponse } from '@features/vehicles/mappers/vehicle.mapper';
import {
  VehicleApiResponse,
  Vehicle,
} from '@features/vehicles/models/vehicle.model';
@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly VECHICLE_KEY = '/vehicles/GetModelsForMakeId/';
  private readonly RESPONSE_FORMAT_KEY = '?format=json';
  private _destroyRef = inject(DestroyRef);

  public getVehiclesByBrandId(id: string): Observable<Vehicle[]> {
    return this._http
      .get<VehicleApiResponse>(
        `${this._endPoint}${this.VECHICLE_KEY}${id}${this.RESPONSE_FORMAT_KEY}`
      )
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        map((vehicleApiResponse: VehicleApiResponse) =>
          vehicleApiResponse.Results.map(mapVehicleResponse)
        )
      );
  }
}
