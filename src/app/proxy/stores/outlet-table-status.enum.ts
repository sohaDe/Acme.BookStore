import { mapEnumToOptions } from '@abp/ng.core';

export enum OutletTableStatus {
  Available = 0,
  Reserved = 1,
  Closed = 2,
}

export const outletTableStatusOptions = mapEnumToOptions(OutletTableStatus);
