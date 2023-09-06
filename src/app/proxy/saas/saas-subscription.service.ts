import type { ApplySaasCouponDto, ApplySaasCouponResponseDto, CreateSaasSubscriptionDto, SaasCartDto, SaasCartRequestDto, SaasOrderDto, SaasSubscriptionChangeStatusDto, SaasSubscriptionDto, SaasSubscriptionHistoryDto, SaasSubscriptionHistoryRequestDto, SaasSubscriptionRequestDto, SubscribeRequestDto, UpdateSaasSubscriptionBillingPeriodDto, UpdateSaasSubscriptionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaasSubscriptionService {
  apiName = 'Default';
  

  applyCoupon = (input: ApplySaasCouponDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApplySaasCouponResponseDto>({
      method: 'POST',
      url: '/api/app/saas-subscription/apply-coupon',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  cancelAllPendingOrdersAndPayments = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-subscription/cancel-all-pending-orders-and-payments',
    },
    { apiName: this.apiName,...config });
  

  convertSubscriptionsToDunning = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-subscription/convert-subscriptions-to-dunning',
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateSaasSubscriptionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasSubscriptionDto>({
      method: 'POST',
      url: '/api/app/saas-subscription',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createCart = (input: SaasCartRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasCartDto>({
      method: 'POST',
      url: '/api/app/saas-subscription/cart',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createStoreCart = (storeId: string, input: SaasCartRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasCartDto>({
      method: 'POST',
      url: `/api/app/saas-subscription/store-cart/${storeId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-subscription/${id}`,
    },
    { apiName: this.apiName,...config });
  

  doActionsWhenEndTrialOfSubscriptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-subscription/do-actions-when-end-trial-of-subscriptions',
    },
    { apiName: this.apiName,...config });
  

  doExpiryAction = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-subscription/do-expiry-action',
    },
    { apiName: this.apiName,...config });
  

  fixNumbers = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-subscription/fix-numbers',
    },
    { apiName: this.apiName,...config });
  

  generateInvoiceForNextBillingCycle = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-subscription/generate-invoice-for-next-billing-cycle',
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasSubscriptionDto>({
      method: 'GET',
      url: `/api/app/saas-subscription/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getHistory = (input: SaasSubscriptionHistoryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasSubscriptionHistoryDto>>({
      method: 'GET',
      url: '/api/app/saas-subscription/history',
      params: { subscriptionId: input.subscriptionId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasSubscriptionRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasSubscriptionDto>>({
      method: 'GET',
      url: '/api/app/saas-subscription',
      params: { productId: input.productId, tenantId: input.tenantId, storeId: input.storeId, editionId: input.editionId, couponId: input.couponId, currencyId: input.currencyId, status: input.status, startDate: input.startDate, endDate: input.endDate, startBillingDate: input.startBillingDate, endBillingDate: input.endBillingDate, minEditionPrice: input.minEditionPrice, maxEditionPrice: input.maxEditionPrice, isEditionFreeOnly: input.isEditionFreeOnly, isEditionPaidOnly: input.isEditionPaidOnly, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMy = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasSubscriptionDto>({
      method: 'GET',
      url: '/api/app/saas-subscription/my',
    },
    { apiName: this.apiName,...config });
  

  hideEndTrialAlert = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/saas-subscription/${id}/hide-end-trial-alert`,
    },
    { apiName: this.apiName,...config });
  

  hideExpiringAlert = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/saas-subscription/${id}/hide-expiring-alert`,
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (input: SaasSubscriptionChangeStatusDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/saas-subscription/change-status',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  resetTenantFeatures = (tenantId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/saas-subscription/reset-tenant-features/${tenantId}`,
    },
    { apiName: this.apiName,...config });
  

  shiftBillingCycleAfterInvoiceIssued = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-subscription/shift-billing-cycle-after-invoice-issued',
    },
    { apiName: this.apiName,...config });
  

  subscribe = (input: SubscribeRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasOrderDto>({
      method: 'POST',
      url: '/api/app/saas-subscription/subscribe',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  tryTrial = (editionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/saas-subscription/try-trial/${editionId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateSaasSubscriptionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasSubscriptionDto>({
      method: 'PUT',
      url: `/api/app/saas-subscription/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateBillingPeriod = (input: UpdateSaasSubscriptionBillingPeriodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasSubscriptionDto>({
      method: 'PUT',
      url: '/api/app/saas-subscription/billing-period',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateCoupon = (input: ApplySaasCouponDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApplySaasCouponResponseDto>({
      method: 'PUT',
      url: '/api/app/saas-subscription/coupon',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
