import type { CreateUpdateLoyaltyProgramDto, LoyaltyProgramDto, LoyaltyProgramStoreDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoyaltyProgramService {
  apiName = 'Default';
  

  configuration = (input: CreateUpdateLoyaltyProgramDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoyaltyProgramDto>({
      method: 'POST',
      url: '/api/app/loyalty-program/configuration',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoyaltyProgramDto>({
      method: 'GET',
      url: '/api/app/loyalty-program',
    },
    { apiName: this.apiName,...config });
  

  getStoreConfiguration = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoyaltyProgramStoreDto>({
      method: 'GET',
      url: '/api/app/loyalty-program/store-configuration',
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/loyalty-program/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/loyalty-program/${id}/enable`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
