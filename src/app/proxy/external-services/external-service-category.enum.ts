import { mapEnumToOptions } from '@abp/ng.core';

export enum ExternalServiceCategory {
  Marketing = 0,
  Statistical = 1,
  Chat = 2,
}

export const externalServiceCategoryOptions = mapEnumToOptions(ExternalServiceCategory);
