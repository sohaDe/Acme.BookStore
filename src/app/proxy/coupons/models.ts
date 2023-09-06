import type { CreationAuditedEntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { CouponType } from './coupon-type.enum';
import type { CouponIncludedDetailType } from './coupon-included-detail-type.enum';

export interface CouponDto extends FullAuditedEntityDto<string> {
  name?: string;
  code?: string;
  type: CouponType;
  startDate?: string;
  endDate?: string;
  minimumAmount: number;
  maxUsageCount: number;
  maxUserUsageCount: number;
  maxAmount?: number;
  discountValue: number;
  isFreeShippingFee: boolean;
  excludeOfferItems: boolean;
  isAvailableForDelivery: boolean;
  isAvailableForPickup: boolean;
  isAvailableForDineIn: boolean;
  storeId?: string;
  storeName?: string;
  creatorUserName?: string;
  lastModifierUserName?: string;
  disabled: boolean;
  couponIncludedDetails: CouponIncludeDetailDto[];
}

export interface CouponIncludeDetailDto extends CreationAuditedEntityDto<string> {
  couponId?: string;
  type: CouponIncludedDetailType;
  typeId?: string;
  creatorUserName?: string;
}

export interface CouponRequestDto extends PagedAndSortedResultRequestDto {
  search?: string;
}

export interface CouponStoreDto {
  id?: string;
  code?: string;
  type: CouponType;
  discountValue: number;
  isFreeShippingFee: boolean;
}

export interface CreateCouponDto {
  name: string;
  code: string;
  type: CouponType;
  startDate?: string;
  endDate?: string;
  minimumAmount: number;
  maxUsageCount: number;
  maxUserUsageCount: number;
  maxAmount?: number;
  discountValue: number;
  isFreeShippingFee: boolean;
  excludeOfferItems: boolean;
  isAvailableForDelivery: boolean;
  isAvailableForPickup: boolean;
  isAvailableForDineIn: boolean;
  storeId?: string;
  couponIncludedDetails: CreateCouponIncludedDetailDto[];
}

export interface CreateCouponIncludedDetailDto {
  type: CouponIncludedDetailType;
  typeId?: string;
}

export interface UpdateCouponDto extends CreateCouponDto {
  id?: string;
}
