import type { AddItemToCartDto, CartDto, CartLoyaltyDto, CartRequestDto, CartResultDto, MarketplaceCartRequestDto, UpdateItemToCartDto, UpdateMarketplaceItemToCartDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CustomerCheckOutDto } from '../customers/models';
import type { DeliveryType } from '../stores/delivery-type.enum';
import type { CartStoreDto } from '../stores/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiName = 'Default';
  

  addItem = (itemDetailId: string, input: AddItemToCartDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartResultDto>({
      method: 'POST',
      url: `/api/app/cart/item/${itemDetailId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  addMarketplace = (itemDetailId: string, input: AddItemToCartDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartResultDto>({
      method: 'POST',
      url: `/api/app/cart/marketplace/add/${itemDetailId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deleteMarketplace = (input: MarketplaceCartRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/cart/marketplace/reset',
      params: { tenantId: input.tenantId, token: input.token },
    },
    { apiName: this.apiName,...config });
  

  deleteMarketplaceLine = (cartLineId: string, input: MarketplaceCartRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartResultDto>({
      method: 'DELETE',
      url: `/api/app/cart/marketplace/reset/${cartLineId}`,
      params: { tenantId: input.tenantId, token: input.token },
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartDto>({
      method: 'GET',
      url: `/api/app/cart/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCheckout = (deliveryType: DeliveryType, outletId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerCheckOutDto>({
      method: 'GET',
      url: `/api/app/cart/checkout/${outletId}`,
      params: { deliveryType },
    },
    { apiName: this.apiName,...config });
  

  getEstimatedEarnedPoints = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartLoyaltyDto>({
      method: 'GET',
      url: '/api/app/cart/estimated-earned-points',
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  getList = (input?: CartRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CartDto>>({
      method: 'GET',
      url: '/api/app/cart',
      params: { status: input.status, isUser: input.isUser, outletId: input.outletId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplace = (input: MarketplaceCartRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartStoreDto>({
      method: 'GET',
      url: '/api/app/cart/marketplace/my',
      params: { tenantId: input.tenantId, token: input.token },
    },
    { apiName: this.apiName,...config });
  

  getMy = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartStoreDto>({
      method: 'GET',
      url: '/api/app/cart/my',
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  getRedeemablePoints = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartLoyaltyDto>({
      method: 'GET',
      url: '/api/app/cart/redeemable-points',
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  remove = (id: string, token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartResultDto>({
      method: 'DELETE',
      url: `/api/app/cart/${id}`,
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  removeReset = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/cart/reset',
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateItemToCartDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartResultDto>({
      method: 'PUT',
      url: `/api/app/cart/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateMarketplace = (cartLineId: string, input: UpdateMarketplaceItemToCartDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CartResultDto>({
      method: 'PUT',
      url: `/api/app/cart/marketplace/update/${cartLineId}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
