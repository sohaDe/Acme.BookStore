import { mapEnumToOptions } from '@abp/ng.core';

export enum StorePageType {
  Basic = 0,
  Blog = 1,
}

export const storePageTypeOptions = mapEnumToOptions(StorePageType);
