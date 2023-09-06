import { mapEnumToOptions } from '@abp/ng.core';

export enum NotificationTarget {
  None = 0,
  Item = 1,
  Order = 2,
  Coupon = 3,
  RewardPoints = 4,
  NewCustomer = 5,
}

export const notificationTargetOptions = mapEnumToOptions(NotificationTarget);
