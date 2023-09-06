import { mapEnumToOptions } from '@abp/ng.core';

export enum ThemeMenuItemType {
  Options = 0,
  Page = 1,
}

export const themeMenuItemTypeOptions = mapEnumToOptions(ThemeMenuItemType);
