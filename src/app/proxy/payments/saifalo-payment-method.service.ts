import type { CreatePaymentRequestDto, PaymentDto, SaifaloOptionsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaifaloPaymentMethodService {
  apiName = 'Default';
  

  createPayment = (input: CreatePaymentRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentDto>({
      method: 'POST',
      url: '/api/app/saifalo-payment-method/payment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaifaloOptionsDto>({
      method: 'GET',
      url: '/api/app/saifalo-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: SaifaloOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/saifalo-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
