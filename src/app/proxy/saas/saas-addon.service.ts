import type { CreateUpdateSaasAddonDto, SaasAddonDto, SaasAddonEditionPriceDto, SaasAddonEditionPriceRequestDto, SaasAddonRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaasAddonService {
  apiName = 'Default';
  

  create = (input: CreateUpdateSaasAddonDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasAddonDto>({
      method: 'POST',
      url: '/api/app/saas-addon',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-addon/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasAddonDto>({
      method: 'GET',
      url: `/api/app/saas-addon/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasAddonRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasAddonDto>>({
      method: 'GET',
      url: '/api/app/saas-addon',
      params: { productId: input.productId, editionId: input.editionId, search: input.search, intervalUnit: input.intervalUnit, interval: input.interval, currencyId: input.currencyId, countryId: input.countryId, disabled: input.disabled, fromPrice: input.fromPrice, toPrice: input.toPrice, isRecurring: input.isRecurring, allEditionsSelected: input.allEditionsSelected, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPrices = (input: SaasAddonEditionPriceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasAddonEditionPriceDto[]>({
      method: 'GET',
      url: '/api/app/saas-addon/prices',
      params: { editionId: input.editionId, currencyId: input.currencyId, quantity: input.quantity },
    },
    { apiName: this.apiName,...config });
  

  getStorePrices = (input: SaasAddonEditionPriceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasAddonEditionPriceDto[]>({
      method: 'GET',
      url: '/api/app/saas-addon/store-prices',
      params: { editionId: input.editionId, currencyId: input.currencyId, quantity: input.quantity },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-addon/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-addon/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSaasAddonDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasAddonDto>({
      method: 'PUT',
      url: `/api/app/saas-addon/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
