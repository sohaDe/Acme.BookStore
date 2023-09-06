import { mapEnumToOptions } from '@abp/ng.core';

export enum TdspCardBrand {
  Visa = 0,
  Mastercard = 1,
  Numo = 2,
  Watani = 3,
  Travel = 4,
  TadawulCard = 5,
  MoamalatCard = 6,
  Sadad = 7,
  EdfaLCard = 8,
}

export const tdspCardBrandOptions = mapEnumToOptions(TdspCardBrand);
