import type { AddEditEditionTranslationDto, CompareEditionsFeaturesDto, CompareEditionsFeaturesRequestDto, CreateSaasEditionDto, SaasEditionDto, SaasEditionListRequestDto, SaasEditionRequestDto, SaasEditionTranslationDto, SaasEditionsComparisonRequestDto, SaasProductEditionDto, SaasProductEditionRequestDto, UpdateSaasEditionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetFeatureListResultDto } from '../volo/abp/feature-management/models';

@Injectable({
  providedIn: 'root',
})
export class SaasEditionService {
  apiName = 'Default';
  

  copy = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasEditionDto>({
      method: 'POST',
      url: `/api/app/saas-edition/${id}/copy`,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateSaasEditionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasEditionDto>({
      method: 'POST',
      url: '/api/app/saas-edition',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-edition/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteTranslation = (id: string, language: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/saas-edition/${id}/translation`,
      params: { language },
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasEditionDto>({
      method: 'GET',
      url: `/api/app/saas-edition/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCompareFeatures = (input: CompareEditionsFeaturesRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompareEditionsFeaturesDto[]>({
      method: 'GET',
      url: '/api/app/saas-edition/compare-features',
      params: { productCode: input.productCode, withFeatures: input.withFeatures },
    },
    { apiName: this.apiName,...config });
  

  getComparison = (countryIso3Code: string, input: SaasEditionsComparisonRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompareEditionsFeaturesDto[]>({
      method: 'GET',
      url: `/api/app/saas-edition/comparison/${countryIso3Code}`,
      params: { currencyIsoCode: input.currencyIsoCode, productCode: input.productCode, withFeatures: input.withFeatures },
    },
    { apiName: this.apiName,...config });
  

  getFeatures = (editionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetFeatureListResultDto>({
      method: 'GET',
      url: `/api/app/saas-edition/features/${editionId}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SaasEditionRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SaasEditionDto>>({
      method: 'GET',
      url: '/api/app/saas-edition',
      params: { productId: input.productId, search: input.search, currencyId: input.currencyId, countryId: input.countryId, subscriptionExpiryAction: input.subscriptionExpiryAction, expirySubstituteId: input.expirySubstituteId, disabled: input.disabled, publicAvailability: input.publicAvailability, fromPrice: input.fromPrice, toPrice: input.toPrice, offersOnly: input.offersOnly, intervalUnit: input.intervalUnit, interval: input.interval, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getProductEditions = (input: SaasProductEditionRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasProductEditionDto[]>({
      method: 'GET',
      url: '/api/app/saas-edition/product-editions',
      params: { productCode: input.productCode },
    },
    { apiName: this.apiName,...config });
  

  getStore = (input: SaasEditionListRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasEditionDto[]>({
      method: 'GET',
      url: '/api/app/saas-edition/store',
      params: { productId: input.productId, currencyId: input.currencyId, storeId: input.storeId, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getTranslations = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasEditionTranslationDto[]>({
      method: 'GET',
      url: `/api/app/saas-edition/${id}/translations`,
    },
    { apiName: this.apiName,...config });
  

  putDefault = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-edition/${id}/default`,
    },
    { apiName: this.apiName,...config });
  

  putDisable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-edition/${id}/disable`,
    },
    { apiName: this.apiName,...config });
  

  putEnable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-edition/${id}/enable`,
    },
    { apiName: this.apiName,...config });
  

  putTranslations = (id: string, input: AddEditEditionTranslationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/saas-edition/${id}/translations`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateSaasEditionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SaasEditionDto>({
      method: 'PUT',
      url: `/api/app/saas-edition/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
