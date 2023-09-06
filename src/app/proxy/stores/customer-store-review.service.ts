import type { CreateStoreReviewDto, CustomerStoreReviewDto, CustomerStoreReviewListRequestDto, UpdateStoreReviewDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerStoreReviewService {
  apiName = 'Default';
  

  create = (input: CreateStoreReviewDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerStoreReviewDto>({
      method: 'POST',
      url: '/api/app/customer-store-review',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/customer-store-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerStoreReviewDto>({
      method: 'GET',
      url: `/api/app/customer-store-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CustomerStoreReviewListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CustomerStoreReviewDto>>({
      method: 'GET',
      url: '/api/app/customer-store-review',
      params: { filter: input.filter, minDateFilter: input.minDateFilter, maxDateFilter: input.maxDateFilter, type: input.type, orderId: input.orderId, customerId: input.customerId, questionId: input.questionId, minRateFilter: input.minRateFilter, maxRateFilter: input.maxRateFilter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateStoreReviewDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerStoreReviewDto>({
      method: 'PUT',
      url: `/api/app/customer-store-review/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
