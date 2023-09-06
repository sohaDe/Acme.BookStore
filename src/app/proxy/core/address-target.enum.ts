import { mapEnumToOptions } from '@abp/ng.core';

export enum AddressTarget {
  Customer = 1,
  Branch = 2,
  Order = 3,
  Outlet = 4,
  Warehouse = 5,
  Invoice = 6,
}

export const addressTargetOptions = mapEnumToOptions(AddressTarget);
