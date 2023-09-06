import { mapEnumToOptions } from '@abp/ng.core';

export enum GeoAreaFieldType {
  Dropdown = 0,
  Text = 1,
  Number = 2,
}

export const geoAreaFieldTypeOptions = mapEnumToOptions(GeoAreaFieldType);
