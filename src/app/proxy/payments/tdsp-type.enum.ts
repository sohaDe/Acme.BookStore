import { mapEnumToOptions } from '@abp/ng.core';

export enum TdspType {
  Moamalat = 0,
  Tadauwel = 1,
  Almadar = 2,
  EdfaL = 3,
  MobiCash = 4,
  Card = 5,
}

export const tdspTypeOptions = mapEnumToOptions(TdspType);
