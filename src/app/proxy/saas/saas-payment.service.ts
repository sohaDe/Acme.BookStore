import type { CreateSaasPaymentDto, OutstandingRequestDto, SaasPaymentDto, SaasPaymentRequestDto, UpdateSaasPaymentDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PaymentStatus } from '../payments/payment-status.enum';

@Injectable({
  providedIn: 'root',
})
export class SaasPaymentService {
  apiName = 'Default';
  

  create = (input: CreateSaasPaymentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaymentDto>({
      method: 'POST',
      url: '/api/app/saas-payment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createOutstanding = (input: OutstandingRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaymentDto>({
      method: 'POST',
      url: '/api/app/saas-payment/outstanding',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-payment/${id}`,
    },
    { apiName: this.apiName,...config });
  

  fixNumbers = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-payment/fix-numbers',
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaymentDto>({
      method: 'GET',
      url: `/api/app/saas-payment/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasPaymentRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasPaymentDto>>({
      method: 'GET',
      url: '/api/app/saas-payment',
      params: { search: input.search, tenantId: input.tenantId, storeId: input.storeId, subscriptionId: input.subscriptionId, paymentMethodId: input.paymentMethodId, fromDate: input.fromDate, toDate: input.toDate, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: PaymentStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-payment/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateSaasPaymentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaymentDto>({
      method: 'PUT',
      url: `/api/app/saas-payment/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
