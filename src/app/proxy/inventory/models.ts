import type { AuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import type { AddressDto, CreateUpdateAddressDto } from '../core/models';
import type { ItemDto, SimpleItemDto } from '../catalog/models';
import type { IFormFile } from '../microsoft/asp-net-core/http/models';
import type { TransferOrderStatus } from './transfer-order-status.enum';
import type { StockQuantityHistoryActionType } from './stock-quantity-history-action-type.enum';

export interface WarehouseBranchDto extends AuditedEntityDto<string> {
  branchId?: string;
  disabled: boolean;
}

export interface WarehouseDto extends AuditedEntityDto<string> {
  name?: string;
  creatorUserName?: string;
  lastModifierUserName?: string;
  disabled: boolean;
  addressId?: string;
  address: AddressDto;
  warehouseBranches: WarehouseBranchDto[];
}

export interface StockQuantityResponseDto {
  notFoundSKUs: string[];
  items: UpdateItemStockQuantityResponseDto[];
}

export interface UpdateItemStockQuantityResponseDto {
  item: SimpleItemDto;
  sku?: string;
  isUpdated: boolean;
  isNew: boolean;
  stockQuantity: number;
  lowStockQuantity: number;
}

export interface UpdateStockQuantityExcelDto {
  file: IFormFile;
  warehouseId?: string;
  ignoreEmptyValue: boolean;
  isReset: boolean;
}

export interface CreateTransferOrderDto {
  sourceWarehouseId?: string;
  destinationWarehouseId?: string;
  status: TransferOrderStatus;
  reason?: string;
  sourceBranchId?: string;
  destinationBranchId?: string;
  transferOrderItems: CreateTransferOrderItemDto[];
}

export interface CreateTransferOrderItemDto {
  quantity: number;
  itemDetailId?: string;
}

export interface CreateUpdateWarehouseBranchDto {
  branchId?: string;
  disabled: boolean;
}

export interface CreateUpdateWarehouseDto {
  id?: string;
  name: string;
  address: CreateUpdateAddressDto;
  warehouseBranches: CreateUpdateWarehouseBranchDto[];
}

export interface ItemStockQuantityHistoryDto {
  item: SimpleItemDto;
  actionType: StockQuantityHistoryActionType;
  quantityAdjustment: number;
  stockQuantity: number;
  creationDate?: string;
  warehouseId?: string;
  warehouseName?: string;
  reference?: string;
  referenceId?: string;
  invoiceTypeId?: string;
}

export interface ItemStockQuantityHistoryReportDto {
  item: SimpleItemDto;
  cost: number;
  price: number;
  stockQuantity: number;
  committedQuantity: number;
  totalCost: number;
  totalPrice: number;
  warehouseId?: string;
  warehouseName?: string;
}

export interface ItemStockQuantityHistorySummaryReportDto extends PagedResultDto<ItemStockQuantityHistoryReportDto> {
  totalQuantity: number;
  totalCost: number;
  totalPrice: number;
}

export interface ItemStockQuantityRequest extends PagedResultRequestDto {
  itemId?: string;
  warehouseId?: string;
  categoryId?: string;
  disable?: boolean;
  fromDate?: string;
  toDate?: string;
}

export interface StockQuantityHistoryRequest extends PagedAndSortedResultRequestDto {
  itemId?: string;
  warehouseId?: string;
  reference?: string;
  fromDate?: string;
  toDate?: string;
  actionType?: StockQuantityHistoryActionType;
}

export interface TransferOrderDto extends AuditedEntityDto<string> {
  number?: string;
  sourceWarehouseId?: string;
  destinationWarehouseId?: string;
  status: TransferOrderStatus;
  reason?: string;
  sourceBranchId?: string;
  destinationBranchId?: string;
  transferOrderItems: TransferOrderItemDto[];
}

export interface TransferOrderItemDto {
  id?: string;
  itemDetailId?: string;
  transferOrderId?: string;
  quantity: number;
  item: ItemDto;
}

export interface TransferOrderRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  sourceWarehouseId?: string;
  destinationWarehouseId?: string;
  status?: TransferOrderStatus;
  sourceBranchId?: string;
  destinationBranchId?: string;
  fromDate?: string;
  toDate?: string;
}

export interface UpdateItemStockQuantityDto {
  itemDetailWarehouseId?: string;
  warehouseId?: string;
  itemDetailId?: string;
  quantity: number;
  lowStockQuantity?: number;
  isReset: boolean;
}

export interface UpdateTransferOrderDto {
  id?: string;
  sourceWarehouseId?: string;
  destinationWarehouseId?: string;
  status: TransferOrderStatus;
  reason?: string;
  sourceBranchId?: string;
  destinationBranchId?: string;
  transferOrderItems: UpdateTransferOrderItemDto[];
}

export interface UpdateTransferOrderItemDto {
  id?: string;
  quantity: number;
  itemDetailId?: string;
  transferOrderId?: string;
}

export interface WarehouseFilter {
  disabled?: boolean;
}

export interface WarehousesRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
}
