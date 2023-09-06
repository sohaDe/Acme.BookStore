import { mapEnumToOptions } from '@abp/ng.core';

export enum SubtotalType {
  WithTax = 0,
  WithoutTax = 1,
}

export const subtotalTypeOptions = mapEnumToOptions(SubtotalType);
