import type { CheckSaasCouponEligibilityDto, CreateUpdateSaasCouponDto, SaasCouponDto, SaasCouponEligibilityResponseDto, SaasCouponRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaasCouponService {
  apiName = 'Default';
  

  checkEligibility = (input: CheckSaasCouponEligibilityDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasCouponEligibilityResponseDto>({
      method: 'POST',
      url: '/api/app/saas-coupon/check-eligibility',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdateSaasCouponDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasCouponDto>({
      method: 'POST',
      url: '/api/app/saas-coupon',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-coupon/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasCouponDto>({
      method: 'GET',
      url: `/api/app/saas-coupon/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasCouponRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasCouponDto>>({
      method: 'GET',
      url: '/api/app/saas-coupon',
      params: { productId: input.productId, currencyId: input.currencyId, countryId: input.countryId, search: input.search, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-coupon/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-coupon/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSaasCouponDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasCouponDto>({
      method: 'PUT',
      url: `/api/app/saas-coupon/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
