import type { SaasIntervalUnit } from './saas-interval-unit.enum';
import type { SaasSubscriptionStatus } from './saas-subscription-status.enum';
import type { CountryDto, CurrencyDto } from '../core/models';
import type { FeatureDto, GetFeatureListResultDto } from '../volo/abp/feature-management/models';
import type { SubscriptionExpiryAction } from './subscription-expiry-action.enum';
import type { SaasCouponType } from './saas-coupon-type.enum';
import type { SaasDiscountType } from './saas-discount-type.enum';
import type { PaymentMethodProvider } from '../payments/payment-method-provider.enum';
import type { AuditedEntityDto, CreationAuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import type { SaasInvoiceStatus } from './saas-invoice-status.enum';
import type { InvoicePaymentStatus } from '../invoices/invoice-payment-status.enum';
import type { StoreBasicDetailsDto } from '../stores/models';
import type { SaasOrderType } from './saas-order-type.enum';
import type { SaasOrderStatus } from './saas-order-status.enum';
import type { OrderPaymentStatus } from '../orders/order-payment-status.enum';
import type { PaymentStatus } from '../payments/payment-status.enum';
import type { PayPalCreateOrderDto } from '../payments/models';
import type { PayPalType } from '../payments/pay-pal-type.enum';
import type { StripeType } from '../payments/stripe-type.enum';
import type { SaasActionBy } from './saas-action-by.enum';
import type { SaasActionReason } from './saas-action-reason.enum';

export interface AddEditEditionTranslationDto {
  language: string;
  name: string;
  description?: string;
  title?: string;
  subtitle?: string;
}

export interface ApplySaasCouponDto {
  subscriptionId: string;
  couponCode?: string;
}

export interface ApplySaasCouponInvoiceDto {
  invoiceId: string;
  couponCode?: string;
}

export interface ApplySaasCouponOrderDto {
  orderId: string;
  couponCode?: string;
}

export interface ApplySaasCouponResponseDto {
  message?: string;
}

export interface BasicSaasProductDto {
  id?: string;
  name?: string;
  code?: string;
  isDefault: boolean;
}

export interface BasicSaasSubscriptionDto {
  id?: string;
  editionId?: string;
  editionCode?: string;
  editionName?: string;
  editionLocalName?: string;
  intervalUnit?: SaasIntervalUnit;
  interval?: number;
  status: SaasSubscriptionStatus;
  startDate?: string;
  endDate?: string;
  startBillingDate?: string;
  endBillingDate?: string;
  activationDate?: string;
  expiresDate?: string;
  cancellationDate?: string;
  disableDate?: string;
  nextBillingDate?: string;
  trialDays: number;
  trialDaysLeft: number;
  dunningDaysLeft: number;
  isThereOrderPending: boolean;
  isEditionFree: boolean;
  showEndTrialAlert: boolean;
  showExpiringAlert: boolean;
  currency: CurrencyDto;
}

export interface CheckSaasCouponEligibilityDto {
  couponCode: string;
  productCode?: string;
  editionId?: string;
}

export interface CompareEditionsFeaturesDto {
  intervalUnit: SaasIntervalUnit;
  interval: number;
  editions: CompareEditionsFeaturesItemDto[];
}

export interface CompareEditionsFeaturesItemDto {
  id?: string;
  name?: string;
  localName?: string;
  description?: string;
  localDescription?: string;
  code?: string;
  price: number;
  trialDays: number;
  currency: CurrencyDto;
  features: GetFeatureListResultDto;
}

export interface CompareEditionsFeaturesRequestDto {
  productCode?: string;
  withFeatures?: boolean;
}

export interface CreateSaasEditionDto {
  productId: string;
  name: string;
  localName?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  localDescription?: string;
  code: string;
  image?: string;
  url?: string;
  price: number;
  oldPrice?: number;
  trialDays: number;
  intervalUnit: SaasIntervalUnit;
  interval: number;
  billingCycles: number;
  expiryWaitingDays: number;
  invoiceIssueBeforeInDays: number;
  subscriptionDunningDays: number;
  invoiceDueDays: number;
  currencyId: string;
  currencyRate?: number;
  countryId?: string;
  publicAvailability?: boolean;
  order?: number;
  expirySubstituteId?: string;
  subscriptionExpiryAction: SubscriptionExpiryAction;
  translations: AddEditEditionTranslationDto[];
}

export interface CreateSaasInvoiceDto {
  storeId: string;
  subscriptionId: string;
  paymentMethodId?: string;
  date?: string;
  dueDate?: string;
  couponCode?: string;
}

export interface CreateSaasOrderDto extends SubscribeRequestDto {
  subscriptionId: string;
  editionPrice?: number;
}

export interface CreateSaasPaymentDto {
  storeId: string;
  subscriptionId: string;
  paymentMethodId?: string;
  currencyId?: string;
  currencyRate?: number;
  date?: string;
  amount: number;
  paymentMethodFees: number;
  note?: string;
  reference?: string;
  attachFile?: string;
  invoicePayments: CreateUpdateSaasInvoicePaymentDto[];
  orderPayments: CreateUpdateSaasOrderPaymentDto[];
}

export interface CreateSaasPaypalPaymentCheckoutDto {
  subscriptionId: string;
  paymentMethodId: string;
  amount: number;
}

export interface CreateSaasStripePaymentCheckoutDto {
  subscriptionId: string;
  paymentMethodId: string;
  amount: number;
  successUrl?: string;
  cancelUrl?: string;
  showAllPaymentMethodTypes: boolean;
}

export interface CreateSaasSubscriptionDto {
  productId: string;
  storeId: string;
  currencyId: string;
  editionId?: string;
  couponCode?: string;
  startDate?: string;
  endDate?: string;
  reference?: string;
  note?: string;
  name?: string;
  quantity?: number;
  trialDays?: number;
  editionPrice?: number;
  defaultPaymentMethodId?: string;
  subscriptionAddons: CreateUpdateSaasSubscriptionAddonDto[];
}

export interface CreateUpdateSaasAddonDto {
  id?: string;
  productId?: string;
  featureName?: string;
  featureValue?: string;
  code: string;
  name: string;
  description?: string;
  price: number;
  intervalUnit: SaasIntervalUnit;
  interval: number;
  isRecurring: boolean;
  currencyId?: string;
  currencyRate?: number;
  countryId?: string;
  allEditionsSelected: boolean;
  addonEditions: CreateUpdateSaasAddonEditionDto[];
}

export interface CreateUpdateSaasAddonEditionDto {
  id?: string;
  addonId?: string;
  editionId?: string;
}

export interface CreateUpdateSaasCouponDto {
  productId?: string;
  id?: string;
  name: string;
  description?: string;
  code: string;
  discount: number;
  type: SaasCouponType;
  discountType: SaasDiscountType;
  maxRedemptionCount?: number;
  maxRedemptionPerSubscriptionCount?: number;
  startDate?: string;
  endDate?: string;
  validToDate?: string;
  allEditionsSelected: boolean;
  allAddonsSelected: boolean;
  currencyId?: string;
  currencyRate?: number;
  countryId?: string;
  couponEditions: CreateUpdateSaasCouponEditionDto[];
}

export interface CreateUpdateSaasCouponEditionDto {
  id?: string;
  couponId?: string;
  editionId?: string;
}

export interface CreateUpdateSaasInvoicePaymentDto {
  id?: string;
  invoiceId?: string;
  amount: number;
}

export interface CreateUpdateSaasOrderAddonDto {
  id?: string;
  tenantId?: string;
  addonId?: string;
  orderId?: string;
  price: number;
  quantity: number;
}

export interface CreateUpdateSaasOrderPaymentDto {
  id?: string;
  orderId?: string;
  amount: number;
}

export interface CreateUpdateSaasPaymentMethodDto {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  provider: PaymentMethodProvider;
  providerType?: number;
  transactionFees: number;
  needAttachment: boolean;
  paymentPendingWaitingTime: number;
  paymentRequiredToPlaceOrder: boolean;
}

export interface CreateUpdateSaasProductDto {
  id?: string;
  name: string;
  description?: string;
  code: string;
  url?: string;
}

export interface CreateUpdateSaasSubscriptionAddonDto {
  id?: string;
  tenantId?: string;
  addonId?: string;
  subscriptionId?: string;
  price: number;
  quantity: number;
}

export interface OutstandingRequestDto {
  subscriptionId: string;
  paymentMethodId: string;
  amount: number;
  note?: string;
  attachFile?: string;
  successUrl?: string;
  cancelUrl?: string;
  showAllPaymentMethodTypes?: boolean;
}

export interface SaasAddonDto extends AuditedEntityDto<string> {
  productId?: string;
  product: SaasProductDto;
  featureName?: string;
  featureValue?: string;
  code?: string;
  name?: string;
  description?: string;
  price: number;
  intervalUnit: SaasIntervalUnit;
  interval: number;
  isRecurring: boolean;
  currencyId?: string;
  currency: CurrencyDto;
  feature: FeatureDto;
  currencyRate?: number;
  countryId?: string;
  country: CountryDto;
  disabled: boolean;
  allEditionsSelected: boolean;
  addonEditions: SaasAddonEditionDto[];
}

export interface SaasAddonEditionDto extends AuditedEntityDto<string> {
  editionId?: string;
  edition: SaasEditionDto;
}

export interface SaasAddonEditionPriceDto {
  id?: string;
  code?: string;
  name?: string;
  price: number;
  intervalUnit: SaasIntervalUnit;
  interval: number;
  isRecurring: boolean;
  featureName?: string;
  currency: CurrencyDto;
  feature: FeatureDto;
}

export interface SaasAddonEditionPriceRequestDto {
  editionId: string;
  currencyId?: string;
  quantity?: number;
}

export interface SaasAddonRequestDto extends PagedAndSortedResultRequestDto {
  productId?: string;
  editionId?: string;
  search?: string;
  intervalUnit?: SaasIntervalUnit;
  interval?: number;
  currencyId?: string;
  countryId?: string;
  disabled?: boolean;
  fromPrice?: number;
  toPrice?: number;
  isRecurring?: boolean;
  allEditionsSelected?: boolean;
}

export interface SaasCartDto {
  subtotal: number;
  total: number;
  interval: number;
  intervalUnit: SaasIntervalUnit;
  nextBillingDate?: string;
  renewalDate?: string;
  trialDays: number;
  trialDaysUsed: number;
  trialDaysLeft: number;
  changesApplyImmediately: boolean;
  couponDiscount: number;
  couponAmount: number;
  discountType: SaasDiscountType;
  isCouponValid?: boolean;
  couponMessage?: string;
  creditAmount: number;
  amountToPay: number;
  recurringCharges: number;
  oneTimeAddonsTotal: number;
  recurringAddonsTotal: number;
  addonsTotal: number;
  startBillingDate?: string;
  endBillingDate?: string;
  currency: CurrencyDto;
}

export interface SaasCartRequestDto {
  editionId: string;
  editionPrice?: number;
  couponCode?: string;
  productCode?: string;
  quantity?: number;
  subscriptionAddons: CreateUpdateSaasSubscriptionAddonDto[];
}

export interface SaasCouponDto extends AuditedEntityDto<string> {
  productId?: string;
  name?: string;
  description?: string;
  code?: string;
  discount: number;
  type: SaasCouponType;
  discountType: SaasDiscountType;
  maxRedemptionCount: number;
  maxRedemptionPerSubscriptionCount: number;
  startDate?: string;
  endDate?: string;
  validToDate?: string;
  allEditionsSelected: boolean;
  allAddonsSelected: boolean;
  disabled: boolean;
  currencyId?: string;
  currencyRate?: number;
  countryId?: string;
  currency: CurrencyDto;
  couponEditions: SaasCouponEditionDto[];
}

export interface SaasCouponEditionDto extends AuditedEntityDto<string> {
  editionId?: string;
  edition: SaasEditionDto;
}

export interface SaasCouponEligibilityResponseDto {
  message?: string;
}

export interface SaasCouponRequestDto extends PagedAndSortedResultRequestDto {
  productId?: string;
  currencyId?: string;
  countryId?: string;
  search?: string;
  disabled?: boolean;
}

export interface SaasEditionDto extends AuditedEntityDto<string> {
  productId?: string;
  name?: string;
  localName?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  localDescription?: string;
  code?: string;
  image?: string;
  url?: string;
  price: number;
  oldPrice: number;
  oldPriceMargin?: number;
  trialDays: number;
  intervalUnit: SaasIntervalUnit;
  interval: number;
  billingCycles: number;
  expiryWaitingDays: number;
  invoiceIssueBeforeInDays: number;
  subscriptionDunningDays: number;
  invoiceDueDays: number;
  currencyId?: string;
  currencyRate?: number;
  countryId?: string;
  publicAvailability: boolean;
  order: number;
  expirySubstituteId?: string;
  subscriptionExpiryAction: SubscriptionExpiryAction;
  disabled: boolean;
  isDefault: boolean;
  isDefaultForItsCountry: boolean;
  isFree: boolean;
  language?: string;
  currency: CurrencyDto;
  country: CountryDto;
  translations: SaasEditionTranslationDto[];
}

export interface SaasEditionListRequestDto extends PagedAndSortedResultRequestDto {
  productId: string;
  currencyId: string;
  storeId: string;
  search?: string;
}

export interface SaasEditionRequestDto extends PagedAndSortedResultRequestDto {
  productId?: string;
  search?: string;
  currencyId?: string;
  countryId?: string;
  subscriptionExpiryAction?: SubscriptionExpiryAction;
  expirySubstituteId?: string;
  disabled?: boolean;
  publicAvailability?: boolean;
  fromPrice?: number;
  toPrice?: number;
  offersOnly?: boolean;
  intervalUnit?: SaasIntervalUnit;
  interval?: number;
}

export interface SaasEditionTranslationDto {
  language?: string;
  name?: string;
  description?: string;
  title?: string;
  subtitle?: string;
}

export interface SaasEditionsComparisonRequestDto extends CompareEditionsFeaturesRequestDto {
  currencyIsoCode?: string;
}

export interface SaasInvoiceAddonDto extends AuditedEntityDto<string> {
  tenantId?: string;
  invoiceId?: string;
  addonId?: string;
  addon: SaasAddonDto;
  price: number;
  quantity: number;
}

export interface SaasInvoiceDto extends AuditedEntityDto<string> {
  storeId?: string;
  tenantId?: string;
  subscriptionId?: string;
  editionId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  number?: string;
  date?: string;
  dueDate?: string;
  startBillingDate?: string;
  endBillingDate?: string;
  editionPrice: number;
  quantity: number;
  status: SaasInvoiceStatus;
  couponId?: string;
  couponCode?: string;
  discountType?: SaasDiscountType;
  couponType?: SaasCouponType;
  couponDiscountValue: number;
  couponDiscount: number;
  subtotal: number;
  total: number;
  unpaidAmount: number;
  paymentStatus: InvoicePaymentStatus;
  isReturn: boolean;
  paymentMethod: SaasPaymentMethodDto;
  edition: SaasEditionDto;
  coupon: SaasCouponDto;
  subscription: SaasSubscriptionDto;
  store: StoreBasicDetailsDto;
  currency: CurrencyDto;
  expiryActionApplied: boolean;
  referenceId?: string;
  invoiceAddons: SaasInvoiceAddonDto[];
}

export interface SaasInvoicePaymentDto extends AuditedEntityDto<string> {
  invoiceId?: string;
  amount: number;
  invoice: SaasInvoiceDto;
}

export interface SaasInvoiceRequestDto extends PagedAndSortedResultRequestDto {
  tenantId?: string;
  storeId?: string;
  subscriptionId?: string;
  editionId?: string;
  couponId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  startBillingDate?: string;
  endBillingDate?: string;
  minEditionPrice?: number;
  maxEditionPrice?: number;
  isReturn?: boolean;
  expiryActionApplied?: boolean;
  referenceId?: string;
  status?: SaasInvoiceStatus;
  search?: string;
}

export interface SaasOrderAddonDto extends AuditedEntityDto<string> {
  tenantId?: string;
  orderId?: string;
  addonId?: string;
  addon: SaasAddonDto;
  price: number;
  quantity: number;
}

export interface SaasOrderDto extends AuditedEntityDto<string> {
  tenantId?: string;
  storeId?: string;
  subscriptionId?: string;
  editionId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  type: SaasOrderType;
  status: SaasOrderStatus;
  number?: string;
  date?: string;
  dueDate?: string;
  quantity: number;
  editionPrice: number;
  startBillingDate?: string;
  endBillingDate?: string;
  currencyRate?: number;
  couponId?: string;
  couponCode?: string;
  discountType?: SaasDiscountType;
  couponType?: SaasCouponType;
  couponDiscountValue: number;
  applyImmediately: boolean;
  couponDiscount: number;
  subtotal: number;
  total: number;
  receivedAmount: number;
  receivedRefundAmount: number;
  paymentStatus: OrderPaymentStatus;
  unpaidAmount: number;
  paymentMethod: SaasPaymentMethodDto;
  subscription: SaasSubscriptionDto;
  edition: SaasEditionDto;
  store: StoreBasicDetailsDto;
  currency: CurrencyDto;
  orderAddons: SaasOrderAddonDto[];
  stripeCheckout: SaasStripeCheckoutDto;
  paypalCheckout: SaasPaypalCheckoutDto;
}

export interface SaasOrderPaymentDto extends AuditedEntityDto<string> {
  orderId?: string;
  amount: number;
  order: SaasOrderDto;
}

export interface SaasOrderRequestDto extends PagedAndSortedResultRequestDto {
  tenantId?: string;
  storeId?: string;
  subscriptionId?: string;
  editionId?: string;
  couponId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  status?: SaasOrderStatus;
  type?: SaasOrderType;
  startBillingDate?: string;
  endBillingDate?: string;
  minEditionPrice?: number;
  maxEditionPrice?: number;
  search?: string;
}

export interface SaasPaymentDto extends AuditedEntityDto<string> {
  tenantId?: string;
  storeId?: string;
  subscriptionId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  paymentMethodProviderId?: string;
  paymentProviderId?: string;
  number?: string;
  status: PaymentStatus;
  date?: string;
  amount: number;
  paymentMethodFees: number;
  note?: string;
  reference?: string;
  attachFile?: string;
  currencyRate?: number;
  currency: CurrencyDto;
  paymentMethod: SaasPaymentMethodDto;
  subscription: SaasSubscriptionDto;
  store: StoreBasicDetailsDto;
  invoicePayments: SaasInvoicePaymentDto[];
  orderPayments: SaasOrderPaymentDto[];
  stripeCheckout: SaasStripeCheckoutDto;
  paypalCheckout: SaasPaypalCheckoutDto;
}

export interface SaasPaymentMethodDto extends AuditedEntityDto<string> {
  name?: string;
  description?: string;
  image?: string;
  provider: PaymentMethodProvider;
  providerType?: number;
  transactionFees: number;
  disabled: boolean;
  needAttachment: boolean;
  paymentPendingWaitingTime: number;
  paymentRequiredToPlaceOrder: boolean;
  providerTypeString?: string;
}

export interface SaasPaymentMethodRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  provider?: PaymentMethodProvider;
  providerType?: number;
  disabled?: boolean;
}

export interface SaasPaymentRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  tenantId?: string;
  storeId?: string;
  subscriptionId?: string;
  paymentMethodId?: string;
  fromDate?: string;
  toDate?: string;
  status?: PaymentStatus;
}

export interface SaasPaypalCheckoutDto extends PayPalCreateOrderDto {
  paymentId?: string;
}

export interface SaasPaypalOptionsDto {
  productId: string;
  clientId?: string;
  secret?: string;
  isLive: boolean;
  providerTypes: PayPalType[];
}

export interface SaasProductDto extends AuditedEntityDto<string> {
  name?: string;
  description?: string;
  code?: string;
  url?: string;
  isDefault: boolean;
}

export interface SaasProductEditionDto {
  intervalUnit: SaasIntervalUnit;
  interval: number;
  editions: SaasProductEditionItemDto[];
}

export interface SaasProductEditionItemDto {
  id?: string;
  name?: string;
  localName?: string;
  description?: string;
  localDescription?: string;
  code?: string;
  price: number;
  trialDays: number;
  currency: CurrencyDto;
}

export interface SaasProductEditionRequestDto {
  productCode?: string;
}

export interface SaasProductRequestDto extends PagedAndSortedResultRequestDto {
}

export interface SaasStripeCheckoutDto {
  paymentId?: string;
  sessionUrl?: string;
  paymentProviderId?: string;
  paymentMethodProviderId?: string;
}

export interface SaasStripeOptionsDto {
  publishableKey?: string;
  secretKey?: string;
  providerTypes: StripeType[];
}

export interface SaasSubscriptionAddonDto extends AuditedEntityDto<string> {
  tenantId?: string;
  subscriptionId?: string;
  addonId?: string;
  addon: SaasAddonDto;
  price: number;
  quantity: number;
}

export interface SaasSubscriptionChangeStatusDto {
  id?: string;
  status: SaasSubscriptionStatus;
}

export interface SaasSubscriptionDto extends AuditedEntityDto<string> {
  number?: string;
  name?: string;
  status: SaasSubscriptionStatus;
  editionPrice: number;
  trialDays: number;
  productId?: string;
  storeId?: string;
  editionId?: string;
  couponId?: string;
  defaultPaymentMethodId?: string;
  tenantId?: string;
  currencyId?: string;
  currencyRate?: number;
  quantity: number;
  oneTimeAddonsSubtotal: number;
  recurringAddonsSubtotal: number;
  startDate?: string;
  endDate?: string;
  startBillingDate?: string;
  endBillingDate?: string;
  reference?: string;
  note?: string;
  isActive: boolean;
  isDisabled: boolean;
  cancellationDate?: string;
  disableDate?: string;
  activationDate?: string;
  expiresDate?: string;
  nextBillingDate?: string;
  subtotal: number;
  total: number;
  couponAmount: number;
  isThereOrderPending: boolean;
  isThereUnpaidInvoices: boolean;
  trialStartDate?: string;
  trialEndDate?: string;
  trialDaysLeft: number;
  showEndTrialAlert: boolean;
  showExpiringAlert: boolean;
  shiftBillingCycleAfterInvoiceIssued: boolean;
  pendingOrder: SaasOrderDto;
  product: SaasProductDto;
  edition: SaasEditionDto;
  coupon: SaasCouponDto;
  paymentMethod: SaasPaymentMethodDto;
  currency: CurrencyDto;
  store: StoreBasicDetailsDto;
  orders: SaasOrderDto[];
  subscriptionAddons: SaasSubscriptionAddonDto[];
}

export interface SaasSubscriptionHistoryDto extends CreationAuditedEntityDto<string> {
  subscriptionId?: string;
  tenantId?: string;
  editionId?: string;
  couponId?: string;
  currencyId?: string;
  defaultPaymentMethodId?: string;
  number?: string;
  name?: string;
  status: SaasSubscriptionStatus;
  editionPrice: number;
  quantity: number;
  oneTimeAddonsSubtotal: number;
  recurringAddonsSubtotal: number;
  trialDays: number;
  startDate?: string;
  endDate?: string;
  startBillingDate?: string;
  endBillingDate?: string;
  cancellationDate?: string;
  disableDate?: string;
  reference?: string;
  note?: string;
  currencyRate?: number;
  showEndTrialAlert: boolean;
  showExpiringAlert: boolean;
  couponAmount: number;
  total: number;
  edition: SaasEditionDto;
  coupon: SaasCouponDto;
  currency: CurrencyDto;
  actionBy: SaasActionBy;
  actionReason?: SaasActionReason;
  userName?: string;
}

export interface SaasSubscriptionHistoryRequestDto extends PagedResultRequestDto {
  subscriptionId: string;
}

export interface SaasSubscriptionRequestDto extends PagedAndSortedResultRequestDto {
  productId?: string;
  tenantId?: string;
  storeId?: string;
  editionId?: string;
  couponId?: string;
  currencyId?: string;
  status?: SaasSubscriptionStatus;
  startDate?: string;
  endDate?: string;
  startBillingDate?: string;
  endBillingDate?: string;
  minEditionPrice?: number;
  maxEditionPrice?: number;
  isEditionFreeOnly?: boolean;
  isEditionPaidOnly?: boolean;
  search?: string;
}

export interface SubscribeRequestDto {
  editionId: string;
  couponCode?: string;
  paymentMethodId?: string;
  attachFile?: string;
  quantity?: number;
  successUrl?: string;
  cancelUrl?: string;
  showAllPaymentMethodTypes?: boolean;
  subscriptionAddons: CreateUpdateSaasSubscriptionAddonDto[];
}

export interface SubscriptionInvoiceDto {
  id?: string;
  number?: string;
  date?: string;
  dueDate?: string;
  startBillingDate?: string;
  endBillingDate?: string;
  receivedAmount: number;
  unpaidAmount: number;
  subtotal: number;
  total: number;
  status: SaasInvoiceStatus;
  paymentStatus: InvoicePaymentStatus;
  isReturn: boolean;
  edition: SaasEditionDto;
  coupon: SaasCouponDto;
}

export interface SubscriptionInvoiceRequestDto extends PagedResultRequestDto {
  subscriptionId: string;
}

export interface TenantSaasPaymentMethodDto {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  provider: PaymentMethodProvider;
  providerType?: number;
  transactionFees: number;
  needAttachment: boolean;
  paymentRequiredToPlaceOrder: boolean;
  paymentPendingWaitingTime: number;
  providerPublicKey?: string;
}

export interface TenantSaasPaymentMethodRequestDto extends PagedResultRequestDto {
}

export interface UnpaidSaasInvoicesDto extends PagedResultDto<SaasInvoiceDto> {
  outstandingAmount: number;
  creditAmount: number;
  amountToPay: number;
}

export interface UpdateSaasEditionDto {
  id?: string;
  name: string;
  localName?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  localDescription?: string;
  code: string;
  image?: string;
  url?: string;
  price: number;
  oldPrice?: number;
  trialDays: number;
  intervalUnit: SaasIntervalUnit;
  interval: number;
  billingCycles: number;
  expiryWaitingDays: number;
  invoiceIssueBeforeInDays: number;
  subscriptionDunningDays: number;
  invoiceDueDays: number;
  currencyId: string;
  currencyRate?: number;
  countryId?: string;
  publicAvailability?: boolean;
  order?: number;
  expirySubstituteId?: string;
  subscriptionExpiryAction: SubscriptionExpiryAction;
  translations: AddEditEditionTranslationDto[];
}

export interface UpdateSaasInvoiceDto {
  id?: string;
  date?: string;
  dueDate?: string;
}

export interface UpdateSaasOrderDto {
  id?: string;
  date?: string;
  dueDate?: string;
  quantity?: number;
  editionPrice?: number;
  startBillingDate?: string;
  endBillingDate?: string;
  orderAddons: CreateUpdateSaasOrderAddonDto[];
}

export interface UpdateSaasPaymentDto {
  id?: string;
  date?: string;
  amount: number;
  paymentMethodFees: number;
  note?: string;
  reference?: string;
  attachFile?: string;
  invoicePayments: CreateUpdateSaasInvoicePaymentDto[];
  orderPayments: CreateUpdateSaasOrderPaymentDto[];
}

export interface UpdateSaasSubscriptionBillingPeriodDto {
  id: string;
  startBillingDate: string;
  endBillingDate?: string;
}

export interface UpdateSaasSubscriptionDto {
  id?: string;
  editionId?: string;
  quantity?: number;
  endDate?: string;
  reference?: string;
  note?: string;
  name?: string;
  editionPrice?: number;
  defaultPaymentMethodId?: string;
  subscriptionAddons: CreateUpdateSaasSubscriptionAddonDto[];
}
