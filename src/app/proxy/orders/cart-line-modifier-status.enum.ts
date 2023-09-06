import { mapEnumToOptions } from '@abp/ng.core';

export enum CartLineModifierStatus {
  NotUpdated = 0,
  ModifierPriceIncreased = 1,
  ModifierPriceDecreased = 2,
  ModifierNotAvailable = 3,
}

export const cartLineModifierStatusOptions = mapEnumToOptions(CartLineModifierStatus);
