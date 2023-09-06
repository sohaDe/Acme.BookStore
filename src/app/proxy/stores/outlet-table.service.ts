import type { CreateOutletTableDto, OutletTableDto, OutletTableRequestDto, OutletTableStoreDto, UpdateOutletTableDto } from './models';
import type { OutletTableStatus } from './outlet-table-status.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OutletTableService {
  apiName = 'Default';
  

  create = (input: CreateOutletTableDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletTableDto>({
      method: 'POST',
      url: '/api/app/outlet-table',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/outlet-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletTableDto>({
      method: 'GET',
      url: `/api/app/outlet-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: OutletTableRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OutletTableDto>>({
      method: 'GET',
      url: '/api/app/outlet-table',
      params: { status: input.status, outletId: input.outletId, outletSectionId: input.outletSectionId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOutletTableByIdById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletTableStoreDto>({
      method: 'GET',
      url: `/api/app/outlet-table/${id}/store`,
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: OutletTableStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/outlet-table/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateOutletTableDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletTableDto>({
      method: 'PUT',
      url: `/api/app/outlet-table/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
