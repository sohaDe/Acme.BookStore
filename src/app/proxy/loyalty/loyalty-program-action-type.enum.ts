import { mapEnumToOptions } from '@abp/ng.core';

export enum LoyaltyProgramActionType {
  Registration = 0,
  Invitation = 1,
  ReviewItem = 2,
  ReviewStore = 3,
}

export const loyaltyProgramActionTypeOptions = mapEnumToOptions(LoyaltyProgramActionType);
