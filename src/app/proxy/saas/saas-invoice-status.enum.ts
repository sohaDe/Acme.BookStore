import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasInvoiceStatus {
  NoPaymentNeeded = 0,
  DueOn = 1,
  Overdue = 2,
  Paid = 3,
}

export const saasInvoiceStatusOptions = mapEnumToOptions(SaasInvoiceStatus);
