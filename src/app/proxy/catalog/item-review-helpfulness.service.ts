import type { CreateItemReviewHelpfulnessDto, ItemReviewHelpfulnessDto, ItemReviewHelpfulnessListRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemReviewHelpfulnessService {
  apiName = 'Default';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemReviewHelpfulnessDto>({
      method: 'GET',
      url: `/api/app/item-review-helpfulness/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ItemReviewHelpfulnessListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemReviewHelpfulnessDto>>({
      method: 'GET',
      url: '/api/app/item-review-helpfulness',
      params: { itemReviewId: input.itemReviewId, customerId: input.customerId, wasHelpful: input.wasHelpful, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  put = (input: CreateItemReviewHelpfulnessDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemReviewHelpfulnessDto>({
      method: 'PUT',
      url: '/api/app/item-review-helpfulness',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
