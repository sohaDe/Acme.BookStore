import { mapEnumToOptions } from '@abp/ng.core';

export enum SalesChannels {
  None = 0,
  WebStore = 1,
  AndroidStore = 2,
  IosStore = 3,
  POS = 4,
  ControlPanel = 5,
}

export const salesChannelsOptions = mapEnumToOptions(SalesChannels);
