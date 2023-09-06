import { mapEnumToOptions } from '@abp/ng.core';

export enum IyzicoCardBrand {
  Mastercard = 0,
  Visa = 1,
  Troy = 2,
  AmericanExpress = 3,
}

export const iyzicoCardBrandOptions = mapEnumToOptions(IyzicoCardBrand);
