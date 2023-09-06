import { mapEnumToOptions } from '@abp/ng.core';

export enum ExchangeRateType {
  Manual = 0,
  Provider = 1,
}

export const exchangeRateTypeOptions = mapEnumToOptions(ExchangeRateType);
