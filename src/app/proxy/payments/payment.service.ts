import type { AdminPayment, CreateUpdatePaymentDto, PaymentDto, PaymentHistoryDto, PaymentHistoryRequestDto, PaymentRequestDto } from './models';
import type { PaymentStatus } from './payment-status.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePaymentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentDto>({
      method: 'POST',
      url: '/api/app/payment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payment/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentDto>({
      method: 'GET',
      url: `/api/app/payment/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getHistory = (input: PaymentHistoryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PaymentHistoryDto>>({
      method: 'GET',
      url: '/api/app/payment/history',
      params: { paymentId: input.paymentId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PaymentRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PaymentDto>>({
      method: 'GET',
      url: '/api/app/payment',
      params: { search: input.search, mode: input.mode, status: input.status, paymentMethodId: input.paymentMethodId, customerId: input.customerId, currencyId: input.currencyId, branchId: input.branchId, referenceId: input.referenceId, orderId: input.orderId, invoiceId: input.invoiceId, fromDate: input.fromDate, toDate: input.toDate, isReceived: input.isReceived, isMade: input.isMade, paymentCategoryIds: input.paymentCategoryIds, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSimpleList = (input: PaymentRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AdminPayment>>({
      method: 'GET',
      url: '/api/app/payment/simple-list',
      params: { search: input.search, mode: input.mode, status: input.status, paymentMethodId: input.paymentMethodId, customerId: input.customerId, currencyId: input.currencyId, branchId: input.branchId, referenceId: input.referenceId, orderId: input.orderId, invoiceId: input.invoiceId, fromDate: input.fromDate, toDate: input.toDate, isReceived: input.isReceived, isMade: input.isMade, paymentCategoryIds: input.paymentCategoryIds, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: PaymentStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/payment/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePaymentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentDto>({
      method: 'PUT',
      url: `/api/app/payment/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateStatusByProvider = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/payment/${id}/status-by-provider`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
