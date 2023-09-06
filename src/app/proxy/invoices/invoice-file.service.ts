import type { CreateUpdateInvoiceFileDto, InvoiceFileDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceFileService {
  apiName = 'Default';
  

  create = (input: CreateUpdateInvoiceFileDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceFileDto>({
      method: 'POST',
      url: '/api/app/invoice-file',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/invoice-file/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceFileDto>({
      method: 'GET',
      url: `/api/app/invoice-file/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<InvoiceFileDto>>({
      method: 'GET',
      url: '/api/app/invoice-file',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateInvoiceFileDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoiceFileDto>({
      method: 'PUT',
      url: `/api/app/invoice-file/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
