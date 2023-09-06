import { mapEnumToOptions } from '@abp/ng.core';

export enum StripeCardBrand {
  Visa = 0,
  Mastercard = 1,
  AmericanExpress = 2,
}

export const stripeCardBrandOptions = mapEnumToOptions(StripeCardBrand);
