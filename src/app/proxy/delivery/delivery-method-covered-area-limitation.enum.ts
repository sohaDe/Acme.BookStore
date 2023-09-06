import { mapEnumToOptions } from '@abp/ng.core';

export enum DeliveryMethodCoveredAreaLimitation {
  NoLimitations = 0,
  GeoAreas = 1,
  MapZone = 2,
}

export const deliveryMethodCoveredAreaLimitationOptions = mapEnumToOptions(DeliveryMethodCoveredAreaLimitation);
