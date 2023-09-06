import { mapEnumToOptions } from '@abp/ng.core';

export enum MyfatoorahCardBrand {
  Visa = 0,
  Mastercard = 1,
  KNetCard = 2,
  BenefitCard = 3,
  AmericanExpress = 4,
  QPay = 5,
  ApplePayCard = 6,
}

export const myfatoorahCardBrandOptions = mapEnumToOptions(MyfatoorahCardBrand);
