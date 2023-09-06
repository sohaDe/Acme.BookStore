import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  apiName = 'Default';
  

  stripeWebhook = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/api/stripe/webhook',
    },
    { apiName: this.apiName,...config });
  

  stripeWebhook = (tenantId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/stripe/webhook/${tenantId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
