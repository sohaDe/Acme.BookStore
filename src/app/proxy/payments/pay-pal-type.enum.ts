import { mapEnumToOptions } from '@abp/ng.core';

export enum PayPalType {
  Checkout = 10,
}

export const payPalTypeOptions = mapEnumToOptions(PayPalType);
