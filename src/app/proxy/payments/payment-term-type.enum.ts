import { mapEnumToOptions } from '@abp/ng.core';

export enum PaymentTermType {
  DueOnReceipt = 0,
  EndOfThisMonth = 10,
  EndNextMonth = 20,
  Custom = 30,
}

export const paymentTermTypeOptions = mapEnumToOptions(PaymentTermType);
