import type { CreateUpdateThemeComponentDependencyDto, ThemeComponentDependencyDto, ThemeComponentDependencyRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeComponentDependencyService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeComponentDependencyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentDependencyDto>({
      method: 'POST',
      url: '/api/app/theme-component-dependency',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme-component-dependency/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentDependencyDto>({
      method: 'GET',
      url: `/api/app/theme-component-dependency/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeComponentDependencyRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeComponentDependencyDto>>({
      method: 'GET',
      url: '/api/app/theme-component-dependency',
      params: { componentId: input.componentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeComponentDependencyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeComponentDependencyDto>({
      method: 'PUT',
      url: `/api/app/theme-component-dependency/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
