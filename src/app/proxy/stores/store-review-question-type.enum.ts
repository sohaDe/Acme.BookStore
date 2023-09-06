import { mapEnumToOptions } from '@abp/ng.core';

export enum StoreReviewQuestionType {
  Rate = 1,
  Textual = 2,
  Both = 3,
}

export const storeReviewQuestionTypeOptions = mapEnumToOptions(StoreReviewQuestionType);
