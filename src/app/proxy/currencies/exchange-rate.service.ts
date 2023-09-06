import type { CreateUpdateExchangeRateDto, ExchangeRateDto, ExchangeRateHistoryDto, ExchangeRateHistoryRequestDto, ExchangeRateRequestDto, UpdateBulkExchangeRateDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  apiName = 'Default';
  

  create = (input: CreateUpdateExchangeRateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExchangeRateDto>({
      method: 'POST',
      url: '/api/app/exchange-rate',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/exchange-rate/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExchangeRateDto>({
      method: 'GET',
      url: `/api/app/exchange-rate/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getHistory = (input: ExchangeRateHistoryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ExchangeRateHistoryDto>>({
      method: 'GET',
      url: '/api/app/exchange-rate/history',
      params: { exchangeRateId: input.exchangeRateId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ExchangeRateRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ExchangeRateDto>>({
      method: 'GET',
      url: '/api/app/exchange-rate',
      params: { disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putBulk = (input: UpdateBulkExchangeRateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/exchange-rate/bulk',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/exchange-rate/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/exchange-rate/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateExchangeRateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExchangeRateDto>({
      method: 'PUT',
      url: `/api/app/exchange-rate/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
