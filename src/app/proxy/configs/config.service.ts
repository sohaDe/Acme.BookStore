import type { DateFormatResponseDto, TimeZoneDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LanguageInfo } from '../volo/abp/localization/models';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  apiName = 'Default';
  

  deleteRemoveOrigin = (origin: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/config/remove-origin',
      params: { origin },
    },
    { apiName: this.apiName,...config });
  

  getDateFormates = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DateFormatResponseDto>({
      method: 'GET',
      url: '/api/app/config/date-formates',
    },
    { apiName: this.apiName,...config });
  

  getLanguages = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LanguageInfo[]>({
      method: 'GET',
      url: '/api/app/config/languages',
    },
    { apiName: this.apiName,...config });
  

  getOrigins = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: '/api/app/config/origins',
    },
    { apiName: this.apiName,...config });
  

  getTimeZones = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TimeZoneDto[]>({
      method: 'GET',
      url: '/api/app/config/time-zones',
    },
    { apiName: this.apiName,...config });
  

  postAddOrigin = (origin: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/config/add-origin',
      params: { origin },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
