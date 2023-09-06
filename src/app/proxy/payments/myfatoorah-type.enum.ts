import { mapEnumToOptions } from '@abp/ng.core';

export enum MyfatoorahType {
  KNet = 0,
  Amex = 1,
  Sadad = 2,
  Benefit = 3,
  Mada = 4,
  ApplePay = 5,
  StcPay = 6,
  OmanNet = 7,
  Meeza = 8,
  Card = 9,
}

export const myfatoorahTypeOptions = mapEnumToOptions(MyfatoorahType);
