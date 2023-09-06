import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  apiName = 'Default';
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/tests',
    },
    { apiName: this.apiName,...config });
  

  getClaims = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: '/api/app/tests/claims',
    },
    { apiName: this.apiName,...config });
  

  getTenant = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, object>({
      method: 'GET',
      url: '/api/app/tests/tenant',
    },
    { apiName: this.apiName,...config });
  

  getTimeZoneDate = (timeZone: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: '/api/app/tests/time-zone-date',
      params: { timeZone },
    },
    { apiName: this.apiName,...config });
  

  getUser = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, object>({
      method: 'GET',
      url: '/api/app/tests/user',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
