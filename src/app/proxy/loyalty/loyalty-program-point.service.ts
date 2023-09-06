import type { BasicLoyaltyProgramPointsDto, CreateUpdateLoyaltyProgramPointsDto, LoyaltyProgramPointsDto, LoyaltyProgramPointsRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoyaltyProgramPointService {
  apiName = 'Default';
  

  create = (input: CreateUpdateLoyaltyProgramPointsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoyaltyProgramPointsDto>({
      method: 'POST',
      url: '/api/app/loyalty-program-point',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/loyalty-program-point/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoyaltyProgramPointsDto>({
      method: 'GET',
      url: `/api/app/loyalty-program-point/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCustomerPoints = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BasicLoyaltyProgramPointsDto>({
      method: 'GET',
      url: `/api/app/loyalty-program-point/${id}/customer-points`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: LoyaltyProgramPointsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LoyaltyProgramPointsDto>>({
      method: 'GET',
      url: '/api/app/loyalty-program-point',
      params: { customerId: input.customerId, referenceId: input.referenceId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMyPoints = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, BasicLoyaltyProgramPointsDto>({
      method: 'GET',
      url: '/api/app/loyalty-program-point/my-points',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateLoyaltyProgramPointsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoyaltyProgramPointsDto>({
      method: 'PUT',
      url: `/api/app/loyalty-program-point/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
