export interface Vehicle {
  id: number;
  name: string;
  brandId: number;
  brandName: string;
}

export interface VehicleResponse {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface VehicleApiResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleResponse[];
}
