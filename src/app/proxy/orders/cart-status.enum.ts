import { mapEnumToOptions } from '@abp/ng.core';

export enum CartStatus {
  Open = 0,
  Reset = 1,
  Done = 2,
}

export const cartStatusOptions = mapEnumToOptions(CartStatus);
