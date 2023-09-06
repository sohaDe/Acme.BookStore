import type { BasicSaasProductDto, CreateUpdateSaasProductDto, SaasProductDto, SaasProductRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaasProductService {
  apiName = 'Default';
  

  create = (input: CreateUpdateSaasProductDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasProductDto>({
      method: 'POST',
      url: '/api/app/saas-product',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-product/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasProductDto>({
      method: 'GET',
      url: `/api/app/saas-product/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, BasicSaasProductDto[]>({
      method: 'GET',
      url: '/api/app/saas-product/all',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasProductRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasProductDto>>({
      method: 'GET',
      url: '/api/app/saas-product',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDefault = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-product/${id}/default`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSaasProductDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasProductDto>({
      method: 'PUT',
      url: `/api/app/saas-product/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
