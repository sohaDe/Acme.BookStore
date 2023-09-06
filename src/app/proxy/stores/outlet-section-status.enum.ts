import { mapEnumToOptions } from '@abp/ng.core';

export enum OutletSectionStatus {
  Open = 0,
  Closed = 1,
}

export const outletSectionStatusOptions = mapEnumToOptions(OutletSectionStatus);
