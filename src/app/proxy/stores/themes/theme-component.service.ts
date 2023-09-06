import type { CreateUpdateThemeComponentDto, ReorderThemeComponentDto, SimpleThemeComponentDto, ThemeComponentDto, ThemeComponentRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeComponentService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeComponentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentDto>({
      method: 'POST',
      url: '/api/app/theme-component',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme-component/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentDto>({
      method: 'GET',
      url: `/api/app/theme-component/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getComponents = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SimpleThemeComponentDto>({
      method: 'GET',
      url: `/api/app/theme-component/${id}/properties`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeComponentRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeComponentDto>>({
      method: 'GET',
      url: '/api/app/theme-component',
      params: { themeId: input.themeId, categoryId: input.categoryId, menuItemId: input.menuItemId, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-component/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-component/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putReorder = (input: ReorderThemeComponentDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/theme-component/reorder',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeComponentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentDto>({
      method: 'PUT',
      url: `/api/app/theme-component/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
