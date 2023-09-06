import { mapEnumToOptions } from '@abp/ng.core';

export enum PayPalPaymentIntentType {
  CAPTURE = 0,
  AUTHORIZE = 1,
}

export const payPalPaymentIntentTypeOptions = mapEnumToOptions(PayPalPaymentIntentType);
