import type { CreateUpdatePaymentCategoryDto, PaymentCategoryDto, PaymentCategoryRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentCategoryService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePaymentCategoryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentCategoryDto>({
      method: 'POST',
      url: '/api/app/payment-category',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payment-category/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentCategoryDto>({
      method: 'GET',
      url: `/api/app/payment-category/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PaymentCategoryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PaymentCategoryDto>>({
      method: 'GET',
      url: '/api/app/payment-category',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePaymentCategoryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentCategoryDto>({
      method: 'PUT',
      url: `/api/app/payment-category/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
