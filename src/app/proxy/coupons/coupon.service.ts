import type { CouponDto, CouponRequestDto, CouponStoreDto, CreateCouponDto, UpdateCouponDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  apiName = 'Default';
  

  checkEligibility = (code: string, subTotalPrice: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CouponStoreDto>({
      method: 'POST',
      url: `/api/app/coupon/${code}`,
      params: { subTotalPrice },
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateCouponDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CouponDto>({
      method: 'POST',
      url: '/api/app/coupon',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/coupon/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CouponDto>({
      method: 'GET',
      url: `/api/app/coupon/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CouponRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CouponDto>>({
      method: 'GET',
      url: '/api/app/coupon',
      params: { search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/coupon/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/coupon/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateCouponDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CouponDto>({
      method: 'PUT',
      url: `/api/app/coupon/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
