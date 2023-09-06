import type { CreateUpdatePrintTemplateDto, InvoicePrintTemplateOptionsDto, PrintTemplateDto, PrintTemplatesRequestDto, ReceiptPrintTemplateDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintTemplateService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePrintTemplateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrintTemplateDto>({
      method: 'POST',
      url: '/api/app/print-template',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/print-template/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrintTemplateDto>({
      method: 'GET',
      url: `/api/app/print-template/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getInvoiceOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicePrintTemplateOptionsDto>({
      method: 'GET',
      url: `/api/app/print-template/${id}/invoiceoptions`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PrintTemplatesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PrintTemplateDto>>({
      method: 'GET',
      url: '/api/app/print-template',
      params: { type: input.type, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getReceiptOptions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReceiptPrintTemplateDto>({
      method: 'GET',
      url: `/api/app/print-template/${id}/receiptoptions`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdatePrintTemplateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrintTemplateDto>({
      method: 'PUT',
      url: `/api/app/print-template/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateInvoiceOptions = (id: string, options: InvoicePrintTemplateOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicePrintTemplateOptionsDto>({
      method: 'PUT',
      url: `/api/app/print-template/${id}/invoice-options`,
      body: options,
    },
    { apiName: this.apiName,...config });
  

  updateReceiptOptions = (id: string, options: ReceiptPrintTemplateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReceiptPrintTemplateDto>({
      method: 'PUT',
      url: `/api/app/print-template/${id}/receipt-options`,
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
