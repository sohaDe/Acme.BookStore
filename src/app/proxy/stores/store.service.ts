import type { StorefrontRequestDto } from './core/models';
import type { ApplyMarketplaceRequestDto, ApplyStoreTemplateRequestDto, CompleteRegistrationResponseDto, CompleteStoreRegistrationDto, CreateStoreDto, IncompleteStoreDto, IncompleteStoreRequestDto, MyStoreDto, QuickCheckoutDto, SimpleStoreDto, SimpleStoreOwnerDto, StoreConfigDto, StoreDetailsDto, StoreDomainRequestDto, StoreDto, StoreFeaturesDto, StoreListAppliedMarketplaceDto, StoreManifestDto, StoreOptionsDto, StoreRequestDto, StoreSummaryReportDto, StoreSummaryRequestDto, StorefrontDto, StorefrontPageDto, StorefrontPageRequestDto, UpdateStoreBasicDto, UpdateStoreSeoDto } from './models';
import type { StoreStatus } from './store-status.enum';
import type { RelatedStoreDesignRequestDto, StoreDesignComponentDto } from './themes/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  apiName = 'Default';
  

  addDomain = (input: StoreDomainRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'POST',
      url: '/api/app/store/domain',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  applyStoreTemplate = (input: ApplyStoreTemplateRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/store/apply-store-template',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  checkCustomDomain = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/store/check-custom-domain',
      params: { domain },
    },
    { apiName: this.apiName,...config });
  

  checkDomain = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/store/check-domain',
      params: { domain },
    },
    { apiName: this.apiName,...config });
  

  clearCache = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/store/${id}/clear-cache`,
    },
    { apiName: this.apiName,...config });
  

  completeRegistration = (input: CompleteStoreRegistrationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompleteRegistrationResponseDto>({
      method: 'POST',
      url: '/api/app/store/complete-registration',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateStoreDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'POST',
      url: '/api/app/store',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deleteDomain = (input: StoreDomainRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'DELETE',
      url: '/api/app/store/domain',
      params: { storeId: input.storeId, domain: input.domain },
    },
    { apiName: this.apiName,...config });
  

  deleteStore = (id: string, tenantId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/store/${id}/${tenantId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'GET',
      url: `/api/app/store/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAppliedMarketplace = (input: StoreListAppliedMarketplaceDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SimpleStoreOwnerDto>>({
      method: 'GET',
      url: '/api/app/store/applied-marketplace',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getDashboardSummary = (id: string, input: StoreSummaryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreSummaryReportDto>({
      method: 'GET',
      url: `/api/app/store/${id}/dashboard-summary`,
      params: { fromDate: input.fromDate, toDate: input.toDate },
    },
    { apiName: this.apiName,...config });
  

  getDetails = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDetailsDto>({
      method: 'GET',
      url: `/api/app/store/${id}/details`,
    },
    { apiName: this.apiName,...config });
  

  getFeatures = (storeId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreFeaturesDto[]>({
      method: 'GET',
      url: '/api/app/store/features',
      params: { storeId },
    },
    { apiName: this.apiName,...config });
  

  getIncomplete = (input: IncompleteStoreRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<IncompleteStoreDto>>({
      method: 'GET',
      url: '/api/app/store/incomplete',
      params: { tenantId: input.tenantId, search: input.search, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: StoreRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StoreDto>>({
      method: 'GET',
      url: '/api/app/store',
      params: { search: input.search, currencyId: input.currencyId, countryId: input.countryId, industryId: input.industryId, productId: input.productId, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getManifest = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreManifestDto>({
      method: 'GET',
      url: `/api/app/store/manifest/${domain}`,
    },
    { apiName: this.apiName,...config });
  

  getMarketplaces = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SimpleStoreDto[]>({
      method: 'GET',
      url: '/api/app/store/marketplaces',
    },
    { apiName: this.apiName,...config });
  

  getMy = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MyStoreDto>({
      method: 'GET',
      url: '/api/app/store/my',
    },
    { apiName: this.apiName,...config });
  

  getOptions = (id?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreOptionsDto>({
      method: 'GET',
      url: '/api/app/store/options',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  getQuickCheckout = (outletId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, QuickCheckoutDto>({
      method: 'GET',
      url: '/quick-checkout',
      params: { outletId },
    },
    { apiName: this.apiName,...config });
  

  getRelatedStoreDesign = (input: RelatedStoreDesignRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDesignComponentDto[]>({
      method: 'GET',
      url: '/api/app/store/related-store-design',
      params: { tenantId: input.tenantId, pageId: input.pageId },
    },
    { apiName: this.apiName,...config });
  

  getStoreByDomain = (domain: string, token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreConfigDto>({
      method: 'GET',
      url: `/api/app/store/domain/${domain}`,
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  getStoreById = (id: string, token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreConfigDto>({
      method: 'GET',
      url: `/api/app/store/id/${id}`,
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  getStorefront = (domain: string, input: StorefrontRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StorefrontDto>({
      method: 'GET',
      url: `/api/app/storefront/${domain}`,
      params: { token: input.token, themeId: input.themeId, outletId: input.outletId, pageId: input.pageId, version: input.version },
    },
    { apiName: this.apiName,...config });
  

  getStorefrontPage = (id: string, input: StorefrontPageRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StorefrontPageDto>({
      method: 'GET',
      url: `/api/app/storefront/page/${id}`,
      params: { privacyPolicyPageId: input.privacyPolicyPageId, termsAndConditionsPageId: input.termsAndConditionsPageId },
    },
    { apiName: this.apiName,...config });
  

  putApplyMarketplace = (input: ApplyMarketplaceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/store/apply-marketplace',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putChangeStatus = (id: string, status: StoreStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/store/${id}/change-status`,
      params: { status },
    },
    { apiName: this.apiName,...config });
  

  putDefaultDomain = (input: StoreDomainRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'PUT',
      url: '/api/app/store/default-domain',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putFeatures = (input: StoreFeaturesDto[], storeId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/store/features',
      params: { storeId },
      body: input,
    },
    { apiName: this.apiName,...config });
  

  putMarketplace = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/store/${id}/marketplace`,
    },
    { apiName: this.apiName,...config });
  

  putSeo = (input: UpdateStoreSeoDto, storeId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/store/seo/${storeId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateStoreBasicDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'PUT',
      url: `/api/app/store/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateDomain = (domain: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'PUT',
      url: '/api/app/store/domain',
      params: { domain },
    },
    { apiName: this.apiName,...config });
  

  updateLanguages = (languages: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/store/languages',
      body: languages,
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (options: StoreOptionsDto, storeId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreOptionsDto>({
      method: 'PUT',
      url: '/api/app/store/options',
      params: { storeId },
      body: options,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
