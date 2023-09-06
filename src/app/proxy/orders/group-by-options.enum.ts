import { mapEnumToOptions } from '@abp/ng.core';

export enum GroupByOptions {
  Hours = 0,
  Days = 1,
  Months = 2,
  Years = 3,
}

export const groupByOptionsOptions = mapEnumToOptions(GroupByOptions);
