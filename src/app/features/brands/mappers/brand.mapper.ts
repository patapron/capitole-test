import { VehicleBrand, VehicleBrandResponse } from '../models/brand.model';

export function mapBrandResponse(response: VehicleBrandResponse): VehicleBrand {
  return {
    makeId: response.Make_ID,
    makeName: response.Make_Name,
  };
}
