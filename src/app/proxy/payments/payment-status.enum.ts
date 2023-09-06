import { mapEnumToOptions } from '@abp/ng.core';

export enum PaymentStatus {
  Pending = 0,
  Received = 10,
  Canceled = 20,
  Failed = 21,
  Voided = 22,
}

export const paymentStatusOptions = mapEnumToOptions(PaymentStatus);
