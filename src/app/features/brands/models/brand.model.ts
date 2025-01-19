export interface Brand {
  id: number;
  name: string;
}

export interface BrandResponse {
  Make_ID: number;
  Make_Name: string;
}

export interface BrandApiResponse {
  Count: number;
  Message: string;
  SearchCriteria: string | null;
  Results: BrandResponse[];
}
