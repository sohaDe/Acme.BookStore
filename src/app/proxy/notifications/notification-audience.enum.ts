import { mapEnumToOptions } from '@abp/ng.core';

export enum NotificationAudience {
  AllStoreFrontClients = 0,
  AllStaffUsers = 1,
  StoreGuestsOnly = 2,
  StoreCustomersOnly = 3,
  StoreSpecificCustomers = 4,
  SpecificUsers = 5,
}

export const notificationAudienceOptions = mapEnumToOptions(NotificationAudience);
