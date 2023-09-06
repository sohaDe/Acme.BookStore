import type { CreateUpdateCustomerGroupDto, CustomerGroupDto, CustomerGroupsRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerGroupService {
  apiName = 'Default';
  

  create = (input: CreateUpdateCustomerGroupDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerGroupDto>({
      method: 'POST',
      url: '/api/app/customer-group',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/customer-group/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerGroupDto>({
      method: 'GET',
      url: `/api/app/customer-group/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CustomerGroupsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CustomerGroupDto>>({
      method: 'GET',
      url: '/api/app/customer-group',
      params: { disabled: input.disabled, priceListId: input.priceListId, defaultOutletId: input.defaultOutletId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer-group/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer-group/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateCustomerGroupDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerGroupDto>({
      method: 'PUT',
      url: `/api/app/customer-group/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
