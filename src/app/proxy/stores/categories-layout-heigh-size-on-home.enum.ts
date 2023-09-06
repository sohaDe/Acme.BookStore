import { mapEnumToOptions } from '@abp/ng.core';

export enum CategoriesLayoutHeighSizeOnHome {
  Auto = 0,
  Short = 1,
  Medium = 2,
  Long = 3,
}

export const categoriesLayoutHeighSizeOnHomeOptions = mapEnumToOptions(CategoriesLayoutHeighSizeOnHome);
