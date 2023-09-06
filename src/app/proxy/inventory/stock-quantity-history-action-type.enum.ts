import { mapEnumToOptions } from '@abp/ng.core';

export enum StockQuantityHistoryActionType {
  InitialStockQuantity = 0,
  ManualAdjustment = 10,
  OrderPosted = 15,
  BeginningInventoryInvoicePosted = 20,
  BeginningInventoryInvoiceCanceled = 21,
  PurchaseBillPosted = 30,
  PurchaseBillCanceled = 31,
  SalesInvoicePosted = 40,
  SalesInvoiceCanceled = 41,
  PurchaseReturnBillPosted = 50,
  PurchaseReturnBillCanceled = 51,
  SalesReturnInvoicePosted = 60,
  SalesReturnInvoiceCanceled = 61,
  TransferOrderInPosted = 70,
  TransferOrderInCanceled = 71,
  TransferOrderOutPosted = 72,
  TransferOrderOutCanceled = 73,
}

export const stockQuantityHistoryActionTypeOptions = mapEnumToOptions(StockQuantityHistoryActionType);
