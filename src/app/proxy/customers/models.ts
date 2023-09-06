import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { Gender } from '../users/gender.enum';
import type { UserType } from '../users/user-type.enum';
import type { UserDto } from '../users/models';
import type { AddressDto } from '../core/models';
import type { CustomerType } from './customer-type.enum';
import type { PriceListDto } from '../catalog/models';
import type { DeliveryMethodZoneRateStoreDto, ItemStoreDto } from '../stores/models';
import type { PaymentDto, PaymentMethodDto } from '../payments/models';
import type { TransactionType } from './transaction-type.enum';
import type { InvoiceTypeMode } from '../invoices/invoice-type-mode.enum';
import type { PaymentMode } from '../payments/payment-mode.enum';

export interface CustomerBusinessTypeDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
}

export interface CustomerDto extends AuditedEntityDto<string> {
  isClient: boolean;
  isSupplier: boolean;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  fullName?: string;
  fullShortName?: string;
  email?: string;
  companyName?: string;
  phoneNumber?: string;
  internalNote?: string;
  branchId?: string;
  image?: string;
  verificationDate?: string;
  userId?: string;
  billingAddressId?: string;
  defaultAddressId?: string;
  dateOfBirth?: string;
  gender: Gender;
  preferredLanguage?: string;
  addedBy: UserType;
  user: UserDto;
  addresses: AddressDto[];
  defaultAddress: AddressDto;
  invitationCode?: string;
  number?: string;
  customerGroupId?: string;
  customerGroup: CustomerGroupDto;
  defaultPaymentMethodId?: string;
  defaultDeliveryMethodZoneRateId?: string;
  businessName?: string;
  customerType: CustomerType;
  customerBusinessTypeId?: string;
  customerBusinessType: CustomerBusinessTypeDto;
  taxNumber?: string;
  registerUrl?: string;
  token?: string;
}

export interface CustomerGroupDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  priceList: PriceListDto;
  priceListId?: string;
  defaultOutletId?: string;
  disabled: boolean;
}

export interface CreateCustomerDto {
  isClient: boolean;
  isSupplier: boolean;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  companyName?: string;
  password?: string;
  internalNote?: string;
  branchId?: string;
  addressLabel?: string;
  address1?: string;
  address2?: string;
  countryId?: string;
  dateOfBirth?: string;
  gender: Gender;
  image?: string;
  preferredLanguage?: string;
  customerGroupId?: string;
  number?: string;
  invitationCode?: string;
  businessName?: string;
  customerType: CustomerType;
  customerBusinessTypeId?: string;
  taxNumber?: string;
  registerUrl?: string;
  token?: string;
}

export interface CreateCustomerFavoriteItemDto {
  itemId?: string;
}

export interface CreateUpdateCustomerBusinessTypeDto {
  name?: string;
  name2?: string;
  name3?: string;
}

export interface CreateUpdateCustomerGroupDto {
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  priceListId?: string;
  defaultOutletId?: string;
}

export interface CustomerFavoriteItemDto extends AuditedEntityDto<string> {
  itemId?: string;
  item: ItemStoreDto;
}

export interface CustomerFavoriteItemRequestDto extends PagedAndSortedResultRequestDto {
  outletId?: string;
}

export interface CustomerGroupsRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
  priceListId?: string;
  defaultOutletId?: string;
}

export interface CustomerRequestDto extends PagedAndSortedResultRequestDto {
  countryId?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  zipPostalCode?: string;
  filter?: string;
  address?: string;
  isClient?: boolean;
  isSupplier?: boolean;
}

export interface CustomerStatementReportDto {
  dueBalance: number;
  invoicedAmount: number;
  paymentReceived: number;
  transactions: CustomerStatementTransactionReportDto[];
  unreceivedPayments: PaymentDto[];
}

export interface CustomerStatementRequestDto {
  customerId?: string;
  fromDate?: string;
  toDate?: string;
}

export interface CustomerStatementTransactionReportDto {
  date?: string;
  transactionType: TransactionType;
  invoiceTypeMode: InvoiceTypeMode;
  invoiceTypeName?: string;
  invoiceNumber?: string;
  invoiceAmount: number;
  invoiceDueDate?: string;
  paymentMode: PaymentMode;
  paymentNumber?: string;
  paymentAmount: number;
  paymentMethodName?: string;
  paymentMethodName2?: string;
  paymentMethodName3?: string;
  balance: number;
}

export interface CustomerStoreDto {
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  fullName?: string;
  fullShortName?: string;
  email?: string;
  companyName?: string;
  phoneNumber?: string;
  image?: string;
  userId?: string;
  dateOfBirth?: string;
  gender: Gender;
  preferredLanguage?: string;
  billingAddressId?: string;
  invitationCode?: string;
  number?: string;
  customerGroupId?: string;
  customerGroupName?: string;
  customerGroupName2?: string;
  customerGroupName3?: string;
  priceListId?: string;
  customerPriceListName?: string;
  customerPriceListName2?: string;
  customerPriceListName3?: string;
  businessName?: string;
  customerType: CustomerType;
  customerBusinessTypeId?: string;
  customerBusinessType: CustomerBusinessTypeDto;
  taxNumber?: string;
  registerUrl?: string;
  token?: string;
}

export interface CustomerSummaryReportDto {
  paymentsReceivedCount: number;
  paymentsReceivedRefundCount: number;
  paymentsMadeCount: number;
  paymentsRefundMadeCount: number;
  paymentsReceivedTotal: number;
  paymentsReceivedRefundTotal: number;
  paymentsMadeTotal: number;
  paymentsRefundMadeTotal: number;
  orderCount: number;
  orderTotal: number;
  balance: number;
  invoices: InvoiceByTypeDto[];
}

export interface CustomerSummaryStoreDto {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  userId?: string;
  customerGroupId?: string;
}

export interface InvoiceByTypeDto {
  invoiceTypeId?: string;
  invoiceTypeName?: string;
  invoiceTypeMode: InvoiceTypeMode;
  invoiceCount: number;
  invoiceTotal: number;
}

export interface MarketplaceCustomerFavoriteItemDto extends AuditedEntityDto<string> {
  tenantId?: string;
  outletId?: string;
  itemId?: string;
  item: ItemStoreDto;
}

export interface MarketplaceCustomerFavoriteItemRequestDto {
  tenantId: string;
  itemId: string;
}

export interface SignupDto {
  fullName: string;
  email?: string;
  password: string;
  preferredLanguage?: string;
  phoneNumber: string;
  branchId?: string;
  invitationCode?: string;
  countryId?: string;
  companyName?: string;
  businessName?: string;
  customerType: CustomerType;
  customerBusinessTypeId?: string;
  taxNumber?: string;
  registerUrl?: string;
  token?: string;
  phoneNumberVerificationCode?: string;
}

export interface UpdateCustomerDefaultAddressDto {
  addressId?: string;
}

export interface UpdateCustomerDefaultDeliveryMethodZoneRateDto {
  deliveryMethodZoneRateId?: string;
}

export interface UpdateCustomerDefaultPaymentMethodDto {
  paymentMethodId?: string;
}

export interface UpdateCustomerDto {
  isClient: boolean;
  isSupplier: boolean;
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  companyName?: string;
  internalNote?: string;
  branchId?: string;
  image?: string;
  verificationDate?: string;
  dateOfBirth?: string;
  gender: Gender;
  preferredLanguage?: string;
  customerGroupId?: string;
  defaultDeliveryMethodZoneRateId?: string;
  businessName?: string;
  customerType: CustomerType;
  customerBusinessTypeId?: string;
  taxNumber?: string;
  registerUrl?: string;
}

export interface UpdateCustomerEmailDto {
  id?: string;
  email?: string;
}

export interface UpdateCustomerPhoneDto {
  id?: string;
  phoneNumber?: string;
}

export interface UpdateCustomerStoreProfileDto {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  companyName?: string;
  phoneNumber?: string;
  outletId?: string;
  image?: string;
  dateOfBirth?: string;
  gender?: Gender;
  preferredLanguage?: string;
  businessName?: string;
  customerType: CustomerType;
  customerBusinessTypeId?: string;
  taxNumber?: string;
  registerUrl?: string;
}

export interface CustomerCheckOutDto {
  defaultAddressId?: string;
  address: AddressDto;
  defaultPaymentMethodId?: string;
  paymentMethods: PaymentMethodDto[];
  defaultDeliveryMethodZoneRateId?: string;
  deliveryMethodZoneRates: DeliveryMethodZoneRateStoreDto[];
  howMuchWillBeEarnPoints: number;
}
