import type { CreateUpdatePaymentMethodDto, PaymentGatewayDto, PaymentGatewayOptionsDto, PaymentMethodDto, PaymentMethodsRequestDto } from './models';
import type { PaymentMethodProvider } from './payment-method-provider.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePaymentMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentMethodDto>({
      method: 'POST',
      url: '/api/app/payment-method',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payment-method/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentMethodDto>({
      method: 'GET',
      url: `/api/app/payment-method/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PaymentMethodsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PaymentMethodDto>>({
      method: 'GET',
      url: '/api/app/payment-method',
      params: { tenantId: input.tenantId, disabled: input.disabled, providerType: input.providerType, provider: input.provider, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOptions = (provider: PaymentMethodProvider, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentGatewayOptionsDto>({
      method: 'GET',
      url: `/api/app/payment-method/options/${provider}`,
    },
    { apiName: this.apiName,...config });
  

  getPaymentGateways = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentGatewayDto[]>({
      method: 'GET',
      url: '/api/app/payment-method/payment-gateways',
    },
    { apiName: this.apiName,...config });
  

  putCash = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/payment-method/${id}/cash`,
    },
    { apiName: this.apiName,...config });
  

  putDefault = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/payment-method/${id}/default`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/payment-method/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/payment-method/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePaymentMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentMethodDto>({
      method: 'PUT',
      url: `/api/app/payment-method/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (provider: PaymentMethodProvider, input: PaymentGatewayOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/payment-method/options/${provider}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
