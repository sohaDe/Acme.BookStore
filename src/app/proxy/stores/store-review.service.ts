import type { AddStoreReviewReplyDto, PublishStoreReviewRequestDto, StoreReviewDto, StoreReviewListRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreReviewService {
  apiName = 'Default';
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/store-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreReviewDto>({
      method: 'GET',
      url: `/api/app/store-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: StoreReviewListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StoreReviewDto>>({
      method: 'GET',
      url: '/api/app/store-review',
      params: { isPublished: input.isPublished, replierId: input.replierId, filter: input.filter, minDateFilter: input.minDateFilter, maxDateFilter: input.maxDateFilter, type: input.type, orderId: input.orderId, customerId: input.customerId, questionId: input.questionId, minRateFilter: input.minRateFilter, maxRateFilter: input.maxRateFilter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  publish = (input: PublishStoreReviewRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/store-review/publish',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  reply = (input: AddStoreReviewReplyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreReviewDto>({
      method: 'POST',
      url: '/api/app/store-review/reply',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
