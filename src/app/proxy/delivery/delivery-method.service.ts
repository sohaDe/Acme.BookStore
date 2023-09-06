import type { DeliveryMethodProvider } from './delivery-method-provider.enum';
import type { AcceptDeliveryGatewayQuotationRequestDto, CreateUpdateDeliveryMethodDto, DeliveryGatewayDto, DeliveryGatewayOptionsDto, DeliveryMethodDto, DeliveryMethodZoneRatesRequest, DeliveryMethodsRequestDto, GetDeliveryGatewayQuotationsRequestDto, SetDeliveryGatewayOptionsDto, ShipmentDto, ShippingQuotationDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GeoAreaDto } from '../core/models';
import type { DeliveryMethodZoneRateStoreDto, DeliveryMethodZoneRateWithAddressDto } from '../stores/models';

@Injectable({
  providedIn: 'root',
})
export class DeliveryMethodService {
  apiName = 'Default';
  

  acceptQuotation = (provider: DeliveryMethodProvider, model: AcceptDeliveryGatewayQuotationRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShipmentDto>({
      method: 'POST',
      url: `/api/app/delivery-method/accept-quotation/${provider}`,
      body: model,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdateDeliveryMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DeliveryMethodDto>({
      method: 'POST',
      url: '/api/app/delivery-method',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/delivery-method/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DeliveryMethodDto>({
      method: 'GET',
      url: `/api/app/delivery-method/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDeliveryGateways = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DeliveryGatewayDto[]>({
      method: 'GET',
      url: '/api/app/delivery-method/delivery-gateways',
    },
    { apiName: this.apiName,...config });
  

  getDeliveryMethodZoneRates = (input: DeliveryMethodZoneRatesRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DeliveryMethodZoneRateStoreDto[]>({
      method: 'GET',
      url: '/api/app/delivery-method/delivery-method-zone-rates',
      params: { tenantId: input.tenantId, outletId: input.outletId, countryId: input.countryId, stateProvinceId: input.stateProvinceId, stateProvinceName: input.stateProvinceName, cityId: input.cityId, cityName: input.cityName, districtId: input.districtId, zipPostalCode: input.zipPostalCode, longitude: input.longitude, latitude: input.latitude, accuracy: input.accuracy },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: DeliveryMethodsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DeliveryMethodDto>>({
      method: 'GET',
      url: '/api/app/delivery-method',
      params: { disabled: input.disabled, provider: input.provider, providerType: input.providerType, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMyArea = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, GeoAreaDto[]>({
      method: 'GET',
      url: '/api/app/delivery-method/my-area',
    },
    { apiName: this.apiName,...config });
  

  getOptions = (provider: DeliveryMethodProvider, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DeliveryGatewayOptionsDto>({
      method: 'GET',
      url: `/api/app/delivery-method/options/${provider}`,
    },
    { apiName: this.apiName,...config });
  

  getQuickCheckoutInfo = (outletId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DeliveryMethodZoneRateWithAddressDto>({
      method: 'GET',
      url: '/quick-checkout-info',
      params: { outletId },
    },
    { apiName: this.apiName,...config });
  

  getQuotations = (provider: DeliveryMethodProvider, model: GetDeliveryGatewayQuotationsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingQuotationDto[]>({
      method: 'GET',
      url: `/api/app/delivery-method/quotations/${provider}`,
      params: { packageId: model.packageId, deliveryMethodZoneRateId: model.deliveryMethodZoneRateId },
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/delivery-method/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/delivery-method/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateDeliveryMethodDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DeliveryMethodDto>({
      method: 'PUT',
      url: `/api/app/delivery-method/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (provider: DeliveryMethodProvider, input: SetDeliveryGatewayOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/delivery-method/options/${provider}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
