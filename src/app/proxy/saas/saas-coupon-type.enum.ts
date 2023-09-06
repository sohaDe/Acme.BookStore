import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasCouponType {
  New = 0,
  Recurring = 1,
  Both = 2,
}

export const saasCouponTypeOptions = mapEnumToOptions(SaasCouponType);
