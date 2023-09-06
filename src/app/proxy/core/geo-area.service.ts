import type { CreateUpdateGeoAreaDto, GeoAreaDto, GeoAreasRequestDto, ReorderGeoAreaDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeoAreaService {
  apiName = 'Default';
  

  create = (input: CreateUpdateGeoAreaDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GeoAreaDto>({
      method: 'POST',
      url: '/api/app/geo-area',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/geo-area/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GeoAreaDto>({
      method: 'GET',
      url: `/api/app/geo-area/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GeoAreasRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<GeoAreaDto>>({
      method: 'GET',
      url: '/api/app/geo-area',
      params: { parentId: input.parentId, disabled: input.disabled, countryId: input.countryId, type: input.type, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/geo-area/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/geo-area/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putReorderGeoAreaByInput = (input: ReorderGeoAreaDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/geo-area/reorder-geo-area',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateGeoAreaDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GeoAreaDto>({
      method: 'PUT',
      url: `/api/app/geo-area/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
