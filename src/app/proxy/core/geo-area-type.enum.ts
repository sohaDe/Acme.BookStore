import { mapEnumToOptions } from '@abp/ng.core';

export enum GeoAreaType {
  StateOrProvince = 0,
  City = 1,
  District = 2,
}

export const geoAreaTypeOptions = mapEnumToOptions(GeoAreaType);
