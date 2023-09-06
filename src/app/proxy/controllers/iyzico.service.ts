import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';
import type { IyzicoPaymentWebhookDto } from '../payments/models';

@Injectable({
  providedIn: 'root',
})
export class IyzicoService {
  apiName = 'Default';
  

  webhook = (tenantId: string, input: IyzicoPaymentWebhookDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/iyzico/webhook/${tenantId}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
