import type { CreateUpdateCustomizedThemeMenuItemDto, CustomizedThemeMenuItemDto, CustomizedThemeMenuItemRequestDto, SimpleCustomizedThemeMenuItemDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomizedThemeMenuItemService {
  apiName = 'Default';
  

  getOptions = (input: CustomizedThemeMenuItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SimpleCustomizedThemeMenuItemDto>({
      method: 'GET',
      url: '/api/app/customized-theme-menu-item/options',
      params: { themeId: input.themeId, menuItemId: input.menuItemId },
    },
    { apiName: this.apiName,...config });
  

  patch = (input: CreateUpdateCustomizedThemeMenuItemDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomizedThemeMenuItemDto>({
      method: 'PATCH',
      url: '/api/app/customized-theme-menu-item',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
