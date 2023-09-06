import type { CreateUpdateThemeComponentPropertyDto, ReorderThemeComponentPropertyDto, ThemeComponentPropertyDto, ThemeComponentPropertyRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeComponentPropertyService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeComponentPropertyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentPropertyDto>({
      method: 'POST',
      url: '/api/app/theme-component-property',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme-component-property/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentPropertyDto>({
      method: 'GET',
      url: `/api/app/theme-component-property/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeComponentPropertyRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeComponentPropertyDto>>({
      method: 'GET',
      url: '/api/app/theme-component-property',
      params: { componentId: input.componentId, sectionId: input.sectionId, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-component-property/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-component-property/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putReorder = (input: ReorderThemeComponentPropertyDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/theme-component-property/reorder',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeComponentPropertyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentPropertyDto>({
      method: 'PUT',
      url: `/api/app/theme-component-property/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
