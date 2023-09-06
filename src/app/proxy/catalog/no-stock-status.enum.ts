import { mapEnumToOptions } from '@abp/ng.core';

export enum NoStockStatus {
  Unavailable = 0,
  Available = 1,
}

export const noStockStatusOptions = mapEnumToOptions(NoStockStatus);
