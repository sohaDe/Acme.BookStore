import type { CreateCurrencyDto, CurrenciesRequestDto, CurrencyDto, CurrencyFilter, UpdateCurrencyDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  apiName = 'Default';
  

  create = (input: CreateCurrencyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CurrencyDto>({
      method: 'POST',
      url: '/api/app/currency',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/currency/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CurrencyDto>({
      method: 'GET',
      url: `/api/app/currency/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: CurrencyFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CurrencyDto>>({
      method: 'GET',
      url: '/api/app/currency/all',
      params: { disabled: input.disabled },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CurrenciesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CurrencyDto>>({
      method: 'GET',
      url: '/api/app/currency',
      params: { disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/currency/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/currency/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateCurrencyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CurrencyDto>({
      method: 'PUT',
      url: `/api/app/currency/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
