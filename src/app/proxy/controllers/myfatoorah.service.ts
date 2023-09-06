import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class MyfatoorahService {
  apiName = 'Default';
  

  myfatoorahPaymentWebhook = (tenantId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/app/myfatoorah/webhook/${tenantId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
