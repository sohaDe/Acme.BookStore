import { mapEnumToOptions } from '@abp/ng.core';

export enum CartLineStatus {
  NotUpdated = 0,
  ItemPriceIncreased = 1,
  ItemPriceDecreased = 2,
  NotAvailable = 3,
  NoStockAvailable = 4,
}

export const cartLineStatusOptions = mapEnumToOptions(CartLineStatus);
