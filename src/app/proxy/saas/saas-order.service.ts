import type { ApplySaasCouponOrderDto, ApplySaasCouponResponseDto, CreateSaasOrderDto, SaasOrderDto, SaasOrderRequestDto, UpdateSaasOrderDto } from './models';
import type { SaasOrderStatus } from './saas-order-status.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaasOrderService {
  apiName = 'Default';
  

  create = (input: CreateSaasOrderDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasOrderDto>({
      method: 'POST',
      url: '/api/app/saas-order',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-order/${id}`,
    },
    { apiName: this.apiName,...config });
  

  fixNumbers = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/saas-order/fix-numbers',
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasOrderDto>({
      method: 'GET',
      url: `/api/app/saas-order/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasOrderRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasOrderDto>>({
      method: 'GET',
      url: '/api/app/saas-order',
      params: { tenantId: input.tenantId, storeId: input.storeId, subscriptionId: input.subscriptionId, editionId: input.editionId, couponId: input.couponId, paymentMethodId: input.paymentMethodId, currencyId: input.currencyId, status: input.status, type: input.type, startBillingDate: input.startBillingDate, endBillingDate: input.endBillingDate, minEditionPrice: input.minEditionPrice, maxEditionPrice: input.maxEditionPrice, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: SaasOrderStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-order/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateSaasOrderDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasOrderDto>({
      method: 'PUT',
      url: `/api/app/saas-order/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateCoupon = (input: ApplySaasCouponOrderDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApplySaasCouponResponseDto>({
      method: 'PUT',
      url: '/api/app/saas-order/coupon',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
