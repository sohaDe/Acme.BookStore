import { mapEnumToOptions } from '@abp/ng.core';

export enum TaxAddOption {
  ApplyToNewOnly = 1,
}

export const taxAddOptionOptions = mapEnumToOptions(TaxAddOption);
