import { mapEnumToOptions } from '@abp/ng.core';

export enum OutletStatus {
  Draft = 0,
  Active = 1,
  Busy = 2,
  TemporarilyClosed = 3,
  Closed = 4,
  Disabled = 5,
}

export const outletStatusOptions = mapEnumToOptions(OutletStatus);
