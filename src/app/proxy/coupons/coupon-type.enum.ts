import { mapEnumToOptions } from '@abp/ng.core';

export enum CouponType {
  Percentage = 1,
  FixedAmount = 2,
}

export const couponTypeOptions = mapEnumToOptions(CouponType);
