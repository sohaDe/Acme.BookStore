import type { ExternalServiceCategory } from './external-service-category.enum';

export interface ExternalServiceDto {
  categories: ExternalServiceCategory[];
  id?: string;
  name?: string;
  description?: string;
  price: number;
  logo?: string;
  link?: string;
  helpLink?: string;
  enabledDate?: string;
  enabled: boolean;
}

export interface ExternalServiceOptionsDto {
  key?: string;
}

export interface ExternalServiceOptionsReturnDto {
  key?: string;
  enabled: boolean;
  enabledDate?: string;
}

export interface ExternalServiceSettingsDto {
  googleTagManagerId?: string;
  googleAdWordsId?: string;
  googleMerchentId?: string;
  snapId?: string;
  facebookCatalogFeedId?: string;
  facebookMessengerId?: string;
  snapChatCatalogId?: string;
  googleAnalyticId?: string;
  crazyEggId?: string;
  hotJarId?: string;
  googleConsoleId?: string;
  facebookPixelId?: string;
  facebookAppId?: string;
  chatraId?: string;
  tawkId?: string;
  tidioId?: string;
  freshworksId?: string;
  snapChatId?: string;
  tiktookId?: string;
  mailChimp?: string;
  facebookDVK?: string;
}
