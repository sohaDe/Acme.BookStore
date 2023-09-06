import { mapEnumToOptions } from '@abp/ng.core';

export enum ImageTarget {
  Category = 1,
  ItemThumbnail = 2,
  Item = 3,
  Banner = 4,
  Notification = 5,
  Others = 6,
  Icon = 7,
  Outlet = 8,
}

export const imageTargetOptions = mapEnumToOptions(ImageTarget);
