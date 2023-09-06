import type { ExternalServiceDto, ExternalServiceOptionsDto, ExternalServiceOptionsReturnDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExternalServiceService {
  apiName = 'Default';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceDto>({
      method: 'GET',
      url: `/api/app/external-service/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getChatraIdOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/chatra-id-options',
    },
    { apiName: this.apiName,...config });
  

  getCrazyEggOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/crazy-egg-options',
    },
    { apiName: this.apiName,...config });
  

  getFacebookAppOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/facebook-app-options',
    },
    { apiName: this.apiName,...config });
  

  getFacebookCatalogFeedOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/facebook-catalog-feed-options',
    },
    { apiName: this.apiName,...config });
  

  getFacebookDVKOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/facebook-dVKOptions',
    },
    { apiName: this.apiName,...config });
  

  getFacebookMessengerOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/facebook-messenger-options',
    },
    { apiName: this.apiName,...config });
  

  getFacebookPixelOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/facebook-pixel-options',
    },
    { apiName: this.apiName,...config });
  

  getFreshworksOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/freshworks-options',
    },
    { apiName: this.apiName,...config });
  

  getGoogleAdWordsOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/google-ad-words-options',
    },
    { apiName: this.apiName,...config });
  

  getGoogleAnalyticOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/google-analytic-options',
    },
    { apiName: this.apiName,...config });
  

  getGoogleConsoleOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/google-console-options',
    },
    { apiName: this.apiName,...config });
  

  getGoogleMerchentOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/google-merchent-options',
    },
    { apiName: this.apiName,...config });
  

  getGoogleTagManagerOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/google-tag-manager-options',
    },
    { apiName: this.apiName,...config });
  

  getHotJarOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/hot-jar-options',
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceDto[]>({
      method: 'GET',
      url: '/api/app/external-service',
    },
    { apiName: this.apiName,...config });
  

  getMailChimpOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/mail-chimp-options',
    },
    { apiName: this.apiName,...config });
  

  getSnapChatCatalogOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/snap-chat-catalog-options',
    },
    { apiName: this.apiName,...config });
  

  getSnapChatOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/snap-chat-options',
    },
    { apiName: this.apiName,...config });
  

  getSnapOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/snap-options',
    },
    { apiName: this.apiName,...config });
  

  getTawkOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/tawk-options',
    },
    { apiName: this.apiName,...config });
  

  getTidioOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/tidio-options',
    },
    { apiName: this.apiName,...config });
  

  getTiktookOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExternalServiceOptionsReturnDto>({
      method: 'GET',
      url: '/api/app/external-service/tiktook-options',
    },
    { apiName: this.apiName,...config });
  

  updateChatraIdOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/chatra-id-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateCrazyEggOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/crazy-egg-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateFacebookAppOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/facebook-app-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateFacebookCatalogFeedOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/facebook-catalog-feed-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateFacebookDVKOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/facebook-dVKOptions',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateFacebookMessengerOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/facebook-messenger-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateFacebookPixelOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/facebook-pixel-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateFreshworksOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/freshworks-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateGoogleAdWordsOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/google-ad-words-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateGoogleAnalyticOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/google-analytic-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateGoogleConsoleOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/google-console-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateGoogleMerchentOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/google-merchent-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateGoogleTagManagerOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/google-tag-manager-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateHotJarOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/hot-jar-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateMailChimpOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/mail-chimp-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateSnapChatCatalogOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/snap-chat-catalog-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateSnapChatOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/snap-chat-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateSnapOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/snap-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateTawkOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/tawk-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateTidioOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/tidio-options',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateTiktookOptions = (input: ExternalServiceOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/external-service/tiktook-options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
