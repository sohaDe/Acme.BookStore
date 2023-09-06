import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ExportInvoiceToZedXmlRequestDto } from '../invoices/models';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  apiName = 'Default';
  

  exportToZedXml = (input: ExportInvoiceToZedXmlRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/download/zed-xml-file',
      params: { outletId: input.outletId, fromDate: input.fromDate, toDate: input.toDate, mode: input.mode, typeIds: input.typeIds },
    },
    { apiName: this.apiName,...config });
  

  invoice = (ids: string[], isDownload?: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/download/invoice',
      params: { ids, isDownload },
    },
    { apiName: this.apiName,...config });
  

  invoiceFile = (name: string, isDownload?: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/download/invoice-file/${name}`,
      params: { isDownload },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
