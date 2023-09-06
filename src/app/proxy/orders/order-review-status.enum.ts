import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderReviewStatus {
  NotReviewed = 0,
  PartiallyReviewed = 1,
  Reviewed = 2,
}

export const orderReviewStatusOptions = mapEnumToOptions(OrderReviewStatus);
