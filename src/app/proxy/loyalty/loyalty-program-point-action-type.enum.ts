import { mapEnumToOptions } from '@abp/ng.core';

export enum LoyaltyProgramPointActionType {
  Registration = 0,
  Invitation = 1,
  PlaceOrder = 2,
  OrderCompleted = 3,
  OrderCanceled = 4,
  CreateInvoice = 5,
  InvoiceCanceled = 6,
  ReviewItem = 7,
  ReviewStore = 8,
  Manual = 9,
}

export const loyaltyProgramPointActionTypeOptions = mapEnumToOptions(LoyaltyProgramPointActionType);
