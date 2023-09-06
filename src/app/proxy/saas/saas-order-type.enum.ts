import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasOrderType {
  NewSubscription = 0,
  Downgrade = 1,
  Upgrade = 2,
}

export const saasOrderTypeOptions = mapEnumToOptions(SaasOrderType);
