import { mapEnumToOptions } from '@abp/ng.core';

export enum TapCardBrand {
  Visa = 0,
  Mastercard = 1,
  AmericanExpress = 2,
  Mada = 3,
}

export const tapCardBrandOptions = mapEnumToOptions(TapCardBrand);
