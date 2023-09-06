import { mapEnumToOptions } from '@abp/ng.core';

export enum InvoiceStatus {
  Open = 0,
  Canceled = 10,
  Draft = 20,
}

export const invoiceStatusOptions = mapEnumToOptions(InvoiceStatus);
