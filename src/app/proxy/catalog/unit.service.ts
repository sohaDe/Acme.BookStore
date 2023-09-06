import type { CreateUnitDto, UnitDto, UnitFilter, UnitsRequestDto, UpdateUnitDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  apiName = 'Default';
  

  create = (input: CreateUnitDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UnitDto>({
      method: 'POST',
      url: '/api/app/unit',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/unit/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UnitDto>({
      method: 'GET',
      url: `/api/app/unit/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: UnitFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UnitDto>>({
      method: 'GET',
      url: '/api/app/unit/all',
      params: { disabled: input.disabled },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: UnitsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UnitDto>>({
      method: 'GET',
      url: '/api/app/unit',
      params: { disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/unit/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/unit/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateUnitDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UnitDto>({
      method: 'PUT',
      url: `/api/app/unit/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
