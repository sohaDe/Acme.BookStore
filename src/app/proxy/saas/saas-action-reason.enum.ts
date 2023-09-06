import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasActionReason {
  NewAccount = 0,
  AssignDefaultEdition = 1,
  AssignDefaultCurrency = 2,
  StartTrial = 3,
  EndTrial = 4,
  ChangePlan = 5,
  UnpaidInvoices = 6,
  SettlePayment = 7,
  InvoiceIssued = 8,
  ShiftBillingCycle = 9,
}

export const saasActionReasonOptions = mapEnumToOptions(SaasActionReason);
