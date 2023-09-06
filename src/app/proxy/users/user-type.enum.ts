import { mapEnumToOptions } from '@abp/ng.core';

export enum UserType {
  Owner = 0,
  User = 10,
  Vendor = 20,
  Customer = 30,
}

export const userTypeOptions = mapEnumToOptions(UserType);
