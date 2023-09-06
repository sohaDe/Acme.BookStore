import { mapEnumToOptions } from '@abp/ng.core';

export enum ReferenceType {
  Invoice = 0,
  Order = 10,
  TransferOrderIn = 11,
  TransferOrderOut = 12,
}

export const referenceTypeOptions = mapEnumToOptions(ReferenceType);
