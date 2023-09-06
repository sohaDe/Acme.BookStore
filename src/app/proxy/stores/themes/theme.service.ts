import type { CreateUpdateThemeDto, ThemeDto, ThemeRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeDto>({
      method: 'POST',
      url: '/api/app/theme',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeDto>({
      method: 'GET',
      url: `/api/app/theme/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeDto>>({
      method: 'GET',
      url: '/api/app/theme',
      params: { type: input.type, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMenuItems = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeDto>({
      method: 'GET',
      url: `/api/app/theme/${id}/menu-items`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeDto>({
      method: 'PUT',
      url: `/api/app/theme/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
