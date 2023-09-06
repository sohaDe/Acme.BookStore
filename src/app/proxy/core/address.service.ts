import type { AddressDto, AddressesRequestDto, CreateAddressDto, UpdateAddressDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  apiName = 'Default';
  

  create = (input: CreateAddressDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AddressDto>({
      method: 'POST',
      url: '/api/app/address',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/address/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AddressDto>({
      method: 'GET',
      url: `/api/app/address/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: AddressesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AddressDto>>({
      method: 'GET',
      url: '/api/app/address',
      params: { customerId: input.customerId, target: input.target, stateProvinceId: input.stateProvinceId, countryId: input.countryId, cityId: input.cityId, districtId: input.districtId, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateAddressDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AddressDto>({
      method: 'PUT',
      url: `/api/app/address/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
