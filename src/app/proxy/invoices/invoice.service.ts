import type { InvoicePaymentStatus } from './invoice-payment-status.enum';
import type { AdminInvoice, AdminInvoiceFile, AdminInvoiceLine, AdminInvoiceList, CreateInvoiceDto, InvoiceDailySummaryRequestDto, InvoiceDto, InvoicePaymentDailySummaryReportDto, InvoicePaymentsReportRequestDto, InvoiceRequestDto, InvoiceSummaryReportDto, InvoicesByCategoriesReportDto, InvoicesByCategoriesRequestDto, InvoicesByCustomerReportDto, InvoicesByCustomerRequestDto, InvoicesByDeliveryMethodReportDto, InvoicesByItemsReportDto, InvoicesByItemsRequestDto, InvoicesByPaymentMethodReportDto, InvoicesListSummaryDto, InvoicesListSummaryRequestDto, InvoicesPaymentsDto, InvoicesPaymentsSummaryReportDto, InvoicesReportRequestDto, UpdateInvoiceDto, UpdateInvoiceNoteDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FileContentResult } from '../microsoft/asp-net-core/mvc/models';
import type { AdminTaxLine, GenerateForOrdersRequest } from '../orders/models';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  apiName = 'Default';
  

  create = (input: CreateInvoiceDto, typeId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceDto>({
      method: 'POST',
      url: `/api/app/invoice/${typeId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createPaymentForInvoices = (input: GenerateForOrdersRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/invoice/payment-for-invoices',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/invoice/${id}`,
    },
    { apiName: this.apiName,...config });
  

  exportSummaryReport = (input: InvoiceDailySummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'POST',
      url: '/api/app/invoice/summary-report/export',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (typeId: string, id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceDto>({
      method: 'GET',
      url: `/api/app/invoice/${typeId}/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getByCategoriesReport = (input: InvoicesByCategoriesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicesByCategoriesReportDto>({
      method: 'GET',
      url: '/api/app/invoice/by-categories-report',
      params: { warehouseId: input.warehouseId, branchId: input.branchId, categoryId: input.categoryId, mainCategoryId: input.mainCategoryId, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, status: input.status, onlyPostedToWarehouses: input.onlyPostedToWarehouses, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getByCustomersReport = (input: InvoicesByCustomerRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicesByCustomerReportDto>({
      method: 'GET',
      url: '/api/app/invoice/by-customers-report',
      params: { customerId: input.customerId, customerGroupId: input.customerGroupId, customerBusinessTypeId: input.customerBusinessTypeId, isClient: input.isClient, isSupplier: input.isSupplier, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getByDeliveryMethod = (input: InvoicesReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicesByDeliveryMethodReportDto>({
      method: 'GET',
      url: '/api/app/invoice/by-delivery-methods',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, paymentModes: input.paymentModes },
    },
    { apiName: this.apiName,...config });
  

  getByItemsReport = (input: InvoicesByItemsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicesByItemsReportDto>({
      method: 'GET',
      url: '/api/app/invoice/by-items-report',
      params: { itemId: input.itemId, itemDetailId: input.itemDetailId, warehouseId: input.warehouseId, branchId: input.branchId, categoryId: input.categoryId, mainCategoryId: input.mainCategoryId, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, onlyPostedToWarehouses: input.onlyPostedToWarehouses, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getByPaymentMethods = (input: InvoicesReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicesByPaymentMethodReportDto>({
      method: 'GET',
      url: '/api/app/invoice/by-payment-methods',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, paymentModes: input.paymentModes },
    },
    { apiName: this.apiName,...config });
  

  getDailySummaryReport = (input: InvoicesReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicePaymentDailySummaryReportDto>({
      method: 'GET',
      url: '/api/app/invoice/daily-summary-report',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, paymentModes: input.paymentModes },
    },
    { apiName: this.apiName,...config });
  

  getHeader = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminInvoice>({
      method: 'GET',
      url: `/api/app/invoice/${id}/header`,
    },
    { apiName: this.apiName,...config });
  

  getInvoiceFiles = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminInvoiceFile[]>({
      method: 'GET',
      url: `/api/app/invoice/${id}/invoice-files`,
    },
    { apiName: this.apiName,...config });
  

  getLines = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminInvoiceLine[]>({
      method: 'GET',
      url: `/api/app/invoice/${id}/lines`,
    },
    { apiName: this.apiName,...config });
  

  getListSummaryReport = (input: InvoicesListSummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicesListSummaryDto>({
      method: 'GET',
      url: '/api/app/invoice/list-summary-report',
      params: { status: input.status, deliveryType: input.deliveryType, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, paymentModes: input.paymentModes },
    },
    { apiName: this.apiName,...config });
  

  getListV2 = (input: InvoiceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AdminInvoiceList>>({
      method: 'GET',
      url: '/api/app/invoice/list',
      params: { search: input.search, deliveryType: input.deliveryType, number: input.number, referenceType: input.referenceType, status: input.status, referenceId: input.referenceId, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, customerId: input.customerId, itemDetailId: input.itemDetailId, couponId: input.couponId, taxId: input.taxId, hasNoTax: input.hasNoTax, fromDate: input.fromDate, toDate: input.toDate, outletId: input.outletId, typeIds: input.typeIds, mode: input.mode, paymentStatus: input.paymentStatus, outletTableId: input.outletTableId, paymentMethodId: input.paymentMethodId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getNewInvoiceNumber = (typeId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: `/api/app/invoice/${typeId}/next`,
    },
    { apiName: this.apiName,...config });
  

  getPaymentStatus = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicePaymentStatus>({
      method: 'GET',
      url: `/api/app/invoice/${id}/payment-status`,
    },
    { apiName: this.apiName,...config });
  

  getPaymentsReport = (input: InvoicePaymentsReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<InvoicesPaymentsDto>>({
      method: 'GET',
      url: '/api/app/invoice/payments-report',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, showOnlyZeroUnpaidAmount: input.showOnlyZeroUnpaidAmount, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPaymentsSummaryReport = (input: InvoicesReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicesPaymentsSummaryReportDto>({
      method: 'GET',
      url: '/api/app/invoice/payments-summary-report',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, paymentModes: input.paymentModes },
    },
    { apiName: this.apiName,...config });
  

  getSummaryReport = (input: InvoiceDailySummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceSummaryReportDto>({
      method: 'GET',
      url: '/api/app/invoice/summary-report',
      params: { timezoneOffset: input.timezoneOffset, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds, paymentModes: input.paymentModes },
    },
    { apiName: this.apiName,...config });
  

  getTaxLines = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminTaxLine[]>({
      method: 'GET',
      url: `/api/app/invoice/${id}/tax-lines`,
    },
    { apiName: this.apiName,...config });
  

  postByIds = (ids: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceDto[]>({
      method: 'POST',
      url: '/api/app/invoice/by-ids',
      body: ids,
    },
    { apiName: this.apiName,...config });
  

  putCancel = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/invoice/${id}/cancel`,
    },
    { apiName: this.apiName,...config });
  

  putPostToWarehouses = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/invoice/${id}/post-to-warehouses`,
    },
    { apiName: this.apiName,...config });
  

  putRollbackPostToWarehouses = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/invoice/${id}/rollback-post-to-warehouses`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, typeId: string, input: UpdateInvoiceDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceDto>({
      method: 'PUT',
      url: `/api/app/invoice/${typeId}/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateNote = (input: UpdateInvoiceNoteDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/invoice/note',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateTaxLines = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/invoice/${id}/tax-lines`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
