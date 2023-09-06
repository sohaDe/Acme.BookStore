import type { InvoiceTypeMode } from './invoice-type-mode.enum';
import type { AuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import type { CustomerDto } from '../customers/models';
import type { AddressDto } from '../core/models';
import type { CreateUpdatePaymentDto, PaymentDto, PaymentMethodDto, PaymentTermDto } from '../payments/models';
import type { InvoiceStatus } from './invoice-status.enum';
import type { InvoicePaymentStatus } from './invoice-payment-status.enum';
import type { DeliveryType } from '../stores/delivery-type.enum';
import type { CouponDto } from '../coupons/models';
import type { CouponType } from '../coupons/coupon-type.enum';
import type { SalesChannels } from '../catalog/sales-channels.enum';
import type { ReferenceType } from './reference-type.enum';
import type { DeliveryMethodDto, DeliveryMethodZoneRateDto } from '../delivery/models';
import type { PaymentTermType } from '../payments/payment-term-type.enum';
import type { PointOfSaleDto } from '../point-of-sales/models';
import type { OutletTableDto } from '../stores/models';
import type { ItemDetailDto, ItemDto, ModifierDto, ModifierListDto, SimpleCategoryDto, SimpleItemDto, TaxDto } from '../catalog/models';
import type { WarehouseDto } from '../inventory/models';
import type { TaxType } from '../catalog/tax-type.enum';
import type { AdminItemLine, AdminModifierLine, AdminSalesOrderAddress, AdminSalesOrderCoupon, AdminSalesOrderCustomer, AdminSalesOrderDeliveryMethodZoneRate, AdminSalesOrderOutletTable, AdminSalesOrderPaymentMethod, SalesOrderLineDto } from '../orders/models';
import type { ExcelListDto } from '../excel/models';
import type { GroupByOptions } from '../orders/group-by-options.enum';
import type { PaymentMode } from '../payments/payment-mode.enum';

export interface ExportInvoiceToZedXmlRequestDto {
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  mode?: InvoiceTypeMode;
  typeIds: string[];
}

export interface InvoiceDto extends AuditedEntityDto<string> {
  invoiceTypeId?: string;
  branchId?: string;
  warehouseId?: string;
  outletId?: string;
  customerId?: string;
  customer: CustomerDto;
  addressId?: string;
  address: AddressDto;
  customerAddressId?: string;
  currencyId?: string;
  currencyRate: number;
  paymentMethodId?: string;
  paymentMethod: PaymentMethodDto;
  number?: string;
  reference?: string;
  status: InvoiceStatus;
  paymentStatus: InvoicePaymentStatus;
  deliveryType: DeliveryType;
  extra: number;
  discount: number;
  rewardPointsDiscount: number;
  rewardPoints?: number;
  refundedAmount: number;
  paidAmount: number;
  unpaidAmount: number;
  total: number;
  subTotal: number;
  subTotalTax: number;
  includedSubTotalTax: number;
  postedToWarehouseDate?: string;
  printedDate?: string;
  date?: string;
  creatorUserName?: string;
  lastModifierUserName?: string;
  couponId?: string;
  coupon: CouponDto;
  couponDiscountValue: number;
  couponCode?: string;
  couponType?: CouponType;
  note?: string;
  salesChannel: SalesChannels;
  referenceType?: ReferenceType;
  referenceId?: string;
  referenceNumber?: string;
  deliveryMethodZoneRateId?: string;
  deliveryMethodZoneRate: DeliveryMethodZoneRateDto;
  deliveryFees: number;
  deliveryFeesTax: number;
  pointOfSaleId?: string;
  dueDate?: string;
  paymentTermType: PaymentTermType;
  paymentTermId?: string;
  paymentTerm: PaymentTermDto;
  pointOfSale: PointOfSaleDto;
  internalNote?: string;
  outletTable: OutletTableDto;
  cost: number;
  profit: number;
  invoiceLines: InvoiceLineDto[];
  taxLines: InvoiceTaxLinesDto[];
  invoicePayments: InvoicePaymentsDto[];
  invoiceFiles: InvoiceFileDto[];
}

export interface InvoiceFileDto extends AuditedEntityDto<string> {
  invoiceId?: string;
  url?: string;
  name?: string;
  extension?: string;
  size: number;
}

export interface InvoiceLineDto extends AuditedEntityDto<string> {
  itemDetailId?: string;
  itemDetail: ItemDetailDto;
  item: ItemDto;
  warehouseId?: string;
  warehouse: WarehouseDto;
  quantity: number;
  price: number;
  cost: number;
  profit: number;
  taxId?: string;
  taxRate?: number;
  taxType?: TaxType;
  taxName?: string;
  taxName2?: string;
  taxName3?: string;
  preTaxPrice: number;
  taxPrice: number;
  postTaxPrice: number;
  modifiersPrice: number;
  total: number;
  note?: string;
  totalCost: number;
  totalProfit: number;
  stockQuantityPosted: boolean;
  invoiceLineModifierLists: InvoiceLineModifierListDto[];
  orderLineInvoiceLines: SalesOrderLineInvoiceLineDto[];
}

export interface InvoiceLineModifierListDto extends AuditedEntityDto<string> {
  invoiceLineId?: string;
  modifierListId?: string;
  modifierList: ModifierListDto;
  modifierId?: string;
  modifier: ModifierDto;
  price: number;
}

export interface InvoicePaymentsDto {
  id?: string;
  amount: number;
  creationTime?: string;
  payment: PaymentDto;
}

export interface InvoiceTaxLinesDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  type: TaxType;
  rate: number;
  taxTotal: number;
  preTaxTotal: number;
  postTaxTotal: number;
  total: number;
}

export interface SalesOrderLineInvoiceLineDto extends AuditedEntityDto<string> {
  orderLineId?: string;
  orderLine: SalesOrderLineDto;
  invoiceLineId?: string;
}

export interface UpdateInvoiceNoteDto {
  id?: string;
  note?: string;
}

export interface AdminInvoice {
  id?: string;
  branchId?: string;
  outletId?: string;
  warehouseId?: string;
  customerId?: string;
  addressId?: string;
  customerAddressId?: string;
  currencyId?: string;
  currencyRate: number;
  deliveryMethodZoneRateId?: string;
  paymentMethodId?: string;
  deliveryType: DeliveryType;
  status: InvoiceStatus;
  paymentStatus: InvoicePaymentStatus;
  linesCount: number;
  note?: string;
  subtotal: number;
  subtotalTax: number;
  includedSubtotalTax: number;
  deliveryFees: number;
  deliveryFeesTax: number;
  extra: number;
  discount: number;
  rewardPointsDiscount: number;
  rewardPoints?: number;
  refundedAmount: number;
  paidAmount: number;
  total: number;
  unpaidAmount: number;
  number?: string;
  referenceType?: ReferenceType;
  referenceId?: string;
  reference?: string;
  referenceNumber?: string;
  date?: string;
  internalNote?: string;
  couponDiscount: number;
  couponId?: string;
  couponDiscountValue: number;
  couponCode?: string;
  couponType?: CouponType;
  salesChannel: SalesChannels;
  cost: number;
  profit: number;
  lastModificationTime?: string;
  creationTime?: string;
  dueDate?: string;
  paymentTermType: PaymentTermType;
  paymentTermId?: string;
  postedToWarehouseDate?: string;
  printedDate?: string;
  customer: AdminSalesOrderCustomer;
  address: AdminSalesOrderAddress;
  deliveryMethodZoneRate: AdminSalesOrderDeliveryMethodZoneRate;
  paymentMethod: AdminSalesOrderPaymentMethod;
  coupon: AdminSalesOrderCoupon;
  outletTable: AdminSalesOrderOutletTable;
}

export interface AdminInvoiceFile {
  invoiceId?: string;
  url?: string;
  name?: string;
  extension?: string;
  size: number;
  creationTime?: string;
}

export interface AdminInvoiceLine {
  invoiceId?: string;
  invoiceLineId?: string;
  item: AdminItemLine;
  modifiers: AdminModifierLine[];
  modifiersPrice: number;
  price: number;
  cost: number;
  profit: number;
  taxId?: string;
  taxRate?: number;
  taxType?: TaxType;
  taxName?: string;
  preTaxPrice: number;
  postTaxPrice: number;
  taxPrice: number;
  quantity: number;
  total: number;
  note?: string;
  totalCost: number;
  totalProfit: number;
}

export interface AdminInvoiceList {
  id?: string;
  invoiceTypeId?: string;
  branchId?: string;
  outletId?: string;
  warehouseId?: string;
  paymentMethodId?: string;
  date?: string;
  deliveryType: DeliveryType;
  status: InvoiceStatus;
  paymentStatus: InvoicePaymentStatus;
  referenceType?: ReferenceType;
  referenceId?: string;
  reference?: string;
  total: number;
  number?: string;
  salesChannel: SalesChannels;
  linesCount: number;
  customer: AdminSalesOrderCustomer;
  address: AdminSalesOrderAddress;
}

export interface BasicInvoiceDto {
  id?: string;
  number?: string;
  total: number;
  date?: string;
  typeId?: string;
  typeName?: string;
  typeMode: InvoiceTypeMode;
}

export interface CategorySalesInvoiceReportItemDto {
  itemDetailId?: string;
  categoryId?: string;
  category: SimpleCategoryDto;
  parentCategoryId?: string;
  parentCategory: SimpleCategoryDto;
  total: number;
  totalWithModifiers: number;
  cost: number;
  quantity: number;
  profit: number;
  warehouseId?: string;
  warehouseName?: string;
  branchId?: string;
  branchName?: string;
  outletId?: string;
  outletName?: string;
}

export interface CreateInvoiceDto {
  redeemedPoints?: number;
  couponId?: string;
  branchId?: string;
  warehouseId?: string;
  outletId?: string;
  pointOfSaleId?: string;
  customerId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  currencyRate?: number;
  deliveryType?: DeliveryType;
  outletTableId?: string;
  addressId?: string;
  reference?: string;
  extra?: number;
  discount?: number;
  date?: string;
  note?: string;
  internalNote?: string;
  salesChannel?: SalesChannels;
  referenceId?: string;
  dueDate?: string;
  paymentTermType: PaymentTermType;
  paymentTermId?: string;
  deliveryFees?: number;
  deliveryFeesTax?: number;
  invoiceLines: CreateInvoiceLineDto[];
  payments: CreateUpdatePaymentDto[];
  invoiceFilesIds: string[];
}

export interface CreateInvoiceLineDto {
  itemDetailId?: string;
  warehouseId?: string;
  quantity: number;
  price: number;
  updateCost: boolean;
  updatePrice: boolean;
  updatePriceLists: boolean;
  profitMargin?: number;
  newSellPrice?: number;
  taxId?: string;
  note?: string;
  invoiceLineModifierLists: CreateInvoiceLineModifierListDto[];
}

export interface CreateInvoiceLineModifierListDto {
  id?: string;
  modifierListId?: string;
  modifierId?: string;
  price: number;
}

export interface CreateInvoiceTypeDto {
  name?: string;
  mode: InvoiceTypeMode;
  preventNegativeStockQuantity: boolean;
  noPostToWarehouses: boolean;
  autoPostToWarehouses: boolean;
  note?: string;
}

export interface CreateUpdateInvoiceFileDto {
  id?: string;
  invoiceId?: string;
  url?: string;
  name?: string;
  extension?: string;
  size: number;
}

export interface InvoiceDailySummaryReportDto {
  invoiceTypeId?: string;
  invoiceTypeName?: string;
  invoiceTypeMode: InvoiceTypeMode;
  count: number;
  amount: number;
}

export interface InvoiceDailySummaryRequestDto extends InvoicesReportRequestDto {
  timezoneOffset: number;
}

export interface InvoicePaymentDailySummaryReportDto {
  totalSales: number;
  totalPurchases: number;
  totalReceivedAmount: number;
  totalMadeAmount: number;
  totalReceivedCashRounding: number;
  totalMadeCashRounding: number;
  invoices: InvoiceDailySummaryReportDto[];
  payments: PaymentDailySummaryReportDto[];
}

export interface InvoicePaymentsByPaymentMethodDto {
  paymentMethod: PaymentMethodDto;
  paidAmount: number;
  taxedAmount: number;
  taxExemptAmount: number;
  taxesAmount: number;
  recievedCount: number;
  recievedRefundCount: number;
  discount: number;
  coupon: number;
  rewardPointsDiscount: number;
  deliveryFees: number;
  deliveryFeesTax: number;
  extra: number;
  paymentMethodFees: number;
  taxes: InvoicePaymentsByTaxDto[];
}

export interface InvoicePaymentsByTaxDto {
  tax: TaxDto;
  taxesAmount: number;
  invoicesTaxedAmount: number;
  invoicesNetAmount: number;
}

export interface InvoicePaymentsReportRequestDto extends PagedAndSortedResultRequestDto {
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  mode?: InvoiceTypeMode;
  typeIds: string[];
  showOnlyZeroUnpaidAmount?: boolean;
}

export interface InvoiceRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  deliveryType?: DeliveryType;
  number?: string;
  referenceType?: ReferenceType;
  status?: InvoiceStatus;
  referenceId?: string;
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
  customerId?: string;
  itemDetailId?: string;
  couponId?: string;
  taxId?: string;
  hasNoTax?: boolean;
  fromDate?: string;
  toDate?: string;
  outletId?: string;
  typeIds: string[];
  mode?: InvoiceTypeMode;
  paymentStatus?: InvoicePaymentStatus;
  outletTableId?: string;
  paymentMethodId?: string;
}

export interface InvoiceSummaryItemReportDto {
  utcDate?: string;
  date?: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  subTotal: number;
  subTotalTax: number;
  deliveryFees: number;
  salesReturn: number;
  discount: number;
  rewardPointsDiscount: number;
  extra: number;
  couponDiscount: number;
  total: number;
  netSales: number;
  grossProfit: number;
  cost: number;
  profit: number;
  returnCost: number;
  returnProfit: number;
  excludedTaxes: number;
  includedTaxes: number;
  deliveryFeesTax: number;
  invoicesCount: number;
  returnInvoicesCount: number;
}

export interface InvoiceSummaryReportDto extends ExcelListDto<InvoiceSummaryItemReportDto> {
  subTotal: number;
  totalSubTotalTax: number;
  totalDeliveryFees: number;
  totalSalesReturn: number;
  totalDiscount: number;
  totalRewardPointsDiscount: number;
  totalExtra: number;
  totalCouponDiscount: number;
  totalCost: number;
  totalProfit: number;
  totalReturnCost: number;
  totalReturnProfit: number;
  totalExcludedTaxes: number;
  totalIncludedTaxes: number;
  totalDeliveryFeesTaxes: number;
  total: number;
  totalNetSales: number;
  totalGrossProfit: number;
  totalInvoicesCount: number;
  totalReturnInvoicesCount: number;
  option: GroupByOptions;
}

export interface InvoiceTypeDeliveryMethodByTaxDto {
  tax: TaxDto;
  taxTotal: number;
  preTaxTotal: number;
  postTaxTotal: number;
  total: number;
}

export interface InvoiceTypeDto extends AuditedEntityDto<string> {
  name?: string;
  mode: InvoiceTypeMode;
  preventNegativeStockQuantity: boolean;
  noPostToWarehouses: boolean;
  autoPostToWarehouses: boolean;
  note?: string;
  disabled: boolean;
  options: InvoiceTypeOptionsDto;
}

export interface InvoiceTypeListDto extends AuditedEntityDto<string> {
  name?: string;
  mode: InvoiceTypeMode;
  displayOrder: number;
  preventNegativeStockQuantity: boolean;
  noPostToWarehouses: boolean;
  autoPostToWarehouses: boolean;
  note?: string;
  disabled: boolean;
  options: InvoiceTypeOptionsDto;
}

export interface InvoiceTypeOptionsDto {
  showBranchField?: boolean;
  defaultBranchId?: string;
  showWarehouseField?: boolean;
  defaultWarehouseId?: string;
  defaultCurrencyId?: string;
  defaultPaymentMethodId?: string;
  defaultPaymentTermId?: string;
  paymentTermType?: PaymentTermType;
  defaultPriceListId?: string;
  invoicePrintTemplateId?: string;
  receiptPrintTemplateId?: string;
  deliveryOrderPrintTemplateId?: string;
  showLineNote?: boolean;
  showDiscount?: boolean;
  showExtra?: boolean;
  canEditItemPrice?: boolean;
  forceSelectingModifiers?: boolean;
  defaultUpdateCost?: boolean;
  defaultUpdatePrice?: boolean;
  defaultUpdatePriceLists?: boolean;
  color1?: string;
  color2?: string;
}

export interface InvoiceTypePaymentMethodByTaxDto {
  tax: TaxDto;
  taxTotal: number;
  preTaxTotal: number;
  postTaxTotal: number;
  total: number;
}

export interface InvoiceTypeRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  disabled?: boolean;
  withOptions?: boolean;
}

export interface InvoicesByCategoriesReportDto extends PagedResultDto<CategorySalesInvoiceReportItemDto> {
  total: number;
  totalWithModifiers: number;
  totalQuantity: number;
  totalProfit: number;
}

export interface InvoicesByCategoriesRequestDto extends PagedAndSortedResultRequestDto {
  warehouseId?: string;
  branchId?: string;
  categoryId?: string;
  mainCategoryId?: string;
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  mode?: InvoiceTypeMode;
  typeIds: string[];
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
  status?: InvoiceStatus;
  onlyPostedToWarehouses?: boolean;
}

export interface InvoicesByCustomerItemReportDto {
  customer: CustomerDto;
  total: number;
  subtotal: number;
  subtotalTax: number;
  extra: number;
  discount: number;
  couponDiscount: number;
  rewardPointsDiscount: number;
  rewardPoints: number;
  deliveryFees: number;
  deliveryFeesTax: number;
  invoicesCount: number;
}

export interface InvoicesByCustomerReportDto extends PagedResultDto<InvoicesByCustomerItemReportDto> {
  total: number;
  subtotal: number;
  subtotalTax: number;
  extra: number;
  discount: number;
  couponDiscount: number;
  rewardPointsDiscount: number;
  rewardPoints: number;
  deliveryFees: number;
  deliveryFeesTax: number;
  invoicesCount: number;
}

export interface InvoicesByCustomerRequestDto extends PagedAndSortedResultRequestDto {
  customerId?: string;
  customerGroupId?: string;
  customerBusinessTypeId?: string;
  isClient?: boolean;
  isSupplier?: boolean;
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  mode?: InvoiceTypeMode;
  typeIds: string[];
}

export interface InvoicesByDeliveryMethodInvoiceTypeDto {
  invoiceType: InvoiceTypeDto;
  taxes: InvoiceTypeDeliveryMethodByTaxDto[];
  total: number;
  count: number;
}

export interface InvoicesByDeliveryMethodReportDto {
  items: InvoicesByDeliveryMethodRowDto[];
  total: number;
  count: number;
}

export interface InvoicesByDeliveryMethodRowDto {
  deliveryMethod: DeliveryMethodDto;
  invoiceTypes: InvoicesByDeliveryMethodInvoiceTypeDto[];
  total: number;
  count: number;
}

export interface InvoicesByItemsReportDto extends PagedResultDto<SalesInvoiceReportDto> {
  total: number;
  totalWithModifiers: number;
  totalQuantity: number;
  totalProfit: number;
}

export interface InvoicesByItemsRequestDto extends PagedAndSortedResultRequestDto {
  itemId?: string;
  itemDetailId?: string;
  warehouseId?: string;
  branchId?: string;
  categoryId?: string;
  mainCategoryId?: string;
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  mode?: InvoiceTypeMode;
  typeIds: string[];
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
  onlyPostedToWarehouses?: boolean;
}

export interface InvoicesByPaymentMethodInvoiceTypeDto {
  invoiceType: InvoiceTypeDto;
  taxes: InvoiceTypePaymentMethodByTaxDto[];
  subtotal: number;
  extra: number;
  discount: number;
  rewardPointsDiscount: number;
  coupon: number;
  deliveryFees: number;
  total: number;
  count: number;
}

export interface InvoicesByPaymentMethodReportDto {
  items: InvoicesByPaymentMethodRowDto[];
  subtotal: number;
  extra: number;
  discount: number;
  rewardPointsDiscount: number;
  coupon: number;
  deliveryFees: number;
  total: number;
  count: number;
}

export interface InvoicesByPaymentMethodRowDto {
  paymentMethod: PaymentMethodDto;
  invoiceTypes: InvoicesByPaymentMethodInvoiceTypeDto[];
  subtotal: number;
  extra: number;
  discount: number;
  rewardPointsDiscount: number;
  coupon: number;
  deliveryFees: number;
  total: number;
  count: number;
}

export interface InvoicesListSummaryDto {
  count: number;
  total: number;
  subTotal: number;
  subTotalTax: number;
  deliveryFees: number;
  deliveryFeesTax: number;
  extra: number;
  discount: number;
  couponDiscount: number;
  rewardPointsDiscount: number;
}

export interface InvoicesListSummaryRequestDto extends InvoicesReportRequestDto {
  status?: InvoiceStatus;
  deliveryType?: DeliveryType;
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
}

export interface InvoicesPaymentsDto {
  invoice: BasicInvoiceDto;
  unpaidAmount: number;
  totalReceivedAmount: number;
  totalReceivedRefundAmount: number;
  paidAmount: number;
  taxableAmount: number;
  taxExemptAmount: number;
}

export interface InvoicesPaymentsSummaryReportDto {
  invoicesSummary: InvoicesListSummaryDto;
  paidAmount: number;
  unpaidAmount: number;
  taxedAmount: number;
  taxExemptAmount: number;
  taxesAmount: number;
  recievedAmount: number;
  recievedRefundAmount: number;
  recievedCount: number;
  recievedRefundCount: number;
  taxes: InvoicePaymentsByTaxDto[];
  items: InvoicePaymentsByPaymentMethodDto[];
}

export interface InvoicesReportRequestDto {
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  mode?: InvoiceTypeMode;
  typeIds: string[];
  paymentModes: PaymentMode[];
}

export interface PaymentCategoryDailySummaryReportDto {
  paymentCategoryId?: string;
  paymentCategoryName?: string;
  count: number;
  amount: number;
  cashRounding: number;
  currencies: PaymentCurrencyDailySummaryReportDto[];
}

export interface PaymentCurrencyDailySummaryReportDto {
  currencyId?: string;
  currencyName?: string;
  currencySymbol?: string;
  count: number;
  amount: number;
  cashRounding: number;
}

export interface PaymentDailySummaryReportDto {
  paymentMethodId?: string;
  paymentMethodName?: string;
  paymentMode: PaymentMode;
  count: number;
  amount: number;
  cashRounding: number;
  categories: PaymentCategoryDailySummaryReportDto[];
  currencies: PaymentCurrencyDailySummaryReportDto[];
}

export interface SalesInvoiceReportDto {
  itemDetailId?: string;
  item: SimpleItemDto;
  quantity: number;
  total: number;
  totalWithModifiers: number;
  cost: number;
  profit: number;
  warehouseId?: string;
  warehouseName?: string;
  branchId?: string;
  branchName?: string;
  outletId?: string;
  outletName?: string;
}

export interface UpdateInvoiceDto {
  id?: string;
  branchId?: string;
  warehouseId?: string;
  customerId?: string;
  couponId?: string;
  outletId?: string;
  currencyId?: string;
  currencyRate: number;
  paymentMethodId?: string;
  addressId?: string;
  extra?: number;
  discount?: number;
  date?: string;
  note?: string;
  internalNote?: string;
  deliveryType: DeliveryType;
  dueDate?: string;
  paymentTermType: PaymentTermType;
  paymentTermId?: string;
  deliveryFees?: number;
  deliveryFeesTax?: number;
  outletTableId?: string;
  createInvoiceLines: CreateInvoiceLineDto[];
  updateInvoiceLines: UpdateInvoiceLineDto[];
  invoiceFilesIds: string[];
}

export interface UpdateInvoiceLineDto {
  id?: string;
  warehouseId?: string;
  quantity: number;
  price: number;
  updateCost: boolean;
  updatePrice: boolean;
  updatePriceLists: boolean;
  profitMargin?: number;
  newSellPrice?: number;
  taxId?: string;
  note?: string;
  createInvoiceLineModifierLists: CreateInvoiceLineModifierListDto[];
  updateInvoiceLineModifierLists: UpdateInvoiceLineModifierListDto[];
}

export interface UpdateInvoiceLineModifierListDto {
  id?: string;
  price: number;
}

export interface UpdateInvoiceTypeDto {
  name?: string;
  preventNegativeStockQuantity: boolean;
  noPostToWarehouses: boolean;
  autoPostToWarehouses: boolean;
  note?: string;
}
