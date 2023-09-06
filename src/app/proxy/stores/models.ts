import type { AuditedEntityDto, CreationAuditedEntityDto, EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { OutletStatus } from './outlet-status.enum';
import type { AddressDto, CountryDto, CreateUpdateAddressDto, CurrencyDto, IndustryDto } from '../core/models';
import type { OutletSectionStatus } from './outlet-section-status.enum';
import type { OutletTableStatus } from './outlet-table-status.enum';
import type { DeliveryType } from './delivery-type.enum';
import type { NoStockStatus } from '../catalog/no-stock-status.enum';
import type { TaxType } from '../catalog/tax-type.enum';
import type { AddressTarget } from '../core/address-target.enum';
import type { BannerTarget } from './banner-target.enum';
import type { BannerPosition } from './banner-position.enum';
import type { CartLineModifierStatus } from '../orders/cart-line-modifier-status.enum';
import type { CartLineStatus } from '../orders/cart-line-status.enum';
import type { SalesOrderPaymentsDto, SalesOrderTaxLinesDto } from '../orders/models';
import type { TenantDto } from '../volo/abp/tenant-management/models';
import type { SaleType } from './sale-type.enum';
import type { BranchDto, BranchOptionsRequestDto } from '../branches/models';
import type { StoreReviewQuestionType } from './store-review-question-type.enum';
import type { PrintTemplateType } from './print-template-type.enum';
import type { StorePageType } from './store-page-type.enum';
import type { StoreTemplateType } from './store-template-type.enum';
import type { CurrencyPosition } from '../core/currency-position.enum';
import type { UserDto } from '../users/models';
import type { SubtotalType } from './subtotal-type.enum';
import type { WarehouseDto } from '../inventory/models';
import type { BasicSaasSubscriptionDto, SaasSubscriptionDto } from '../saas/models';
import type { InvoiceTypeDto } from '../invoices/models';
import type { AddressType } from './address-type.enum';
import type { PaymentMethodProvider } from '../payments/payment-method-provider.enum';
import type { OrderStatus } from '../orders/order-status.enum';
import type { SalesChannelStatus } from './sales-channel-status.enum';
import type { CustomerStoreDto, CustomerSummaryStoreDto } from '../customers/models';
import type { StoreDesignDto } from './themes/models';
import type { ExternalServiceSettingsDto } from '../external-services/models';
import type { StoreStatus } from './store-status.enum';
import type { OrderNumberGenerateMethod } from '../orders/order-number-generate-method.enum';
import type { StoreSupportedCountriesType } from './store-supported-countries-type.enum';
import type { CartMoreItemsOption } from './cart-more-items-option.enum';
import type { OpenSelectOutletDialogOptions } from './open-select-outlet-dialog-options.enum';
import type { StorePageStatus } from './store-page-status.enum';
import type { IconStyle } from './icon-style.enum';
import type { FeaturesHomePosition } from './features-home-position.enum';
import type { FeaturesSectionDesign } from './features-section-design.enum';
import type { IconPosition } from './icon-position.enum';
import type { NewsletterHomePosition } from './newsletter-home-position.enum';
import type { CategoryPadding } from './category-padding.enum';
import type { CategoriesLayoutColumnSizeOnHome } from './categories-layout-column-size-on-home.enum';
import type { CategoriesLayoutHeighSizeOnHome } from './categories-layout-heigh-size-on-home.enum';
import type { DeliveryMethodProvider } from '../delivery/delivery-method-provider.enum';
import type { DeliveryMethodRateType } from '../delivery/delivery-method-rate-type.enum';
import type { OrderPaymentStatus } from '../orders/order-payment-status.enum';
import type { ShippingStatus } from '../orders/shipping-status.enum';
import type { OrderLineStatus } from '../orders/order-line-status.enum';
import type { DeliveryMethodZoneRateDto } from '../delivery/models';
import type { PaymentMethodDto } from '../payments/models';
import type { CouponType } from '../coupons/coupon-type.enum';
import type { CouponStoreDto } from '../coupons/models';
import type { OrderReviewStatus } from '../orders/order-review-status.enum';

export interface OutletDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  image?: string;
  storeId?: string;
  branchId?: string;
  branchName?: string;
  warehouseId?: string;
  warehouseName?: string;
  availableForLiveOrders: boolean;
  deliveryLiveOrdersPreperationTime: number;
  selfPickupLiveOrdersPreperationTime: number;
  dineInLiveOrdersPreperationTime: number;
  availableForScheduledOrders: boolean;
  scheduledOrdersStartingTime: number;
  scheduledOrdersEndingTime: number;
  slotPeriod?: number;
  availableForDelivery: boolean;
  availableForSelfPickup: boolean;
  availableForDineIn: boolean;
  specificTimeTableForDelivery: boolean;
  specificTimeTableForSelfPickup: boolean;
  specificTimeTableForDineIn: boolean;
  email?: string;
  phoneNumber?: string;
  minimumDeliveryLimit: number;
  freeDeliveryLimit: number;
  maxDailyOrders: number;
  creatorUserName?: string;
  lastModifierUserName?: string;
  status: OutletStatus;
  addressId?: string;
  address: AddressDto;
  timeTables: OutletTimeTableDto[];
}

export interface OutletSectionDto extends AuditedEntityDto<string> {
  name?: string;
  status: OutletSectionStatus;
  outletId?: string;
  outlet: OutletDto;
}

export interface OutletTableDto extends AuditedEntityDto<string> {
  name?: string;
  description?: string;
  capacity: number;
  status: OutletTableStatus;
  outletSection: OutletSectionDto;
}

export interface OutletTimeTableDto extends CreationAuditedEntityDto<string> {
  deliveryType: DeliveryType;
  dayOfWeek: any;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export interface ItemDetailStoreDto {
  id?: string;
  sku?: string;
  barcode?: string;
  unitId?: string;
  image?: string;
  calories: number;
  weight: number;
  width: number;
  height: number;
  length: number;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  variantOption1Id?: string;
  variantOption1Value?: string;
  variantOption1Value2?: string;
  variantOption1Value3?: string;
  variantOption2Id?: string;
  variantOption2Value?: string;
  variantOption2Value2?: string;
  variantOption2Value3?: string;
  variantOption3Id?: string;
  variantOption3Value?: string;
  variantOption3Value2?: string;
  variantOption3Value3?: string;
  variantOption4Id?: string;
  variantOption4Value?: string;
  variantOption4Value2?: string;
  variantOption4Value3?: string;
  hasOffers: boolean;
  hasModifierLists: boolean;
  preparationTime: number;
  unitName?: string;
  quantity: number;
  preTaxPrice: number;
  price: number;
  postTaxPrice: number;
  oldPrice: number;
  oldPriceMargin?: number;
  noStockStatus: NoStockStatus;
  cost: number;
  optimalQuantity: number;
}

export interface ItemStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  shortDescription?: string;
  shortDescription2?: string;
  shortDescription3?: string;
  thumbnail?: string;
  images?: string;
  variantOption1Id?: string;
  variantOption1Name?: string;
  variantOption1Name2?: string;
  variantOption1Name3?: string;
  variantOption2Id?: string;
  variantOption2Name?: string;
  variantOption2Name2?: string;
  variantOption2Name3?: string;
  variantOption3Id?: string;
  variantOption3Name?: string;
  variantOption3Name2?: string;
  variantOption3Name3?: string;
  variantOption4Id?: string;
  variantOption4Name?: string;
  variantOption4Name2?: string;
  variantOption4Name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  featured: boolean;
  hideInLatestItems: boolean;
  hideInBestSelling: boolean;
  variantOption1Values: string[];
  variantOption2Values: string[];
  variantOption3Values: string[];
  variantOption4Values: string[];
  stockTracked: boolean;
  brandId?: string;
  itemDetails: ItemDetailStoreDto[];
  categoriesIds: string[];
  taxe: TaxStoreDto;
}

export interface TaxStoreDto {
  id?: string;
  name?: string;
  rate: number;
  type: TaxType;
}

export interface AddStoreReviewReplyDto extends EntityDto<string> {
  reply?: string;
}

export interface AddressStoreDto {
  id?: string;
  label?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  countryId?: string;
  countryName?: string;
  countryLocalName?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  stateProvinceLocalName?: string;
  cityId?: string;
  cityName?: string;
  cityLocalName?: string;
  districtId?: string;
  districtName?: string;
  districtLocalName?: string;
  zipPostalCode?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  phoneNumber?: string;
  storeUserComment?: string;
  longitude?: string;
  latitude?: string;
  accuracy?: number;
  target: AddressTarget;
}

export interface ApplyMarketplaceRequestDto {
  id?: string;
  outletId?: string;
}

export interface ApplyStoreTemplateRequestDto {
  storeTemplateId: string;
  storeId?: string;
}

export interface BannerDto extends AuditedEntityDto<string> {
  title?: string;
  title2?: string;
  title3?: string;
  descriptions?: string;
  descriptions2?: string;
  descriptions3?: string;
  storeId?: string;
  image?: string;
  target: BannerTarget;
  position: BannerPosition;
  externalLink?: string;
  targetId?: string;
  disabled: boolean;
  displayOrder: number;
  creatorUserName?: string;
  lastModifierUserName?: string;
}

export interface BannerFilter {
  disabled?: boolean;
}

export interface BannerStoreDto {
  id?: string;
  title?: string;
  title2?: string;
  title3?: string;
  descriptions?: string;
  descriptions2?: string;
  descriptions3?: string;
  image?: string;
  target: BannerTarget;
  targetSlug?: string;
  targetSlug2?: string;
  targetSlug3?: string;
  targetId?: string;
  position: BannerPosition;
  externalLink?: string;
}

export interface BannersRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
}

export interface BrandStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  image?: string;
  cover?: string;
  hideFromHomePage: boolean;
}

export interface CartLineModifierStoreDto {
  id?: string;
  cartLineId?: string;
  modifierListId?: string;
  modifierListName?: string;
  modifierId?: string;
  modifierName?: string;
  price: number;
  status: CartLineModifierStatus;
}

export interface CartLineStoreDto {
  id?: string;
  cartId?: string;
  itemDetailId?: string;
  item: ItemStoreDto;
  taxId?: string;
  taxRate?: number;
  taxType?: TaxType;
  quantity: number;
  availableQuantity?: number;
  price: number;
  preTaxPrice: number;
  postTaxPrice: number;
  totalPrice: number;
  total: number;
  note?: string;
  status: CartLineStatus;
  modifiersPrice: number;
  cartLineModifiers: CartLineModifierStoreDto[];
}

export interface CartStoreDto {
  id?: string;
  tokenOrUserId?: string;
  isUser: boolean;
  closingDate?: string;
  outletId?: string;
  couponId?: string;
  marketplaceId?: string;
  couponName?: string;
  couponCode?: string;
  subTotal: number;
  includedSubTotalTax: number;
  subTotalTax: number;
  total: number;
  cartLines: CartLineStoreDto[];
  taxLines: SalesOrderTaxLinesDto[];
}

export interface CategoryStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  image?: string;
  cover?: string;
  hideFromHomePage: boolean;
  hideFromHomeMenu: boolean;
  showInFooter: boolean;
  parentId?: string;
  parentName?: string;
}

export interface CompleteRegistrationResponseDto {
  store: StoreDto;
  tenant: TenantDto;
}

export interface CompleteStoreRegistrationDto {
  storeName: string;
  domain: string;
  countryId: string;
  industryId: string;
  saleType: SaleType;
}

export interface CountryStoreDto {
  id?: string;
  name?: string;
  localName?: string;
  timeZone?: string;
  flagImage?: string;
  featured: boolean;
  twoLetterIsoCode?: string;
  threeLetterIsoCode?: string;
  dialingCode: number;
  languages: string[];
}

export interface CreateOutletDto {
  name: string;
  name2?: string;
  name3?: string;
  image?: string;
  storeId?: string;
  warehouseId?: string;
  branchId?: string;
  availableForLiveOrders?: boolean;
  deliveryLiveOrdersPreperationTime?: number;
  selfPickupLiveOrdersPreperationTime?: number;
  dineInLiveOrdersPreperationTime?: number;
  availableForScheduledOrders?: boolean;
  scheduledOrdersStartingTime?: number;
  scheduledOrdersEndingTime?: number;
  slotPeriod?: number;
  availableForDelivery?: boolean;
  availableForSelfPickup?: boolean;
  availableForDineIn?: boolean;
  specificTimeTableForDelivery?: boolean;
  specificTimeTableForSelfPickup?: boolean;
  specificTimeTableForDineIn?: boolean;
  email?: string;
  phoneNumber?: string;
  minimumDeliveryLimit?: number;
  freeDeliveryLimit?: number;
  maxDailyOrders?: number;
  defaultPaymentMethodId?: string;
  defaultDeliveryMethodZoneRateId?: string;
  address: CreateUpdateAddressDto;
  timeTables: CreateUpdateOutletTimeTableDto[];
  options: BranchOptionsRequestDto;
}

export interface CreateOutletSectionDto {
  name: string;
  outletId: string;
  status: OutletSectionStatus;
}

export interface CreateOutletTableDto {
  name: string;
  description?: string;
  capacity: number;
  status: OutletTableStatus;
  outletSectionId: string;
}

export interface CreateStoreDto {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  storeName: string;
  domain: string;
  countryId: string;
  industryId: string;
  appName: string;
  returnUrl?: string;
  returnUrlHash?: string;
  saleType: SaleType;
}

export interface CreateStoreReviewDto {
  questionId: string;
  orderId?: string;
  reviewText?: string;
  reviewRate?: number;
}

export interface CreateStoreReviewQuestionDto {
  type: StoreReviewQuestionType;
  question?: string;
  isRequired: boolean;
}

export interface CreateUpdateBannerDto {
  id?: string;
  title?: string;
  title2?: string;
  title3?: string;
  descriptions?: string;
  descriptions2?: string;
  descriptions3?: string;
  storeId?: string;
  image?: string;
  target: BannerTarget;
  position: BannerPosition;
  externalLink?: string;
  targetId?: string;
  displayOrder: number;
}

export interface CreateUpdateOutletTimeTableDto {
  deliveryType: DeliveryType;
  dayOfWeek: any;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export interface CreateUpdatePrintTemplateDto {
  name: string;
  type: PrintTemplateType;
}

export interface CreateUpdateStorePageDto {
  id?: string;
  name: string;
  name2?: string;
  name3?: string;
  description: string;
  description2?: string;
  description3?: string;
  type: StorePageType;
  image?: string;
  displayOrder: number;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  showInMenu?: boolean;
  showInFooter?: boolean;
}

export interface CreateUpdateStoreTemplateDto {
  id?: string;
  name: string;
  localName?: string;
  price: number;
  url?: string;
  previewImage?: string;
  parentId?: string;
  type: StoreTemplateType;
  featured: boolean;
  cssStyle?: string;
  industryIds: string[];
}

export interface CurrencyStoreDto {
  id?: string;
  name?: string;
  localName?: string;
  symbol?: string;
  localSymbol?: string;
  isoCode?: string;
  position: CurrencyPosition;
  fractionDigit: number;
}

export interface CustomerStoreReviewDto extends EntityDto<string> {
  customerId?: string;
  customerFullName?: string;
  questionId?: string;
  question?: string;
  orderId?: string;
  orderNumber?: string;
  reviewText?: string;
  reviewRate?: number;
  publishDate?: string;
}

export interface CustomerStoreReviewListRequestDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  minDateFilter?: string;
  maxDateFilter?: string;
  type?: StoreReviewQuestionType;
  orderId?: string;
  customerId?: string;
  questionId?: string;
  minRateFilter?: number;
  maxRateFilter?: number;
}

export interface IncompleteStoreDto extends UserDto {
  tenantName?: string;
}

export interface IncompleteStoreRequestDto extends PagedResultRequestDto {
  tenantId?: string;
  search?: string;
}

export interface InvoicePrintTemplateOptionsDto {
  customHeader?: string;
  summaryNote?: string;
  showCustomerBusinessNameBefore?: boolean;
  beforeItemsMessage?: string;
  showPrices?: boolean;
  customerNote?: string;
  footer?: string;
  subtotalType?: SubtotalType;
  showPayments?: boolean;
  showBalance?: boolean;
  showPaymentMethod?: boolean;
  showPaymentMethodNote?: boolean;
  showExtraQuantityColumnOnItems?: boolean;
  extraQuantityColumnTitleOnItems?: string;
  noMarginBeforeItemsTable?: boolean;
  hideOutletDetails?: boolean;
}

export interface MyStoreDto {
  store: StoreDto;
  options: StoreOptionsDto;
  outlets: OutletDto[];
  branches: BranchDto[];
  warehouses: WarehouseDto[];
  currency: CurrencyDto;
  country: CountryDto;
  subscription: BasicSaasSubscriptionDto;
  invoiceTypes: InvoiceTypeDto[];
}

export interface OutletFilter {
  status?: OutletStatus;
}

export interface OutletOptionsDto {
  defaultPaymentMethodId?: string;
  defaultDeliveryMethodZoneRateId?: string;
  availableForLiveOrders: boolean;
  deliveryLiveOrdersPreperationTime: number;
  selfPickupLiveOrdersPreperationTime: number;
  dineInLiveOrdersPreperationTime: number;
  availableForScheduledOrders: boolean;
  scheduledOrdersStartingTime: number;
  scheduledOrdersEndingTime?: number;
  slotPeriod?: number;
  availableForDelivery: boolean;
  availableForSelfPickup: boolean;
  availableForDineIn: boolean;
  specificTimeTableForDelivery: boolean;
  specificTimeTableForSelfPickup: boolean;
  specificTimeTableForDineIn: boolean;
  email?: string;
  phoneNumber?: string;
  minimumDeliveryLimit: number;
  freeDeliveryLimit: number;
  maxDailyOrders: number;
  addressType?: AddressType;
}

export interface OutletSectionRequestDto extends PagedAndSortedResultRequestDto {
  outletId?: string;
  status?: OutletSectionStatus;
}

export interface OutletSectionStoreDto {
  outletId?: string;
  id?: string;
  name?: string;
  status: OutletSectionStatus;
  outletTables: OutletTableStoreDto[];
}

export interface OutletStoreDto {
  tenantId?: string;
  storeId?: string;
  id?: string;
  warehouseId?: string;
  branchId?: string;
  name?: string;
  name2?: string;
  name3?: string;
  image?: string;
  status: OutletStatus;
  availableForLiveOrders: boolean;
  deliveryLiveOrdersPreperationTime: number;
  selfPickupLiveOrdersPreperationTime: number;
  dineInLiveOrdersPreperationTime: number;
  availableForScheduledOrders: boolean;
  scheduledOrdersStartingTime: number;
  availableForDelivery: boolean;
  availableForSelfPickup: boolean;
  availableForDineIn: boolean;
  specificTimeTableForDelivery: boolean;
  specificTimeTableForSelfPickup: boolean;
  specificTimeTableForDineIn: boolean;
  email?: string;
  phoneNumber?: string;
  minimumDeliveryLimit: number;
  freeDeliveryLimit: number;
  maxDailyOrders: number;
  hasTaxes: boolean;
  addressId?: string;
  isDefault: boolean;
  address: AddressStoreDto;
  timeTables: OutletTimeTableStoreDto[];
}

export interface OutletTableRequestDto extends PagedAndSortedResultRequestDto {
  status?: OutletTableStatus;
  outletId?: string;
  outletSectionId?: string;
}

export interface OutletTableStoreDto {
  id?: string;
  name?: string;
  description?: string;
  capacity: number;
  status: OutletTableStatus;
  outletSectionId?: string;
}

export interface OutletTimeTableStoreDto {
  id?: string;
  deliveryType: DeliveryType;
  dayOfWeek: any;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export interface PaymentMethodStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  provider: PaymentMethodProvider;
  providerType?: number;
  displayOrder: number;
  transactionFeesPercentage: number;
  transactionFeesFixedAmount: number;
  providerPublicKey?: string;
  image?: string;
}

export interface PrintTemplateDto extends FullAuditedEntityDto<string> {
  name?: string;
  type?: PrintTemplateType;
}

export interface PrintTemplatesRequestDto extends PagedAndSortedResultRequestDto {
  type?: PrintTemplateType;
}

export interface PublishStoreReviewRequestDto {
  publish: boolean;
  storeReviewIds: string[];
}

export interface QuickCheckoutDto {
  defaultPaymentMethodId?: string;
  defaultAddress: AddressStoreDto;
  paymentMethods: PaymentMethodStoreDto[];
}

export interface ReceiptPrintTemplateDto {
  receiptFontSize?: number;
  showImage?: boolean;
  image?: string;
  customHeader?: string;
  beforeItemsMessage?: string;
  showExtraQuantityColumnOnItems?: boolean;
  footer?: string;
  extraQuantityColumnTitleOnItems?: string;
}

export interface ReorderQuestionDto {
  questionId?: string;
  displayOrder: number;
}

export interface ReorderQuestionListRequestDto {
  questions: ReorderQuestionDto[];
}

export interface ReviewSettingsDto {
  allOrderLinesRequiredToReviewItems: boolean;
  isTextRequiredToReviewItems: boolean;
  isNotHelpFullEnabled: boolean;
  canUpdateAfterPublish: boolean;
  orderStatus: OrderStatus[];
}

export interface SalesChannelDto {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  url?: string;
  providerUrl?: string;
  activationDate?: string;
  status: SalesChannelStatus;
}

export interface SimpleStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
}

export interface SimpleStoreOwnerDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  logo?: string;
  domains?: string;
  ownerName?: string;
  ownerPhoneNumber?: string;
  ownerEmail?: string;
  ownerEmailConfirmed: boolean;
  ownerPhoneNumberConfirmed: boolean;
  ownerCreationTime?: string;
}

export interface StoreAdvanceDetailsDto {
  numberOfOutlets: number;
  numberOfItems: number;
  numberOfCategories: number;
  numberOfUsers: number;
  numberOfInvoiceTypes: number;
  numberOfPOSs: number;
  numberOfModifiers: number;
  numberOfModifierLists: number;
  numberOfDeliveryMethods: number;
  numberOfPaymentMethods: number;
  numberOfTaxes: number;
  numberOfPages: number;
}

export interface StoreBasicDetailsDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  about?: string;
  about2?: string;
  about3?: string;
  logo?: string;
  languages: string[];
  domains: string[];
  mobileStoreTemplateId?: string;
  mobileStoreTemplate: StoreTemplateDto;
  webStoreTemplateId?: string;
  webStoreTemplate: StoreTemplateDto;
  currencyId?: string;
  currencyName?: string;
  countryId?: string;
  countryName?: string;
  industryId?: string;
  industryName?: string;
}

export interface StoreConfigDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  about?: string;
  about2?: string;
  about3?: string;
  companyName?: string;
  logo?: string;
  icon?: string;
  defaultImage?: string;
  mobilePhone?: string;
  whatsApp?: string;
  landline?: string;
  email?: string;
  telegram?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  snapchat?: string;
  ticktok?: string;
  android?: string;
  iOS?: string;
  maroof?: string;
  iOSVersion?: string;
  iOSMinVersion?: string;
  androidVersion?: string;
  androidMinVersion?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  languages: string[];
  token?: string;
  shoppingCart: CartStoreDto;
  currency: CurrencyStoreDto;
  countryId?: string;
  country: CountryStoreDto;
  customer: CustomerSummaryStoreDto;
  outlets: OutletStoreDto[];
  categories: CategoryStoreDto[];
  brands: BrandStoreDto[];
  pages: StorePageStoreDto[];
  banners: BannerStoreDto[];
  options: StoreOptionsDto;
  mobileTemplateOptions: StoreTemplateOptionsDto;
  webTemplateOptions: StoreTemplateOptionsDto;
  configFeatures: StoreConfigFeaturesDto;
  paymentTypes: StoreConfigPaymentTypesDto;
  storeDesign: StoreDesignDto;
  features: StoreFeaturesDto[];
  externalServices: ExternalServiceSettingsDto;
  status: StoreStatus;
  privacyPolicyPageSlug?: string;
  privacyPolicyPageSlug2?: string;
  privacyPolicyPageSlug3?: string;
  termsAndConditionsPageSlug?: string;
  termsAndConditionsPageSlug2?: string;
  termsAndConditionsPageSlug3?: string;
  newsletterText?: string;
  newsletterText2?: string;
  newsletterText3?: string;
  tenantId?: string;
  domains: string[];
}

export interface StoreConfigFeaturesDto {
  coupons: boolean;
  notifications: boolean;
  loyaltyProgram: boolean;
  onlinePayments: boolean;
  storeReviews: boolean;
  itemReviews: boolean;
  enabledCardPaymentGateway?: string;
}

export interface StoreConfigPaymentTypesDto {
  cash: boolean;
  bankTransfer: boolean;
  payPal: boolean;
  fpx: boolean;
  alipay: boolean;
  grabpay: boolean;
  sofort: boolean;
  klarna: boolean;
  giropay: boolean;
  sepaDebit: boolean;
  kNet: boolean;
  moamalat: boolean;
  tadauwel: boolean;
  almadar: boolean;
  edfaL: boolean;
  mobiCash: boolean;
  amex: boolean;
  benefit: boolean;
  applePay: boolean;
  stcPay: boolean;
  omanNet: boolean;
  meeza: boolean;
  zaad: boolean;
  edahab: boolean;
  pbwallet: boolean;
  visa: boolean;
  mastercard: boolean;
  americanExpress: boolean;
  mada: boolean;
  troy: boolean;
  numo: boolean;
  watani: boolean;
  travel: boolean;
  tadawulCard: boolean;
  moamalatCard: boolean;
  sadad: boolean;
  edfaLCard: boolean;
  kNetCard: boolean;
  benefitCard: boolean;
  qPay: boolean;
  applePayCard: boolean;
}

export interface StoreDetailsDto {
  storeOwnerDetailsDto: StoreOwnerDetailsDto;
  storeBasicDetailsDto: StoreBasicDetailsDto;
  storeAdvanceDetailsDto: StoreAdvanceDetailsDto;
}

export interface StoreDomainRequestDto {
  storeId: string;
  domain?: string;
}

export interface StoreDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  about?: string;
  about2?: string;
  about3?: string;
  goodsName?: string;
  goodsName2?: string;
  goodsName3?: string;
  logo?: string;
  icon?: string;
  defaultImage?: string;
  mobilePhone?: string;
  whatsApp?: string;
  landline?: string;
  email?: string;
  telegram?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  snapchat?: string;
  ticktok?: string;
  android?: string;
  iOS?: string;
  maroof?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  languages: string[];
  domains: string[];
  mobileStoreTemplateId?: string;
  mobileStoreTemplate: StoreTemplateDto;
  webStoreTemplateId?: string;
  webStoreTemplate: StoreTemplateDto;
  customizedThemeId?: string;
  themeId?: string;
  currencyId?: string;
  currencyName?: string;
  countryId?: string;
  countryName?: string;
  industryId?: string;
  industryName?: string;
  creatorUserName?: string;
  lastModifierUserName?: string;
  status: StoreStatus;
  hasSubscription: boolean;
  isMarketplace: boolean;
  marketplaceId?: string;
  outlets: OutletDto[];
  subscriptions: SaasSubscriptionDto[];
  tenantId?: string;
  id2?: string;
}

export interface StoreFeaturesDto {
  title?: string;
  title2?: string;
  title3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  image?: string;
  url?: string;
}

export interface StoreFullPageStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  type: StorePageType;
  publishDate?: string;
  image?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  showInMenu: boolean;
  showInFooter: boolean;
}

export interface StoreListAppliedMarketplaceDto extends PagedAndSortedResultRequestDto {
}

export interface StoreManifestDto {
  name?: string;
  short_name?: string;
  description?: string;
  icons: StoreManifestIconDto[];
  start_url?: string;
  scope?: string;
  display?: string;
  orientation?: string;
  background_color?: string;
  theme_color?: string;
  gcm_sender_id?: string;
}

export interface StoreManifestIconDto {
  src?: string;
  type?: string;
  sizes?: string;
  purpose?: string;
}

export interface StoreOptionsDto {
  hideProviderInfo?: boolean;
  showCalories?: boolean;
  showPreparationTime?: boolean;
  showSoldQuantity?: boolean;
  isBarcodeEnabled?: boolean;
  mustChooseLanguageFirst?: boolean;
  installableAppEnabled?: boolean;
  selectedCategoryId?: string;
  canEditPhoneNumberPrefix?: boolean;
  phoneNumberVerificationEnabled?: boolean;
  allowCustomerToSelectedOutlet?: boolean;
  mustSelectOutletBeforeAddToCart?: boolean;
  isLoginFirstEnabled?: boolean;
  isSelfSignupEnabled?: boolean;
  newLineInCart?: boolean;
  orderNumberMethod?: OrderNumberGenerateMethod;
  isFavoriteItemsEnabled?: boolean;
  goToSeperateSubCategories?: boolean;
  forceLoginBeforeAddToCart?: boolean;
  hideEmail?: boolean;
  emailRequired?: boolean;
  disablePlaceOrderAsGuest?: boolean;
  addressType?: AddressType;
  phoneSupportedCountriesType: StoreSupportedCountriesType;
  deliverySupportedCountriesType: StoreSupportedCountriesType;
  showItemPreTaxPrice?: boolean;
  showItemPostTaxPrice?: boolean;
  enableCancelButtonInOrder?: boolean;
  orderShippingStatuses?: string;
  facebookPixelId?: string;
  facebookApplId?: string;
  googlTrackingId?: string;
  tidioPublicKey?: string;
  enableBusinessAccount?: boolean;
  showAcceptAgreementCheckboxOnSignup?: boolean;
  privacyPolicyPageId?: string;
  termsAndConditionsPageId?: string;
  autoBackWhenAddToCartOnItem?: boolean;
  autoOpenCartWhenAddItemToCart?: boolean;
  isStoreBlogEnabled?: boolean;
  cartMoreItemsOption?: CartMoreItemsOption;
  enableQuickCheckout?: boolean;
  disableAddToCartOnItem?: boolean;
  hidePrices?: boolean;
  enableNewsletter?: boolean;
  enableServicesStore?: boolean;
  sendOrderOnWhatsApp?: boolean;
  isInquiryOnWhatsAppEnabled?: boolean;
  showAcceptAgreementCheckboxOnCheckout?: boolean;
  changeAddToCartToSelectOption?: boolean;
  showSelectOutletDialog?: OpenSelectOutletDialogOptions;
  hideOutOfStockItems?: boolean;
  addressOnMapEnabled?: boolean;
}

export interface StoreOwnerDetailsDto {
  name?: string;
  phoneNumber?: string;
  email?: string;
  emailConfirmed: boolean;
  phoneNumberConfirmed: boolean;
  creationTime?: string;
}

export interface StorePageDto extends FullAuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  image?: string;
  type: StorePageType;
  status: StorePageStatus;
  publishDate?: string;
  displayOrder: number;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  showInMenu: boolean;
  showInFooter: boolean;
}

export interface StorePageListDto extends EntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  type: StorePageType;
  image?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
}

export interface StorePageRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  type?: StorePageType;
}

export interface StorePageStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  image?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  type: StorePageType;
  status: StorePageStatus;
  publishDate?: string;
  showInMenu: boolean;
  showInFooter: boolean;
}

export interface StoreRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  currencyId?: string;
  countryId?: string;
  industryId?: string;
  productId?: string;
  status?: StoreStatus;
}

export interface StoreReviewDto extends EntityDto<string> {
  customerId?: string;
  customerFullName?: string;
  questionId?: string;
  orderNumber?: string;
  question?: string;
  orderId?: string;
  reviewText?: string;
  reviewRate?: number;
  publishDate?: string;
  replyDate?: string;
  replierId?: string;
  replierFullName?: string;
  replyText?: string;
}

export interface StoreReviewListRequestDto extends CustomerStoreReviewListRequestDto {
  isPublished?: boolean;
  replierId?: string;
}

export interface StoreReviewQuestionDto extends EntityDto<string> {
  type: StoreReviewQuestionType;
  question?: string;
  textReviewsCount: number;
  rateReviewsCount: number;
  rateReviewsTotal: number;
  rateReviewsAverage: number;
  isRequired: boolean;
  displayOrder: number;
  disabled: boolean;
}

export interface StoreReviewQuestionListRequestDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  minDateFilter?: string;
  maxDateFilter?: string;
  disabled?: boolean;
  type?: StoreReviewQuestionType;
}

export interface StoreSummaryReportDto {
  numberOfOrders: number;
  numberOfInvoices: number;
}

export interface StoreSummaryRequestDto {
  fromDate?: string;
  toDate?: string;
}

export interface StoreTemplateDto extends FullAuditedEntityDto<string> {
  name?: string;
  localName?: string;
  price: number;
  url?: string;
  previewImage?: string;
  parentId?: string;
  parentName?: string;
  type: StoreTemplateType;
  featured: boolean;
  disabled: boolean;
  customized: boolean;
  creatorUserName?: string;
  lastModifierUserName?: string;
  industries: IndustryDto[];
  industriesIds: string[];
}

export interface StoreTemplateFilter {
  type?: StoreTemplateType;
  parentId?: string;
  disabled?: boolean;
}

export interface StoreTemplateOptionsDto {
  font?: string;
  color?: string;
  frontColor?: string;
  showTabs?: boolean;
  iconsStyle?: IconStyle;
  showCartOnHeader?: boolean;
  showFavoriteOnHeader?: boolean;
  showAccountOnHeader?: boolean;
  showStickyButtonOnMenuHeader?: boolean;
  showBarcodeOnHeader?: boolean;
  showSearchOnHeader?: boolean;
  showMenuHeader?: boolean;
  headerColor?: string;
  headerFrontColor?: string;
  showLanguagButtonsOnAdHeader?: boolean;
  showLanguagButtonsOnMainHeader?: boolean;
  showLanguagButtonsOnMenuHeader?: boolean;
  footerColor?: string;
  footerFrontColor?: string;
  footerHeadingColor?: string;
  defaultItemsView?: number;
  showItemsCardView?: boolean;
  showItemsWideView?: boolean;
  showBackgroundTitleOnCategoryCard?: boolean;
  showSubcategoriesOnCatalog?: boolean;
  showQuantityInFooterOnItem?: boolean;
  showQuantityBesideCartBtnOnItem?: boolean;
  showBuyNowBtnOnItem?: boolean;
  showStockQuantityLabelOnItem?: boolean;
  showStockQuantityOnItem?: boolean;
  itemVariantsView?: number;
  showTaxLabelOnItem?: boolean;
  showItemSkuOnItem?: boolean;
  showBordersOnItemCard?: boolean;
  showAddToCartOnItemCard?: boolean;
  showFavourateOnItemCard?: boolean;
  forceImageHeightOnItemCard?: string;
  showBordersOnCategoryCard?: boolean;
  showNameSeperatedOnCategoryCard?: boolean;
  showCategoryName?: boolean;
  showSideMenuCart?: boolean;
  minimumDeliveryLimitColor?: string;
  minimumDeliveryLimitFrontColor?: string;
  freeDeliveryLimitColor?: string;
  freeDeliveryLimitFrontColor?: string;
  showMainBannerOnHome?: boolean;
  fullWidthBannersOnHome?: boolean;
  showStorePromoOnHome?: boolean;
  showCategoriesSliderOnHome?: boolean;
  showCategoriesListTopOnHome?: boolean;
  showCategoriesListBottomOnHome?: boolean;
  maxCategoriesOnHome?: number;
  showFeaturedItemsOnHome?: boolean;
  showOffersItemsOnHome?: boolean;
  showBestsellerItemsOnHome?: boolean;
  showLatestItemsOnHome?: boolean;
  showItemsListOnHome?: boolean;
  showCancelButtonOnOrder?: boolean;
  maxItemsOnHome?: number;
  showCatalogMenuOnHome?: boolean;
  showCatalogMenuExpandableCategoryOnHome?: boolean;
  showDeliveryTimeForLiveOrders?: boolean;
  showOutletOpenStatus?: boolean;
  showOutletCloseStatus?: boolean;
  showHomeSliderArrows?: boolean;
  showPaymentAndDeliveryOptionsTabOnMenuHeader?: boolean;
  showCategoryListOnMenuHeaderVertically?: boolean;
  categoryTabColorInMenuHeader?: string;
  showLoyaltyProgrameAlertForGuest?: boolean;
  featuresHomePosition?: FeaturesHomePosition;
  featuresSectionDesign?: FeaturesSectionDesign;
  showFeaturesOnItemPage?: boolean;
  showFeaturesOnHome?: boolean;
  showFeaturesTitle?: boolean;
  showFeaturesCardBorder?: boolean;
  storeFeaturesColor?: string;
  storeFeaturesFrontColor?: string;
  storeFeaturesBorderColor?: string;
  storeFeaturesDescriptionFrontColor?: string;
  storeFeaturesDescriptionColor?: string;
  showFeaturedTagOnItemCard?: boolean;
  showOfferTagOnItemCard?: boolean;
  showIconInMenuHeader?: IconPosition;
  showItemImagesPreviewOnMobile?: boolean;
  showMobileCartSummaryOnHome?: boolean;
  showDescriptionOnItemWideCard?: boolean;
  showFavoriteBesideCartBtnOnItemCard?: boolean;
  showFavoriteBesideItemNameOnItemCard?: boolean;
  showBrandsSliderOnHome?: boolean;
  showBordersOnBrandCard?: boolean;
  showBackgroundTitleOnBrandCard?: boolean;
  showHomeOnMenuHeader?: boolean;
  showAllProductsOnMenuHeader?: boolean;
  showAllCategoriesOnMenuHeader?: boolean;
  showAllBrandsOnMenuHeader?: boolean;
  showStoreBlogOnMenuHeader?: boolean;
  showMyOrdersOnMenuHeader?: boolean;
  showRegistrationLoyaltyProgramFeature?: boolean;
  showPurchaseLoyaltyProgramFeature?: boolean;
  showExchangeRateLoyaltyProgramFeature?: boolean;
  showInvitationLoyaltyProgramFeature?: boolean;
  showMinimumOrderTotalLoyaltyProgramFeature?: boolean;
  showChangeLanguagePopupButtonOnMainHeader?: boolean;
  showChangeLanguagePopupButtonOnMenuHeader?: boolean;
  showPaymenCardsInFooter?: boolean;
  showNewsletterInFooter?: boolean;
  showNewsletterOnHome?: boolean;
  showCategoryListInFooter?: boolean;
  showCategoryCardInCategoriesSliderAsCircle?: boolean;
  changeItemImageWhenHover?: boolean;
  categoryCardTitleColor?: string;
  newsletterHomePosition?: NewsletterHomePosition;
  categoryPadding?: CategoryPadding;
  categoriesLayoutColumnSizeOnHome?: CategoriesLayoutColumnSizeOnHome;
  categoriesLayoutHeighSizeOnHome?: CategoriesLayoutHeighSizeOnHome;
  showMobileCartSummaryOnItems?: boolean;
  showBordersOnOutletCard?: boolean;
  showLocationOnMapOnOutletCard?: boolean;
  showContactOutletOnOutletCard?: boolean;
  showOurOutletsOnMenuHeader?: boolean;
  showLineBetweenOutlets?: boolean;
  showShareOnSocialMediaUnderTitleOnItem?: boolean;
  showShareOnSocialMediaAboveAddToCartOnItem?: boolean;
  showOurOutletsInFooter?: boolean;
  showOutletAddressInFooter?: boolean;
  showDiscountNoteOnItem?: boolean;
  showItemSliderArrows?: boolean;
  showItemImageInFullScreen?: boolean;
  itemPriceColor?: string;
  discountNoteColor?: string;
  discountNoteBackgroundColor?: string;
  showCaloriesOnItem?: boolean;
  showCaloriesOnItemCard?: boolean;
  showShareOnFacebookOnItem?: boolean;
  showShareOnTwitterOnItem?: boolean;
  showShareOnWhatsappOnItem?: boolean;
  showCopyLinkOnItem?: boolean;
  showCartQuantityOnItemCard?: boolean;
  showOutletCoverOnHome?: boolean;
  showOutletHeaderOnHome?: boolean;
  showStoreNameOnOutletHeaderOnHome?: boolean;
  showOutletNameOnOutletHeaderOnHome?: boolean;
  showDeliveryTypeAndTimeSectionOnHome?: boolean;
  showLoyaltyProgramNoteOnHome?: boolean;
  showBordersOnCatalogMenuItemsOnHome?: boolean;
  showMultiVariantsPriceFromOnItemCard?: boolean;
  showMultiVariantsPriceFromToOnItemCard?: boolean;
  hideLinearMenuHeader?: boolean;
  showNestedMenuHeader?: boolean;
  hideCategoriesCardsOnCategoriesPage?: boolean;
  showCategoryPreviewSliderOnCategoriesPage?: boolean;
  showPhoneNumberOnOutletHeaderOnHome?: boolean;
  showPreperationTimeOnOutletHeaderOnHome?: boolean;
  showMinimumCartLimitOnOutletHeaderOnHome?: boolean;
  hideFooter?: boolean;
}

export interface StoreTemplateRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
  type?: StoreTemplateType;
}

export interface StorefrontCustomerServiceDto {
  mobilePhone?: string;
  whatsApp?: string;
  landline?: string;
  email?: string;
  telegram?: string;
}

export interface StorefrontDto {
  id?: string;
  tenantId?: string;
  token?: string;
  isMarketplace: boolean;
  status: StoreStatus;
  name?: string;
  about?: string;
  companyName?: string;
  logo?: string;
  icon?: string;
  defaultImage?: string;
  languages: string[];
  customerService: StorefrontCustomerServiceDto;
  socialMedia: StorefrontSocialMediaDto;
  seo: StorefrontSEODto;
  currency: CurrencyStoreDto;
  country: CountryStoreDto;
  outlet: OutletStoreDto;
  relatedStores: StorefrontRelatedStoresDto[];
  hasOutlets: boolean;
  categories: CategoryStoreDto[];
  brands: BrandStoreDto[];
  pages: StorePageStoreDto[];
  options: StoreOptionsDto;
  configFeatures: StoreConfigFeaturesDto;
  paymentTypes: StoreConfigPaymentTypesDto;
  theme: StoreDesignDto;
  externalServices: ExternalServiceSettingsDto;
  reviewSettings: ReviewSettingsDto;
}

export interface StorefrontPageDto {
  privacyPolicyPageSlug?: string;
  privacyPolicyPageSlug2?: string;
  privacyPolicyPageSlug3?: string;
  termsAndConditionsPageSlug?: string;
  termsAndConditionsPageSlug2?: string;
  termsAndConditionsPageSlug3?: string;
}

export interface StorefrontPageRequestDto {
  privacyPolicyPageId?: string;
  termsAndConditionsPageId?: string;
}

export interface StorefrontRelatedStoresDto {
  tenantId?: string;
  storeId?: string;
  storeName?: string;
  storeAbout?: string;
  outletId?: string;
  outletName?: string;
  industryId?: string;
  industryName?: string;
  logo?: string;
  domains?: string;
  creationTime?: string;
  saleType: SaleType;
  averageRatings: number;
}

export interface StorefrontSEODto {
  metaTitle?: string;
  metaDescription?: string;
}

export interface StorefrontSocialMediaDto {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  snapchat?: string;
  ticktok?: string;
}

export interface UpdateOutletDto {
  id?: string;
  name: string;
  name2?: string;
  name3?: string;
  image?: string;
  warehouseId?: string;
  branchId?: string;
  availableForLiveOrders?: boolean;
  deliveryLiveOrdersPreperationTime?: number;
  selfPickupLiveOrdersPreperationTime?: number;
  dineInLiveOrdersPreperationTime?: number;
  availableForScheduledOrders?: boolean;
  scheduledOrdersStartingTime?: number;
  availableForDelivery?: boolean;
  availableForSelfPickup?: boolean;
  availableForDineIn?: boolean;
  specificTimeTableForDelivery?: boolean;
  specificTimeTableForSelfPickup?: boolean;
  specificTimeTableForDineIn?: boolean;
  email?: string;
  phoneNumber?: string;
  minimumDeliveryLimit?: number;
  freeDeliveryLimit?: number;
  maxDailyOrders?: number;
  defaultPaymentMethodId?: string;
  defaultDeliveryMethodZoneRateId?: string;
  address: CreateUpdateAddressDto;
  timeTables: CreateUpdateOutletTimeTableDto[];
}

export interface UpdateOutletSectionDto {
  id?: string;
  name: string;
  outletId: string;
}

export interface UpdateOutletTableDto {
  id?: string;
  name: string;
  description?: string;
  capacity: number;
  outletSectionId: string;
}

export interface UpdateStoreBasicDto {
  id?: string;
  name: string;
  name2?: string;
  name3?: string;
  about?: string;
  about2?: string;
  about3?: string;
  goodsName?: string;
  goodsName2?: string;
  goodsName3?: string;
  logo?: string;
  icon?: string;
  defaultImage?: string;
  mobilePhone?: string;
  whatsApp?: string;
  landline?: string;
  email?: string;
  telegram?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  snapchat?: string;
  ticktok?: string;
  android?: string;
  iOS?: string;
  maroof?: string;
}

export interface UpdateStoreReviewDto {
  reviewText?: string;
  reviewRate?: number;
}

export interface UpdateStoreReviewQuestionDto {
  type: StoreReviewQuestionType;
  question?: string;
  isRequired: boolean;
}

export interface UpdateStoreSeoDto {
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
}

export interface DeliveryMethodZoneRateStoreDto {
  id?: string;
  deliveryMethodId?: string;
  provider: DeliveryMethodProvider;
  providerType?: number;
  deliveryMethodName?: string;
  deliveryMethodName2?: string;
  deliveryMethodName3?: string;
  name?: string;
  name2?: string;
  name3?: string;
  note?: string;
  note2?: string;
  note3?: string;
  duration: number;
  maxDuration: number;
  deliveryFees: number;
  minimumDeliveryLimit: number;
  freeDeliveryLimit: number;
  deliveryMethodRate: DeliveryMethodRateType;
  isOnDeliveryPaymentEnabled: boolean;
  countryId?: string;
  provinceOrStates?: string;
  cities?: string;
  postalCodes?: string;
}

export interface DeliveryMethodZoneRateWithAddressDto {
  address: AddressStoreDto;
  deliveryMethodZoneRate: DeliveryMethodZoneRateStoreDto;
}

export interface ModifierListStoreDto {
  id?: string;
  name?: string;
  displayName?: string;
  displayName2?: string;
  displayName3?: string;
  min: number;
  max: number;
  allowMultiple: boolean;
  required: boolean;
  modifiersNames: string[];
  modifiers: ModifierStoreDto[];
}

export interface ModifierStoreDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  price: number;
}

export interface SalesOrderHistoryStoreDto {
  id?: string;
  creationTime?: string;
  status?: OrderStatus;
  paymentStatus?: OrderPaymentStatus;
  shippingStatus?: ShippingStatus;
  note?: string;
  notified: boolean;
}

export interface SalesOrderLineModifierListStoreDto {
  orderLineId?: string;
  modifierListId?: string;
  modifierList: ModifierListStoreDto;
  modifierId?: string;
  modifier: ModifierStoreDto;
  price: number;
}

export interface SalesOrderLineStoreDto {
  id?: string;
  orderId?: string;
  itemDetailId?: string;
  itemDetail: ItemDetailStoreDto;
  item: ItemStoreDto;
  price: number;
  quantity: number;
  status: OrderLineStatus;
  referenceId?: string;
  total: number;
  note?: string;
  taxId?: string;
  taxRate?: number;
  taxType?: TaxType;
  taxName?: string;
  taxName2?: string;
  taxName3?: string;
  preTaxPrice: number;
  taxPrice: number;
  postTaxPrice: number;
  canceledQuantity: number;
  remainingQuantity: number;
  packedQuantity: number;
  shippedQuantity: number;
  deliveredQuantity: number;
  rejectionReason?: string;
  orderLineModifierLists: SalesOrderLineModifierListStoreDto[];
}

export interface SalesOrderStoreDto {
  id?: string;
  number?: string;
  tenantId?: string;
  storeId?: string;
  storeName?: string;
  outletId?: string;
  customerId?: string;
  customer: CustomerStoreDto;
  address: AddressStoreDto;
  deliveryType: DeliveryType;
  deliveryMethodZoneRateId?: string;
  deliveryMethodZoneRate: DeliveryMethodZoneRateDto;
  paymentMethodId?: string;
  paymentMethod: PaymentMethodDto;
  status: OrderStatus;
  paymentStatus: OrderPaymentStatus;
  shippingStatus: ShippingStatus;
  currencyId?: string;
  currencyRate: number;
  note?: string;
  subTotal: number;
  includedSubTotalTax: number;
  subTotalTax: number;
  deliveryFees: number;
  deliveryFeesTax: number;
  paymentMethodAdditionalFees: number;
  paymentMethodAdditionalFeesTax: number;
  discount: number;
  rewardPointsDiscount: number;
  rewardPoints?: number;
  extra: number;
  refundedAmount: number;
  paidAmount: number;
  total: number;
  unpaidAmount: number;
  date?: string;
  deliveryDate?: string;
  isScheduled: boolean;
  itemsCount: number;
  couponType?: CouponType;
  couponId?: string;
  isFreeShippingFee?: boolean;
  discountValue?: number;
  code?: string;
  coupon: CouponStoreDto;
  outletTable: OutletTableDto;
  reviewStatus: OrderReviewStatus;
  orderLines: SalesOrderLineStoreDto[];
  orderHistories: SalesOrderHistoryStoreDto[];
  taxLines: SalesOrderTaxLinesDto[];
  orderPayments: SalesOrderPaymentsDto[];
}
