import type { AddItemReviewReplyDto, ItemReviewListDto, ItemReviewListRequestDto, PublishItemReviewRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemReviewService {
  apiName = 'Default';
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/item-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemReviewListDto>({
      method: 'GET',
      url: `/api/app/item-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ItemReviewListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemReviewListDto>>({
      method: 'GET',
      url: '/api/app/item-review',
      params: { filter: input.filter, isPublished: input.isPublished, itemDetailId: input.itemDetailId, orderId: input.orderId, customerId: input.customerId, itemId: input.itemId, minRateFilter: input.minRateFilter, maxRateFilter: input.maxRateFilter, minDateFilter: input.minDateFilter, maxDateFilter: input.maxDateFilter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  publish = (input: PublishItemReviewRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/item-review/publish',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  reply = (input: AddItemReviewReplyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemReviewListDto>({
      method: 'POST',
      url: '/api/app/item-review/reply',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
