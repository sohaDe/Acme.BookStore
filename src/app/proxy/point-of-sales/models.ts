import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { PointOfSaleStatus } from './point-of-sale-status.enum';
import type { InvoiceTypeDto } from '../invoices/models';
import type { CategoryDto } from '../catalog/models';
import type { PaymentMethodDto } from '../payments/models';

export interface PointOfSaleDto extends AuditedEntityDto<string> {
  defaulInvoiceTypeId?: string;
  outletId?: string;
  name?: string;
  status: PointOfSaleStatus;
  creatorUserName?: string;
  lastModifierUserName?: string;
}

export interface CreateUpdatePointOfSaleDto {
  defaulInvoiceTypeId?: string;
  name: string;
  outletId?: string;
}

export interface MyPointOfSaleDto {
  pointOfSale: PointOfSaleDto;
  options: PointOfSaleOptionsDto;
  invoiceTypes: InvoiceTypeDto[];
  categories: CategoryDto[];
  paymentMethods: PaymentMethodDto[];
}

export interface PointOfSaleOptionsDto {
  enableDineIn: boolean;
  enableTakeAway: boolean;
  defaultCustomerId?: string;
  hideAllItems: boolean;
  hideKeypad: boolean;
  acceptPaymentsInMultipleCurrencies: boolean;
}

export interface PointOfSaleRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  status?: PointOfSaleStatus;
}
