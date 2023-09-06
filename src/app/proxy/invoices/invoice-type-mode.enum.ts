import { mapEnumToOptions } from '@abp/ng.core';

export enum InvoiceTypeMode {
  BeginningInventoryInvoice = 10,
  PurchaseBill = 20,
  SalesInvoice = 30,
  PurchaseReturnBill = 40,
  SalesReturnInvoice = 50,
  TransferIn = 60,
  TransferOut = 70,
}

export const invoiceTypeModeOptions = mapEnumToOptions(InvoiceTypeMode);
