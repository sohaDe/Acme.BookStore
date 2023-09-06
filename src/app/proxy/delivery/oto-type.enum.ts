import { mapEnumToOptions } from '@abp/ng.core';

export enum OtoType {
  Express = 0,
  SameDay = 1,
  FastDelivery = 2,
  ColdDelivery = 3,
  HeavyAndBulky = 4,
  ElectronicAndHeavy = 5,
}

export const otoTypeOptions = mapEnumToOptions(OtoType);
