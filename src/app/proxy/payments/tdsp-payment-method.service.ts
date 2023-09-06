import type { CreateTdspPaymentDto, CreateTdspPaymentResponseDto, PaymentStatusDto, TdspOptionsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TdspPaymentMethodService {
  apiName = 'Default';
  

  createPayment = (input: CreateTdspPaymentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CreateTdspPaymentResponseDto>({
      method: 'POST',
      url: '/api/app/tdsp-payment-method/payment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TdspOptionsDto>({
      method: 'GET',
      url: '/api/app/tdsp-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  getPayment = (customeReference: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentStatusDto>({
      method: 'GET',
      url: '/api/app/tdsp-payment-method/payment',
      params: { customeReference },
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: TdspOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/tdsp-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
