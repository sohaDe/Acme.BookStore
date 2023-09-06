import { mapEnumToOptions } from '@abp/ng.core';

export enum StoreSupportedCountriesType {
  AllCountries = 0,
  StoreCountryOnly = 1,
  OutletCountryOnly = 2,
  SpecificCountries = 3,
}

export const storeSupportedCountriesTypeOptions = mapEnumToOptions(StoreSupportedCountriesType);
