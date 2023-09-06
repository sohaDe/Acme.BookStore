import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasOrderStatus {
  Pending = 0,
  Accepted = 1,
  Completed = 2,
  Canceled = 3,
}

export const saasOrderStatusOptions = mapEnumToOptions(SaasOrderStatus);
