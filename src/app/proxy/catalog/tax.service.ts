import type { CreateUpdateTaxDto, TaxDto, TaxFilter, TaxRequestDto, TaxStoreRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { TaxStoreDto } from '../stores/models';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  apiName = 'Default';
  

  create = (input: CreateUpdateTaxDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TaxDto>({
      method: 'POST',
      url: '/api/app/tax',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/tax/${id}`,
    },
    { apiName: this.apiName,...config });
  

  enableBranchInAllTaxes = (branchId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/tax/enable-branch-in-all-taxes/${branchId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TaxDto>({
      method: 'GET',
      url: `/api/app/tax/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: TaxFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TaxDto>>({
      method: 'GET',
      url: '/api/app/tax/all',
      params: { disabled: input.disabled, branchId: input.branchId },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: TaxRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TaxDto>>({
      method: 'GET',
      url: '/api/app/tax',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getStoreList = (input: TaxStoreRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TaxStoreDto[]>({
      method: 'GET',
      url: '/api/app/tax/store-list',
      params: { branchId: input.branchId },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/tax/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/tax/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateTaxDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TaxDto>({
      method: 'PUT',
      url: `/api/app/tax/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
