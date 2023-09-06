import type { CreateUpdateFcmClientDto, FcmClientDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FcmClientService {
  apiName = 'Default';
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/fcm-client/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getFcmClients = (customerId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FcmClientDto[]>({
      method: 'GET',
      url: `/api/app/fcm-client/fcm-clients/${customerId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (input: CreateUpdateFcmClientDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/fcm-client',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
