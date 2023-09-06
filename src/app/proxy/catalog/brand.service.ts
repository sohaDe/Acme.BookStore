import type { BrandDto, BrandFilter, BrandsRequestDto, CreateUpdateBrandDto, ReorderBrandDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiName = 'Default';
  

  checkSafeSlug = (slug: string, id?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: `/api/app/brand/${id}/check-safe-slug`,
      params: { slug },
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdateBrandDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BrandDto>({
      method: 'POST',
      url: '/api/app/brand',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/brand/${id}`,
    },
    { apiName: this.apiName,...config });
  

  enableBranchInAllBrands = (branchId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/brand/enable-branch-in-all-brands/${branchId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BrandDto>({
      method: 'GET',
      url: `/api/app/brand/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: BrandFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BrandDto>>({
      method: 'GET',
      url: '/api/app/brand/all',
      params: { sorting: input.sorting, disabled: input.disabled, outletId: input.outletId, branchId: input.branchId, ids: input.ids },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: BrandsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BrandDto>>({
      method: 'GET',
      url: '/api/app/brand',
      params: { disabled: input.disabled, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, branchId?: string, outletId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/brand/${id}/disable`,
      params: { branchId, outletId },
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, branchId?: string, outletId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/brand/${id}/enable`,
      params: { branchId, outletId },
    },
    { apiName: this.apiName,...config });
  

  putReorderBrandByInput = (input: ReorderBrandDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/brand/reorder-brand',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateBrandDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BrandDto>({
      method: 'PUT',
      url: `/api/app/brand/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
