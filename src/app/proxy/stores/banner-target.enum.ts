import { mapEnumToOptions } from '@abp/ng.core';

export enum BannerTarget {
  None = 0,
  Item = 1,
  Category = 2,
  ExternalLink = 3,
}

export const bannerTargetOptions = mapEnumToOptions(BannerTarget);
