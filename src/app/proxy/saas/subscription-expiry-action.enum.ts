import { mapEnumToOptions } from '@abp/ng.core';

export enum SubscriptionExpiryAction {
  DeactiveTenant = 0,
  AssignToAnotherEdition = 1,
}

export const subscriptionExpiryActionOptions = mapEnumToOptions(SubscriptionExpiryAction);
