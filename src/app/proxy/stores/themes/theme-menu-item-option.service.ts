import type { CreateUpdateThemeMenuItemOptionDto, ReorderThemeMenuItemOptionDto, ThemeMenuItemOptionDto, ThemeMenuItemOptionRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeMenuItemOptionService {
  apiName = 'Default';
  

  create = (input: CreateUpdateThemeMenuItemOptionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeMenuItemOptionDto>({
      method: 'POST',
      url: '/api/app/theme-menu-item-option',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/theme-menu-item-option/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeMenuItemOptionDto>({
      method: 'GET',
      url: `/api/app/theme-menu-item-option/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ThemeMenuItemOptionRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ThemeMenuItemOptionDto>>({
      method: 'GET',
      url: '/api/app/theme-menu-item-option',
      params: { menuItemId: input.menuItemId, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-menu-item-option/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/theme-menu-item-option/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putReorder = (input: ReorderThemeMenuItemOptionDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/theme-menu-item-option/reorder',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateThemeMenuItemOptionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ThemeMenuItemOptionDto>({
      method: 'PUT',
      url: `/api/app/theme-menu-item-option/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
