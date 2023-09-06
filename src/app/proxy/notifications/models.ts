import type { NotificationTarget } from './notification-target.enum';
import type { NotificationAudience } from './notification-audience.enum';
import type { NotificationCustomersFilter } from './notification-customers-filter.enum';
import type { NotificationType } from './notification-type.enum';
import type { SalesChannels } from '../catalog/sales-channels.enum';
import type { FcmClientStatus } from './fcm-client-status.enum';
import type { AuditedEntityDto, CreationAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateNotificationDto {
  prefixTitle?: string;
  title: string;
  title2?: string;
  title3?: string;
  message: string;
  message2?: string;
  message3?: string;
  image?: string;
  allLanguages: boolean;
  targetId?: string;
  target: NotificationTarget;
  audience: NotificationAudience;
  customersFilter: NotificationCustomersFilter;
  specificCustomersIds: string[];
  specificUsersIds: string[];
  type: NotificationType;
  salesChannel?: SalesChannels;
  tenantId?: string;
}

export interface CreateUpdateFcmClientDto {
  fcmToken?: string;
  token?: string;
  status: FcmClientStatus;
  salesChannel: SalesChannels;
  deviceId?: string;
  deviceType?: string;
  os?: string;
  browser?: string;
  language?: string;
}

export interface FcmClientDto extends AuditedEntityDto<string> {
  fcmToken?: string;
  token?: string;
  status: FcmClientStatus;
  salesChannel: SalesChannels;
  deviceId?: string;
  deviceType?: string;
  os?: string;
  browser?: string;
  language?: string;
}

export interface MyNotificationDto {
  id?: string;
  title?: string;
  title2?: string;
  title3?: string;
  message?: string;
  message2?: string;
  message3?: string;
  image?: string;
  target: NotificationTarget;
  targetId?: string;
  targetId2?: string;
  targetId3?: string;
  creationTime?: string;
  actionTaken?: string;
  seen?: string;
  receiverId?: string;
}

export interface NotificationDto extends CreationAuditedEntityDto<string> {
  title?: string;
  title2?: string;
  title3?: string;
  message?: string;
  message2?: string;
  message3?: string;
  image?: string;
  target: NotificationTarget;
  targetId?: string;
  type?: NotificationType;
  notificationReceivers: NotificationReceiverDto[];
}

export interface NotificationFilterDto extends PagedAndSortedResultRequestDto {
  token?: string;
  seen?: boolean;
}

export interface NotificationReceiverDto {
  id?: string;
  actionTaken?: string;
  seen?: string;
  isSucceed: boolean;
  exceptionMessage?: string;
  customerId?: string;
  name?: string;
  phoneNumber?: string;
  email?: string;
  status: FcmClientStatus;
  salesChannel: SalesChannels;
  deviceId?: string;
  deviceType?: string;
  os?: string;
  browser?: string;
  language?: string;
}

export interface NotificationsRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  type?: NotificationType;
  target?: NotificationTarget;
}

export interface UpdateSeenAndActionDto {
  notificationId?: string;
  token?: string;
}
