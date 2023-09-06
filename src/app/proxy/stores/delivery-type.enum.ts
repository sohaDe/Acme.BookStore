import { mapEnumToOptions } from '@abp/ng.core';

export enum DeliveryType {
  Takeaway = 10,
  Delivery = 20,
  SelfPickup = 30,
  DineIn = 40,
}

export const deliveryTypeOptions = mapEnumToOptions(DeliveryType);
