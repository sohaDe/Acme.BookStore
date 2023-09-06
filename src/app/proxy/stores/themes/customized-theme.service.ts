import type { StoreDesignDto, StoreDesignRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomizedThemeService {
  apiName = 'Default';
  

  apply = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/customized-theme/${id}/apply`,
    },
    { apiName: this.apiName,...config });
  

  copy = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/customized-theme/${id}/copy`,
    },
    { apiName: this.apiName,...config });
  

  getStoreDesign = (input: StoreDesignRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDesignDto>({
      method: 'GET',
      url: '/api/app/customized-theme/store-design',
      params: { themeId: input.themeId, pageId: input.pageId },
    },
    { apiName: this.apiName,...config });
  

  reset = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/customized-theme/${id}/reset`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
