import type { TenantDto } from '../volo/abp/tenant-management/models';
import type { UserDto } from '../users/models';

export interface ConfirmUserEmailDto {
  token: string;
  userId?: string;
}

export interface CreateStoreTenant {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  productCode?: string;
  editionCode?: string;
  couponCode?: string;
  noTrial: boolean;
  phoneNumberVerificationCode?: string;
}

export interface RegisterStoreTenantResponseDto {
  tenant: TenantDto;
  user: UserDto;
}

export interface SendConfirmEmailDto {
  appName?: string;
  returnUrl?: string;
  returnUrlHash?: string;
}
