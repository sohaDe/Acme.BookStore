import type { KosmoOptionsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KosmoDeliveryMethodService {
  apiName = 'Default';
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, KosmoOptionsDto>({
      method: 'GET',
      url: '/api/app/kosmo-delivery-method/options',
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: KosmoOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/kosmo-delivery-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
