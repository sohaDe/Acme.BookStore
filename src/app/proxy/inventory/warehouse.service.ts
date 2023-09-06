import type { CreateUpdateWarehouseDto, WarehouseDto, WarehouseFilter, WarehousesRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  apiName = 'Default';
  

  create = (input: CreateUpdateWarehouseDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WarehouseDto>({
      method: 'POST',
      url: '/api/app/warehouse',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/warehouse/${id}`,
    },
    { apiName: this.apiName,...config });
  

  enableBranchInAllWarehouses = (branchId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/warehouse/enable-branch-in-all-warehouses/${branchId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WarehouseDto>({
      method: 'GET',
      url: `/api/app/warehouse/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: WarehouseFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WarehouseDto[]>({
      method: 'GET',
      url: '/api/app/warehouse/all',
      params: { disabled: input.disabled },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: WarehousesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<WarehouseDto>>({
      method: 'GET',
      url: '/api/app/warehouse',
      params: { disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListWarehousesToBranch = (branchId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<WarehouseDto>>({
      method: 'GET',
      url: `/api/app/warehouse/warehouses-to-branch/${branchId}`,
    },
    { apiName: this.apiName,...config });
  

  putDefault = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/warehouse/${id}/default`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/warehouse/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/warehouse/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateWarehouseDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WarehouseDto>({
      method: 'PUT',
      url: `/api/app/warehouse/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
