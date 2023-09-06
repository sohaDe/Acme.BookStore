import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasDiscountType {
  Percentage = 0,
  Flat = 1,
}

export const saasDiscountTypeOptions = mapEnumToOptions(SaasDiscountType);
