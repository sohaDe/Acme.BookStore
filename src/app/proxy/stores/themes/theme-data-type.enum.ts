import { mapEnumToOptions } from '@abp/ng.core';

export enum ThemeDataType {
  Static = 0,
  Dynamic = 1,
}

export const themeDataTypeOptions = mapEnumToOptions(ThemeDataType);
