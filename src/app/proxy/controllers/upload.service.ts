import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FillItemDetailsFromExcelRequestDto, FillItemDetailsFromExcelResponseDto, ImportItemFromExcelRequestDto, ImportItemFromExcelResponseDto, ImportItemPriceListFromExcelRequestDto, ImportItemPriceListResponseDto, ItemPriceResponseDto, UpdateItemPricesExcelDto } from '../catalog/models';
import type { ImageTarget } from '../core/image-target.enum';
import type { StockQuantityResponseDto, UpdateStockQuantityExcelDto } from '../inventory/models';
import type { IFormFile } from '../microsoft/asp-net-core/http/models';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  apiName = 'Default';
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'DELETE',
      url: `/api/upload/delete-image/${id}`,
    },
    { apiName: this.apiName,...config });
  

  invoiceFileByFile = (file: IFormFile, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/api/upload/invoice-file',
      body: file,
    },
    { apiName: this.apiName,...config });
  

  putFillItemDetails = (input: FillItemDetailsFromExcelRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FillItemDetailsFromExcelResponseDto>({
      method: 'PUT',
      url: '/api/upload/bulk-fill-item-details-excel',
      params: { outletId: input.outletId, warehouseId: input.warehouseId, priceListId: input.priceListId },
      body: input.file,
    },
    { apiName: this.apiName,...config });
  

  putImport = (input: ImportItemFromExcelRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImportItemFromExcelResponseDto>({
      method: 'PUT',
      url: '/api/upload/import-items-excel',
      params: { warehouseId: input.warehouseId, categoryId: input.categoryId, brandId: input.brandId, taxId: input.taxId, mainSupplierId: input.mainSupplierId, alternativeSupplierIds: input.alternativeSupplierIds, branchIds: input.branchIds, isUpdateOnly: input.isUpdateOnly },
      body: input.file,
    },
    { apiName: this.apiName,...config });
  

  putImportItemPriceList = (input: ImportItemPriceListFromExcelRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImportItemPriceListResponseDto>({
      method: 'PUT',
      url: '/api/upload/import-item-price-list-excel',
      params: { priceListId: input.priceListId, warehouseId: input.warehouseId },
      body: input.file,
    },
    { apiName: this.apiName,...config });
  

  putItemStockQuantitiesExcel = (input: UpdateStockQuantityExcelDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StockQuantityResponseDto>({
      method: 'PUT',
      url: '/api/upload/manage-stock-excel',
      params: { warehouseId: input.warehouseId, ignoreEmptyValue: input.ignoreEmptyValue, isReset: input.isReset },
      body: input.file,
    },
    { apiName: this.apiName,...config });
  

  updateItemPricesExcel = (input: UpdateItemPricesExcelDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ItemPriceResponseDto>({
      method: 'PUT',
      url: '/api/upload/bulk-prices-excel',
      params: { warehouseId: input.warehouseId, ignoreEmptyValue: input.ignoreEmptyValue, allWarehouses: input.allWarehouses },
      body: input.file,
    },
    { apiName: this.apiName,...config });
  

  uploadByFileByFileAndTargetAndSkipCompression = (file: IFormFile, target: ImageTarget, skipCompression: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/upload/image-by-file/${target}`,
      params: { skipCompression },
      body: file,
    },
    { apiName: this.apiName,...config });
  

  uploadByUrlByUrlAndTargetAndSkipCompression = (url: string, target: ImageTarget, skipCompression: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/upload/image-by-url/${target}`,
      params: { url, skipCompression },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
