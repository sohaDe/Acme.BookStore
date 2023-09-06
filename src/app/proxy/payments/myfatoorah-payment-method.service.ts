import type { CreateMyfatoorahPaymentDto, MyfatoorahCreatePaymentResponseDto, MyfatoorahOptionsDto, PaymentStatusDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyfatoorahPaymentMethodService {
  apiName = 'Default';
  

  createPayment = (input: CreateMyfatoorahPaymentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MyfatoorahCreatePaymentResponseDto>({
      method: 'POST',
      url: '/api/app/myfatoorah-payment-method/payment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MyfatoorahOptionsDto>({
      method: 'GET',
      url: '/api/app/myfatoorah-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  getPayment = (invoiceOrPaymentId: string, forInvoice: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentStatusDto>({
      method: 'GET',
      url: `/api/app/myfatoorah-payment-method/payment/${invoiceOrPaymentId}`,
      params: { forInvoice },
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: MyfatoorahOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/myfatoorah-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
