import type { AuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import type { ItemDetailDto, ItemDto, ModifierDto, ModifierListDto, SimpleCategoryDto, SimpleItemDto, TaxDto } from '../catalog/models';
import type { TaxType } from '../catalog/tax-type.enum';
import type { OrderLineStatus } from './order-line-status.enum';
import type { NoStockStatus } from '../catalog/no-stock-status.enum';
import type { DeliveryType } from '../stores/delivery-type.enum';
import type { OrderStatus } from './order-status.enum';
import type { OrderPaymentStatus } from './order-payment-status.enum';
import type { ShippingStatus } from './shipping-status.enum';
import type { CouponType } from '../coupons/coupon-type.enum';
import type { SalesChannels } from '../catalog/sales-channels.enum';
import type { DeliveryMethodProvider } from '../delivery/delivery-method-provider.enum';
import type { DeliveryMethodCoveredAreaLimitation } from '../delivery/delivery-method-covered-area-limitation.enum';
import type { OutletTableStatus } from '../stores/outlet-table-status.enum';
import type { OutletSectionStatus } from '../stores/outlet-section-status.enum';
import type { CartStatus } from './cart-status.enum';
import type { CustomerDto } from '../customers/models';
import type { CartLineStatus } from './cart-line-status.enum';
import type { CartLineModifierStatus } from './cart-line-modifier-status.enum';
import type { CartStoreDto, OutletTableDto } from '../stores/models';
import type { AddressDto, CreateUpdateAddressDto } from '../core/models';
import type { Gender } from '../users/gender.enum';
import type { PaymentDto, PaymentMethodDto } from '../payments/models';
import type { DeliveryMethodDto, DeliveryMethodZoneRateDto } from '../delivery/models';
import type { ExcelListDto } from '../excel/models';
import type { GroupByOptions } from './group-by-options.enum';
import type { CouponDto } from '../coupons/models';

export interface SalesOrderLineDto extends AuditedEntityDto<string> {
  orderId?: string;
  itemDetailId?: string;
  itemDetail: ItemDetailDto;
  item: ItemDto;
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
  quantity: number;
  status: OrderLineStatus;
  referenceId?: string;
  total: number;
  note?: string;
  internalNote?: string;
  canceledQuantity: number;
  remainingQuantity: number;
  packedQuantity: number;
  shippedQuantity: number;
  deliveredQuantity: number;
  rejectionReason?: string;
  totalCost: number;
  totalProfit: number;
  orderLineModifierLists: SalesOrderLineModifierListDto[];
}

export interface SalesOrderLineModifierListDto extends AuditedEntityDto<string> {
  orderLineId?: string;
  modifierListId?: string;
  modifierList: ModifierListDto;
  modifierId?: string;
  modifier: ModifierDto;
  price: number;
}

export interface AddItemToCartDto {
  outletId?: string;
  storeId?: string;
  tenantId?: string;
  token?: string;
  quantity: number;
  note?: string;
  cartLineModifiers: CreateCartLineModifierDto[];
}

export interface AdminItemLine {
  id?: string;
  stockTracked: boolean;
  name?: string;
  thumbnail?: string;
  variantOption1Id?: string;
  variantOption1Name?: string;
  variantOption2Id?: string;
  variantOption2Name?: string;
  variantOption3Id?: string;
  variantOption3Name?: string;
  variantOption4Id?: string;
  variantOption4Name?: string;
  itemDetailId?: string;
  sku?: string;
  image?: string;
  variantOption1Value?: string;
  variantOption2Value?: string;
  variantOption3Value?: string;
  variantOption4Value?: string;
  itemDetailWarehouseId?: string;
  stockQuantity: number;
  committedQuantity?: number;
  price: number;
  cost: number;
  noStockStatus: NoStockStatus;
  hasModifierLists: boolean;
}

export interface AdminModifierLine {
  id?: string;
  modifierId?: string;
  modifierListId?: string;
  price: number;
  modifierName?: string;
  modifierName2?: string;
  modifierName3?: string;
  modifierListName?: string;
  modifierListDisplayName?: string;
  modifierListDisplayName2?: string;
  modifierListDisplayName3?: string;
}

export interface AdminSalesOrder {
  id?: string;
  branchId?: string;
  outletId?: string;
  warehouseId?: string;
  customerId?: string;
  addressId?: string;
  customerAddressId?: string;
  cartId?: string;
  deliveryMethodZoneRateId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  currencyRate: number;
  deliveryType: DeliveryType;
  status: OrderStatus;
  paymentStatus: OrderPaymentStatus;
  shippingStatus: ShippingStatus;
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
  notifyCustomer: boolean;
  number?: string;
  reference?: string;
  date?: string;
  deliveryDate?: string;
  isScheduled: boolean;
  internalNote?: string;
  couponDiscount: number;
  couponId?: string;
  couponIsFreeShippingFee?: boolean;
  couponDiscountValue: number;
  couponCode?: string;
  couponType?: CouponType;
  salesChannel: SalesChannels;
  cost: number;
  profit: number;
  customer: AdminSalesOrderCustomer;
  address: AdminSalesOrderAddress;
  deliveryMethodZoneRate: AdminSalesOrderDeliveryMethodZoneRate;
  paymentMethod: AdminSalesOrderPaymentMethod;
  coupon: AdminSalesOrderCoupon;
  outletTable: AdminSalesOrderOutletTable;
  invoices: AdminSalesOrderInvoices[];
}

export interface AdminSalesOrderAddress {
  id?: string;
  countryId?: string;
  countryName?: string;
  countryTwoLetterIsoCode?: string;
  countryThreeLetterIsoCode?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  districtName?: string;
  zipPostalCode?: string;
}

export interface AdminSalesOrderCoupon {
  id?: string;
  code?: string;
  type: CouponType;
  discountValue: number;
  isFreeShippingFee: boolean;
}

export interface AdminSalesOrderCustomer {
  id?: string;
  userId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

export interface AdminSalesOrderDeliveryMethodZoneRate {
  id?: string;
  deliveryMethodId?: string;
  provider: DeliveryMethodProvider;
  coveredArea: DeliveryMethodCoveredAreaLimitation;
  deliveryMethodName?: string;
  name?: string;
  deliveryFees: number;
}

export interface AdminSalesOrderHistory {
  id?: string;
  status?: OrderStatus;
  paymentStatus?: OrderPaymentStatus;
  shippingStatus?: ShippingStatus;
  note?: string;
  userName?: string;
  notified: boolean;
  creationTime?: string;
  creatorId?: string;
}

export interface AdminSalesOrderInvoices {
  invoiceTypeId?: string;
  id?: string;
  number?: string;
  dueDate?: string;
}

export interface AdminSalesOrderLine {
  orderId?: string;
  orderLineId?: string;
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
  status: OrderLineStatus;
  referenceId?: string;
  total: number;
  note?: string;
  internalNote?: string;
  canceledQuantity: number;
  remainingQuantity: number;
  packedQuantity: number;
  shippedQuantity: number;
  deliveredQuantity: number;
  rejectionReason?: string;
  totalCost: number;
  totalProfit: number;
}

export interface AdminSalesOrderList {
  id?: string;
  branchId?: string;
  outletId?: string;
  warehouseId?: string;
  paymentMethodId?: string;
  date?: string;
  deliveryType: DeliveryType;
  status: OrderStatus;
  paymentStatus: OrderPaymentStatus;
  shippingStatus: ShippingStatus;
  total: number;
  number?: string;
  isScheduled: boolean;
  salesChannel: SalesChannels;
  linesCount: number;
  customer: AdminSalesOrderCustomer;
  address: AdminSalesOrderAddress;
}

export interface AdminSalesOrderOutletTable {
  id?: string;
  name?: string;
  capacity: number;
  status: OutletTableStatus;
  sectionId?: string;
  sectionName?: string;
  sectionStatus: OutletSectionStatus;
}

export interface AdminSalesOrderPaymentMethod {
  id?: string;
  name?: string;
}

export interface AdminTaxLine {
  id?: string;
  name?: string;
  type: TaxType;
  rate: number;
  taxTotal: number;
  preTaxTotal: number;
  postTaxTotal: number;
  total: number;
}

export interface BasicSalesOrderDto {
  id?: string;
  number?: string;
  total: number;
  date?: string;
}

export interface CancelOrderLineDto {
  orderLineId?: string;
  canceledQuantity: number;
  rejectionReason?: string;
}

export interface CartDto extends AuditedEntityDto<string> {
  status: CartStatus;
  storeId?: string;
  tokenOrUserId?: string;
  isUser: boolean;
  customer: CustomerDto;
  closingDate?: string;
  outletId?: string;
  subTotal: number;
  cartLines: CartLineDto[];
}

export interface CartLineDto extends AuditedEntityDto<string> {
  cartId?: string;
  itemDetailId?: string;
  itemDetail: ItemDetailDto;
  item: ItemDto;
  quantity: number;
  availableQuantity?: number;
  price: number;
  note?: string;
  taxId?: string;
  taxRate?: number;
  taxType?: TaxType;
  status: CartLineStatus;
  preTaxPrice: number;
  postTaxPrice: number;
  totalPrice: number;
  total: number;
  modifiersPrice: number;
  cartLineModifiers: CartLineModifierDto[];
}

export interface CartLineModifierDto extends AuditedEntityDto<string> {
  cartLineId?: string;
  modifierListId?: string;
  modifierListName?: string;
  modifierId?: string;
  modifierName?: string;
  price: number;
  status: CartLineModifierStatus;
}

export interface CartLoyaltyDto {
  points: number;
  amount: number;
}

export interface CartRequestDto extends PagedAndSortedResultRequestDto {
  status?: CartStatus;
  isUser?: boolean;
  outletId?: string;
}

export interface CartResultDto {
  cart: CartStoreDto;
  hasOffer: boolean;
}

export interface CategorySalesOrderReportDto {
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
  outletId?: string;
  outletName?: string;
  branchId?: string;
  branchName?: string;
}

export interface CreateCartLineModifierDto {
  modifierListId?: string;
  modifierId?: string;
}

export interface CreateSalesOrderDto {
  redeemedPoints?: number;
  couponId?: string;
  outletId?: string;
  tokenId?: string;
  deliveryMethodZoneRateId?: string;
  deliveryFees?: number;
  deliveryFeesTax?: number;
  paymentMethodId?: string;
  currencyId?: string;
  currencyRate?: number;
  customerId?: string;
  customer: OrderCustomerDto;
  outletTableId?: string;
  addressId?: string;
  address: CreateUpdateAddressDto;
  deliveryType: DeliveryType;
  note?: string;
  discount?: number;
  date?: string;
  notifyCustomer: boolean;
  isScheduled?: boolean;
  internalNote?: string;
  extra?: number;
  orderLines: CreateSalesOrderLineDto[];
  salesChannel: SalesChannels;
}

export interface CreateSalesOrderLineDto {
  itemDetailId?: string;
  price: number;
  quantity: number;
  note?: string;
  internalNote?: string;
  referenceId?: string;
  taxId?: string;
  orderLineModifierLists: CreateSalesOrderLineModifierListDto[];
}

export interface CreateSalesOrderLineModifierListDto {
  modifierListId?: string;
  modifierId?: string;
  price: number;
}

export interface CreateSalesOrderMarketplaceDto {
  tenantId: string;
  outletId: string;
  tokenId?: string;
  paymentMethodId?: string;
  couponId?: string;
  redeemedPoints?: number;
  outletTableId?: string;
  deliveryMethodZoneRateId?: string;
  deliveryFees?: number;
  deliveryFeesTax?: number;
  deliveryType: DeliveryType;
  currencyId?: string;
  currencyRate?: number;
  customerId?: string;
  customer: OrderCustomerDto;
  addressId?: string;
  address: CreateUpdateAddressDto;
  note?: string;
  discount?: number;
  date?: string;
  notifyCustomer: boolean;
  isScheduled?: boolean;
  internalNote?: string;
  extra?: number;
  salesChannel: SalesChannels;
}

export interface GenerateForOrdersRequest {
  take?: number;
  fromDate?: string;
  toDate?: string;
}

export interface MarketplaceCartRequestDto {
  tenantId: string;
  token?: string;
}

export interface OrderCustomerDto {
  fullName?: string;
  email?: string;
  password?: string;
  preferredLanguage?: string;
  phoneNumber?: string;
  internalNote?: string;
  dateOfBirth?: string;
  gender: Gender;
  image?: string;
  token?: string;
}

export interface OrderPaymentsByPaymentMethodDto {
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
  taxes: OrderPaymentsByTaxDto[];
}

export interface OrderPaymentsByTaxDto {
  tax: TaxDto;
  taxesAmount: number;
  ordersTaxedAmount: number;
  ordersNetAmount: number;
}

export interface OrdersByDeliveryMethodReportDto {
  items: OrdersByDeliveryMethodRowDto[];
  total: number;
  count: number;
}

export interface OrdersByDeliveryMethodRowDto {
  deliveryMethod: DeliveryMethodDto;
  taxes: OrdersDeliveryMethodByTaxDto[];
  total: number;
  count: number;
}

export interface OrdersByPaymentMethodReportDto {
  items: OrdersByPaymentMethodRowDto[];
  extra: number;
  discount: number;
  rewardPointsDiscount: number;
  coupon: number;
  deliveryFees: number;
  total: number;
  count: number;
}

export interface OrdersByPaymentMethodRowDto {
  paymentMethod: PaymentMethodDto;
  taxes: OrdersPaymentMethodByTaxDto[];
  subtotal: number;
  extra: number;
  discount: number;
  rewardPointsDiscount: number;
  coupon: number;
  deliveryFees: number;
  total: number;
  count: number;
}

export interface OrdersDeliveryMethodByTaxDto {
  tax: TaxDto;
  taxTotal: number;
  preTaxTotal: number;
  postTaxTotal: number;
  total: number;
}

export interface OrdersListSummaryDto {
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

export interface OrdersPaymentMethodByTaxDto {
  tax: TaxDto;
  taxTotal: number;
  preTaxTotal: number;
  postTaxTotal: number;
  total: number;
}

export interface OrdersPaymentsDto {
  order: BasicSalesOrderDto;
  unpaidAmount: number;
  totalReceivedAmount: number;
  totalReceivedRefundAmount: number;
  paidAmount: number;
  taxableAmount: number;
  taxExemptAmount: number;
}

export interface OrdersPaymentsSummaryReportDto {
  ordersSummary: OrdersListSummaryDto;
  paidAmount: number;
  unpaidAmount: number;
  taxedAmount: number;
  taxExemptAmount: number;
  taxesAmount: number;
  recievedAmount: number;
  recievedRefundAmount: number;
  recievedCount: number;
  recievedRefundCount: number;
  taxes: OrderPaymentsByTaxDto[];
  items: OrderPaymentsByPaymentMethodDto[];
}

export interface SalesOrderComparisonReportDto {
  newCustomerCount: number;
  returningCustomerCount: number;
  newCustomerOrderCount: number;
  returningCustomerOrderCount: number;
  newCustomerTotalSales: number;
  returningCustomerTotalSales: number;
  newCustomerOrderAverageBasket: number;
  returningCustomerOrderAverageBasket: number;
  newCustomerOrderPercentage: number;
  returningCustomerOrderPercentage: number;
  totalCustomerCount: number;
  totalCustomerOrderCount: number;
  totalCustomerTotalSales: number;
  totalCustomerOrderAverageBasket: number;
  totalCustomerOrderPercentage: number;
}

export interface SalesOrderDailySummaryItemReportDto {
  utcDate?: string;
  date?: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  subTotal: number;
  subTotalTax: number;
  deliveryFees: number;
  rewardPointsDiscount: number;
  discount: number;
  extra: number;
  couponDiscount: number;
  total: number;
  cost: number;
  profit: number;
  excludedTaxes: number;
  includedTaxes: number;
  deliveryFeesTax: number;
  ordersCount: number;
}

export interface SalesOrderDailySummaryReportDto extends ExcelListDto<SalesOrderDailySummaryItemReportDto> {
  subTotal: number;
  totalSubTotalTax: number;
  totalDeliveryFees: number;
  totalDiscount: number;
  totalExtra: number;
  totalRewardPointsDiscount: number;
  totalCouponDiscount: number;
  totalCost: number;
  totalProfit: number;
  totalExcludedTaxes: number;
  totalIncludedTaxes: number;
  totalDeliveryFeesTaxes: number;
  total: number;
  totalOrdersCount: number;
  option: GroupByOptions;
}

export interface SalesOrderDailySummaryRequestDto extends SalesOrderReportRequestDto {
  timezoneOffset: number;
}

export interface SalesOrderDto extends AuditedEntityDto<string> {
  branchId?: string;
  outletId?: string;
  warehouseId?: string;
  customerId?: string;
  customer: CustomerDto;
  addressId?: string;
  address: AddressDto;
  customerAddressId?: string;
  cartId?: string;
  deliveryMethodZoneRateId?: string;
  deliveryMethodZoneRate: DeliveryMethodZoneRateDto;
  paymentMethodId?: string;
  paymentMethod: PaymentMethodDto;
  currencyId?: string;
  currencyRate: number;
  deliveryType: DeliveryType;
  status: OrderStatus;
  paymentStatus: OrderPaymentStatus;
  shippingStatus: ShippingStatus;
  note?: string;
  subTotal: number;
  subTotalTax: number;
  includedSubTotalTax: number;
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
  notifyCustomer: boolean;
  number?: string;
  reference?: string;
  date?: string;
  deliveryDate?: string;
  isScheduled: boolean;
  hasInvocies: boolean;
  internalNote?: string;
  couponDiscount: number;
  couponId?: string;
  coupon: CouponDto;
  couponIsFreeShippingFee?: boolean;
  couponDiscountValue: number;
  couponCode?: string;
  couponType?: CouponType;
  salesChannel: SalesChannels;
  outletTable: OutletTableDto;
  cost: number;
  profit: number;
  orderLines: SalesOrderLineDto[];
  orderHistories: SalesOrderHistoryDto[];
  taxLines: SalesOrderTaxLinesDto[];
  orderPayments: SalesOrderPaymentsDto[];
  invoices: SalesOrderInvoicesDto[];
}

export interface SalesOrderHistoryDto extends AuditedEntityDto<string> {
  orderId?: string;
  status?: OrderStatus;
  paymentStatus?: OrderPaymentStatus;
  shippingStatus?: ShippingStatus;
  note?: string;
  notified: boolean;
}

export interface SalesOrderInvoicesDto {
  invoiceTypeId?: string;
  id?: string;
  number?: string;
  dueDate?: string;
}

export interface SalesOrderPaymentsDto {
  id?: string;
  amount: number;
  creationTime?: string;
  payment: PaymentDto;
}

export interface SalesOrderPaymentsReportRequestDto extends PagedAndSortedResultRequestDto {
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  showOnlyZeroUnpaidAmount?: boolean;
}

export interface SalesOrderReportDto {
  itemDetailId?: string;
  item: SimpleItemDto;
  quantity: number;
  total: number;
  totalWithModifiers: number;
  cost: number;
  profit: number;
  warehouseId?: string;
  warehouseName?: string;
  outletId?: string;
  outletName?: string;
  branchId?: string;
  branchName?: string;
}

export interface SalesOrderReportRequestDto {
  outletId?: string;
  fromDate?: string;
  toDate?: string;
}

export interface SalesOrderRequestDto extends PagedAndSortedResultRequestDto {
  outletId?: string;
  countryId?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  zipPostalCode?: string;
  minSubTotal?: number;
  maxSubTotal?: number;
  fromDate?: string;
  toDate?: string;
  filter?: string;
  address?: string;
  excludedStatus?: OrderStatus;
  status?: OrderStatus;
  paymentStatus?: OrderPaymentStatus;
  shippingStatus?: ShippingStatus;
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
  deliveryType?: DeliveryType;
  customerId?: string;
  itemDetailId?: string;
  couponId?: string;
  taxId?: string;
  hasNoTax?: boolean;
  outletTableId?: string;
  paymentMethodId?: string;
}

export interface SalesOrderSummaryReportDto {
  newOrderCount: number;
  completeOrderCount: number;
  newCustomerCount: number;
  totalCustomerCount: number;
  totalAmount: number;
  averageBasket: number;
}

export interface SalesOrderSummaryRequestDto extends SalesOrderReportRequestDto {
  warehouseId?: string;
  branchId?: string;
}

export interface SalesOrderTaxLinesDto {
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

export interface SalesOrdersByCategoriesReportResponseDto extends PagedResultDto<CategorySalesOrderReportDto> {
  total: number;
  totalWithModifiers: number;
  totalQuantity: number;
  totalProfit: number;
}

export interface SalesOrdersByCategoriesRequestDto extends PagedAndSortedResultRequestDto {
  warehouseId?: string;
  branchId?: string;
  categoryId?: string;
  mainCategoryId?: string;
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
  onlyCompleted?: boolean;
}

export interface SalesOrdersByCustomerItemReportDto {
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
  ordersCount: number;
}

export interface SalesOrdersByCustomerReportDto extends PagedResultDto<SalesOrdersByCustomerItemReportDto> {
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
  ordersCount: number;
}

export interface SalesOrdersByCustomerRequestDto extends PagedAndSortedResultRequestDto {
  customerId?: string;
  customerGroupId?: string;
  customerBusinessTypeId?: string;
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  status?: OrderStatus;
}

export interface SalesOrdersByItemsReportDto extends PagedResultDto<SalesOrderReportDto> {
  total: number;
  totalWithModifiers: number;
  totalQuantity: number;
  totalProfit: number;
}

export interface SalesOrdersByItemsRequestDto extends PagedAndSortedResultRequestDto {
  itemId?: string;
  itemDetailId?: string;
  warehouseId?: string;
  branchId?: string;
  categoryId?: string;
  mainCategoryId?: string;
  outletId?: string;
  fromDate?: string;
  toDate?: string;
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
  onlyCompleted?: boolean;
}

export interface SalesOrdersListSummaryRequestDto extends SalesOrderReportRequestDto {
  status?: OrderStatus;
  deliveryType?: DeliveryType;
  salesChannels?: SalesChannels;
  excludedSalesChannels?: SalesChannels;
}

export interface UpdateItemToCartDto {
  token?: string;
  quantity: number;
  note?: string;
  cartLineModifiers: CreateCartLineModifierDto[];
}

export interface UpdateMarketplaceItemToCartDto extends MarketplaceCartRequestDto {
  quantity: number;
  note?: string;
  cartLineModifiers: CreateCartLineModifierDto[];
}

export interface UpdateSalesOrderDto {
  id?: string;
  discount?: number;
  extra?: number;
  deliveryMethodZoneRateId?: string;
  addressId?: string;
  notifyCustomer: boolean;
  deliveryType: DeliveryType;
  deliveryFees?: number;
  deliveryFeesTax?: number;
  internalNote?: string;
  note?: string;
  paymentMethodId?: string;
  couponId?: string;
  outletTableId?: string;
  createOrderLines: CreateSalesOrderLineDto[];
  updateOrderLines: UpdateSalesOrderLineDto[];
}

export interface UpdateSalesOrderLineDto {
  id?: string;
  price: number;
  quantity: number;
  internalNote?: string;
  taxId?: string;
  updateOrderLineModifierLists: UpdateSalesOrderLineModifierListDto[];
  createOrderLineModifierLists: CreateSalesOrderLineModifierListDto[];
}

export interface UpdateSalesOrderLineModifierListDto {
  id?: string;
  price: number;
}

export interface UpdateSalesOrderPaymentMethodDto {
  id?: string;
  paymentMethodId?: string;
}

export interface UpdateShippingStatusDto {
  id?: string;
  shippingStatus: ShippingStatus;
  note?: string;
  deliveryDate?: string;
  notified: boolean;
}

export interface UpdateStatusDto {
  id?: string;
  cancelOrderLines: CancelOrderLineDto[];
  note?: string;
  status: OrderStatus;
  notified: boolean;
}
