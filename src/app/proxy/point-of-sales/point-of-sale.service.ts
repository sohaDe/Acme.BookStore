import type { CreateUpdatePointOfSaleDto, MyPointOfSaleDto, PointOfSaleDto, PointOfSaleOptionsDto, PointOfSaleRequestDto } from './models';
import type { PointOfSaleStatus } from './point-of-sale-status.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PointOfSaleService {
  apiName = 'Default';
  

  configPOS = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/point-of-sale/config-pOS',
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdatePointOfSaleDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PointOfSaleDto>({
      method: 'POST',
      url: '/api/app/point-of-sale',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/point-of-sale/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PointOfSaleDto>({
      method: 'GET',
      url: `/api/app/point-of-sale/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PointOfSaleRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PointOfSaleDto>>({
      method: 'GET',
      url: '/api/app/point-of-sale',
      params: { search: input.search, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMy = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MyPointOfSaleDto>({
      method: 'GET',
      url: '/api/app/point-of-sale/my',
    },
    { apiName: this.apiName,...config });
  

  getOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PointOfSaleOptionsDto>({
      method: 'GET',
      url: `/api/app/point-of-sale/${id}/options`,
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: PointOfSaleStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/point-of-sale/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  putClose = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/point-of-sale/${id}/close`,
    },
    { apiName: this.apiName,...config });
  

  putOpen = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/point-of-sale/${id}/open`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePointOfSaleDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PointOfSaleDto>({
      method: 'PUT',
      url: `/api/app/point-of-sale/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (options: PointOfSaleOptionsDto, id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PointOfSaleOptionsDto>({
      method: 'PUT',
      url: `/api/app/point-of-sale/${id}/options`,
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
