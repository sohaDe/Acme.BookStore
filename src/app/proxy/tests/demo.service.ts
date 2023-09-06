import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  apiName = 'Default';
  

  addData = (count: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/demo/data',
      params: { count },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
