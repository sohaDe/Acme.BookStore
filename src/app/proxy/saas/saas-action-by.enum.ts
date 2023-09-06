import { mapEnumToOptions } from '@abp/ng.core';

export enum SaasActionBy {
  TenantUser = 0,
  HostUser = 1,
  System = 2,
}

export const saasActionByOptions = mapEnumToOptions(SaasActionBy);
