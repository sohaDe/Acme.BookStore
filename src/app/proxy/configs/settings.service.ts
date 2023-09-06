import type { GeneralSettingsResponseDto, UpdateGeneralSettingDto, UpdateItemSettingsDto, UpdateOrderSettingsDto, UpdateReviewSettingsDto, UpdateTransferOrderSettingsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  apiName = 'Default';
  

  clearTenantCache = (tenantId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api​/app​/settings​/clear-tenant-cache',
      params: { tenantId },
    },
    { apiName: this.apiName,...config });
  

  getGeneralSettings = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, GeneralSettingsResponseDto>({
      method: 'GET',
      url: '/api/app/settings/general-settings',
    },
    { apiName: this.apiName,...config });
  

  postMarkSetupBasicSettingsDone = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/settings/mark-setup-basic-settings-done',
    },
    { apiName: this.apiName,...config });
  

  postMarkSetupDeliveryMethodsDone = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/settings/mark-setup-delivery-methods-done',
    },
    { apiName: this.apiName,...config });
  

  postMarkSetupItemsDone = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/settings/mark-setup-items-done',
    },
    { apiName: this.apiName,...config });
  

  postMarkSetupMainOutletDone = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/settings/mark-setup-main-outlet-done',
    },
    { apiName: this.apiName,...config });
  

  postMarkSetupPaymentMethodsDone = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/settings/mark-setup-payment-methods-done',
    },
    { apiName: this.apiName,...config });
  

  putGeneralSettings = (input: UpdateGeneralSettingDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/settings/general-settings',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putItemSettings = (input: UpdateItemSettingsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/settings/item-settings',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putOrderSettings = (input: UpdateOrderSettingsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/settings/order-settings',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putReviews = (input: UpdateReviewSettingsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/settings/reviews',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putTransferOrderSettings = (input: UpdateTransferOrderSettingsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/settings/transfer-order-settings',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateUserLanguageByLanguage = (language: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/settings/user-language/${language}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
