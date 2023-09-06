import { mapEnumToOptions } from '@abp/ng.core';

export enum CurrencyPosition {
  Before = 0,
  After = 1,
}

export const currencyPositionOptions = mapEnumToOptions(CurrencyPosition);
