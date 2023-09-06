import type { AuditedEntityDto, EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { SalesChannels } from './sales-channels.enum';
import type { NoStockStatus } from './no-stock-status.enum';
import type { TaxAddOption } from './tax-add-option.enum';
import type { TaxType } from './tax-type.enum';
import type { IFormFile } from '../microsoft/asp-net-core/http/models';
import type { ItemStoreDto } from '../stores/models';
import type { WarehouseDto } from '../inventory/models';
import type { InventoryType } from './inventory-type.enum';

export interface BrandBranchDto extends AuditedEntityDto<string> {
  branchId?: string;
  disabled: boolean;
}

export interface BrandDto extends FullAuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  image?: string;
  cover?: string;
  disabled: boolean;
  hideFromHomePage: boolean;
  displayOrder: number;
  brandBranches: BrandBranchDto[];
}

export interface CategoryBranchDto extends AuditedEntityDto<string> {
  branchId?: string;
  disabled: boolean;
}

export interface CategoryDto extends FullAuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  image?: string;
  cover?: string;
  disabled: boolean;
  hideFromHomePage: boolean;
  hideFromHomeMenu: boolean;
  displayOrder: number;
  parentId?: string;
  parentName?: string;
  categoryBranches: CategoryBranchDto[];
}

export interface ItemAvailabilityDto extends FullAuditedEntityDto<string> {
  salesChannel: SalesChannels;
  itemId?: string;
}

export interface ItemBranchDto extends AuditedEntityDto<string> {
  branchId?: string;
  disabled: boolean;
}

export interface ItemCustomerGroupDto extends AuditedEntityDto<string> {
  customerGroupId?: string;
  customerGroupName?: string;
  customerGroupName2?: string;
  customerGroupName3?: string;
  itemDetailWarehouseId?: string;
  itemDetailWarehouseItemDetailId?: string;
  itemDetailWarehouseWarehouseId?: string;
  fromQuantity: number;
  toQuantity: number;
  price: number;
  salesChannel?: SalesChannels;
}

export interface ItemDetailDto extends AuditedEntityDto<string> {
  sku?: string;
  barcode?: string;
  unitId?: string;
  image?: string;
  calories: number;
  weight: number;
  width: number;
  height: number;
  length: number;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  variantOption1Id?: string;
  variantOption1Value?: string;
  variantOption1Value2?: string;
  variantOption1Value3?: string;
  variantOption2Id?: string;
  variantOption2Value?: string;
  variantOption2Value2?: string;
  variantOption2Value3?: string;
  variantOption3Id?: string;
  variantOption3Value?: string;
  variantOption3Value2?: string;
  variantOption3Value3?: string;
  variantOption4Id?: string;
  variantOption4Value?: string;
  variantOption4Value2?: string;
  variantOption4Value3?: string;
  displayOrder: number;
  hasOffers: boolean;
  hasModifierLists: boolean;
  preparationTime: number;
  unitName?: string;
  disabled: boolean;
  itemDetailWarehouses: ItemDetailWarehouseDto[];
}

export interface ItemDetailWarehouseDto extends AuditedEntityDto<string> {
  warehouseId?: string;
  itemDetailId?: string;
  stockQuantity: number;
  lowStockQuantity: number;
  committedQuantity?: number;
  price: number;
  oldPrice: number;
  oldPriceMargin?: number;
  cost: number;
  optimalQuantity: number;
  noStockStatus: NoStockStatus;
  itemPriceLists: ItemPriceListDto[];
  itemCustomerGroups: ItemCustomerGroupDto[];
}

export interface ItemDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  shortDescription?: string;
  shortDescription2?: string;
  shortDescription3?: string;
  thumbnail?: string;
  images?: string;
  variantOption1Id?: string;
  variantOption1Name?: string;
  variantOption1Name2?: string;
  variantOption1Name3?: string;
  variantOption2Id?: string;
  variantOption2Name?: string;
  variantOption2Name2?: string;
  variantOption2Name3?: string;
  variantOption3Id?: string;
  variantOption3Name?: string;
  variantOption3Name2?: string;
  variantOption3Name3?: string;
  variantOption4Id?: string;
  variantOption4Name?: string;
  variantOption4Name2?: string;
  variantOption4Name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  featured: boolean;
  hideInLatestItems: boolean;
  hideInBestSelling: boolean;
  disabled: boolean;
  displayOrder: number;
  stockTracked: boolean;
  variantOption1Values: string[];
  variantOption2Values: string[];
  variantOption3Values: string[];
  variantOption4Values: string[];
  itemDetails: ItemDetailDto[];
  firstItemDetail: ItemDetailDto;
  brandId?: string;
  brand: BrandDto;
  marketplaceCategoryId?: string;
  categoriesIds: string[];
  categories: CategoryDto[];
  taxesIds: string[];
  taxes: TaxDto[];
  itemBranches: ItemBranchDto[];
  itemAvailabilities: ItemAvailabilityDto[];
  itemSuppliers: ItemSupplierDto[];
}

export interface ItemPriceListDto {
  priceListId?: string;
  priceListName?: string;
  priceListName2?: string;
  priceListName3?: string;
  itemDetailWarehouseId?: string;
  itemDetailWarehouseItemDetailId?: string;
  itemDetailWarehouseWarehouseId?: string;
  fromQuantity: number;
  toQuantity: number;
  price: number;
  salesChannel?: SalesChannels;
}

export interface ItemSupplierDto extends FullAuditedEntityDto<string> {
  supplierId?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  isMain: boolean;
}

export interface ModifierDto extends FullAuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  price: number;
  disabled: boolean;
}

export interface ModifierListDto extends FullAuditedEntityDto<string> {
  name?: string;
  displayName?: string;
  displayName2?: string;
  displayName3?: string;
  min: number;
  max: number;
  allowMultiple: boolean;
  required: boolean;
  modifiersIds: string[];
  modifiersNames: string[];
  modifiers: ModifierDto[];
}

export interface PriceListDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  disabled: boolean;
}

export interface TaxBranchDto extends AuditedEntityDto<string> {
  branchId?: string;
  disabled: boolean;
}

export interface TaxDto extends AuditedEntityDto<string> {
  name?: string;
  name2?: string;
  name3?: string;
  rate: number;
  option: TaxAddOption;
  type: TaxType;
  disabled: boolean;
  taxBranches: TaxBranchDto[];
}

export interface FillItemDetailsFromExcelRequestDto {
  file: IFormFile;
  outletId?: string;
  warehouseId?: string;
  priceListId?: string;
}

export interface FillItemDetailsFromExcelResponseDto {
  items: FillItemsFromExcelDto[];
  notFoundSKUs: string[];
}

export interface FillItemsFromExcelDto {
  item: ItemStoreDto;
  price: number;
  quantity: number;
  note?: string;
}

export interface ImportItemFromExcelRequestDto {
  file: IFormFile;
  warehouseId?: string;
  categoryId?: string;
  brandId?: string;
  taxId?: string;
  mainSupplierId?: string;
  alternativeSupplierIds: string[];
  branchIds: string[];
  isUpdateOnly?: boolean;
}

export interface ImportItemFromExcelResponseDto {
  notFoundSKUs: string[];
  newSKUs: string[];
  updatedSKUs: string[];
}

export interface ImportItemPriceListDto {
  skuOrBarcode?: string;
  fromQuantity: number;
  toQuantity: number;
  price: number;
  salesChannel?: SalesChannels;
  isUpdated: boolean;
}

export interface ImportItemPriceListFromExcelRequestDto {
  file: IFormFile;
  priceListId: string;
  warehouseId?: string;
}

export interface ImportItemPriceListResponseDto {
  items: ImportItemPriceListDto[];
  notFoundSKUs: string[];
}

export interface ItemPriceResponseDto {
  notFoundSKUs: string[];
  items: UpdateItemPriceResponseDto[];
}

export interface SimpleBrandDto {
  name?: string;
  name2?: string;
  name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  image?: string;
  cover?: string;
}

export interface SimpleCategoryDto {
  name?: string;
  name2?: string;
  name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  image?: string;
  cover?: string;
  parentId?: string;
  parentName?: string;
}

export interface SimpleItemDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  thumbnail?: string;
  barcode?: string;
  sku?: string;
  variantOption1Name?: string;
  variantOption1Name2?: string;
  variantOption1Name3?: string;
  variantOption2Name?: string;
  variantOption2Name2?: string;
  variantOption2Name3?: string;
  variantOption3Name?: string;
  variantOption3Name2?: string;
  variantOption3Name3?: string;
  variantOption4Name?: string;
  variantOption4Name2?: string;
  variantOption4Name3?: string;
  variantOption1Value?: string;
  variantOption1Value2?: string;
  variantOption1Value3?: string;
  variantOption2Value?: string;
  variantOption2Value2?: string;
  variantOption2Value3?: string;
  variantOption3Value?: string;
  variantOption3Value2?: string;
  variantOption3Value3?: string;
  variantOption4Value?: string;
  variantOption4Value2?: string;
  variantOption4Value3?: string;
  brandId?: string;
  brand: SimpleBrandDto;
  categories: SimpleCategoryDto[];
}

export interface UpdateItemPriceResponseDto {
  item: SimpleItemDto;
  itemSku?: string;
  isUpdated: boolean;
  isNew: boolean;
  oldPrice: number;
  newPrice: number;
  oldCost: number;
  newCost: number;
  oldOldPrice: number;
  newOldPrice: number;
  warehouse: WarehouseDto;
}

export interface UpdateItemPricesExcelDto {
  file: IFormFile;
  warehouseId?: string;
  ignoreEmptyValue: boolean;
  allWarehouses: boolean;
}

export interface AddItemReviewReplyDto extends EntityDto<string> {
  reply?: string;
}

export interface AdminItem {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  marketplaceCategoryId?: string;
  description?: string;
  description2?: string;
  description3?: string;
  shortDescription?: string;
  shortDescription2?: string;
  shortDescription3?: string;
  thumbnail?: string;
  images?: string;
  variantOption1Id?: string;
  variantOption1Name?: string;
  variantOption1Name2?: string;
  variantOption1Name3?: string;
  variantOption2Id?: string;
  variantOption2Name?: string;
  variantOption2Name2?: string;
  variantOption2Name3?: string;
  variantOption3Id?: string;
  variantOption3Name?: string;
  variantOption3Name2?: string;
  variantOption3Name3?: string;
  variantOption4Id?: string;
  variantOption4Name?: string;
  variantOption4Name2?: string;
  variantOption4Name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  featured: boolean;
  hideInLatestItems: boolean;
  hideInBestSelling: boolean;
  disabled: boolean;
  displayOrder: number;
  stockTracked: boolean;
  variantOption1Values: string[];
  variantOption2Values: string[];
  variantOption3Values: string[];
  variantOption4Values: string[];
  firstItemDetail: AdminItemDetail;
  brandId?: string;
  categoriesIds: string[];
  taxesIds: string[];
  itemDetails: AdminItemDetail[];
  itemBranches: AdminItemBranch[];
  itemAvailabilities: AdminItemAvailability[];
  itemSuppliers: AdminItemSupplier[];
}

export interface AdminItemAvailability {
  id?: string;
  salesChannel: SalesChannels;
}

export interface AdminItemBranch {
  id?: string;
  branchId?: string;
  disabled: boolean;
}

export interface AdminItemDetail {
  id?: string;
  sku?: string;
  barcode?: string;
  unitId?: string;
  image?: string;
  calories: number;
  weight: number;
  width: number;
  height: number;
  length: number;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  variantOption1Id?: string;
  variantOption1Value?: string;
  variantOption1Value2?: string;
  variantOption1Value3?: string;
  variantOption2Id?: string;
  variantOption2Value?: string;
  variantOption2Value2?: string;
  variantOption2Value3?: string;
  variantOption3Id?: string;
  variantOption3Value?: string;
  variantOption3Value2?: string;
  variantOption3Value3?: string;
  variantOption4Id?: string;
  variantOption4Value?: string;
  variantOption4Value2?: string;
  variantOption4Value3?: string;
  displayOrder: number;
  hasOffers: boolean;
  hasModifierLists: boolean;
  preparationTime: number;
  unitName?: string;
  disabled: boolean;
  itemDetailWarehouses: AdminItemDetailWarehouse[];
}

export interface AdminItemDetailWarehouse {
  id?: string;
  warehouseId?: string;
  itemDetailId?: string;
  stockQuantity: number;
  lowStockQuantity: number;
  committedQuantity?: number;
  price: number;
  oldPrice: number;
  oldPriceMargin?: number;
  cost: number;
  optimalQuantity: number;
  noStockStatus: NoStockStatus;
}

export interface AdminItemList {
  id?: string;
  name?: string;
  thumbnail?: string;
  disabled: boolean;
  variantsCount: number;
  sku?: string;
  minPrice: number;
  maxPrice: number;
  quantity?: number;
  inventoryType?: InventoryType;
  taxesIds: string[];
}

export interface AdminItemSupplier {
  supplierId?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  isMain: boolean;
}

export interface AdminMarketplaceItemList {
  id?: string;
  name?: string;
  thumbnail?: string;
  disabled: boolean;
  variantsCount: number;
  sku?: string;
  minPrice: number;
  maxPrice: number;
  quantity?: number;
  inventoryType?: InventoryType;
  tenantId?: string;
  storeId?: string;
  storeName?: string;
  storeName2?: string;
  storeName3?: string;
  taxesIds: string[];
}

export interface BrandFilter {
  sorting?: string;
  disabled?: boolean;
  outletId?: string;
  branchId?: string;
  ids: string[];
}

export interface BrandsRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
  ids: string[];
}

export interface CategoriesRequestDto extends PagedAndSortedResultRequestDto {
  parentId?: string;
  disabled?: boolean;
  ids: string[];
}

export interface CategoryFilter {
  sorting?: string;
  parentId?: string;
  disabled?: boolean;
  outletId?: string;
  branchId?: string;
  ids: string[];
}

export interface CreateItemReviewDto {
  orderlineId: string;
  rate: number;
  reviewText?: string;
  images?: string;
}

export interface CreateItemReviewHelpfulnessDto {
  itemReviewId?: string;
  wasHelpful: boolean;
  isReset: boolean;
}

export interface CreateModifierDto {
  name: string;
  name2?: string;
  name3?: string;
  price?: number;
}

export interface CreateModifierListDto {
  name: string;
  displayName: string;
  displayName2?: string;
  displayName3?: string;
  min?: number;
  max?: number;
}

export interface CreateReindexRequestDto {
  tenantId?: string;
}

export interface CreateUnitDto {
  name: string;
}

export interface CreateUpdateBrandBranchDto {
  branchId?: string;
  disabled: boolean;
}

export interface CreateUpdateBrandDto {
  id?: string;
  name: string;
  name2?: string;
  name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  image?: string;
  cover?: string;
  hideFromHomePage: boolean;
  displayOrder: number;
  brandBranches: CreateUpdateBrandBranchDto[];
}

export interface CreateUpdateCategoryBranchDto {
  branchId?: string;
  disabled: boolean;
}

export interface CreateUpdateCategoryDto {
  id?: string;
  name: string;
  name2?: string;
  name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  image?: string;
  cover?: string;
  hideFromHomePage: boolean;
  hideFromHomeMenu: boolean;
  showInFooter: boolean;
  displayOrder: number;
  parentId?: string;
  categoryBranches: CreateUpdateCategoryBranchDto[];
}

export interface CreateUpdateItemAvailabilityDto {
  salesChannel: SalesChannels;
}

export interface CreateUpdateItemBranchDto {
  branchId?: string;
  disabled: boolean;
}

export interface CreateUpdateItemDetailDto {
  id?: string;
  sku?: string;
  image?: string;
  barcode?: string;
  unitId?: string;
  disabled?: boolean;
  calories?: number;
  weight?: number;
  width?: number;
  height?: number;
  length?: number;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  variantOption1Id?: string;
  variantOption1Value?: string;
  variantOption1Value2?: string;
  variantOption1Value3?: string;
  variantOption2Id?: string;
  variantOption2Value?: string;
  variantOption2Value2?: string;
  variantOption2Value3?: string;
  variantOption3Id?: string;
  variantOption3Value?: string;
  variantOption3Value2?: string;
  variantOption3Value3?: string;
  variantOption4Id?: string;
  variantOption4Value?: string;
  variantOption4Value2?: string;
  variantOption4Value3?: string;
  displayOrder?: number;
  hasOffers?: boolean;
  hasModifierLists?: boolean;
  preparationTime?: number;
  itemDetailWarehouses: CreateUpdateItemDetailWarehouseDto[];
}

export interface CreateUpdateItemDetailWarehouseDto {
  id?: string;
  warehouseId?: string;
  price?: number;
  oldPrice?: number;
  cost?: number;
  stockQuantity?: number;
  lowStockQuantity?: number;
  noStockStatus?: NoStockStatus;
  optimalQuantity?: number;
  canUpdateOrCreatePriceListGroup?: boolean;
  itemPriceLists: CreateUpdateItemPriceListDto[];
}

export interface CreateUpdateItemDto {
  id?: string;
  name: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  shortDescription?: string;
  shortDescription2?: string;
  shortDescription3?: string;
  thumbnail?: string;
  images?: string;
  displayOrder?: number;
  variantOption1Id?: string;
  variantOption1Name?: string;
  variantOption1Name2?: string;
  variantOption1Name3?: string;
  variantOption2Id?: string;
  variantOption2Name?: string;
  variantOption2Name2?: string;
  variantOption2Name3?: string;
  variantOption3Id?: string;
  variantOption3Name?: string;
  variantOption3Name2?: string;
  variantOption3Name3?: string;
  variantOption4Id?: string;
  variantOption4Name?: string;
  variantOption4Name2?: string;
  variantOption4Name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  metaKeywords?: string;
  metaKeywords2?: string;
  metaKeywords3?: string;
  metaDescription?: string;
  metaDescription2?: string;
  metaDescription3?: string;
  metaTitle?: string;
  metaTitle2?: string;
  metaTitle3?: string;
  featured?: boolean;
  hideInLatestItems?: boolean;
  hideInBestSelling?: boolean;
  stockTracked?: boolean;
  brandId?: string;
  marketplaceCategoryId?: string;
  categoriesIds: string[];
  taxesIds: string[];
  itemDetails: CreateUpdateItemDetailDto[];
  itemBranches: CreateUpdateItemBranchDto[];
  itemAvailabilities: CreateUpdateItemAvailabilityDto[];
  itemSuppliers: CreateUpdateItemSupplierDto[];
}

export interface CreateUpdateItemPriceListDto {
  id?: string;
  priceListId?: string;
  fromQuantity: number;
  toQuantity: number;
  price: number;
  salesChannel?: SalesChannels;
}

export interface CreateUpdateItemPriceListPricesDto {
  priceListId?: string;
  itemId?: string;
  itemPriceListPrices: ItemPriceListPriceDto[];
}

export interface CreateUpdateItemSupplierDto {
  supplierId?: string;
  isMain: boolean;
}

export interface CreateUpdatePriceListDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  disabled: boolean;
}

export interface CreateUpdateTaxBranchDto {
  branchId?: string;
  disabled: boolean;
}

export interface CreateUpdateTaxDto {
  id?: string;
  name: string;
  name2?: string;
  name3?: string;
  rate: number;
  option: TaxAddOption;
  type: TaxType;
  taxBranches: CreateUpdateTaxBranchDto[];
}

export interface FilterResponseDto {
  name?: string;
  name2?: string;
  name3?: string;
  values: FilterResponseValueDto[];
}

export interface FilterResponseValueDto {
  name?: string;
  name2?: string;
  name3?: string;
}

export interface FiltersDto {
  filters: FilterResponseDto[];
  maxPrice: number;
  minPrice: number;
}

export interface ImportFromExcelRequestDto extends ItemsRequestDto {
  isTemplateOnly?: boolean;
  stockOnly?: boolean;
  priceOnly?: boolean;
}

export interface ItemDetailPosDto {
  id?: string;
  sku?: string;
  barcode?: string;
  unitId?: string;
  image?: string;
  calories: number;
  weight: number;
  width: number;
  height: number;
  length: number;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  variantOption1Value?: string;
  variantOption1Value2?: string;
  variantOption1Value3?: string;
  variantOption2Value?: string;
  variantOption2Value2?: string;
  variantOption2Value3?: string;
  variantOption3Value?: string;
  variantOption3Value2?: string;
  variantOption3Value3?: string;
  hasOffers: boolean;
  hasModifierLists: boolean;
  preparationTime: number;
  unitName?: string;
  price: number;
  oldPrice: number;
  oldPriceMargin?: number;
  noStockStatus: NoStockStatus;
  cost: number;
  optimalQuantity: number;
  quantity: number;
}

export interface ItemDetailStoreBySlug {
  id?: string;
  sku?: string;
  image?: string;
  calories: number;
  weight: number;
  width: number;
  height: number;
  length: number;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  variantOption1Value?: string;
  variantOption2Value?: string;
  variantOption3Value?: string;
  hasOffers: boolean;
  hasModifierLists: boolean;
  preparationTime: number;
  unitName?: string;
  price: number;
  quantity: number;
  oldPrice: number;
  oldPriceMargin?: number;
  isOutOfStock?: boolean;
}

export interface ItemFilterRequestDto {
  search?: string;
  categoryId?: string;
  brandId?: string;
  outletId?: string;
  minItemPrice?: number;
  maxItemPrice?: number;
}

export interface ItemMostOrderedMarketplaceRequest extends ItemMostOrderedRequest {
  storesIds: string[];
}

export interface ItemMostOrderedRequest extends PagedResultRequestDto {
  outletId?: string;
}

export interface ItemPosDto {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  shortDescription?: string;
  shortDescription2?: string;
  shortDescription3?: string;
  brandId?: string;
  stockTracked: boolean;
  featured: boolean;
  thumbnail?: string;
  creationTime?: string;
  variantOption1Name?: string;
  variantOption1Name2?: string;
  variantOption1Name3?: string;
  variantOption2Name?: string;
  variantOption2Name2?: string;
  variantOption2Name3?: string;
  variantOption3Name?: string;
  variantOption3Name2?: string;
  variantOption3Name3?: string;
  variantOption1Values: string[];
  variantOption2Values: string[];
  variantOption3Values: string[];
  itemDetails: ItemDetailPosDto[];
  categoriesIds: string[];
  taxesIds: string[];
}

export interface ItemPriceHistoryDto {
  item: SimpleItemDto;
  price: number;
  oldPrice: number;
  cost: number;
  creationDate?: string;
  warehouseId?: string;
  warehouseName?: string;
}

export interface ItemPriceListExcelRequestDto {
  isTemplateOnly?: boolean;
  priceListId?: string;
  warehouseId?: string;
  itemDetailId?: string;
}

export interface ItemPriceListPriceDto {
  id?: string;
  itemDetailWarehouseId?: string;
  itemDetailId?: string;
  warehouseId?: string;
  fromQuantity: number;
  toQuantity: number;
  price: number;
  salesChannel?: SalesChannels;
}

export interface ItemPriceListReportDto {
  item: SimpleItemDto;
  priceListId?: string;
  priceListName?: string;
  warehouseId?: string;
  fromQuantity: number;
  toQuantity: number;
  price: number;
  salesChannel?: SalesChannels;
}

export interface ItemPriceListRequestDto {
  itemId?: string;
  priceListId?: string;
}

export interface ItemPriceListRequestReportDto extends PagedAndSortedResultRequestDto {
  priceListId?: string;
  itemDetailId?: string;
  warehouseId?: string;
}

export interface ItemPriceListStoreDto {
  priceListId?: string;
  itemDetailId?: string;
  fromQuantity: number;
  toQuantity: number;
  price: number;
}

export interface ItemPriceRequest extends PagedResultRequestDto {
  itemId?: string;
  warehouseId?: string;
  fromDate?: string;
  toDate?: string;
}

export interface ItemReviewHelpfulnessDto extends AuditedEntityDto<string> {
  itemReviewId?: string;
  customerId?: string;
  customerFullName?: string;
  wasHelpful: boolean;
}

export interface ItemReviewHelpfulnessListRequestDto extends PagedAndSortedResultRequestDto {
  itemReviewId?: string;
  customerId?: string;
  wasHelpful?: boolean;
}

export interface ItemReviewListDto extends AuditedEntityDto<string> {
  customerId?: string;
  customerFullName?: string;
  customerImage?: string;
  orderlineId?: string;
  itemDetailId?: string;
  itemId?: string;
  rate: number;
  reviewText?: string;
  replyText?: string;
  replyDate?: string;
  replierId?: string;
  replierFullName?: string;
  publishDate?: string;
  helpfulYesTotal: number;
  helpfulNoTotal?: number;
  orderId?: string;
  orderNumber?: string;
  itemName?: string;
  itemName2?: string;
  itemName3?: string;
  itemImage?: string;
  images?: string;
}

export interface ItemReviewListRequestDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  isPublished?: boolean;
  itemDetailId?: string;
  orderId?: string;
  customerId?: string;
  itemId?: string;
  minRateFilter?: number;
  maxRateFilter?: number;
  minDateFilter?: string;
  maxDateFilter?: string;
}

export interface ItemSlugStoreRequestDtoV2 {
  languagePosition: number;
  warehouseId?: string;
  priceListId?: string;
  customerId?: string;
  branchId?: string;
  hideOutOfStock?: boolean;
  salesChannel?: SalesChannels;
  outletId?: string;
}

export interface ItemStoreBySlug {
  id?: string;
  name?: string;
  description?: string;
  shortDescription?: string;
  thumbnail?: string;
  images?: string;
  variantOption1Id?: string;
  variantOption1Name?: string;
  variantOption2Id?: string;
  variantOption2Name?: string;
  variantOption3Id?: string;
  variantOption3Name?: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  featured: boolean;
  variantOption1Values: string[];
  variantOption2Values: string[];
  variantOption3Values: string[];
  brandId?: string;
  categoriesIds: string[];
  taxesIds: string[];
  itemDetails: ItemDetailStoreBySlug[];
}

export interface ItemStoreList {
  id?: string;
  tenantId?: string;
  name?: string;
  sku?: string;
  slug?: string;
  shortDescription?: string;
  thumbnail?: string;
  hasVariants: boolean;
  option?: string;
  option2?: string;
  option3?: string;
  featured: boolean;
  optionValues: string[];
  option2Values: string[];
  option3Values: string[];
  itemDetailId?: string;
  hasOffers?: boolean;
  hasModifierLists?: boolean;
  itemDetailWarehouseId?: string;
  calories: number;
  preTaxPrice: number;
  postTaxPrice: number;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  oldPrice?: number;
  isOutOfStock?: boolean;
  creationTime?: string;
}

export interface ItemStoreMarketplaceList {
  id?: string;
  tenantId?: string;
  storeId?: string;
  storeName?: string;
  name?: string;
  sku?: string;
  slug?: string;
  shortDescription?: string;
  thumbnail?: string;
  hasVariants: boolean;
  option?: string;
  option2?: string;
  option3?: string;
  featured: boolean;
  optionValues: string[];
  option2Values: string[];
  option3Values: string[];
  itemDetailId?: string;
  hasOffers?: boolean;
  hasModifierLists?: boolean;
  itemDetailWarehouseId?: string;
  calories: number;
  preTaxPrice: number;
  postTaxPrice: number;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  oldPrice?: number;
  isOutOfStock?: boolean;
  creationTime?: string;
}

export interface ItemStoreMarketplaceRequestDto extends ItemStoreRequestDtoV2 {
  storesIds: string[];
}

export interface ItemStoreRequestDtoV2 extends PagedAndSortedResultRequestDto {
  branchId?: string;
  warehouseId?: string;
  search?: string;
  barcode?: string;
  categoryId?: string;
  brandId?: string;
  priceListId?: string;
  salesChannel?: SalesChannels;
  customerId?: string;
  hideOutOfStock?: boolean;
  languagePosition: number;
  fromPrice?: number;
  toPrice?: number;
  latestOnly?: boolean;
  featuredOnly?: boolean;
  offersOnly?: boolean;
  ids: string[];
}

export interface ItemStoreReviewDto extends AuditedEntityDto<string> {
  customerId?: string;
  customerFullName?: string;
  orderlineId?: string;
  itemDetailId?: string;
  itemId?: string;
  rate: number;
  reviewText?: string;
  replyText?: string;
  replyDate?: string;
  publishDate?: string;
  helpfulYesTotal: number;
  helpfulNoTotal?: number;
  orderId?: string;
  orderNumber?: string;
  itemName?: string;
  itemName2?: string;
  itemName3?: string;
  itemImage?: string;
  images?: string;
}

export interface ItemsRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  barcode?: string;
  itemId?: string;
  categoryId?: string;
  brandId?: string;
  outletId?: string;
  branchId?: string;
  warehouseId?: string;
  hasImages?: boolean;
  hasBarcode?: boolean;
  hasMaxOrderQuantity?: boolean;
  hasMinOrderQuantity?: boolean;
  disabled?: boolean;
  latestOnly?: boolean;
  featuredOnly?: boolean;
  offersOnly?: boolean;
  filtersArray: string[];
  filters?: string;
  fromPrice?: number;
  toPrice?: number;
  stockTracked?: boolean;
  noFilterDetail?: boolean;
  salesChannel?: SalesChannels;
  taxId?: string;
  hasNoTax?: boolean;
  inventoryType?: InventoryType;
  mainSupplierId?: string;
  alternativeSupplierId?: string;
  hideOutOfStock?: boolean;
  ids: string[];
}

export interface MarketplaceItemsRequestDto extends ItemsRequestDto {
  storesIds: string[];
}

export interface ModifierFilter {
  disabled?: boolean;
  modifierListId?: string;
}

export interface ModifierListFilter {
  required?: boolean;
}

export interface ModifierListsRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
}

export interface ModifiersRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
  disabled?: boolean;
}

export interface OldStorefrontItemDetailList {
  id?: string;
  sku?: string;
  barcode?: string;
  unitId?: string;
  image?: string;
  calories: number;
  weight: number;
  width: number;
  height: number;
  length: number;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  variantOption1Id?: string;
  variantOption1Value?: string;
  variantOption1Value2?: string;
  variantOption1Value3?: string;
  variantOption2Id?: string;
  variantOption2Value?: string;
  variantOption2Value2?: string;
  variantOption2Value3?: string;
  variantOption3Id?: string;
  variantOption3Value?: string;
  variantOption3Value2?: string;
  variantOption3Value3?: string;
  variantOption4Id?: string;
  variantOption4Value?: string;
  variantOption4Value2?: string;
  variantOption4Value3?: string;
  hasOffers: boolean;
  hasModifierLists: boolean;
  preparationTime: number;
  unitName?: string;
  price: number;
  oldPrice: number;
  oldPriceMargin?: number;
  noStockStatus: NoStockStatus;
  cost: number;
  optimalQuantity: number;
  quantity: number;
}

export interface OldStorefrontItemList {
  id?: string;
  name?: string;
  name2?: string;
  name3?: string;
  shortDescription?: string;
  shortDescription2?: string;
  shortDescription3?: string;
  thumbnail?: string;
  images?: string;
  variantOption1Id?: string;
  variantOption1Name?: string;
  variantOption1Name2?: string;
  variantOption1Name3?: string;
  variantOption2Id?: string;
  variantOption2Name?: string;
  variantOption2Name2?: string;
  variantOption2Name3?: string;
  variantOption3Id?: string;
  variantOption3Name?: string;
  variantOption3Name2?: string;
  variantOption3Name3?: string;
  variantOption4Id?: string;
  variantOption4Name?: string;
  variantOption4Name2?: string;
  variantOption4Name3?: string;
  slug?: string;
  slug2?: string;
  slug3?: string;
  featured: boolean;
  variantOption1Values: string[];
  variantOption2Values: string[];
  variantOption3Values: string[];
  variantOption4Values: string[];
  stockTracked: boolean;
  taxe: OldStorefrontTax;
  brandId?: string;
  itemDetails: OldStorefrontItemDetailList[];
  categoriesIds: string[];
  taxesIds: string[];
  creationTime?: string;
}

export interface OldStorefrontTax {
  id?: string;
  name?: string;
  rate: number;
  type: TaxType;
}

export interface PriceListRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
  priceListId?: string;
  priceFrom?: number;
  priceTo?: number;
}

export interface PublishItemReviewRequestDto {
  publish: boolean;
  itemReviewIds: string[];
}

export interface ReorderBrandDto {
  id?: string;
  displayOrder: number;
}

export interface ReorderCategoryDto {
  id?: string;
  displayOrder: number;
  parentId?: string;
}

export interface ReviewOrderRequestDto {
  orderId?: string;
  orderLineReviews: CreateItemReviewDto[];
}

export interface SupplierItemRequestDto {
  mainSupplierId?: string;
  alternativeSupplierId?: string;
  warehouseId?: string;
  branchId?: string;
  inventoryType?: InventoryType;
}

export interface SupplierItemResponseDto {
  item: ItemStoreDto;
  cost: number;
  optimalQuantity: number;
}

export interface TaxFilter {
  disabled?: boolean;
  branchId?: string;
}

export interface TaxRequestDto extends PagedAndSortedResultRequestDto {
}

export interface TaxStoreRequestDto {
  branchId: string;
}

export interface UnitDto extends AuditedEntityDto<string> {
  name?: string;
  disabled: boolean;
  creatorUserName?: string;
  lastModifierUserName?: string;
}

export interface UnitFilter {
  disabled?: boolean;
}

export interface UnitsRequestDto extends PagedAndSortedResultRequestDto {
  disabled?: boolean;
}

export interface UpdateItemModifierListsDto extends EntityDto<string> {
  modifierListsIds: string[];
}

export interface UpdateItemPriceDto {
  itemDetailWarehouseId?: string;
  warehouseId?: string;
  itemDetailId?: string;
  price: number;
  oldPrice: number;
  cost: number;
}

export interface UpdateItemReviewDto {
  rate: number;
  reviewText?: string;
  images?: string;
}

export interface UpdateModifierDto extends CreateModifierDto {
  id?: string;
}

export interface UpdateModifierListDto extends CreateModifierListDto {
  id?: string;
}

export interface UpdateModifierListModifierDto extends EntityDto<string> {
  modifiersIds: string[];
}

export interface UpdateUnitDto extends CreateUnitDto {
  id?: string;
}
