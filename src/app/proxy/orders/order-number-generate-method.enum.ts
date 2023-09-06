import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderNumberGenerateMethod {
  Incremental = 0,
  Random = 1,
}

export const orderNumberGenerateMethodOptions = mapEnumToOptions(OrderNumberGenerateMethod);
