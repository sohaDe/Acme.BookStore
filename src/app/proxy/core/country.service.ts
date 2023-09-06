import type { CountriesRequestDto, CountryDto, CountryFilter, CountryOptionsDto, CreateCountryDto, UpdateCountryDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  apiName = 'Default';
  

  create = (input: CreateCountryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CountryDto>({
      method: 'POST',
      url: '/api/app/country',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/country/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CountryDto>({
      method: 'GET',
      url: `/api/app/country/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: CountryFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CountryDto>>({
      method: 'GET',
      url: '/api/app/country/all',
      params: { disabled: input.disabled },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CountriesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CountryDto>>({
      method: 'GET',
      url: '/api/app/country',
      params: { disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CountryOptionsDto>({
      method: 'GET',
      url: `/api/app/country/${id}/options`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/country/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/country/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateCountryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CountryDto>({
      method: 'PUT',
      url: `/api/app/country/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (options: CountryOptionsDto, id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CountryOptionsDto>({
      method: 'PUT',
      url: `/api/app/country/${id}/options`,
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
