import { mapEnumToOptions } from '@abp/ng.core';

export enum KosmoType {
  ASAP = 0,
  TwoHours = 1,
  FourHours = 2,
  NextDay = 3,
  NextThreeDays = 4,
}

export const kosmoTypeOptions = mapEnumToOptions(KosmoType);
