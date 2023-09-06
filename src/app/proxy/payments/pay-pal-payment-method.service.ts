import type { PayPalCaptureOrderDto, PayPalCreateOrderDto, PayPalOptionsDto } from './models';
import type { PayPalPaymentIntentType } from './pay-pal-payment-intent-type.enum';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayPalPaymentMethodService {
  apiName = 'Default';
  

  capturePayment = (transactionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayPalCaptureOrderDto>({
      method: 'POST',
      url: `/api/app/pay-pal-payment-method/capture-payment/${transactionId}`,
    },
    { apiName: this.apiName,...config });
  

  createPayment = (orderId: string, intentType: PayPalPaymentIntentType, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayPalCreateOrderDto>({
      method: 'POST',
      url: `/api/app/pay-pal-payment-method/payment/${orderId}`,
      params: { intentType },
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayPalOptionsDto>({
      method: 'GET',
      url: '/api/app/pay-pal-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: PayPalOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/pay-pal-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
