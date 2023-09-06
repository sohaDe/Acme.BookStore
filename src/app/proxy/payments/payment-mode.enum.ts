import { mapEnumToOptions } from '@abp/ng.core';

export enum PaymentMode {
  Received = 0,
  ReceivedRefund = 1,
  Made = 2,
  RefundMade = 3,
}

export const paymentModeOptions = mapEnumToOptions(PaymentMode);
