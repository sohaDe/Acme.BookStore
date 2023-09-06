import type { CreateUpdateCustomerBusinessTypeDto, CustomerBusinessTypeDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerBusinessTypeService {
  apiName = 'Default';
  

  create = (input: CreateUpdateCustomerBusinessTypeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerBusinessTypeDto>({
      method: 'POST',
      url: '/api/app/customer-business-type',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/customer-business-type/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerBusinessTypeDto>({
      method: 'GET',
      url: `/api/app/customer-business-type/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CustomerBusinessTypeDto>>({
      method: 'GET',
      url: '/api/app/customer-business-type',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer-business-type/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer-business-type/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateCustomerBusinessTypeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerBusinessTypeDto>({
      method: 'PUT',
      url: `/api/app/customer-business-type/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
