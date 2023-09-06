import type { CreateUpdateSaasPaymentMethodDto, SaasPaymentMethodDto, SaasPaymentMethodRequestDto, TenantSaasPaymentMethodDto, TenantSaasPaymentMethodRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PaymentGatewayDto, PaymentGatewayOptionsDto } from '../payments/models';
import type { PaymentMethodProvider } from '../payments/payment-method-provider.enum';

@Injectable({
  providedIn: 'root',
})
export class SaasPaymentMethodService {
  apiName = 'Default';
  

  create = (input: CreateUpdateSaasPaymentMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaymentMethodDto>({
      method: 'POST',
      url: '/api/app/saas-payment-method',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-payment-method/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaymentMethodDto>({
      method: 'GET',
      url: `/api/app/saas-payment-method/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasPaymentMethodRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasPaymentMethodDto>>({
      method: 'GET',
      url: '/api/app/saas-payment-method',
      params: { search: input.search, provider: input.provider, providerType: input.providerType, disabled: input.disabled, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOptions = (provider: PaymentMethodProvider, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentGatewayOptionsDto>({
      method: 'GET',
      url: `/api/app/saas-payment-method/options/${provider}`,
    },
    { apiName: this.apiName,...config });
  

  getPaymentGateways = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentGatewayDto[]>({
      method: 'GET',
      url: '/api/app/saas-payment-method/payment-gateways',
    },
    { apiName: this.apiName,...config });
  

  getTenantPaymentMethods = (input: TenantSaasPaymentMethodRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TenantSaasPaymentMethodDto>>({
      method: 'GET',
      url: '/api/app/saas-payment-method/tenant-payment-methods',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putDefault = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-payment-method/${id}/default`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-payment-method/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-payment-method/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSaasPaymentMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaymentMethodDto>({
      method: 'PUT',
      url: `/api/app/saas-payment-method/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (provider: PaymentMethodProvider, input: PaymentGatewayOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-payment-method/options/${provider}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
