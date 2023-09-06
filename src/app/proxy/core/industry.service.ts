import type { AddEditIndustryTranslationDto, CreateUpdateIndustryDto, IndustriesRequestDto, IndustryDto, IndustryFilter, IndustryTranslationDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { StoreOptionsDto } from '../stores/models';

@Injectable({
  providedIn: 'root',
})
export class IndustryService {
  apiName = 'Default';
  

  create = (input: CreateUpdateIndustryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IndustryDto>({
      method: 'POST',
      url: '/api/app/industry',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/industry/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteTranslation = (id: string, language: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/industry/${id}/translation`,
      params: { language },
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IndustryDto>({
      method: 'GET',
      url: `/api/app/industry/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: IndustryFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<IndustryDto>>({
      method: 'GET',
      url: '/api/app/industry/all',
      params: { parentId: input.parentId, disabled: input.disabled },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: IndustriesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<IndustryDto>>({
      method: 'GET',
      url: '/api/app/industry',
      params: { parentId: input.parentId, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getStoreOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreOptionsDto>({
      method: 'GET',
      url: `/api/app/industry/${id}/store-options`,
    },
    { apiName: this.apiName,...config });
  

  getTranslations = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IndustryTranslationDto[]>({
      method: 'GET',
      url: `/api/app/industry/${id}/translations`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/industry/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/industry/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putTranslations = (id: string, input: AddEditIndustryTranslationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/industry/${id}/translations`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateIndustryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IndustryDto>({
      method: 'PUT',
      url: `/api/app/industry/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateStoreOptions = (options: StoreOptionsDto, industryId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreOptionsDto>({
      method: 'PUT',
      url: `/api/app/industry/store-options/${industryId}`,
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
