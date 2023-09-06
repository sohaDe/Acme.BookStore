import type { CreateStoreReviewQuestionDto, ReorderQuestionListRequestDto, StoreReviewQuestionDto, StoreReviewQuestionListRequestDto, UpdateStoreReviewQuestionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreReviewQuestionService {
  apiName = 'Default';
  

  create = (input: CreateStoreReviewQuestionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreReviewQuestionDto>({
      method: 'POST',
      url: '/api/app/store-review-question',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/store-review-question/${id}`,
    },
    { apiName: this.apiName,...config });
  

  disable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/store-review-question/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  enable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/store-review-question/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreReviewQuestionDto>({
      method: 'GET',
      url: `/api/app/store-review-question/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: StoreReviewQuestionListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StoreReviewQuestionDto>>({
      method: 'GET',
      url: '/api/app/store-review-question',
      params: { filter: input.filter, minDateFilter: input.minDateFilter, maxDateFilter: input.maxDateFilter, disabled: input.disabled, type: input.type, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  reorder = (input: ReorderQuestionListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/store-review-question/reorder',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateStoreReviewQuestionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreReviewQuestionDto>({
      method: 'PUT',
      url: `/api/app/store-review-question/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
