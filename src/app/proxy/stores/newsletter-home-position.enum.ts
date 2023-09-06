import { mapEnumToOptions } from '@abp/ng.core';

export enum NewsletterHomePosition {
  BeforeFeatures = 0,
  AfterFeatures = 1,
}

export const newsletterHomePositionOptions = mapEnumToOptions(NewsletterHomePosition);
