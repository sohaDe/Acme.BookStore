import { mapEnumToOptions } from '@abp/ng.core';

export enum BannerPosition {
  TopFixedAd = 1,
  MainBanner = 11,
  AfterBanner = 12,
  AfterFeaturedItems = 21,
  AfterOffersItems = 22,
  AfterBestsellerItems = 23,
  AfterLatestItems = 24,
}

export const bannerPositionOptions = mapEnumToOptions(BannerPosition);
