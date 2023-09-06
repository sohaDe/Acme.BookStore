import type { ExtensibleEntityDto } from '@abp/ng.core';

export interface TenantDto extends ExtensibleEntityDto<string> {
  name?: string;
  concurrencyStamp?: string;
}
