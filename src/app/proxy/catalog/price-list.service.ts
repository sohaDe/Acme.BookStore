import type { CreateUpdatePriceListDto, ItemPriceListExcelRequestDto, ItemPriceListReportDto, ItemPriceListRequestReportDto, PriceListDto, PriceListRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class PriceListService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePriceListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PriceListDto>({
      method: 'POST',
      url: '/api/app/price-list',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/price-list/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PriceListDto>({
      method: 'GET',
      url: `/api/app/price-list/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getExport = (input: ItemPriceListExcelRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/app/price-list/export',
      params: { isTemplateOnly: input.isTemplateOnly, priceListId: input.priceListId, warehouseId: input.warehouseId, itemDetailId: input.itemDetailId },
    },
    { apiName: this.apiName,...config });
  

  getItemPrices = (input: ItemPriceListRequestReportDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemPriceListReportDto>>({
      method: 'GET',
      url: '/api/app/price-list/item-prices',
      params: { priceListId: input.priceListId, itemDetailId: input.itemDetailId, warehouseId: input.warehouseId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PriceListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PriceListDto>>({
      method: 'GET',
      url: '/api/app/price-list',
      params: { disabled: input.disabled, priceListId: input.priceListId, priceFrom: input.priceFrom, priceTo: input.priceTo, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/price-list/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/price-list/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePriceListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PriceListDto>({
      method: 'PUT',
      url: `/api/app/price-list/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
