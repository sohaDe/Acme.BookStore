import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';
import type { TapChargeDto, TapRefundDto } from '../payments/models';

@Injectable({
  providedIn: 'root',
})
export class TapService {
  apiName = 'Default';
  

  chargeWebhook = (tenantId: string, input: TapChargeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/tap/charge-webhook/${tenantId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  refundWebhook = (tenantId: string, input: TapRefundDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/tap/refund-webhook/${tenantId}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
