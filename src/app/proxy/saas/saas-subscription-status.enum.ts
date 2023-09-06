import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasSubscriptionStatus {
  Pending = 0,
  Trial = 1,
  Live = 2,
  Dunning = 3,
  Canceled = 4,
  Disabled = 5,
  Expired = 6,
}

export const saasSubscriptionStatusOptions = mapEnumToOptions(SaasSubscriptionStatus);
