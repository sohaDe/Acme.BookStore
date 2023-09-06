import type { CreateSaasPaypalPaymentCheckoutDto, SaasPaypalCheckoutDto, SaasPaypalOptionsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PayPalCaptureOrderDto } from '../payments/models';

@Injectable({
  providedIn: 'root',
})
export class SaasPaypalPaymentMethodService {
  apiName = 'Default';
  

  capturePayment = (transactionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayPalCaptureOrderDto>({
      method: 'POST',
      url: `/api/app/saas-paypal-payment-method/capture-payment/${transactionId}`,
    },
    { apiName: this.apiName,...config });
  

  createPaymentCheckout = (input: CreateSaasPaypalPaymentCheckoutDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaypalCheckoutDto>({
      method: 'POST',
      url: '/api/app/saas-paypal-payment-method/payment-checkout',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasPaypalOptionsDto>({
      method: 'GET',
      url: '/api/app/saas-paypal-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: SaasPaypalOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/saas-paypal-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
