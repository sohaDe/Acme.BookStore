import type { AdminItem, AdminItemList, AdminMarketplaceItemList, CreateUpdateItemDto, CreateUpdateItemPriceListPricesDto, FiltersDto, ImportFromExcelRequestDto, ItemDto, ItemFilterRequestDto, ItemPriceHistoryDto, ItemPriceListDto, ItemPriceListRequestDto, ItemPriceListStoreDto, ItemPriceRequest, ItemsRequestDto, MarketplaceItemsRequestDto, SupplierItemRequestDto, SupplierItemResponseDto, UpdateItemPriceDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  apiName = 'Default';
  

  checkItemHasOrder = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/app/item/${id}/check-item-has-order`,
    },
    { apiName: this.apiName,...config });
  

  checkItemsCount = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/item/check-items-count',
    },
    { apiName: this.apiName,...config });
  

  checkSafeSlug = (slug: string, id?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: `/api/app/item/${id}/check-safe-slug`,
      params: { slug },
    },
    { apiName: this.apiName,...config });
  

  copy = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemDto>({
      method: 'POST',
      url: `/api/app/item/${id}/copy`,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdateItemDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemDto>({
      method: 'POST',
      url: '/api/app/item',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/item/${id}`,
    },
    { apiName: this.apiName,...config });
  

  enableBranchInAllItems = (branchId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/item/enable-branch-in-all-items/${branchId}`,
    },
    { apiName: this.apiName,...config });
  

  getCheckItemDetail = (sku: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'GET',
      url: '/api/app/item/check-item-detail',
      params: { sku },
    },
    { apiName: this.apiName,...config });
  

  getExport = (input: ImportFromExcelRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/app/item/export',
      params: { isTemplateOnly: input.isTemplateOnly, stockOnly: input.stockOnly, priceOnly: input.priceOnly, search: input.search, barcode: input.barcode, itemId: input.itemId, categoryId: input.categoryId, brandId: input.brandId, outletId: input.outletId, branchId: input.branchId, warehouseId: input.warehouseId, hasImages: input.hasImages, hasBarcode: input.hasBarcode, hasMaxOrderQuantity: input.hasMaxOrderQuantity, hasMinOrderQuantity: input.hasMinOrderQuantity, disabled: input.disabled, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, filtersArray: input.filtersArray, filters: input.filters, fromPrice: input.fromPrice, toPrice: input.toPrice, stockTracked: input.stockTracked, noFilterDetail: input.noFilterDetail, salesChannel: input.salesChannel, taxId: input.taxId, hasNoTax: input.hasNoTax, inventoryType: input.inventoryType, mainSupplierId: input.mainSupplierId, alternativeSupplierId: input.alternativeSupplierId, hideOutOfStock: input.hideOutOfStock, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getFiltersByInput = (input: ItemFilterRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FiltersDto>({
      method: 'GET',
      url: '/api/app/item/filters',
      params: { search: input.search, categoryId: input.categoryId, brandId: input.brandId, outletId: input.outletId, minItemPrice: input.minItemPrice, maxItemPrice: input.maxItemPrice },
    },
    { apiName: this.apiName,...config });
  

  getItemPriceHistory = (input: ItemPriceRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemPriceHistoryDto>>({
      method: 'GET',
      url: '/api/app/item/item-price-history',
      params: { itemId: input.itemId, warehouseId: input.warehouseId, fromDate: input.fromDate, toDate: input.toDate, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ItemsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemDto>>({
      method: 'GET',
      url: '/api/app/item',
      params: { search: input.search, barcode: input.barcode, itemId: input.itemId, categoryId: input.categoryId, brandId: input.brandId, outletId: input.outletId, branchId: input.branchId, warehouseId: input.warehouseId, hasImages: input.hasImages, hasBarcode: input.hasBarcode, hasMaxOrderQuantity: input.hasMaxOrderQuantity, hasMinOrderQuantity: input.hasMinOrderQuantity, disabled: input.disabled, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, filtersArray: input.filtersArray, filters: input.filters, fromPrice: input.fromPrice, toPrice: input.toPrice, stockTracked: input.stockTracked, noFilterDetail: input.noFilterDetail, salesChannel: input.salesChannel, taxId: input.taxId, hasNoTax: input.hasNoTax, inventoryType: input.inventoryType, mainSupplierId: input.mainSupplierId, alternativeSupplierId: input.alternativeSupplierId, hideOutOfStock: input.hideOutOfStock, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListV2 = (input: ItemsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AdminItemList>>({
      method: 'GET',
      url: '/api/app/item/v2',
      params: { search: input.search, barcode: input.barcode, itemId: input.itemId, categoryId: input.categoryId, brandId: input.brandId, outletId: input.outletId, branchId: input.branchId, warehouseId: input.warehouseId, hasImages: input.hasImages, hasBarcode: input.hasBarcode, hasMaxOrderQuantity: input.hasMaxOrderQuantity, hasMinOrderQuantity: input.hasMinOrderQuantity, disabled: input.disabled, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, filtersArray: input.filtersArray, filters: input.filters, fromPrice: input.fromPrice, toPrice: input.toPrice, stockTracked: input.stockTracked, noFilterDetail: input.noFilterDetail, salesChannel: input.salesChannel, taxId: input.taxId, hasNoTax: input.hasNoTax, inventoryType: input.inventoryType, mainSupplierId: input.mainSupplierId, alternativeSupplierId: input.alternativeSupplierId, hideOutOfStock: input.hideOutOfStock, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplace = (input: MarketplaceItemsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AdminMarketplaceItemList>>({
      method: 'GET',
      url: '/api/app/item/marketplace',
      params: { storesIds: input.storesIds, search: input.search, barcode: input.barcode, itemId: input.itemId, categoryId: input.categoryId, brandId: input.brandId, outletId: input.outletId, branchId: input.branchId, warehouseId: input.warehouseId, hasImages: input.hasImages, hasBarcode: input.hasBarcode, hasMaxOrderQuantity: input.hasMaxOrderQuantity, hasMinOrderQuantity: input.hasMinOrderQuantity, disabled: input.disabled, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, filtersArray: input.filtersArray, filters: input.filters, fromPrice: input.fromPrice, toPrice: input.toPrice, stockTracked: input.stockTracked, noFilterDetail: input.noFilterDetail, salesChannel: input.salesChannel, taxId: input.taxId, hasNoTax: input.hasNoTax, inventoryType: input.inventoryType, mainSupplierId: input.mainSupplierId, alternativeSupplierId: input.alternativeSupplierId, hideOutOfStock: input.hideOutOfStock, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPriceListPrices = (input: ItemPriceListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemPriceListDto[]>({
      method: 'GET',
      url: '/api/app/item/price-list-prices',
      params: { itemId: input.itemId, priceListId: input.priceListId },
    },
    { apiName: this.apiName,...config });
  

  getPriceListStorePrices = (itemId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemPriceListStoreDto[]>({
      method: 'GET',
      url: `/api/app/item/price-list-store-prices/${itemId}`,
    },
    { apiName: this.apiName,...config });
  

  getSupplierItemsStoreList = (input: SupplierItemRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SupplierItemResponseDto[]>({
      method: 'GET',
      url: '/api/app/item/supplier-items-store-list',
      params: { mainSupplierId: input.mainSupplierId, alternativeSupplierId: input.alternativeSupplierId, warehouseId: input.warehouseId, branchId: input.branchId, inventoryType: input.inventoryType },
    },
    { apiName: this.apiName,...config });
  

  getV2 = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminItem>({
      method: 'GET',
      url: `/api/app/item/${id}`,
    },
    { apiName: this.apiName,...config });
  

  newSku = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: '/api/app/item/new-sku',
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, branchId?: string, outletId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/item/${id}/disable`,
      params: { branchId, outletId },
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, branchId?: string, outletId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/item/${id}/enable`,
      params: { branchId, outletId },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateItemDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemDto>({
      method: 'PUT',
      url: `/api/app/item/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateBulkPrices = (input: UpdateItemPriceDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/item/bulk-prices',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updatePrice = (input: UpdateItemPriceDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/item/price',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updatePriceListPrices = (input: CreateUpdateItemPriceListPricesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/item/price-list-prices',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
