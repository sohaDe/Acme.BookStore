import { mapEnumToOptions } from '@abp/ng.core';

export enum DeliveryMethodRateType {
  FixedPrice = 0,
}

export const deliveryMethodRateTypeOptions = mapEnumToOptions(DeliveryMethodRateType);
