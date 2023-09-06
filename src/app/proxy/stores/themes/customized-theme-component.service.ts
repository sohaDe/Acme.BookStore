import type { CreateCustomizedThemeComponentDto, CustomizedThemeComponentDto, CustomizedThemeComponentPageDto, CustomizedThemeComponentPageRequestDto, MarketplaceRelatedStoresFeaturesDto, MarketplaceRelatedStoresFeaturesRequestDto, ReorderCustomizedThemeComponentDto, SimpleCustomizedThemeComponentDto, UpdateCustomizedThemeComponentDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomizedThemeComponentService {
  apiName = 'Default';
  

  create = (input: CreateCustomizedThemeComponentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomizedThemeComponentDto>({
      method: 'POST',
      url: '/api/app/customized-theme-component',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/customized-theme-component/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SimpleCustomizedThemeComponentDto>({
      method: 'GET',
      url: `/api/app/customized-theme-component/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getMarketplaceRelatedStoresFeatures = (input: MarketplaceRelatedStoresFeaturesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MarketplaceRelatedStoresFeaturesDto>({
      method: 'GET',
      url: '/api/app/customized-theme-component/marketplace-related-stores-features',
      params: { tenantId: input.tenantId, themeComponentCode: input.themeComponentCode },
    },
    { apiName: this.apiName,...config });
  

  getPage = (pageId: string, input: CustomizedThemeComponentPageRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomizedThemeComponentPageDto[]>({
      method: 'GET',
      url: `/api/app/customized-theme-component/get-page/${pageId}`,
      params: { themeId: input.themeId },
    },
    { apiName: this.apiName,...config });
  

  putReorder = (pageId: string, input: ReorderCustomizedThemeComponentDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customized-theme-component/${pageId}/reorder`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (input: UpdateCustomizedThemeComponentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomizedThemeComponentDto>({
      method: 'PUT',
      url: '/api/app/customized-theme-component',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
