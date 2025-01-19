interface Vehicle {
  brandId: number;
  brandName: string;
  id: number;
  name: string;
}

interface VehicleResponse {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

interface VehicleApiResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleResponse[];
}
