import { mapEnumToOptions } from '@abp/ng.core';

export enum CashRoundingMethod {
  Round = 0,
  Floor = 1,
  Ceil = 2,
}

export const cashRoundingMethodOptions = mapEnumToOptions(CashRoundingMethod);
