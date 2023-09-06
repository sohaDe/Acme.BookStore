import type { CreatePaymentDto, IyzicoOptionsDto, IyzicoPaymentDto, PaymentStatusDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IyzicoPaymentMethodService {
  apiName = 'Default';
  

  createPayment = (input: CreatePaymentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IyzicoPaymentDto>({
      method: 'POST',
      url: '/api/app/iyzico-payment-method/payment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IyzicoOptionsDto>({
      method: 'GET',
      url: '/api/app/iyzico-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  getPayment = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentStatusDto>({
      method: 'GET',
      url: '/api/app/iyzico-payment-method/payment',
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: IyzicoOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/iyzico-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
