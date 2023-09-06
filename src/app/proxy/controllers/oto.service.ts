import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class OtoService {
  apiName = 'Default';
  

  otoDeliveryWebhook = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/api/app/oto/webhook',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
