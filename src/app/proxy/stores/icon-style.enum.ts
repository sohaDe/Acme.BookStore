import { mapEnumToOptions } from '@abp/ng.core';

export enum IconStyle {
  Outline = 0,
  Filled = 1,
  Sharp = 2,
}

export const iconStyleOptions = mapEnumToOptions(IconStyle);
