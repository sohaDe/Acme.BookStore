import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderLineStatus {
  Accepted = 0,
  PartiallyAccepted = 1,
  Canceled = 10,
  Replaced = 11,
}

export const orderLineStatusOptions = mapEnumToOptions(OrderLineStatus);
