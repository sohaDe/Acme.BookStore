import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  apiName = 'Default';
  

  getFacebook = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/app/feed/${domain}/facebook.xml`,
    },
    { apiName: this.apiName,...config });
  

  getGoogleMerchant = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/app/feed/${domain}/google-merchant.xml`,
    },
    { apiName: this.apiName,...config });
  

  getMainSitemap = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/app/feed/${domain}/main-sitemap.xml`,
    },
    { apiName: this.apiName,...config });
  

  getSitemap = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/app/feed/${domain}/sitemap.xml`,
    },
    { apiName: this.apiName,...config });
  

  getSnapchat = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/app/feed/${domain}/snapchat.xml`,
    },
    { apiName: this.apiName,...config });
  

  getSubSitemap = (domain: string, index: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/app/feed/${domain}/sitemap-${index}.xml`,
    },
    { apiName: this.apiName,...config });
  

  getTikTok = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/app/feed/${domain}/tiktok.xml`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
