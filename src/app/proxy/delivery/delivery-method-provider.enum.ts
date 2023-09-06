import { mapEnumToOptions } from '@abp/ng.core';

export enum DeliveryMethodProvider {
  Manual = 0,
  Oto = 1,
  Kosmo = 2,
}

export const deliveryMethodProviderOptions = mapEnumToOptions(DeliveryMethodProvider);
