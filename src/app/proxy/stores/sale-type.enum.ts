import { mapEnumToOptions } from '@abp/ng.core';

export enum SaleType {
  None = 0,
  Wholesale = 1,
  Retail = 2,
}

export const saleTypeOptions = mapEnumToOptions(SaleType);
