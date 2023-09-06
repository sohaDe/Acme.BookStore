import type { CreateUpdateThemeComponentSectionDto, ReorderThemeComponentSectionDto, ThemeComponentSectionDto, ThemeComponentSectionRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeComponentSectionService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeComponentSectionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentSectionDto>({
      method: 'POST',
      url: '/api/app/theme-component-section',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme-component-section/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentSectionDto>({
      method: 'GET',
      url: `/api/app/theme-component-section/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeComponentSectionRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeComponentSectionDto>>({
      method: 'GET',
      url: '/api/app/theme-component-section',
      params: { themeId: input.themeId, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-component-section/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-component-section/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putReorder = (input: ReorderThemeComponentSectionDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/theme-component-section/reorder',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeComponentSectionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentSectionDto>({
      method: 'PUT',
      url: `/api/app/theme-component-section/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
