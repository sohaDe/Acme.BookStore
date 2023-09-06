import { mapEnumToOptions } from '@abp/ng.core';

export enum IconPosition {
  Top = 0,
  Before = 10,
  After = 20,
}

export const iconPositionOptions = mapEnumToOptions(IconPosition);
