import type { CreateUpdateThemeComponentCategoryDto, ReorderThemeComponentCategoryDto, SimpleThemeComponentCategoryDto, ThemeComponentCategoryDto, ThemeComponentCategoryFilter, ThemeComponentCategoryRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeComponentCategoryService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeComponentCategoryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentCategoryDto>({
      method: 'POST',
      url: '/api/app/theme-component-category',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme-component-category/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentCategoryDto>({
      method: 'GET',
      url: `/api/app/theme-component-category/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getComponents = (input: ThemeComponentCategoryFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SimpleThemeComponentCategoryDto[]>({
      method: 'GET',
      url: '/api/app/theme-component-category/components',
      params: { themeId: input.themeId, pageId: input.pageId },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeComponentCategoryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeComponentCategoryDto>>({
      method: 'GET',
      url: '/api/app/theme-component-category',
      params: { themeId: input.themeId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putReorder = (input: ReorderThemeComponentCategoryDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/theme-component-category/reorder',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeComponentCategoryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentCategoryDto>({
      method: 'PUT',
      url: `/api/app/theme-component-category/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
