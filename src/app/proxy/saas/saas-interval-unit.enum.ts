import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasIntervalUnit {
  Day = 0,
  Week = 1,
  Month = 2,
  Year = 3,
}

export const saasIntervalUnitOptions = mapEnumToOptions(SaasIntervalUnit);
