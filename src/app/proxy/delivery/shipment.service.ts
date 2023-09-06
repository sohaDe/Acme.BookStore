import type { CreateUpdateShipmentDto, ShipmentChangeStatusDto, ShipmentDto, ShipmentHistoryDto, ShipmentHistoryRequestDto, ShipmentRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  apiName = 'Default';
  

  changeStatus = (input: ShipmentChangeStatusDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/shipment/change-status',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdateShipmentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShipmentDto>({
      method: 'POST',
      url: '/api/app/shipment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/shipment/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShipmentDto>({
      method: 'GET',
      url: `/api/app/shipment/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getHistory = (input: ShipmentHistoryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShipmentHistoryDto>>({
      method: 'GET',
      url: '/api/app/shipment/history',
      params: { shipmentId: input.shipmentId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ShipmentRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShipmentDto>>({
      method: 'GET',
      url: '/api/app/shipment',
      params: { search: input.search, orderId: input.orderId, packageId: input.packageId, deliveryMethodId: input.deliveryMethodId, providerQuotationId: input.providerQuotationId, providerOrderId: input.providerOrderId, dispatcherId: input.dispatcherId, status: input.status, fromDate: input.fromDate, toDate: input.toDate, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateShipmentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShipmentDto>({
      method: 'PUT',
      url: `/api/app/shipment/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
