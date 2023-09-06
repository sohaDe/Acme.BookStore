import { mapEnumToOptions } from '@abp/ng.core';

export enum PointOfSaleStatus {
  New = 0,
  Opened = 1,
  Closed = 2,
}

export const pointOfSaleStatusOptions = mapEnumToOptions(PointOfSaleStatus);
