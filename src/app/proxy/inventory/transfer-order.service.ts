import type { CreateTransferOrderDto, TransferOrderDto, TransferOrderRequestDto, UpdateTransferOrderDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferOrderService {
  apiName = 'Default';
  

  create = (input: CreateTransferOrderDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransferOrderDto>({
      method: 'POST',
      url: '/api/app/transfer-order',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/transfer-order/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransferOrderDto>({
      method: 'GET',
      url: `/api/app/transfer-order/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: TransferOrderRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TransferOrderDto>>({
      method: 'GET',
      url: '/api/app/transfer-order',
      params: { search: input.search, sourceWarehouseId: input.sourceWarehouseId, destinationWarehouseId: input.destinationWarehouseId, status: input.status, sourceBranchId: input.sourceBranchId, destinationBranchId: input.destinationBranchId, fromDate: input.fromDate, toDate: input.toDate, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  putCancel = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/transfer-order/cancel/${id}`,
    },
    { apiName: this.apiName,...config });
  

  putTransfer = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/transfer-order/transfer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateTransferOrderDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransferOrderDto>({
      method: 'PUT',
      url: `/api/app/transfer-order/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
