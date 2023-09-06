import { mapEnumToOptions } from '@abp/ng.core';

export enum SalesChannelStatus {
  Enable = 0,
  Disable = 1,
}

export const salesChannelStatusOptions = mapEnumToOptions(SalesChannelStatus);
