import { mapEnumToOptions } from '@abp/ng.core';

export enum FeaturesHomePosition {
  Top = 0,
  Bottom = 1,
}

export const featuresHomePositionOptions = mapEnumToOptions(FeaturesHomePosition);
