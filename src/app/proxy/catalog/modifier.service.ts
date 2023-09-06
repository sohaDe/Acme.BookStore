import type { CreateModifierDto, ModifierDto, ModifierFilter, ModifiersRequestDto, UpdateModifierDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModifierService {
  apiName = 'Default';
  

  create = (input: CreateModifierDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModifierDto>({
      method: 'POST',
      url: '/api/app/modifier',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/modifier/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModifierDto>({
      method: 'GET',
      url: `/api/app/modifier/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: ModifierFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ModifierDto>>({
      method: 'GET',
      url: '/api/app/modifier/all',
      params: { disabled: input.disabled, modifierListId: input.modifierListId },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ModifiersRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ModifierDto>>({
      method: 'GET',
      url: '/api/app/modifier',
      params: { search: input.search, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/modifier/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/modifier/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateModifierDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModifierDto>({
      method: 'PUT',
      url: `/api/app/modifier/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
