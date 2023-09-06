import { mapEnumToOptions } from '@abp/ng.core';

export enum NotificationType {
  Auto = 0,
  Manual = 1,
}

export const notificationTypeOptions = mapEnumToOptions(NotificationType);
