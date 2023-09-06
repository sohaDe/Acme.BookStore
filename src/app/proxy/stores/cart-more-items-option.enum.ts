import { mapEnumToOptions } from '@abp/ng.core';

export enum CartMoreItemsOption {
  AllItems = 0,
  AllCategories = 1,
  Home = 2,
}

export const cartMoreItemsOptionOptions = mapEnumToOptions(CartMoreItemsOption);
