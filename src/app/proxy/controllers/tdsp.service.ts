import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';
import type { TdspWebhookDto } from '../payments/models';

@Injectable({
  providedIn: 'root',
})
export class TdspService {
  apiName = 'Default';
  

  tdspWebhook = (tenantId: string, input: TdspWebhookDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/tdsp/webhook/${tenantId}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
