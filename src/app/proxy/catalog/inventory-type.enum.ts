import { mapEnumToOptions } from '@abp/ng.core';

export enum InventoryType {
  NonInventory = 0,
  InStock = 1,
  NoStock = 2,
  LowStock = 3,
}

export const inventoryTypeOptions = mapEnumToOptions(InventoryType);
