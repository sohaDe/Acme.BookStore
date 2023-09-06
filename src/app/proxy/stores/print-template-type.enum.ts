import { mapEnumToOptions } from '@abp/ng.core';

export enum PrintTemplateType {
  Invoice = 0,
  Receipt = 1,
}

export const printTemplateTypeOptions = mapEnumToOptions(PrintTemplateType);
