import { mapEnumToOptions } from '@abp/ng.core';

export enum FcmClientStatus {
  Accepted = 0,
  Rejected = 1,
  LoggedOut = 2,
  NotFound = 3,
}

export const fcmClientStatusOptions = mapEnumToOptions(FcmClientStatus);
