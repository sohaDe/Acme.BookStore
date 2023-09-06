import type { CreateOutletSectionDto, OutletSectionDto, OutletSectionRequestDto, OutletSectionStoreDto, UpdateOutletSectionDto } from './models';
import type { OutletSectionStatus } from './outlet-section-status.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OutletSectionService {
  apiName = 'Default';
  

  create = (input: CreateOutletSectionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletSectionDto>({
      method: 'POST',
      url: '/api/app/outlet-section',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/outlet-section/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletSectionDto>({
      method: 'GET',
      url: `/api/app/outlet-section/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: OutletSectionRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OutletSectionStoreDto>>({
      method: 'GET',
      url: '/api/app/outlet-section/all',
      params: { outletId: input.outletId, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: OutletSectionRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OutletSectionDto>>({
      method: 'GET',
      url: '/api/app/outlet-section',
      params: { outletId: input.outletId, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: OutletSectionStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/outlet-section/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateOutletSectionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletSectionDto>({
      method: 'PUT',
      url: `/api/app/outlet-section/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
