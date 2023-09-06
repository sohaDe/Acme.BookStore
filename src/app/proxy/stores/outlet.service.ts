import type { CreateOutletDto, OutletDto, OutletFilter, OutletOptionsDto, OutletStoreDto, UpdateOutletDto } from './models';
import type { OutletStatus } from './outlet-status.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OutletService {
  apiName = 'Default';
  

  create = (input: CreateOutletDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletDto>({
      method: 'POST',
      url: '/api/app/outlet',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/outlet/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletDto>({
      method: 'GET',
      url: `/api/app/outlet/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: OutletFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OutletDto>>({
      method: 'GET',
      url: '/api/app/outlet/all',
      params: { status: input.status },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OutletDto>>({
      method: 'GET',
      url: '/api/app/outlet',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplaceList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletStoreDto[]>({
      method: 'GET',
      url: '/api/app/outlet/marketplace-list',
    },
    { apiName: this.apiName,...config });
  

  getOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletOptionsDto>({
      method: 'GET',
      url: `/api/app/outlet/${id}/options`,
    },
    { apiName: this.apiName,...config });
  

  getStoreList = (input?: OutletFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletStoreDto[]>({
      method: 'GET',
      url: '/api/app/outlet/store-list',
      params: { status: input.status },
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: OutletStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/outlet/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  putDefault = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/outlet/${id}/default`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/outlet/disable',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/outlet/enable',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateOutletDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletDto>({
      method: 'PUT',
      url: `/api/app/outlet/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (options: OutletOptionsDto, id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OutletOptionsDto>({
      method: 'PUT',
      url: `/api/app/outlet/${id}/options`,
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
