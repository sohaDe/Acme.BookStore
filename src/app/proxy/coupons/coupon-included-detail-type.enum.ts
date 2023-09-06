import { mapEnumToOptions } from '@abp/ng.core';

export enum CouponIncludedDetailType {
  Product = 1,
  Category = 2,
  User = 3,
}

export const couponIncludedDetailTypeOptions = mapEnumToOptions(CouponIncludedDetailType);
