import { mapEnumToOptions } from '@abp/ng.core';

export enum StorePageStatus {
  Draft = 0,
  Published = 1,
}

export const storePageStatusOptions = mapEnumToOptions(StorePageStatus);
