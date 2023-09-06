import { mapEnumToOptions } from '@abp/ng.core';

export enum CategoriesLayoutColumnSizeOnHome {
  Small = 0,
  Medium = 1,
  Large = 2,
}

export const categoriesLayoutColumnSizeOnHomeOptions = mapEnumToOptions(CategoriesLayoutColumnSizeOnHome);
