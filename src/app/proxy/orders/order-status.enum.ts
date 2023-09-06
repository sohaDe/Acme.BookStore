import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderStatus {
  Draft = 0,
  New = 10,
  Accepted = 11,
  InProgress = 12,
  Ready = 13,
  Completed = 14,
  Rejected = 20,
  Canceled = 21,
  Failed = 22,
}

export const orderStatusOptions = mapEnumToOptions(OrderStatus);
