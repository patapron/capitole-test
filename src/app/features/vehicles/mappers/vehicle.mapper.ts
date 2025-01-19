export function mapVehicleResponse(response: VehicleResponse): Vehicle {
  return {
    id: response.Model_ID,
    name: response.Model_Name,
    brandId: response.Make_ID,
    brandName: response.Make_Name,
  };
}
