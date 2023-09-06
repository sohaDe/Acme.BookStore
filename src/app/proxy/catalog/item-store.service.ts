import type { ItemMostOrderedMarketplaceRequest, ItemMostOrderedRequest, ItemSlugStoreRequestDtoV2, ItemStoreBySlug, ItemStoreList, ItemStoreMarketplaceList, ItemStoreMarketplaceRequestDto, ItemStoreRequestDtoV2, OldStorefrontItemList } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemStoreService {
  apiName = 'Default';
  

  getDetails = (id: string, input: ItemSlugStoreRequestDtoV2, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreBySlug>({
      method: 'GET',
      url: `/api/app/item-store/${id}/details`,
      params: { languagePosition: input.languagePosition, warehouseId: input.warehouseId, priceListId: input.priceListId, customerId: input.customerId, branchId: input.branchId, hideOutOfStock: input.hideOutOfStock, salesChannel: input.salesChannel, outletId: input.outletId },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ItemStoreRequestDtoV2, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemStoreList>>({
      method: 'GET',
      url: '/api/app/item-store',
      params: { branchId: input.branchId, warehouseId: input.warehouseId, search: input.search, barcode: input.barcode, categoryId: input.categoryId, brandId: input.brandId, priceListId: input.priceListId, salesChannel: input.salesChannel, customerId: input.customerId, hideOutOfStock: input.hideOutOfStock, languagePosition: input.languagePosition, fromPrice: input.fromPrice, toPrice: input.toPrice, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplace = (input: ItemStoreMarketplaceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemStoreMarketplaceList>>({
      method: 'GET',
      url: '/api/app/item-store/marketplace',
      params: { storesIds: input.storesIds, branchId: input.branchId, warehouseId: input.warehouseId, search: input.search, barcode: input.barcode, categoryId: input.categoryId, brandId: input.brandId, priceListId: input.priceListId, salesChannel: input.salesChannel, customerId: input.customerId, hideOutOfStock: input.hideOutOfStock, languagePosition: input.languagePosition, fromPrice: input.fromPrice, toPrice: input.toPrice, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplaceDetails = (id: string, tenantId: string, input: ItemSlugStoreRequestDtoV2, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreBySlug>({
      method: 'GET',
      url: `/api/app/item-store-details/${id}/marketplace/${tenantId}`,
      params: { languagePosition: input.languagePosition, warehouseId: input.warehouseId, priceListId: input.priceListId, customerId: input.customerId, branchId: input.branchId, hideOutOfStock: input.hideOutOfStock, salesChannel: input.salesChannel, outletId: input.outletId },
    },
    { apiName: this.apiName,...config });
  

  getMarketplaceMostOrdered = (input: ItemMostOrderedMarketplaceRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemStoreMarketplaceList>>({
      method: 'GET',
      url: '/api/app/item-store/marketplace-most-ordered',
      params: { storesIds: input.storesIds, outletId: input.outletId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplaceSlug = (slug: string, tenantId: string, input: ItemSlugStoreRequestDtoV2, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreBySlug>({
      method: 'GET',
      url: `/api/app/item-store/${slug}/marketplace/${tenantId}`,
      params: { languagePosition: input.languagePosition, warehouseId: input.warehouseId, priceListId: input.priceListId, customerId: input.customerId, branchId: input.branchId, hideOutOfStock: input.hideOutOfStock, salesChannel: input.salesChannel, outletId: input.outletId },
    },
    { apiName: this.apiName,...config });
  

  getMostOrdered = (input: ItemMostOrderedRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemStoreList>>({
      method: 'GET',
      url: '/api/app/item-store/most-ordered',
      params: { outletId: input.outletId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOldStorefront = (input: ItemStoreRequestDtoV2, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OldStorefrontItemList>>({
      method: 'GET',
      url: '/api/app/item/item-store',
      params: { branchId: input.branchId, warehouseId: input.warehouseId, search: input.search, barcode: input.barcode, categoryId: input.categoryId, brandId: input.brandId, priceListId: input.priceListId, salesChannel: input.salesChannel, customerId: input.customerId, hideOutOfStock: input.hideOutOfStock, languagePosition: input.languagePosition, fromPrice: input.fromPrice, toPrice: input.toPrice, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSlug = (slug: string, input: ItemSlugStoreRequestDtoV2, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStoreBySlug>({
      method: 'GET',
      url: `/api/app/item-store/${slug}`,
      params: { languagePosition: input.languagePosition, warehouseId: input.warehouseId, priceListId: input.priceListId, customerId: input.customerId, branchId: input.branchId, hideOutOfStock: input.hideOutOfStock, salesChannel: input.salesChannel, outletId: input.outletId },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
