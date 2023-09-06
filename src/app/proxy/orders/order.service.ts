import type { AdminSalesOrder, AdminSalesOrderHistory, AdminSalesOrderLine, AdminSalesOrderList, AdminTaxLine, CreateSalesOrderDto, CreateSalesOrderMarketplaceDto, GenerateForOrdersRequest, OrdersByDeliveryMethodReportDto, OrdersByPaymentMethodReportDto, OrdersListSummaryDto, OrdersPaymentsDto, OrdersPaymentsSummaryReportDto, SalesOrderComparisonReportDto, SalesOrderDailySummaryReportDto, SalesOrderDailySummaryRequestDto, SalesOrderDto, SalesOrderInvoicesDto, SalesOrderPaymentsReportRequestDto, SalesOrderReportRequestDto, SalesOrderRequestDto, SalesOrderSummaryReportDto, SalesOrderSummaryRequestDto, SalesOrdersByCategoriesReportResponseDto, SalesOrdersByCategoriesRequestDto, SalesOrdersByCustomerReportDto, SalesOrdersByCustomerRequestDto, SalesOrdersByItemsReportDto, SalesOrdersByItemsRequestDto, SalesOrdersListSummaryRequestDto, UpdateSalesOrderDto, UpdateSalesOrderPaymentMethodDto, UpdateShippingStatusDto, UpdateStatusDto } from './models';
import type { OrderPaymentStatus } from './order-payment-status.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { InvoiceDto, UpdateInvoiceNoteDto } from '../invoices/models';
import type { FileContentResult } from '../microsoft/asp-net-core/mvc/models';
import type { PaymentMethodDto } from '../payments/models';
import type { SalesOrderStoreDto } from '../stores/models';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiName = 'Default';
  

  create = (input: CreateSalesOrderDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderDto>({
      method: 'POST',
      url: '/api/app/order',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createInvoice = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceDto>({
      method: 'POST',
      url: `/api/app/order/${id}/invoice`,
    },
    { apiName: this.apiName,...config });
  

  createMarketplace = (input: CreateSalesOrderMarketplaceDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderDto>({
      method: 'POST',
      url: '/api/app/order/marketplace',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createPaymentForOrders = (input: GenerateForOrdersRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/order/payment-for-orders',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/order/${id}`,
    },
    { apiName: this.apiName,...config });
  

  exportSummaryReport = (input: SalesOrderDailySummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'POST',
      url: '/api/app/order/summary-report/export',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderDto>({
      method: 'GET',
      url: `/api/app/order/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getByCategoriesReport = (input: SalesOrdersByCategoriesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrdersByCategoriesReportResponseDto>({
      method: 'GET',
      url: '/api/app/order/by-categories-report',
      params: { warehouseId: input.warehouseId, branchId: input.branchId, categoryId: input.categoryId, mainCategoryId: input.mainCategoryId, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, onlyCompleted: input.onlyCompleted, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getByCustomersReport = (input: SalesOrdersByCustomerRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrdersByCustomerReportDto>({
      method: 'GET',
      url: '/api/app/order/by-customers-report',
      params: { customerId: input.customerId, customerGroupId: input.customerGroupId, customerBusinessTypeId: input.customerBusinessTypeId, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getByDeliveryMethod = (input: SalesOrderReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdersByDeliveryMethodReportDto>({
      method: 'GET',
      url: '/api/app/order/by-delivery-method',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getByItemsReport = (input: SalesOrdersByItemsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrdersByItemsReportDto>({
      method: 'GET',
      url: '/api/app/order/by-items-report',
      params: { itemId: input.itemId, itemDetailId: input.itemDetailId, warehouseId: input.warehouseId, branchId: input.branchId, categoryId: input.categoryId, mainCategoryId: input.mainCategoryId, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, onlyCompleted: input.onlyCompleted, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getByPaymentMethods = (input: SalesOrderReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdersByPaymentMethodReportDto>({
      method: 'GET',
      url: '/api/app/order/by-payment-methods',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getCompareNewCustomersReturningCustomersSummary = (input: SalesOrderSummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderComparisonReportDto>({
      method: 'GET',
      url: '/api/app/order/compare-new-customers-returning-customers-summary',
      params: { warehouseId: input.warehouseId, branchId: input.branchId, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getDashboardSummary = (input: SalesOrderSummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderSummaryReportDto>({
      method: 'GET',
      url: '/api/app/order/dashboard-summary',
      params: { warehouseId: input.warehouseId, branchId: input.branchId, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getHeader = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminSalesOrder>({
      method: 'GET',
      url: `/api/app/order/${id}/header`,
    },
    { apiName: this.apiName,...config });
  

  getHistory = (id: string, input: PagedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AdminSalesOrderHistory>>({
      method: 'GET',
      url: `/api/app/order/${id}/history`,
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getInvoices = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderInvoicesDto[]>({
      method: 'GET',
      url: `/api/app/order/${id}/invoices`,
    },
    { apiName: this.apiName,...config });
  

  getLines = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminSalesOrderLine[]>({
      method: 'GET',
      url: `/api/app/order/${id}/lines`,
    },
    { apiName: this.apiName,...config });
  

  getListMarketplace = (input: SalesOrderRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SalesOrderStoreDto>>({
      method: 'GET',
      url: '/api/app/order/marketplace',
      params: { outletId: input.outletId, countryId: input.countryId, stateProvinceId: input.stateProvinceId, stateProvinceName: input.stateProvinceName, cityId: input.cityId, cityName: input.cityName, districtId: input.districtId, zipPostalCode: input.zipPostalCode, minSubTotal: input.minSubTotal, maxSubTotal: input.maxSubTotal, fromDate: input.fromDate, toDate: input.toDate, filter: input.filter, address: input.address, excludedStatus: input.excludedStatus, status: input.status, paymentStatus: input.paymentStatus, shippingStatus: input.shippingStatus, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, deliveryType: input.deliveryType, customerId: input.customerId, itemDetailId: input.itemDetailId, couponId: input.couponId, taxId: input.taxId, hasNoTax: input.hasNoTax, outletTableId: input.outletTableId, paymentMethodId: input.paymentMethodId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListOrderStore = (input: SalesOrderRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SalesOrderStoreDto>>({
      method: 'GET',
      url: '/api/app/order/order-store',
      params: { outletId: input.outletId, countryId: input.countryId, stateProvinceId: input.stateProvinceId, stateProvinceName: input.stateProvinceName, cityId: input.cityId, cityName: input.cityName, districtId: input.districtId, zipPostalCode: input.zipPostalCode, minSubTotal: input.minSubTotal, maxSubTotal: input.maxSubTotal, fromDate: input.fromDate, toDate: input.toDate, filter: input.filter, address: input.address, excludedStatus: input.excludedStatus, status: input.status, paymentStatus: input.paymentStatus, shippingStatus: input.shippingStatus, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, deliveryType: input.deliveryType, customerId: input.customerId, itemDetailId: input.itemDetailId, couponId: input.couponId, taxId: input.taxId, hasNoTax: input.hasNoTax, outletTableId: input.outletTableId, paymentMethodId: input.paymentMethodId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListSummaryReport = (input: SalesOrdersListSummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdersListSummaryDto>({
      method: 'GET',
      url: '/api/app/order/list-summary-report',
      params: { status: input.status, deliveryType: input.deliveryType, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getListV2 = (input: SalesOrderRequestDto,config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AdminSalesOrderList>>({
      method: 'GET',
      url: '/api/app/order',
      params: { outletId: input.outletId, countryId: input.countryId, stateProvinceId: input.stateProvinceId, stateProvinceName: input.stateProvinceName, cityId: input.cityId, cityName: input.cityName, districtId: input.districtId, zipPostalCode: input.zipPostalCode, minSubTotal: input.minSubTotal, maxSubTotal: input.maxSubTotal, fromDate: input.fromDate, toDate: input.toDate, filter: input.filter, address: input.address, excludedStatus: input.excludedStatus, status: input.status, paymentStatus: input.paymentStatus, shippingStatus: input.shippingStatus, salesChannels: input.salesChannels, excludedSalesChannels: input.excludedSalesChannels, deliveryType: input.deliveryType, customerId: input.customerId, itemDetailId: input.itemDetailId, couponId: input.couponId, taxId: input.taxId, hasNoTax: input.hasNoTax, outletTableId: input.outletTableId, paymentMethodId: input.paymentMethodId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMarketplace = (id: string, tenantId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderStoreDto>({
      method: 'GET',
      url: `/api/app/order/${id}/marketplace/${tenantId}`,
    },
    { apiName: this.apiName,...config });
  

  getMarketplaceByOrderNumberAndPhoneNumber = (orderNumber: string, phoneNumber: string, tenantId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderStoreDto>({
      method: 'GET',
      url: `/api/app/order/marketplace-by-order-number-and-phone-number/${tenantId}`,
      params: { orderNumber, phoneNumber },
    },
    { apiName: this.apiName,...config });
  

  getNewOrdersCount = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/order/new-orders-count',
    },
    { apiName: this.apiName,...config });
  

  getOrderStore = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderStoreDto>({
      method: 'GET',
      url: `/api/app/order/${id}/order-store`,
    },
    { apiName: this.apiName,...config });
  

  getOrderStoreByOrderNumberAndPhoneNumber = (orderNumber: string, phoneNumber: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderStoreDto>({
      method: 'GET',
      url: '/api/app/order/order-store-by-order-number-and-phone-number',
      params: { orderNumber, phoneNumber },
    },
    { apiName: this.apiName,...config });
  

  getPaymentStatus = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrderPaymentStatus>({
      method: 'GET',
      url: `/api/app/order/${id}/payment-status`,
    },
    { apiName: this.apiName,...config });
  

  getPaymentsReport = (input: SalesOrderPaymentsReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OrdersPaymentsDto>>({
      method: 'GET',
      url: '/api/app/order/payments-report',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, showOnlyZeroUnpaidAmount: input.showOnlyZeroUnpaidAmount, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPaymentsSummaryReport = (input: SalesOrderReportRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdersPaymentsSummaryReportDto>({
      method: 'GET',
      url: '/api/app/order/payments-summary-report',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getSummaryReport = (input: SalesOrderDailySummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderDailySummaryReportDto>({
      method: 'GET',
      url: '/api/app/order/summary-report',
      params: { timezoneOffset: input.timezoneOffset, outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getTaxLines = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdminTaxLine[]>({
      method: 'GET',
      url: `/api/app/order/${id}/tax-lines`,
    },
    { apiName: this.apiName,...config });
  

  postByIds = (ids: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderDto[]>({
      method: 'POST',
      url: '/api/app/order/by-ids',
      body: ids,
    },
    { apiName: this.apiName,...config });
  

  putCancelOrder = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/order/${id}/cancel-order`,
    },
    { apiName: this.apiName,...config });
  

  putCoupon = (id: string, couponCode: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/order/${id}/coupon`,
      params: { couponCode },
    },
    { apiName: this.apiName,...config });
  

  sendOrderInvoiceEmail = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/order/${id}/send-order-invoice-email`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateSalesOrderDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOrderDto>({
      method: 'PUT',
      url: `/api/app/order/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateNote = (input: UpdateInvoiceNoteDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/order/note',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updatePaymentMethod = (input: UpdateSalesOrderPaymentMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentMethodDto>({
      method: 'PUT',
      url: '/api/app/order/payment-method',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateShippingStatus = (input: UpdateShippingStatusDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/order/shipping-status',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateStatus = (input: UpdateStatusDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/order/status',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateTaxLines = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/order/${id}/tax-lines`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
