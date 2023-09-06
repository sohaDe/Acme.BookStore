import type { GetPrintOtoAWBUrlRequestDto, GetPrintOtoAWBUrlResponseDto, OtoOptionsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OtoDeliveryMethodService {
  apiName = 'Default';
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, OtoOptionsDto>({
      method: 'GET',
      url: '/api/app/oto-delivery-method/options',
    },
    { apiName: this.apiName,...config });
  

  getPrintAWBUrl = (model: GetPrintOtoAWBUrlRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetPrintOtoAWBUrlResponseDto>({
      method: 'GET',
      url: '/api/app/oto-delivery-method/print-aWBUrl',
      params: { orderId: model.orderId },
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: OtoOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/oto-delivery-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
