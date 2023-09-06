import { mapEnumToOptions } from '@abp/ng.core';

export enum TransferOrderStatus {
  Initiated = 0,
  Transferred = 1,
  Canceled = 2,
}

export const transferOrderStatusOptions = mapEnumToOptions(TransferOrderStatus);
