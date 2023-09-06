import type { LoyaltyProgramActionType } from './loyalty-program-action-type.enum';
import type { CreationAuditedEntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { LoyaltyProgramPointActionType } from './loyalty-program-point-action-type.enum';
import type { CustomerDto } from '../customers/models';
import type { BasicInvoiceDto } from '../invoices/models';
import type { BasicSalesOrderDto } from '../orders/models';

export interface BasicLoyaltyProgramPointsDto {
  unValidPoints: number;
  validPoints: number;
  validPointsExchanged: number;
  validityEndDatePoints?: string;
  invitationCode?: string;
  number?: string;
}

export interface CreateUpdateLoyaltyProgramActionPointDto {
  id?: string;
  loyaltyProgramId?: string;
  actionType: LoyaltyProgramActionType;
  rewardPoints: number;
}

export interface CreateUpdateLoyaltyProgramDto {
  id?: string;
  storeId?: string;
  exchangeRate: number;
  purchaseAmount: number;
  purchasePoints: number;
  rewardPointsValidityDuration?: number;
  minimumOrderTotalToAwardPoints: number;
  minimumRewardPointsToUse: number;
  maximumRewardPointsToUsePerOrder: number;
  notifyCustomerByNotification?: boolean;
  notifyCustomerByEmail?: boolean;
  points: CreateUpdateLoyaltyProgramActionPointDto[];
}

export interface CreateUpdateLoyaltyProgramPointsDto {
  customerId: string;
  points: number;
}

export interface LoyaltyProgramActionPointDto extends CreationAuditedEntityDto<string> {
  loyaltyProgramId?: string;
  actionType: LoyaltyProgramActionType;
  rewardPoints: number;
}

export interface LoyaltyProgramActionPointStoreDto {
  actionType: LoyaltyProgramActionType;
  rewardPoints: number;
}

export interface LoyaltyProgramDto extends FullAuditedEntityDto<string> {
  storeId?: string;
  exchangeRate: number;
  purchaseAmount: number;
  purchasePoints: number;
  rewardPointsValidityDuration?: number;
  minimumOrderTotalToAwardPoints: number;
  minimumRewardPointsToUse: number;
  maximumRewardPointsToUsePerOrder: number;
  disabled: boolean;
  notifyCustomerByNotification?: boolean;
  notifyCustomerByEmail?: boolean;
  points: LoyaltyProgramActionPointDto[];
}

export interface LoyaltyProgramPointsDto extends FullAuditedEntityDto<string> {
  actionType: LoyaltyProgramPointActionType;
  points: number;
  pointsBalance?: number;
  usedAmount: number;
  endDate?: string;
  referenceId?: string;
  customer: CustomerDto;
  invoice: BasicInvoiceDto;
  order: BasicSalesOrderDto;
}

export interface LoyaltyProgramPointsRequestDto extends PagedAndSortedResultRequestDto {
  customerId?: string;
  referenceId?: string;
}

export interface LoyaltyProgramStoreDto {
  exchangeRate: number;
  purchaseAmount: number;
  purchasePoints: number;
  rewardPointsValidityDuration?: number;
  minimumOrderTotalToAwardPoints: number;
  minimumRewardPointsToUse: number;
  maximumRewardPointsToUsePerOrder: number;
  points: LoyaltyProgramActionPointStoreDto[];
}
