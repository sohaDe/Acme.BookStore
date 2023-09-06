import type { CreateTapCardDto, CreateTapChargeDto, CreateTapSavedCardTokenDto, PaymentSharedCardsDto, SaveTapCustomerCardDto, SaveTapCustomerCardResponseDto, TapCardTokenDto, TapChargeDto, TapCustomerDto, TapDeletedEntityResponseDto, TapOptionsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TapPaymentMethodService {
  apiName = 'Default';
  

  createCardToken = (input: CreateTapCardDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TapCardTokenDto>({
      method: 'POST',
      url: '/api/app/tap-payment-method/card-token',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createCharge = (input: CreateTapChargeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TapChargeDto>({
      method: 'POST',
      url: '/api/app/tap-payment-method/charge',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createCustomerCard = (input: SaveTapCustomerCardDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaveTapCustomerCardResponseDto>({
      method: 'POST',
      url: '/api/app/tap-payment-method/customer-card',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createOrGetTapCustomer = (customerId: string, lastName?: string, email?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TapCustomerDto>({
      method: 'POST',
      url: `/api/app/tap-payment-method/or-get-tap-customer/${customerId}`,
      params: { lastName, email },
    },
    { apiName: this.apiName,...config });
  

  createSavedCardToken = (input: CreateTapSavedCardTokenDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TapCardTokenDto>({
      method: 'POST',
      url: '/api/app/tap-payment-method/saved-card-token',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deleteCustomerCard = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TapDeletedEntityResponseDto>({
      method: 'DELETE',
      url: `/api/app/tap-payment-method/customer-card/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCharge = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TapChargeDto>({
      method: 'GET',
      url: `/api/app/tap-payment-method/charge/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getListCustomerCards = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentSharedCardsDto[]>({
      method: 'GET',
      url: '/api/app/tap-payment-method/customer-cards',
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TapOptionsDto>({
      method: 'GET',
      url: '/api/app/tap-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: TapOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/tap-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
