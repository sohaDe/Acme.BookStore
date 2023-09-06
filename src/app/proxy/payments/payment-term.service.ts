import type { CreateUpdatePaymentTermDto, PaymentTermDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentTermService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePaymentTermDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentTermDto>({
      method: 'POST',
      url: '/api/app/payment-term',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payment-term/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentTermDto>({
      method: 'GET',
      url: `/api/app/payment-term/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PaymentTermDto>>({
      method: 'GET',
      url: '/api/app/payment-term',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePaymentTermDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentTermDto>({
      method: 'PUT',
      url: `/api/app/payment-term/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
