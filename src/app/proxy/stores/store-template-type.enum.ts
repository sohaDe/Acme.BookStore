import { mapEnumToOptions } from '@abp/ng.core';

export enum StoreTemplateType {
  Web = 0,
  Mobile = 1,
}

export const storeTemplateTypeOptions = mapEnumToOptions(StoreTemplateType);
