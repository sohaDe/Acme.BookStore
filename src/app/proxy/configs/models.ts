import type { CountryDto, CurrencyDto, IndustryDto } from '../core/models';
import type { CashRoundingMethod } from '../core/cash-rounding-method.enum';
import type { SaleType } from '../stores/sale-type.enum';

export interface AuditLogActionDto {
  auditLogId?: string;
  serviceName?: string;
  methodName?: string;
  parameters?: string;
  executionTime?: string;
  executionDuration: number;
}

export interface AuditLogDto {
  applicationName?: string;
  userId?: string;
  userName?: string;
  tenantId?: string;
  tenantName?: string;
  impersonatorUserId?: string;
  impersonatorTenantId?: string;
  executionTime?: string;
  executionDuration: number;
  clientIpAddress?: string;
  clientName?: string;
  clientId?: string;
  correlationId?: string;
  browserInfo?: string;
  httpMethod?: string;
  url?: string;
  exceptions?: string;
  comments?: string;
  httpStatusCode?: number;
  actions: AuditLogActionDto[];
}

export interface AuditLogRequestDto {
  top: number;
  tenantId?: string;
  tenantName?: string;
}

export interface AuditLogs {
  id?: string;
  applicationName?: string;
  userId?: string;
  userName?: string;
  tenantId?: string;
  tenantName?: string;
  executionTime?: string;
  executionDuration: number;
  clientIpAddress?: string;
  clientName?: string;
  clientId?: string;
  correlationId?: string;
  browserInfo?: string;
  httpMethod?: string;
  url?: string;
  exceptions?: string;
  comments?: string;
  httpStatusCode?: number;
  serviceName?: string;
  methodName?: string;
  parameters?: string;
}

export interface DateFormatResponseDto {
  shortDateFormats: string[];
  longDateFormats: string[];
}

export interface GeneralSettingsResponseDto {
  countries: CountryDto[];
  currencies: CurrencyDto[];
  industries: IndustryDto[];
  datesFormats: DateFormatResponseDto;
  defaultLanguage?: string;
  timeZones: TimeZoneDto[];
}

export interface TimeZoneDto {
  id?: string;
  name?: string;
  timeZoneInfo: any;
}

export interface UpdateGeneralSettingDto {
  companyName?: string;
  ownerName?: string;
  taxId?: string;
  posInvoiceHeader?: string;
  posInvoiceFooter?: string;
  countryId?: string;
  currencyId?: string;
  industryId?: string;
  defaultLanguage?: string;
  dataLanguage?: string;
  shortDateFormat?: string;
  longDateFormat?: string;
  timeZone?: string;
  cashRoundingMethod: CashRoundingMethod;
  saleType: SaleType;
}

export interface UpdateItemSettingsDto {
  preventDuplicateSku: boolean;
  preventDuplicateBarcode: boolean;
  allowDuplicateBarcodeForItemVariants: boolean;
}

export interface UpdateOrderSettingsDto {
  salesOrderInvoiceTypeId?: string;
  salesReturnOrderInvoiceTypeId?: string;
  salesOrderInvoicePrintTemplateId?: string;
  salesOrderReceiptPrintTemplateId?: string;
}

export interface UpdateReviewSettingsDto {
  autoPublish?: boolean;
  storeReviewRequest?: boolean;
  itemReviewRequest?: boolean;
  isNotHelpFullEnabled?: boolean;
  thankMessage?: string;
  reviewAllOrderLinesRequired?: boolean;
  orderStatus: number[];
  isTextReviewRequired?: boolean;
  canUpdateAfterPublish?: boolean;
}

export interface UpdateTransferOrderSettingsDto {
  transferInInvoiceTypeId: string;
  transferOutInvoiceTypeId: string;
}
