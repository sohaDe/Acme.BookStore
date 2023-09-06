import type { AuditedEntityDto, CreationAuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { CurrencyDto } from '../core/models';
import type { ExchangeRateType } from './exchange-rate-type.enum';

export interface CreateUpdateExchangeRateDto {
  baseCurrencyId: string;
  targetCurrencyId: string;
  rate: number;
  note?: string;
}

export interface ExchangeRateDto extends AuditedEntityDto<string> {
  baseCurrencyId?: string;
  baseCurrency: CurrencyDto;
  targetCurrencyId?: string;
  targetCurrency: CurrencyDto;
  rate: number;
  disabled: boolean;
}

export interface ExchangeRateHistoryDto extends CreationAuditedEntityDto<string> {
  exchangeRateId?: string;
  exchangeRate: ExchangeRateDto;
  rate: number;
  type: ExchangeRateType;
  note?: string;
  userName?: string;
}

export interface ExchangeRateHistoryRequestDto extends PagedResultRequestDto {
  exchangeRateId: string;
}

export interface ExchangeRateRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
}

export interface UpdateBulkExchangeRateDto {
  baseCurrencyId?: string;
  exchangeRateList: UpdateBulkExchangeRateListDto[];
}

export interface UpdateBulkExchangeRateListDto {
  targetCurrencyId?: string;
  disabled: boolean;
  rate: number;
}
