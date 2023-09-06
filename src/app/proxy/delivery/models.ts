import type { AuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { DeliveryMethodProvider } from './delivery-method-provider.enum';
import type { DeliveryMethodCoveredAreaLimitation } from './delivery-method-covered-area-limitation.enum';
import type { DeliveryMethodRateType } from './delivery-method-rate-type.enum';
import type { GeoAreaType } from '../core/geo-area-type.enum';
import type { CountryDto, CurrencyDto } from '../core/models';
import type { CountryIso2Code } from '../core/country-iso2-code.enum';
import type { CurrencyIsoCode } from '../core/currency-iso-code.enum';
import type { KosmoType } from './kosmo-type.enum';
import type { OtoType } from './oto-type.enum';
import type { SalesOrderLineDto } from '../orders/models';
import type { ShippingStatus } from '../orders/shipping-status.enum';

export interface DeliveryMethodZoneRateDto extends AuditedEntityDto<string> {
  deliveryMethodId?: string;
  provider: DeliveryMethodProvider;
  coveredArea: DeliveryMethodCoveredAreaLimitation;
  points: DeliveryMethodZoneRatePointDto[];
  deliveryMethodName?: string;
  deliveryMethodName2?: string;
  deliveryMethodName3?: string;
  name?: string;
  name2?: string;
  name3?: string;
  note?: string;
  note2?: string;
  note3?: string;
  duration: number;
  maxDuration: number;
  deliveryFees: number;
  minimumDeliveryLimit: number;
  freeDeliveryLimit: number;
  deliveryMethodRate: DeliveryMethodRateType;
  isOnDeliveryPaymentEnabled: boolean;
  outletId?: string;
  countryId?: string;
  countryName?: string;
  countryLocalName?: string;
  provinceOrStates?: string;
  cities?: string;
  postalCodes?: string;
  disabled: boolean;
  deliveryMethodZoneRateGeoAreas: DeliveryMethodZoneRateGeoAreaDto[];
}

export interface DeliveryMethodZoneRateGeoAreaDto extends AuditedEntityDto<string> {
  deliveryMethodZoneRateId?: string;
  geoAreaId?: string;
  displayOrder: number;
  geoAreaName?: string;
  geoAreaLocalName?: string;
  geoAreaParentName?: string;
  geoAreaParentLocalName?: string;
  geoAreaParentType: GeoAreaType;
  geoAreaType: GeoAreaType;
}

export interface DeliveryMethodZoneRatePointDto {
  latitude: number;
  longitude: number;
}

export interface AcceptDeliveryGatewayQuotationRequestDto {
  quoteId: string;
  packageId: string;
  deliveryMethodZoneRateId: string;
  kosmoOptions: KosmoAcceptQuotationOptions;
  otoOptions: OtoAcceptQuotationOptions;
}

export interface CreateUpdateDeliveryMethodDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  image?: string;
  deliveryMethodZoneRates: CreateUpdateDeliveryMethodZoneRateDto[];
}

export interface CreateUpdateDeliveryMethodZoneRateDto {
  id?: string;
  coveredArea: DeliveryMethodCoveredAreaLimitation;
  points: DeliveryMethodZoneRatePointDto[];
  name?: string;
  name2?: string;
  name3?: string;
  note?: string;
  note2?: string;
  note3?: string;
  duration?: number;
  maxDuration?: number;
  deliveryFees?: number;
  minimumDeliveryLimit?: number;
  freeDeliveryLimit?: number;
  deliveryMethodRate?: DeliveryMethodRateType;
  isOnDeliveryPaymentEnabled?: boolean;
  outletId?: string;
  countryId?: string;
  provinceOrStates?: string;
  cities?: string;
  postalCodes?: string;
  disabled?: boolean;
  deliveryMethodZoneRateGeoAreas: CreateUpdateDeliveryMethodZoneRateGeoAreaDto[];
}

export interface CreateUpdateDeliveryMethodZoneRateGeoAreaDto {
  geoAreaId?: string;
  displayOrder: number;
}

export interface CreateUpdatePackageDto {
  id?: string;
  note?: string;
  date?: string;
  weight?: number;
  width?: number;
  height?: number;
  length?: number;
  packageLines: CreateUpdatePackageLineDto[];
}

export interface CreateUpdatePackageLineDto {
  id?: string;
  orderLineId?: string;
  quantity: number;
}

export interface CreateUpdateShipmentDto {
  id?: string;
  packageId: string;
  deliveryMethodZoneRateId: string;
  providerQuotationId?: string;
  providerOrderId?: string;
  carrierName?: string;
  serviceName?: string;
  deliveryType?: string;
  trackingUrl?: string;
  trackingNumber?: string;
  dispatcherId?: string;
  dispatcherName?: string;
  dispatcherContact?: string;
  dispatchDate?: string;
  note?: string;
  currencyId?: string;
  currencyRate?: number;
  fees: number;
  date?: string;
}

export interface DeliveryGatewayDto {
  id: number;
  name?: string;
  image?: string;
  details?: string;
  link?: string;
  website?: string;
  enableDate?: string;
  types: DeliveryGatewayTypeDto[];
}

export interface DeliveryGatewayOptionsDto {
  separatedContract: boolean;
  key1Label?: string;
  key1Value?: string;
  key2Label?: string;
  key2Value?: string;
  isLiveLabel?: string;
  isLiveValue: boolean;
  webhookUrl?: string;
  supportedCountries: CountryDto[];
  supportedCurrencies: CurrencyDto[];
  deliveryTypes: DeliveryTypeDto[];
}

export interface DeliveryGatewayTypeDto {
  name?: string;
  type?: number;
  supportedCountries: CountryIso2Code[];
  supportedCurrencies: CurrencyIsoCode[];
}

export interface DeliveryMethodDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  provider: DeliveryMethodProvider;
  providerType?: number;
  providerString?: string;
  providerTypeString?: string;
  disabled: boolean;
  image?: string;
  deliveryMethodZoneRates: DeliveryMethodZoneRateDto[];
}

export interface DeliveryMethodZoneRatesRequest {
  tenantId?: string;
  outletId?: string;
  countryId?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  zipPostalCode?: string;
  longitude?: string;
  latitude?: string;
  accuracy?: number;
}

export interface DeliveryMethodsRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
  provider?: DeliveryMethodProvider;
  providerType?: number;
}

export interface DeliveryTypeDto {
  id: number;
  label?: string;
  value: boolean;
  displayDeliveryTypes: DisplayDeliveryTypeDto[];
}

export interface DisplayDeliveryTypeDto {
  id?: string;
  label?: string;
  value: boolean;
}

export interface GetDeliveryGatewayQuotationsRequestDto {
  packageId: string;
  deliveryMethodZoneRateId: string;
}

export interface GetPrintOtoAWBUrlRequestDto {
  orderId: string;
}

export interface GetPrintOtoAWBUrlResponseDto {
  printAWBURL?: string;
}

export interface KosmoAcceptQuotationOptions {
  autoReassign: boolean;
}

export interface KosmoOptionsDto {
  separatedContract: boolean;
  apiToken?: string;
  isLive: boolean;
  deliveryTypes: KosmoType[];
  options: ShowKosmoTypes;
}

export interface OtoAcceptQuotationOptions {
  price?: number;
  provider?: string;
  deliveryType?: string;
}

export interface OtoOptionsDto {
  separatedContract: boolean;
  refreshToken?: string;
  isLive: boolean;
  webhookUrl?: string;
  deliveryTypes: OtoType[];
  options: ShowOtoTypes;
}

export interface PackageDto extends AuditedEntityDto<string> {
  note?: string;
  number?: string;
  date?: string;
  weight?: number;
  width?: number;
  height?: number;
  length?: number;
  packageLines: PackageLineDto[];
}

export interface PackageLineDto extends AuditedEntityDto<string> {
  orderLine: SalesOrderLineDto;
  packageId?: string;
  orderLineId?: string;
  quantity: number;
}

export interface PackageRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  orderId?: string;
  fromDate?: string;
  toDate?: string;
}

export interface SetDeliveryGatewayOptionsDto {
  separatedContract: boolean;
  key1Label?: string;
  key1Value?: string;
  key2Label?: string;
  key2Value?: string;
  isLiveLabel?: string;
  isLiveValue: boolean;
  deliveryTypes: DeliveryTypeDto[];
}

export interface ShipmentChangeStatusDto {
  id: string;
  status: ShippingStatus;
  date?: string;
}

export interface ShipmentDto extends AuditedEntityDto<string> {
  packageId?: string;
  providerQuotationId?: string;
  providerOrderId?: string;
  status: ShippingStatus;
  deliveryMethodZoneRateId?: string;
  carrierName?: string;
  serviceName?: string;
  deliveryType?: string;
  number?: string;
  trackingUrl?: string;
  trackingNumber?: string;
  dispatcherId?: string;
  dispatcherName?: string;
  dispatcherContact?: string;
  dispatchDate?: string;
  deliveryDate?: string;
  note?: string;
  currencyId?: string;
  currencyRate?: number;
  fees: number;
  date?: string;
  package: PackageDto;
  currency: CurrencyDto;
  deliveryMethodZoneRate: DeliveryMethodZoneRateDto;
}

export interface ShipmentHistoryDto extends AuditedEntityDto<string> {
  tenantId?: string;
  shipmentId?: string;
  status: ShippingStatus;
  note?: string;
}

export interface ShipmentHistoryRequestDto extends PagedResultRequestDto {
  shipmentId: string;
}

export interface ShipmentRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  orderId?: string;
  packageId?: string;
  deliveryMethodId?: string;
  providerQuotationId?: string;
  providerOrderId?: string;
  dispatcherId?: string;
  status?: ShippingStatus;
  fromDate?: string;
  toDate?: string;
}

export interface ShippingQuotationDto {
  id?: string;
  provider?: string;
  deliveryType?: string;
  price: number;
  currency: CurrencyDto;
  dropOffEta?: string;
  pickupEta?: string;
  vehicleType?: string;
  rank?: number;
  maxOrderValue?: number;
  codCharge?: number;
  returnFee?: number;
  maxFreeWeight?: number;
  extraWeightPerKg?: number;
}

export interface ShowKosmoTypes {
  showASAP: boolean;
  showTwoHours: boolean;
  showFourHours: boolean;
  showNextDay: boolean;
  showNextThreeDays: boolean;
}

export interface ShowOtoTypes {
  showExpress: boolean;
  showSameDay: boolean;
  showFastDelivery: boolean;
  showColdDelivery: boolean;
  showHeavyAndBulky: boolean;
  showElectronicAndHeavy: boolean;
}
