import type { CreateSaasStripePaymentCheckoutDto, SaasStripeCheckoutDto, SaasStripeOptionsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaasStripePaymentMethodService {
  apiName = 'Default';
  

  createPaymentCheckout = (input: CreateSaasStripePaymentCheckoutDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasStripeCheckoutDto>({
      method: 'POST',
      url: '/api/app/saas-stripe-payment-method/payment-checkout',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasStripeOptionsDto>({
      method: 'GET',
      url: '/api/app/saas-stripe-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: SaasStripeOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/saas-stripe-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
