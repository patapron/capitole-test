import { Brand, BrandResponse } from '../models/brand.model';

export function mapBrandResponse(response: BrandResponse): Brand {
  return {
    id: response.Make_ID,
    name: response.Make_Name,
  };
}
