import { mapEnumToOptions } from '@abp/ng.core';

export enum OpenSelectOutletDialogOptions {
  WhenStoreIsOpendForFirstTime = 1,
  WhenAddingToCartForFirstTime = 2,
  Never = 3,
}

export const openSelectOutletDialogOptionsOptions = mapEnumToOptions(OpenSelectOutletDialogOptions);
