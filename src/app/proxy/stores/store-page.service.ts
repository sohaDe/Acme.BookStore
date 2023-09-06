import type { CreateUpdateStorePageDto, StoreFullPageStoreDto, StorePageDto, StorePageListDto, StorePageRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorePageService {
  apiName = 'Default';
  

  create = (input: CreateUpdateStorePageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StorePageDto>({
      method: 'POST',
      url: '/api/app/store-page',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/store-page/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StorePageDto>({
      method: 'GET',
      url: `/api/app/store-page/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: StorePageRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StorePageDto>>({
      method: 'GET',
      url: '/api/app/store-page',
      params: { search: input.search, type: input.type, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getStoreList = (input: StorePageRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StorePageListDto>>({
      method: 'GET',
      url: '/api/app/store-page/store-list',
      params: { search: input.search, type: input.type, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getStorePageBySlug = (slug: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreFullPageStoreDto>({
      method: 'GET',
      url: `/api/app/store-page/slug/${slug}`,
    },
    { apiName: this.apiName,...config });
  

  publish = (id: string, dateTime: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/store-page/${id}/publish`,
      params: { dateTime },
    },
    { apiName: this.apiName,...config });
  

  unpublish = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/store-page/${id}/unpublish`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateStorePageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StorePageDto>({
      method: 'PUT',
      url: `/api/app/store-page/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
