import type { CreateCustomerFavoriteItemDto, CustomerFavoriteItemDto, CustomerFavoriteItemRequestDto, MarketplaceCustomerFavoriteItemDto, MarketplaceCustomerFavoriteItemRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerFavoriteItemService {
  apiName = 'Default';
  

  checkExist = (itemId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/app/customer-favorite-item/check-exist/${itemId}`,
    },
    { apiName: this.apiName,...config });
  

  checkExistMarketplace = (input: MarketplaceCustomerFavoriteItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/customer-favorite-item/marketplace/check-exist',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateCustomerFavoriteItemDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerFavoriteItemDto>({
      method: 'POST',
      url: '/api/app/customer-favorite-item',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createMarketplace = (input: MarketplaceCustomerFavoriteItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerFavoriteItemDto>({
      method: 'POST',
      url: '/api/app/customer-favorite-item/marketplace',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (itemId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/customer-favorite-item',
      params: { itemId },
    },
    { apiName: this.apiName,...config });
  

  deleteMarketplace = (input: MarketplaceCustomerFavoriteItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/customer-favorite-item/marketplace',
      params: { tenantId: input.tenantId, itemId: input.itemId },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CustomerFavoriteItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CustomerFavoriteItemDto>>({
      method: 'GET',
      url: '/api/app/customer-favorite-item',
      params: { outletId: input.outletId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplace = (input: CustomerFavoriteItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MarketplaceCustomerFavoriteItemDto>>({
      method: 'GET',
      url: '/api/app/customer-favorite-item/marketplace',
      params: { outletId: input.outletId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
