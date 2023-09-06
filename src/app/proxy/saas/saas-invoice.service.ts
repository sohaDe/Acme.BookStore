import type { ApplySaasCouponInvoiceDto, ApplySaasCouponResponseDto, CreateSaasInvoiceDto, SaasInvoiceDto, SaasInvoiceRequestDto, SubscriptionInvoiceDto, SubscriptionInvoiceRequestDto, UnpaidSaasInvoicesDto, UpdateSaasInvoiceDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaasInvoiceService {
  apiName = 'Default';
  

  create = (input: CreateSaasInvoiceDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasInvoiceDto>({
      method: 'POST',
      url: '/api/app/saas-invoice',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-invoice/${id}`,
    },
    { apiName: this.apiName,...config });
  

  fixNumbers = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-invoice/fix-numbers',
    },
    { apiName: this.apiName,...config });
  

  generateNextInvoice = (subscriptionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/saas-invoice/generate-next-invoice/${subscriptionId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasInvoiceDto>({
      method: 'GET',
      url: `/api/app/saas-invoice/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasInvoiceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasInvoiceDto>>({
      method: 'GET',
      url: '/api/app/saas-invoice',
      params: { tenantId: input.tenantId, storeId: input.storeId, subscriptionId: input.subscriptionId, editionId: input.editionId, couponId: input.couponId, paymentMethodId: input.paymentMethodId, currencyId: input.currencyId, startBillingDate: input.startBillingDate, endBillingDate: input.endBillingDate, minEditionPrice: input.minEditionPrice, maxEditionPrice: input.maxEditionPrice, isReturn: input.isReturn, expiryActionApplied: input.expiryActionApplied, referenceId: input.referenceId, status: input.status, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSubscriptionList = (input: SubscriptionInvoiceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SubscriptionInvoiceDto>>({
      method: 'GET',
      url: '/api/app/saas-invoice/subscription-list',
      params: { subscriptionId: input.subscriptionId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getUnpaidInvoices = (input: SubscriptionInvoiceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UnpaidSaasInvoicesDto>({
      method: 'GET',
      url: '/api/app/saas-invoice/unpaid-invoices',
      params: { subscriptionId: input.subscriptionId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateSaasInvoiceDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasInvoiceDto>({
      method: 'PUT',
      url: `/api/app/saas-invoice/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateCoupon = (input: ApplySaasCouponInvoiceDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApplySaasCouponResponseDto>({
      method: 'PUT',
      url: '/api/app/saas-invoice/coupon',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
