import type { CreateUpdateStoreTemplateDto, StoreTemplateDto, StoreTemplateFilter, StoreTemplateOptionsDto, StoreTemplateRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreTemplateService {
  apiName = 'Default';
  

  copy = (Id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreTemplateDto>({
      method: 'POST',
      url: `/api/app/store-template/copy/${Id}`,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdateStoreTemplateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreTemplateDto>({
      method: 'POST',
      url: '/api/app/store-template',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/store-template/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreTemplateDto>({
      method: 'GET',
      url: `/api/app/store-template/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: StoreTemplateFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StoreTemplateDto>>({
      method: 'GET',
      url: '/api/app/store-template/all',
      params: { type: input.type, parentId: input.parentId, disabled: input.disabled },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: StoreTemplateRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StoreTemplateDto>>({
      method: 'GET',
      url: '/api/app/store-template',
      params: { disabled: input.disabled, type: input.type, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreTemplateOptionsDto>({
      method: 'GET',
      url: `/api/app/store-template/${id}/options`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/store-template/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/store-template/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putReset = (Id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreTemplateDto>({
      method: 'PUT',
      url: `/api/app/store-template/reset/${Id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateStoreTemplateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreTemplateDto>({
      method: 'PUT',
      url: `/api/app/store-template/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (id: string, options: StoreTemplateOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreTemplateOptionsDto>({
      method: 'PUT',
      url: `/api/app/store-template/${id}/options`,
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
