import { mapEnumToOptions } from '@abp/ng.core';

export enum TapType {
  KNet = 1,
  Card = 2,
}

export const tapTypeOptions = mapEnumToOptions(TapType);
