import { mapEnumToOptions } from '@abp/ng.core';

export enum FeaturesSectionDesign {
  Card = 0,
  List = 1,
}

export const featuresSectionDesignOptions = mapEnumToOptions(FeaturesSectionDesign);
