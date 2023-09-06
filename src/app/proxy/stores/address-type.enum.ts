import { mapEnumToOptions } from '@abp/ng.core';

export enum AddressType {
  Manual = 0,
}

export const addressTypeOptions = mapEnumToOptions(AddressType);
