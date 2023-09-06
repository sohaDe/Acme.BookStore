import type { CreateUpdatePackageDto, PackageDto, PackageRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePackageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PackageDto>({
      method: 'POST',
      url: '/api/app/package',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/package/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PackageDto>({
      method: 'GET',
      url: `/api/app/package/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PackageRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PackageDto>>({
      method: 'GET',
      url: '/api/app/package',
      params: { search: input.search, orderId: input.orderId, fromDate: input.fromDate, toDate: input.toDate, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePackageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PackageDto>({
      method: 'PUT',
      url: `/api/app/package/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
