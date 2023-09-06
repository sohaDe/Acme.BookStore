import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { AddressTarget } from './address-target.enum';
import type { CurrencyIsoCode } from './currency-iso-code.enum';
import type { CurrencyPosition } from './currency-position.enum';
import type { CountryIso2Code } from './country-iso2-code.enum';
import type { CountryIso3Code } from './country-iso3-code.enum';
import type { GeoAreaFieldType } from './geo-area-field-type.enum';
import type { ImageTarget } from './image-target.enum';
import type { GeoAreaType } from './geo-area-type.enum';

export interface AddressDto extends AuditedEntityDto<string> {
  label?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  company?: string;
  countryId?: string;
  countryName?: string;
  countryLocalName?: string;
  countryTwoLetterIsoCode?: string;
  countryThreeLetterIsoCode?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  stateProvinceLocalName?: string;
  cityId?: string;
  cityName?: string;
  cityLocalName?: string;
  districtId?: string;
  districtName?: string;
  districtLocalName?: string;
  zipPostalCode?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  phoneNumber?: string;
  internalNote?: string;
  longitude?: string;
  latitude?: string;
  accuracy?: number;
  target: AddressTarget;
}

export interface CurrencyDto extends AuditedEntityDto<string> {
  name?: string;
  localName?: string;
  symbol?: string;
  localSymbol?: string;
  isoCode: CurrencyIsoCode;
  position: CurrencyPosition;
  fractionDigit: number;
  exchangeRate: number;
  disabled: boolean;
  isDefault: boolean;
  moneyParts?: string;
  moneyPartsValues: string[];
  cashRounding: number;
  creatorUserName?: string;
  lastModifierUserName?: string;
}

export interface CountryDto extends AuditedEntityDto<string> {
  name?: string;
  localName?: string;
  timeZone?: string;
  flagImage?: string;
  disabled: boolean;
  featured: boolean;
  twoLetterIsoCode: CountryIso2Code;
  threeLetterIsoCode: CountryIso3Code;
  dialingCode: number;
  currencyId?: string;
  currencyName?: string;
  currencySymbol?: string;
  currencyISOCode?: string;
  displayOrder: number;
  languages: string[];
  creatorUserName?: string;
  lastModifierUserName?: string;
  options: CountryOptionsDto;
}

export interface CountryOptionsDto {
  defaultEditionId?: string;
  showStateOrProvinceField: boolean;
  stateOrProvinceFieldRquired: boolean;
  stateOrProvinceFieldType: GeoAreaFieldType;
  stateOrProvinceFieldLabel?: string;
  showCityField: boolean;
  cityFieldRquired: boolean;
  cityFieldType: GeoAreaFieldType;
  cityFieldLabel?: string;
  showDistrictField: boolean;
  districtFieldRquired: boolean;
  districtFieldType: GeoAreaFieldType;
  districtFieldLabel?: string;
  showAddress1Field: boolean;
  address1FieldRquired: boolean;
  address1FieldType: GeoAreaFieldType;
  address1FieldLabel?: string;
  showAddress2Field: boolean;
  address2FieldRquired: boolean;
  address2FieldType: GeoAreaFieldType;
  address2FieldLabel?: string;
  showAddress3Field: boolean;
  address3FieldRquired: boolean;
  address3FieldType: GeoAreaFieldType;
  address3FieldLabel?: string;
  showFirstNameField: boolean;
  firstNameFieldRquired: boolean;
  showMiddleNameField: boolean;
  middleNameFieldRquired: boolean;
  showLastNameField: boolean;
  lastNameFieldRquired: boolean;
  showPhoneNumberField: boolean;
  phoneNumberFieldRquired: boolean;
  showEmailField: boolean;
  emailFieldRquired: boolean;
  showCompanyField: boolean;
  companyFieldRquired: boolean;
  phoneVerificationIsEnabled: boolean;
  phoneVerificationIsMandatory: boolean;
  googleMapLevel1?: string;
  googleMapLevel2?: string;
  googleMapLevel3?: string;
  googleMapLevel4?: string;
  googleMapLevel5?: string;
  googleMapLevel6?: string;
  otoAddress?: string;
  otoCity?: string;
  otoCountry?: string;
  kosmoAddress?: string;
  kosmoCountry?: string;
  kosmoLat?: string;
  kosmoLng?: string;
  kosmoAddressDetails?: string;
}

export interface AddEditIndustryTranslationDto {
  language: string;
  name: string;
}

export interface AddressesRequestDto extends PagedAndSortedResultRequestDto {
  customerId?: string;
  target?: AddressTarget;
  stateProvinceId?: string;
  countryId?: string;
  cityId?: string;
  districtId?: string;
  search?: string;
}

export interface CountriesRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
}

export interface CountryFilter {
  disabled?: boolean;
}

export interface CreateAddressDto {
  id?: string;
  label?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  countryId?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  zipPostalCode?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  phoneNumber?: string;
  internalNote?: string;
  longitude?: string;
  latitude?: string;
  accuracy?: number;
  target: AddressTarget;
  customerId?: string;
  warehouseId?: string;
  branchId?: string;
  outletId?: string;
}

export interface CreateCountryDto {
  name: string;
  localName?: string;
  timeZone?: string;
  flagImage?: string;
  featured: boolean;
  twoLetterIsoCode: CountryIso2Code;
  threeLetterIsoCode: CountryIso3Code;
  dialingCode: number;
  currencyId?: string;
  displayOrder: number;
  languages: string[];
  languagesValues?: string;
}

export interface CreateCurrencyDto {
  name: string;
  localName?: string;
  symbol: string;
  localSymbol?: string;
  isoCode: CurrencyIsoCode;
  position: CurrencyPosition;
  fractionDigit: number;
  exchangeRate: number;
  displayOrder: number;
  moneyParts?: string;
}

export interface CreateImageDto {
  name: string;
  target: ImageTarget;
  fileSize: number;
  extension?: string;
  url: string;
  alt?: string;
  width: number;
  height: number;
}

export interface CreateUpdateAddressDto {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  internalNote?: string;
  label?: string;
  company?: string;
  countryId?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  zipPostalCode?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  storeUserComment?: string;
  longitude?: string;
  latitude?: string;
  accuracy?: number;
}

export interface CreateUpdateGeoAreaDto {
  id?: string;
  name: string;
  localName?: string;
  countryId?: string;
  parentId?: string;
  type: GeoAreaType;
  displayOrder: number;
}

export interface CreateUpdateIndustryDto {
  id?: string;
  name: string;
  localName?: string;
  parentId?: string;
  defaultMobileStoreTemplateId?: string;
  defaultWebStoreTemplateId?: string;
  translations: AddEditIndustryTranslationDto[];
}

export interface CurrenciesRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
}

export interface CurrencyFilter {
  disabled?: boolean;
}

export interface GeoAreaDto extends AuditedEntityDto<string> {
  name?: string;
  localName?: string;
  countryId?: string;
  countryName?: string;
  parentId?: string;
  parentName?: string;
  disabled: boolean;
  type: GeoAreaType;
  isHost: boolean;
  displayOrder: number;
}

export interface GeoAreasRequestDto extends PagedAndSortedResultRequestDto {
  parentId?: string;
  disabled?: boolean;
  countryId?: string;
  type?: GeoAreaType;
  search?: string;
}

export interface ImageDto extends AuditedEntityDto<string> {
  name?: string;
  target: ImageTarget;
  fileSize: number;
  extension?: string;
  url?: string;
  alt?: string;
  width: number;
  height: number;
  creatorUserName?: string;
  lastModifierUserName?: string;
}

export interface IndustriesRequestDto extends PagedAndSortedResultRequestDto {
  parentId?: string;
  disabled?: boolean;
}

export interface IndustryDto extends AuditedEntityDto<string> {
  name?: string;
  parentId?: string;
  parentName?: string;
  defaultMobileStoreTemplateId?: string;
  defaultWebStoreTemplateId?: string;
  disabled: boolean;
  creatorUserName?: string;
  lastModifierUserName?: string;
  language?: string;
  translations: IndustryTranslationDto[];
}

export interface IndustryFilter {
  parentId?: string;
  disabled?: boolean;
}

export interface IndustryTranslationDto {
  language?: string;
  name?: string;
}

export interface ReorderGeoAreaDto {
  id?: string;
  displayOrder: number;
  parentId?: string;
}

export interface UpdateAddressDto {
  id?: string;
  label?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  countryId?: string;
  stateProvinceId?: string;
  stateProvinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  zipPostalCode?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  phoneNumber?: string;
  internalNote?: string;
  longitude?: string;
  latitude?: string;
  accuracy?: number;
}

export interface UpdateCountryDto extends CreateCountryDto {
  id?: string;
}

export interface UpdateCurrencyDto extends CreateCurrencyDto {
  id?: string;
}

export interface UpdateImageDto extends CreateImageDto {
  id?: string;
}
