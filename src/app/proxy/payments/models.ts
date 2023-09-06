import type { AuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { CustomerDto } from '../customers/models';
import type { BranchDto } from '../branches/models';
import type { CountryDto, CurrencyDto } from '../core/models';
import type { PaymentMode } from './payment-mode.enum';
import type { PaymentStatus } from './payment-status.enum';
import type { PaymentMethodProvider } from './payment-method-provider.enum';
import type { CountryIso3Code } from '../core/country-iso3-code.enum';
import type { CurrencyIsoCode } from '../core/currency-iso-code.enum';
import type { IyzicoType } from './iyzico-type.enum';
import type { MyfatoorahType } from './myfatoorah-type.enum';
import type { PayPalType } from './pay-pal-type.enum';
import type { SaifaloType } from './saifalo-type.enum';
import type { IyzicoCardBrand } from './iyzico-card-brand.enum';
import type { MyfatoorahCardBrand } from './myfatoorah-card-brand.enum';
import type { StripeCardBrand } from './stripe-card-brand.enum';
import type { TapCardBrand } from './tap-card-brand.enum';
import type { TdspCardBrand } from './tdsp-card-brand.enum';
import type { StripeType } from './stripe-type.enum';
import type { TapType } from './tap-type.enum';
import type { TdspType } from './tdsp-type.enum';

export interface InvoicePaymentDto extends AuditedEntityDto<string> {
  invoiceId?: string;
  amount: number;
  currencyAmount?: number;
  invoiceNumber?: string;
  invoiceTotal: number;
  invoiceTypeId?: string;
  invoiceTypeName?: string;
}

export interface OrderPaymentDto extends AuditedEntityDto<string> {
  orderId?: string;
  amount: number;
  currencyAmount?: number;
  orderNumber?: string;
  orderTotal: number;
}

export interface PaymentCategoryDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
}

export interface PaymentDto extends AuditedEntityDto<string> {
  paymentMethodId?: string;
  paymentMethod: PaymentMethodDto;
  customerId?: string;
  customer: CustomerDto;
  paymentCategoryId?: string;
  paymentCategory: PaymentCategoryDto;
  branchId?: string;
  branch: BranchDto;
  currencyId?: string;
  currencyRate?: number;
  currency: CurrencyDto;
  referenceId?: string;
  paymentReference: PaymentDto;
  mode: PaymentMode;
  status: PaymentStatus;
  number?: string;
  reference?: string;
  date?: string;
  amount: number;
  currencyAmount?: number;
  paymentMethodFees: number;
  note?: string;
  cardLast4Digits?: string;
  cardBrand?: string;
  paymentProviderId?: string;
  paymentMethodProviderId?: string;
  isCashRounding: boolean;
  cashRounding: number;
  cashAmount: number;
  change: number;
  orderPayments: OrderPaymentDto[];
  invoicePayments: InvoicePaymentDto[];
}

export interface PaymentMethodDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  provider: PaymentMethodProvider;
  providerType?: number;
  disabled: boolean;
  displayOrder: number;
  transactionFeesPercentage: number;
  transactionFeesFixedAmount: number;
  creatorUserName?: string;
  lastModifierUserName?: string;
  providerPublicKey?: string;
  image?: string;
  providerTypeString?: string;
  providerString?: string;
  needAttachment: boolean;
  paymentRequiredToPlaceOrder: boolean;
  paymentPendingWaitingTime: number;
}

export interface PaymentTermDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  days: number;
}

export interface Amount {
  currencyCode?: string;
  value?: string;
}

export interface BasicTapEntityDto {
  id?: string;
}

export interface Capture {
  id?: string;
  status?: string;
  statusDetails: StatusDetails;
  amount: Amount;
  finalCapture: boolean;
  sellerProtection: SellerProtection;
  links: Link[];
  createTime?: string;
  updateTime?: string;
}

export interface CreateTapPostRedirectDto {
  url?: string;
}

export interface DisplayPaymentTypeDto {
  id?: string;
  label?: string;
  value: boolean;
}

export interface IyzicoPaymentWebhookDto {
  iyziEventTime: number;
  iyziEventType?: string;
  iyziReferenceCode?: string;
  token?: string;
  paymentConversationId?: string;
  status?: string;
  iyziPaymentId: number;
}

export interface Link {
  href: any;
  rel?: string;
  method?: string;
}

export interface Name {
  fullName?: string;
  givenName?: string;
  surname?: string;
}

export interface PayPalAddress {
  addressLine1?: string;
  adminArea2?: string;
  adminArea1?: string;
  postalCode?: string;
  countryCode?: string;
}

export interface PayPalCaptureOrderDto {
  id?: string;
  status?: string;
  purchaseUnits: PurchaseUnit[];
  payer: Payer;
  links: Link[];
}

export interface Payee {
  emailAddress?: string;
  merchantId?: string;
}

export interface Payer {
  name: Name;
  emailAddress?: string;
  payerId?: string;
  address: PayPalAddress;
}

export interface PaymentGatewayDto {
  id: number;
  name?: string;
  image?: string;
  details?: string;
  link?: string;
  website?: string;
  enabledDate?: string;
  types: PaymentGatewayTypeDto[];
}

export interface PaymentGatewayOptionsDto {
  key1Label?: string;
  key1Value?: string;
  key2Label?: string;
  key2Value?: string;
  isLiveLabel?: string;
  isLiveValue: boolean;
  webhookUrl?: string;
  supportedCountries: CountryDto[];
  supportedCurrencies: CurrencyDto[];
  paymentTypes: PaymentTypeDto[];
}

export interface PaymentGatewayTypeDto {
  type: number;
  logo?: string;
  supportedCountries: CountryIso3Code[];
  supportedCurrencies: CurrencyIsoCode[];
  supportedCardBrands: number[];
}

export interface PaymentTypeDto {
  id: number;
  label?: string;
  value: boolean;
  image?: string;
  displayPaymentTypes: DisplayPaymentTypeDto[];
}

export interface Payments {
  captures: Capture[];
}

export interface PurchaseUnit {
  referenceId?: string;
  amount: Amount;
  payee: Payee;
  shipping: Shipping;
  payments: Payments;
}

export interface SellerProtection {
  status?: string;
  disputeCategories: string[];
}

export interface SharedTapChargePropertyDto extends BasicTapEntityDto {
  amount: number;
  currency?: string;
}

export interface Shipping {
  name: Name;
  address: PayPalAddress;
}

export interface StatusDetails {
  reason?: string;
}

export interface TapChargeCardDto {
  id?: string;
  firstSix?: string;
  lastFour?: string;
}

export interface TapChargeDto extends SharedTapChargePropertyDto {
  threeDSecure: boolean;
  saveCard: boolean;
  description?: string;
  status?: string;
  created: number;
  transaction: TapChargeTransactionDto;
  reference: TapChargeReferenceDto;
  response: TapChargeResponseDto;
  receipt: TapChargeReceiptDto;
  customer: TapCustomerDto;
  source: TapChargeSourceDto;
  card: TapChargeCardDto;
  post: CreateTapPostRedirectDto;
  redirect: CreateTapPostRedirectDto;
  refunds: TapChargeRefundsBodyDto;
}

export interface TapChargeReceiptDto {
  id?: string;
  email: boolean;
  sms: boolean;
}

export interface TapChargeReferenceDto {
  track?: string;
  payment?: string;
  gateway?: string;
  acquirer?: string;
  transaction?: string;
  order?: string;
}

export interface TapChargeRefundsBodyDto extends BasicTapEntityDto {
  refund: TapRefundDto[];
}

export interface TapChargeResponseDto {
  code?: string;
  message?: string;
  csc?: string;
}

export interface TapChargeSourceDto {
  object?: string;
  paymentMethod?: string;
  id?: string;
}

export interface TapChargeTransactionDto {
  authorizationId?: string;
  timezone?: string;
  created?: string;
  url?: string;
}

export interface TapCustomerDto extends BasicTapEntityDto {
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phone: TapCustomerPhoneNumberDto;
}

export interface TapCustomerPhoneNumberDto {
  countryCode?: string;
  number?: string;
}

export interface TapRefundDto extends BasicTapEntityDto {
  chargeId?: string;
  amount: number;
  created: number;
  currency?: string;
  status?: string;
  response: TapRefundResponseDto;
  reference: TapRefundReferenceDto;
  description?: string;
  reason?: string;
  metadata: Record<string, string>;
  post: CreateTapPostRedirectDto;
}

export interface TapRefundReferenceDto {
  merchant?: string;
  gateway?: string;
  payment?: string;
}

export interface TapRefundResponseDto {
  code?: string;
  message?: string;
}

export interface TdspWebhookDto {
  result?: string;
  charges: number;
  net_amount: number;
  custom_ref?: string;
  url?: string;
  amount?: string;
  store_id?: string;
  our_ref?: string;
  payment_method?: string;
  customer_phone?: string;
}

export interface AdminCurrency {
  id?: string;
  name?: string;
  symbol?: string;
  localSymbol?: string;
  isoCode?: string;
}

export interface AdminPayment {
  id?: string;
  mode: PaymentMode;
  status: PaymentStatus;
  number?: string;
  date?: string;
  amount: number;
  currencyAmount?: number;
  cardLast4Digits?: string;
  cardBrand?: string;
  paymentProviderId?: string;
  paymentMethodProviderId?: string;
  cashRounding: number;
  cashAmount: number;
  referenceId?: string;
  paymentMethod: AdminPaymentMethod;
  currency: AdminCurrency;
}

export interface AdminPaymentMethod {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
}

export interface CreateMyfatoorahPaymentDto {
  orderId?: string;
  email?: string;
  lastName?: string;
  errorUrl?: string;
  callbackUrl?: string;
}

export interface CreatePaymentCheckoutDto {
  orderId?: string;
  successUrl?: string;
  cancelUrl?: string;
  showAllPaymentMethodTypes: boolean;
}

export interface CreatePaymentDto {
  identityNumber?: string;
  email?: string;
  lastName?: string;
  callbackUrl?: string;
  orderId?: string;
}

export interface CreatePaymentRequestDto {
  orderId: string;
  account: string;
}

export interface CreateTapCardDto {
  number: number;
  expirationMonth: number;
  expirationYear: number;
  cvc: number;
  name?: string;
}

export interface CreateTapChargeCustomerDto {
  lastName?: string;
  email?: string;
}

export interface CreateTapChargeDto {
  orderId?: string;
  customer: CreateTapChargeCustomerDto;
  source?: string;
  redirectUrl?: string;
  saveCard: boolean;
}

export interface CreateTapSavedCardTokenDto {
  cardId?: string;
}

export interface CreateTdspPaymentDto {
  email?: string;
  frontendUrl?: string;
  orderId?: string;
}

export interface CreateTdspPaymentResponseDto {
  message?: string;
  result?: string;
  customReference?: string;
  url?: string;
}

export interface CreateUpdateInvoicePaymentDto {
  id?: string;
  paymentId?: string;
  invoiceId?: string;
  amount: number;
}

export interface CreateUpdateOrderPaymentDto {
  id?: string;
  paymentId?: string;
  orderId?: string;
  amount: number;
}

export interface CreateUpdatePaymentCategoryDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
}

export interface CreateUpdatePaymentDto {
  id?: string;
  paymentMethodId: string;
  customerId?: string;
  paymentCategoryId?: string;
  branchId?: string;
  currencyId?: string;
  currencyRate?: number;
  referenceId?: string;
  mode: PaymentMode;
  reference?: string;
  date?: string;
  amount: number;
  paymentMethodFees: number;
  note?: string;
  isCashRounding?: boolean;
  cashAmount: number;
  invoicePayments: CreateUpdateInvoicePaymentDto[];
  orderPayments: CreateUpdateOrderPaymentDto[];
}

export interface CreateUpdatePaymentMethodDto {
  name: string;
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
  image?: string;
  needAttachment?: boolean;
  paymentRequiredToPlaceOrder?: boolean;
  paymentPendingWaitingTime?: number;
  options: ShowPaymentMethodBrands;
}

export interface CreateUpdatePaymentTermDto {
  name?: string;
  name2?: string;
  name3?: string;
  days: number;
}

export interface IyzicoOptionsDto {
  apiKey?: string;
  secretKey?: string;
  isLive: boolean;
  providerTypes: IyzicoType[];
  options: ShowIyzicoBrands;
  webhookUrl?: string;
}

export interface IyzicoPaymentDto {
  token?: string;
  checkoutFormContent?: string;
  tokenExpireTime?: number;
  paymentPageUrl?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  errorGroup?: string;
  locale?: string;
  systemTime: number;
}

export interface MyfatoorahCreatePaymentResponseDto extends MyfatoorahSharedPropertyDto {
  data: MyfatoorahPaymentDataResponseDto;
}

export interface MyfatoorahOptionsDto {
  apiToken?: string;
  secretKey?: string;
  isLive: boolean;
  webhookUrl?: string;
  providerTypes: MyfatoorahType[];
  options: ShowMyfatoorahBrands;
}

export interface MyfatoorahPaymentDataResponseDto {
  invoiceId: number;
  invoiceUrl?: string;
  customerReference?: string;
}

export interface MyfatoorahSharedPropertyDto {
  isSuccess: boolean;
  message?: string;
  validationErrors: MyfatoorahValidationErrorDetailsDto[];
}

export interface MyfatoorahValidationErrorDetailsDto {
  name?: string;
  error?: string;
}

export interface PayPalCreateOrderDto {
  id?: string;
  status?: string;
  links: Link[];
}

export interface PayPalOptionsDto {
  clientId?: string;
  secret?: string;
  isLive: boolean;
  providerTypes: PayPalType[];
  options: ShowPayPalBrands;
}

export interface PaymentCategoryRequestDto extends PagedResultRequestDto {
}

export interface PaymentHistoryDto extends AuditedEntityDto<string> {
  tenantId?: string;
  paymentId?: string;
  status: PaymentStatus;
  note?: string;
  amount: number;
}

export interface PaymentHistoryRequestDto extends PagedResultRequestDto {
  paymentId: string;
}

export interface PaymentMethodsRequestDto extends PagedAndSortedResultRequestDto {
  tenantId?: string;
  disabled?: boolean;
  providerType?: number;
  provider?: PaymentMethodProvider;
}

export interface PaymentRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  mode?: PaymentMode;
  status?: PaymentStatus;
  paymentMethodId?: string;
  customerId?: string;
  currencyId?: string;
  branchId?: string;
  referenceId?: string;
  orderId?: string;
  invoiceId?: string;
  fromDate?: string;
  toDate?: string;
  isReceived?: boolean;
  isMade?: boolean;
  paymentCategoryIds: string[];
}

export interface PaymentSharedCardsDto {
  id?: string;
  brand?: string;
  country?: string;
  description?: string;
  expMonth: number;
  expYear: number;
  fingerprint?: string;
  last4?: string;
  providerCustomerId?: string;
}

export interface PaymentStatusDto {
  status?: string;
}

export interface SaifaloOptionsDto {
  userName?: string;
  password?: string;
  providerTypes: SaifaloType[];
  options: ShowSaifaloBrands;
}

export interface SaveTapCustomerCardDto {
  cardToken?: string;
}

export interface SaveTapCustomerCardResponseDto extends BasicTapEntityDto {
  created: number;
  address: TapAddressDto;
  customerId?: string;
  funding?: string;
  fingerprint?: string;
  brand?: string;
  issuer: TapCardIssuerDto;
  expMonth: number;
  expYear: number;
  lastFour?: string;
  name?: string;
  object?: string;
}

export interface ShowIyzicoBrands {
  cardBrands: IyzicoCardBrand[];
}

export interface ShowMyfatoorahBrands {
  showKNet: boolean;
  showAmex: boolean;
  showSadad: boolean;
  showBenefit: boolean;
  showMada: boolean;
  showApplePay: boolean;
  showStcPay: boolean;
  showOmanNet: boolean;
  showMeeza: boolean;
  cardBrands: MyfatoorahCardBrand[];
}

export interface ShowPayPalBrands {
  showPayPal: boolean;
}

export interface ShowPaymentMethodBrands {
  showManual: boolean;
  showBankTransfer: boolean;
}

export interface ShowSaifaloBrands {
  zaad: boolean;
  edahab: boolean;
  pbwallet: boolean;
}

export interface ShowStripeBrands {
  sofort: boolean;
  sepa_debit: boolean;
  klarna: boolean;
  giropay: boolean;
  fpx: boolean;
  alipay: boolean;
  grabpay: boolean;
  cardBrands: StripeCardBrand[];
}

export interface ShowTapBrands {
  showKNet: boolean;
  cardBrands: TapCardBrand[];
}

export interface ShowTdspBrands {
  showMoamalat: boolean;
  showTadawul: boolean;
  showAlmadar: boolean;
  showEdfaL: boolean;
  showMobiCash: boolean;
  cardBrands: TdspCardBrand[];
}

export interface StripeCheckoutDto {
  sessionUrl?: string;
}

export interface StripeConfirmPaymentRequestDto {
  stripePaymentMethodId?: string;
  stripePaymentIntentId?: string;
}

export interface StripeOptionsDto {
  publishableKey?: string;
  secretKey?: string;
  providerTypes: StripeType[];
  options: ShowStripeBrands;
}

export interface StripePaymentDto {
  requiresAction: boolean;
  clientSecret?: string;
}

export interface TapAddressDto extends BasicTapEntityDto {
  country?: string;
  line1?: string;
  city?: string;
  street?: string;
  avenue?: string;
}

export interface TapCardDto extends BasicTapEntityDto {
  customerId?: string;
  object?: string;
  funding?: string;
  fingerprint?: string;
  brand?: string;
  expMonth: number;
  expYear: number;
  lastFour?: string;
  firstSex?: string;
}

export interface TapCardIssuerDto {
  bank?: string;
  country?: string;
  id?: string;
}

export interface TapCardTokenDto extends BasicTapEntityDto {
  object?: string;
  clientIp?: string;
  created: number;
  type?: string;
  used: boolean;
  card: TapCardDto;
}

export interface TapDeletedEntityResponseDto extends BasicTapEntityDto {
  deleted: boolean;
}

export interface TapOptionsDto {
  publishableKey?: string;
  secretKey?: string;
  providerTypes: TapType[];
  options: ShowTapBrands;
}

export interface TdspOptionsDto {
  token?: string;
  storeId?: string;
  isLive: boolean;
  providerTypes: TdspType[];
  options: ShowTdspBrands;
}
