import type { CreateUpdateThemeMenuItemDto, ThemeMenuItemDto, ThemeMenuItemRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeMenuItemService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeMenuItemDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeMenuItemDto>({
      method: 'POST',
      url: '/api/app/theme-menu-item',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme-menu-item/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeMenuItemDto>({
      method: 'GET',
      url: `/api/app/theme-menu-item/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeMenuItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeMenuItemDto>>({
      method: 'GET',
      url: '/api/app/theme-menu-item',
      params: { themeId: input.themeId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeMenuItemDto>({
      method: 'GET',
      url: `/api/app/theme-menu-item/${id}/options`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeMenuItemDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeMenuItemDto>({
      method: 'PUT',
      url: `/api/app/theme-menu-item/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
