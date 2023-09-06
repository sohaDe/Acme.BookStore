import { mapEnumToOptions } from '@abp/ng.core';

export enum TaxType {
  PriceIncluded = 0,
  PriceExcluded = 1,
}

export const taxTypeOptions = mapEnumToOptions(TaxType);
