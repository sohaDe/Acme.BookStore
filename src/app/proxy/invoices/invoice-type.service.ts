import type { CreateInvoiceTypeDto, InvoiceTypeDto, InvoiceTypeListDto, InvoiceTypeOptionsDto, InvoiceTypeRequestDto, UpdateInvoiceTypeDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceTypeService {
  apiName = 'Default';
  

  create = (input: CreateInvoiceTypeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceTypeDto>({
      method: 'POST',
      url: '/api/app/invoice-type',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/invoice-type/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceTypeDto>({
      method: 'GET',
      url: `/api/app/invoice-type/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: InvoiceTypeRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<InvoiceTypeListDto>>({
      method: 'GET',
      url: '/api/app/invoice-type',
      params: { search: input.search, disabled: input.disabled, withOptions: input.withOptions, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceTypeOptionsDto>({
      method: 'GET',
      url: `/api/app/invoice-type/${id}/options`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/invoice-type/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/invoice-type/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateInvoiceTypeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceTypeDto>({
      method: 'PUT',
      url: `/api/app/invoice-type/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (options: InvoiceTypeOptionsDto, id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceTypeOptionsDto>({
      method: 'PUT',
      url: `/api/app/invoice-type/${id}/options`,
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
