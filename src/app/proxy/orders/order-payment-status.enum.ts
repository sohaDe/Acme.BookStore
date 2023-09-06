import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderPaymentStatus {
  Unpaid = 0,
  Pending = 5,
  FullyPaid = 10,
  PartiallyPaid = 11,
  OverPaid = 12,
  Refunded = 20,
  PartiallyRefunded = 21,
  OverRefunded = 22,
}

export const orderPaymentStatusOptions = mapEnumToOptions(OrderPaymentStatus);
