import type { CreateCustomerDto, CustomerDto, CustomerRequestDto, CustomerStatementReportDto, CustomerStatementRequestDto, CustomerStoreDto, CustomerSummaryReportDto, CustomerSummaryStoreDto, SignupDto, UpdateCustomerDefaultAddressDto, UpdateCustomerDefaultDeliveryMethodZoneRateDto, UpdateCustomerDefaultPaymentMethodDto, UpdateCustomerDto, UpdateCustomerEmailDto, UpdateCustomerPhoneDto, UpdateCustomerStoreProfileDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiName = 'Default';
  

  addNumberAndInvitationCodeToCustomers = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/customer/number-and-invitation-code-to-customers',
    },
    { apiName: this.apiName,...config });
  

  changeLanguage = (lang: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/customer/change-language/${lang}`,
    },
    { apiName: this.apiName,...config });
  

  checkInvitationCode = (code: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/customer/check-invitation-code',
      params: { code },
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateCustomerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerDto>({
      method: 'POST',
      url: '/api/app/customer',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/customer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteAccount = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/customer/account',
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerDto>({
      method: 'GET',
      url: `/api/app/customer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CustomerRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CustomerDto>>({
      method: 'GET',
      url: '/api/app/customer',
      params: { countryId: input.countryId, stateProvinceId: input.stateProvinceId, stateProvinceName: input.stateProvinceName, cityId: input.cityId, cityName: input.cityName, districtId: input.districtId, zipPostalCode: input.zipPostalCode, filter: input.filter, address: input.address, isClient: input.isClient, isSupplier: input.isSupplier, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMyCustomerProfile = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerStoreDto>({
      method: 'GET',
      url: '/api/app/customer/my-customer-profile',
    },
    { apiName: this.apiName,...config });
  

  getMyCustomerSummary = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerSummaryStoreDto>({
      method: 'GET',
      url: '/api/app/customer/my-customer-summary',
    },
    { apiName: this.apiName,...config });
  

  getSummaryReport = (input: CustomerStatementRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerSummaryReportDto>({
      method: 'GET',
      url: '/api/app/customer/summary-report',
      params: { customerId: input.customerId, fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  putCustomerDefaultAddress = (id: string, input: UpdateCustomerDefaultAddressDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer/${id}/customer-default-address`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putCustomerDefaultDeliveryMethodZoneRate = (id: string, input: UpdateCustomerDefaultDeliveryMethodZoneRateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer/${id}/customer-default-delivery-method-zone-rate`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putCustomerDefaultPaymentMethod = (id: string, input: UpdateCustomerDefaultPaymentMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer/${id}/customer-default-payment-method`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putCustomerEmail = (id: string, input: UpdateCustomerEmailDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer/${id}/customer-email`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putCustomerPhoneNumber = (id: string, input: UpdateCustomerPhoneDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer/${id}/customer-phone-number`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putUnverified = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer/${id}/unverified`,
    },
    { apiName: this.apiName,...config });
  

  putUpdateProfileByInput = (input: UpdateCustomerStoreProfileDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/customer/update-profile',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putVerified = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/customer/${id}/verified`,
    },
    { apiName: this.apiName,...config });
  

  signup = (input: SignupDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerStoreDto>({
      method: 'POST',
      url: '/api/app/customer/signup',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  statementReport = (input: CustomerStatementRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerStatementReportDto>({
      method: 'POST',
      url: '/api/app/customer/statement-report',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateCustomerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerDto>({
      method: 'PUT',
      url: `/api/app/customer/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
