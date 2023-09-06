import { mapEnumToOptions } from '@abp/ng.core';

export enum CategoryPadding {
  NoPadding = 0,
  Padding1 = 1,
  Padding2 = 2,
}

export const categoryPaddingOptions = mapEnumToOptions(CategoryPadding);
