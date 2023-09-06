import type { CreateItemReviewDto, ItemReviewListRequestDto, ItemStoreReviewDto, ReviewOrderRequestDto, UpdateItemReviewDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemStoreReviewService {
  apiName = 'Default';
  

  create = (input: CreateItemReviewDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreReviewDto>({
      method: 'POST',
      url: '/api/app/item-store-review',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/item-store-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreReviewDto>({
      method: 'GET',
      url: `/api/app/item-store-review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ItemReviewListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemStoreReviewDto>>({
      method: 'GET',
      url: '/api/app/item-store-review',
      params: { filter: input.filter, isPublished: input.isPublished, itemDetailId: input.itemDetailId, orderId: input.orderId, customerId: input.customerId, itemId: input.itemId, minRateFilter: input.minRateFilter, maxRateFilter: input.maxRateFilter, minDateFilter: input.minDateFilter, maxDateFilter: input.maxDateFilter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  order = (input: ReviewOrderRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreReviewDto[]>({
      method: 'POST',
      url: '/api/app/item-store-review/order',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateItemReviewDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreReviewDto>({
      method: 'PUT',
      url: `/api/app/item-store-review/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
