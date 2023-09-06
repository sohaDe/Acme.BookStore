import { mapEnumToOptions } from '@abp/ng.core';

export enum TransactionType {
  Invoice = 0,
  Payment = 1,
}

export const transactionTypeOptions = mapEnumToOptions(TransactionType);
