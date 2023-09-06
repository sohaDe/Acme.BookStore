import { mapEnumToOptions } from '@abp/ng.core';

export enum StripeType {
  Card = 0,
  Fpx = 1,
  Alipay = 2,
  Grabpay = 3,
  Sofort = 4,
  Klarna = 5,
  Giropay = 6,
  Sepa_debit = 7,
}

export const stripeTypeOptions = mapEnumToOptions(StripeType);
