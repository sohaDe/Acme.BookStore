import { mapEnumToOptions } from '@abp/ng.core';

export enum StoreStatus {
  UnderMaintenance = 0,
  Active = 1,
}

export const storeStatusOptions = mapEnumToOptions(StoreStatus);
