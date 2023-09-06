import { mapEnumToOptions } from '@abp/ng.core';

export enum NotificationCustomersFilter {
  AllCustomers = 0,
  CustomersWithNoAddressOnly = 1,
  CustomersWithAddressOnly = 2,
  CustomersOrderedBefore = 3,
  CustomersNeverOrderedBefore = 4,
}

export const notificationCustomersFilterOptions = mapEnumToOptions(NotificationCustomersFilter);
