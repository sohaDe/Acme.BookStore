import type { SalesChannelDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesChannelService {
  apiName = 'Default';
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesChannelDto[]>({
      method: 'GET',
      url: '/api/app/sales-channel',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/sales-channel/${id}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
