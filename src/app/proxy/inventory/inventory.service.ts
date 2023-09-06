import type { ItemStockQuantityHistoryDto, ItemStockQuantityHistorySummaryReportDto, ItemStockQuantityRequest, StockQuantityHistoryRequest, UpdateItemStockQuantityDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  apiName = 'Default';
  

  getItemStockQuantity = (input: ItemStockQuantityRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemStockQuantityHistorySummaryReportDto>({
      method: 'GET',
      url: '/api/app/inventory/item-stock-quantity',
      params: { itemId: input.itemId, warehouseId: input.warehouseId, categoryId: input.categoryId, disable: input.disable, fromDate: input.fromDate, toDate: input.toDate, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getStockQuantityHistory = (input: StockQuantityHistoryRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemStockQuantityHistoryDto>>({
      method: 'GET',
      url: '/api/app/inventory/stock-quantity-history',
      params: { itemId: input.itemId, warehouseId: input.warehouseId, reference: input.reference, fromDate: input.fromDate, toDate: input.toDate, actionType: input.actionType, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putManageStock = (input: UpdateItemStockQuantityDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/inventory/manage-stock',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateItemStockQuantity = (stockQuantity: UpdateItemStockQuantityDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/inventory/item-stock-quantity',
      body: stockQuantity,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
