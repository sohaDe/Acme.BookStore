import type { ThemeOptionType } from './theme-option-type.enum';
import type { ThemeDataType } from './theme-data-type.enum';
import type { StoreTemplateType } from '../store-template-type.enum';
import type { ThemeMenuItemType } from './theme-menu-item-type.enum';
import type { AuditedEntityDto, EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface BasicDictionaryDto {
  key?: string;
  value: object;
}

export interface CreateCustomizedThemeComponentDto {
  themeId: string;
  componentId?: string;
  pageId?: string;
  values: BasicDictionaryDto[];
}

export interface CreateUpdateCustomizedThemeMenuItemDto {
  themeId: string;
  menuItemId: string;
  values: BasicDictionaryDto[];
}

export interface CreateUpdateThemeComponentCategoryDto {
  id?: string;
  themeId: string;
  code: string;
  name: string;
}

export interface CreateUpdateThemeComponentDependencyDto {
  id?: string;
  componentId: string;
  type?: string;
  version?: string;
  name: string;
  provider?: string;
  url?: string;
}

export interface CreateUpdateThemeComponentDto {
  id?: string;
  categoryId: string;
  code: string;
  name: string;
  icon?: string;
  componentMenuItems: CreateUpdateThemeComponentMenuItem[];
}

export interface CreateUpdateThemeComponentMenuItem {
  menuItemId?: string;
}

export interface CreateUpdateThemeComponentPropertyDto {
  id?: string;
  componentId: string;
  sectionId?: string;
  type: ThemeOptionType;
  code: string;
  name: string;
  description?: string;
  isRequired: boolean;
  conditionValue?: string;
  conditionId?: string;
  dataType?: ThemeDataType;
  dataSource?: string;
  data: BasicDictionaryDto[];
}

export interface CreateUpdateThemeComponentSectionDto {
  id?: string;
  themeId: string;
  code: string;
  name: string;
}

export interface CreateUpdateThemeDto {
  id?: string;
  type: StoreTemplateType;
  code: string;
  name: string;
  price: number;
  url?: string;
  featured: boolean;
  previewImage?: string;
  cssStyle?: string;
}

export interface CreateUpdateThemeMenuItemDto {
  id?: string;
  themeId: string;
  pageId?: string;
  code: string;
  name: string;
  icon?: string;
  type: ThemeMenuItemType;
}

export interface CreateUpdateThemeMenuItemOptionDto {
  id?: string;
  menuItemId: string;
  type: ThemeOptionType;
  code: string;
  name: string;
  description?: string;
  isRequired: boolean;
  conditionValue?: string;
  conditionId?: string;
  dataType?: ThemeDataType;
  dataSource?: string;
  data: BasicDictionaryDto[];
}

export interface CustomizedThemeComponentDto {
  id?: string;
  customizedThemeId?: string;
  pageId?: string;
  componentId?: string;
  component: ThemeComponentDto;
  displayOrder: number;
  values: BasicDictionaryDto[];
}

export interface CustomizedThemeComponentPageDto {
  id?: string;
  name?: string;
  icon?: string;
  firstPropertyType: ThemeOptionType;
  firstPropertyCode?: string;
  values: BasicDictionaryDto[];
}

export interface CustomizedThemeComponentPageRequestDto {
  themeId: string;
}

export interface CustomizedThemeMenuItemDto extends AuditedEntityDto<string> {
  customizedThemeId?: string;
  menuItemId?: string;
  menuItem: ThemeMenuItemDto;
  options: SimpleThemeMenuItemOptionDto[];
  values: BasicDictionaryDto[];
}

export interface CustomizedThemeMenuItemRequestDto {
  themeId: string;
  menuItemId: string;
}

export interface MarketplaceRelatedStoresFeaturesDto {
  data: Record<string, object>;
}

export interface MarketplaceRelatedStoresFeaturesRequestDto {
  tenantId?: string;
  themeComponentCode?: string;
}

export interface ReorderCustomizedThemeComponentDto {
  id?: string;
  displayOrder: number;
}

export interface ReorderThemeComponentCategoryDto extends ReorderThemeComponentDto {
}

export interface ReorderThemeComponentDto {
  id?: string;
  displayOrder: number;
}

export interface ReorderThemeComponentPropertyDto extends ReorderThemeComponentDto {
}

export interface ReorderThemeComponentSectionDto extends ReorderThemeComponentDto {
}

export interface ReorderThemeMenuItemOptionDto {
  id?: string;
  displayOrder: number;
}

export interface SimpleCustomizedThemeComponentDto {
  id?: string;
  pageId?: string;
  componentId?: string;
  componentName?: string;
  displayOrder: number;
  values: BasicDictionaryDto[];
  properties: SimpleThemeComponentPropertyDto[];
}

export interface SimpleCustomizedThemeMenuItemDto {
  id?: string;
  themeId?: string;
  menuItemId?: string;
  name?: string;
  values: BasicDictionaryDto[];
  options: SimpleThemeMenuItemOptionDto[];
}

export interface SimpleThemeComponentCategoryDto {
  id?: string;
  code?: string;
  name?: string;
  displayOrder: number;
  components: SimpleThemeComponentDto[];
}

export interface SimpleThemeComponentDto {
  id?: string;
  code?: string;
  name?: string;
  icon?: string;
  displayOrder: number;
  properties: SimpleThemeComponentPropertyDto[];
}

export interface SimpleThemeComponentPropertyDto {
  id?: string;
  sectionName?: string;
  type: ThemeOptionType;
  code?: string;
  name?: string;
  description?: string;
  isRequired: boolean;
  conditionValue?: string;
  conditionId?: string;
  dataType: ThemeDataType;
  dataSource?: string;
  displayOrder: number;
  data: BasicDictionaryDto[];
}

export interface SimpleThemeMenuItemOptionDto {
  id?: string;
  type: ThemeOptionType;
  code?: string;
  name?: string;
  description?: string;
  isRequired: boolean;
  conditionValue?: string;
  conditionId?: string;
  dataType: ThemeDataType;
  dataSource?: string;
  displayOrder: number;
  data: BasicDictionaryDto[];
}

export interface StoreDesignComponentDto {
  code?: string;
  options: Record<string, object>;
}

export interface StoreDesignDto {
  code?: string;
  options: Record<string, object>;
  components: StoreDesignComponentDto[];
}

export interface StoreDesignRequestDto {
  themeId: string;
  pageId: string;
}

export interface ThemeComponentCategoryDto extends EntityDto<string> {
  themeId?: string;
  theme: ThemeDto;
  code?: string;
  name?: string;
  displayOrder: number;
  components: ThemeComponentDto[];
}

export interface ThemeComponentCategoryFilter {
  themeId: string;
  pageId?: string;
}

export interface ThemeComponentCategoryRequestDto extends PagedAndSortedResultRequestDto {
  themeId?: string;
}

export interface ThemeComponentDependencyDto extends AuditedEntityDto<string> {
  componentId?: string;
  component: ThemeComponentDto;
  type?: string;
  version?: string;
  name?: string;
  provider?: string;
  url?: string;
}

export interface ThemeComponentDependencyRequestDto extends PagedAndSortedResultRequestDto {
  componentId?: string;
}

export interface ThemeComponentDto extends AuditedEntityDto<string> {
  categoryId?: string;
  category: ThemeComponentCategoryDto;
  code?: string;
  name?: string;
  icon?: string;
  disabled: boolean;
  displayOrder: number;
  properties: ThemeComponentPropertyDto[];
  dependencies: ThemeComponentDependencyDto[];
  storeComponents: CustomizedThemeComponentPageDto[];
  componentMenuItems: ThemeComponentMenuItemDto[];
}

export interface ThemeComponentMenuItemDto {
  menuItemId?: string;
  menuItem: ThemeMenuItemDto;
}

export interface ThemeComponentPropertyDto extends AuditedEntityDto<string> {
  componentId?: string;
  component: ThemeComponentDto;
  sectionId?: string;
  section: ThemeComponentSectionDto;
  type: ThemeOptionType;
  code?: string;
  name?: string;
  description?: string;
  isRequired: boolean;
  conditionValue?: string;
  conditionId?: string;
  dataType: ThemeDataType;
  dataSource?: string;
  disabled: boolean;
  data: BasicDictionaryDto[];
}

export interface ThemeComponentPropertyRequestDto extends PagedAndSortedResultRequestDto {
  componentId?: string;
  sectionId?: string;
  disabled?: boolean;
}

export interface ThemeComponentRequestDto extends PagedAndSortedResultRequestDto {
  themeId?: string;
  categoryId?: string;
  menuItemId?: string;
  disabled?: boolean;
}

export interface ThemeComponentSectionDto extends AuditedEntityDto<string> {
  themeId?: string;
  theme: ThemeDto;
  code?: string;
  name?: string;
  displayOrder: number;
}

export interface ThemeComponentSectionRequestDto extends PagedAndSortedResultRequestDto {
  themeId?: string;
  disabled?: boolean;
}

export interface ThemeDto extends AuditedEntityDto<string> {
  type: StoreTemplateType;
  code?: string;
  name?: string;
  price: number;
  url?: string;
  featured: boolean;
  disabled: boolean;
  previewImage?: string;
  cssStyle?: string;
  customized: boolean;
  menuItems: ThemeMenuItemDto[];
}

export interface ThemeMenuItemDto extends AuditedEntityDto<string> {
  pageId?: string;
  themeId?: string;
  code?: string;
  name?: string;
  icon?: string;
  type: ThemeMenuItemType;
  options: ThemeMenuItemOptionDto[];
  storeMenuItems: CustomizedThemeMenuItemDto[];
}

export interface ThemeMenuItemOptionDto extends AuditedEntityDto<string> {
  menuItemId?: string;
  menuItem: ThemeMenuItemDto;
  type: ThemeOptionType;
  code?: string;
  name?: string;
  description?: string;
  isRequired: boolean;
  conditionValue?: string;
  conditionId?: string;
  dataType: ThemeDataType;
  dataSource?: string;
  displayOrder: number;
  disabled: boolean;
  data: BasicDictionaryDto[];
}

export interface ThemeMenuItemOptionRequestDto extends PagedAndSortedResultRequestDto {
  menuItemId?: string;
  disabled?: boolean;
}

export interface ThemeMenuItemRequestDto extends PagedAndSortedResultRequestDto {
  themeId?: string;
}

export interface ThemeRequestDto extends PagedAndSortedResultRequestDto {
  type?: StoreTemplateType;
  disabled?: boolean;
}

export interface UpdateCustomizedThemeComponentDto {
  id: string;
  values: BasicDictionaryDto[];
}

export interface RelatedStoreDesignRequestDto {
  tenantId: string;
  pageId: string;
}
