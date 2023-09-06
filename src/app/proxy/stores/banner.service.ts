import type { BannerDto, BannerFilter, BannersRequestDto, CreateUpdateBannerDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  apiName = 'Default';
  

  create = (input: CreateUpdateBannerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BannerDto>({
      method: 'POST',
      url: '/api/app/banner',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/banner/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BannerDto>({
      method: 'GET',
      url: `/api/app/banner/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: BannerFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BannerDto>>({
      method: 'GET',
      url: '/api/app/banner/all',
      params: { disabled: input.disabled },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: BannersRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BannerDto>>({
      method: 'GET',
      url: '/api/app/banner',
      params: { disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/banner/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/banner/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateBannerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BannerDto>({
      method: 'PUT',
      url: `/api/app/banner/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
