import type { CreateModifierListDto, ModifierListDto, ModifierListFilter, ModifierListsRequestDto, UpdateItemModifierListsDto, UpdateModifierListDto, UpdateModifierListModifierDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModifierListService {
  apiName = 'Default';
  

  create = (input: CreateModifierListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModifierListDto>({
      method: 'POST',
      url: '/api/app/modifier-list',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/modifier-list/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModifierListDto>({
      method: 'GET',
      url: `/api/app/modifier-list/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (input?: ModifierListFilter, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ModifierListDto>>({
      method: 'GET',
      url: '/api/app/modifier-list/all',
      params: { required: input.required },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ModifierListsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ModifierListDto>>({
      method: 'GET',
      url: '/api/app/modifier-list',
      params: { search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListByItem = (itemId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModifierListDto[]>({
      method: 'GET',
      url: `/api/app/modifier-list/${itemId}/item-modifier-lists`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateModifierListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModifierListDto>({
      method: 'PUT',
      url: `/api/app/modifier-list/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateItemModifierLists = (input: UpdateItemModifierListsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/modifier-list/item-modifier-lists',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateModifiers = (input: UpdateModifierListModifierDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/modifier-list/modifiers',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
