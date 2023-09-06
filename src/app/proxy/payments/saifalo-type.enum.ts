import { mapEnumToOptions } from '@abp/ng.core';

export enum SaifaloType {
  Zaad = 0,
  Edahab = 1,
  Pbwallet = 2,
}

export const saifaloTypeOptions = mapEnumToOptions(SaifaloType);
