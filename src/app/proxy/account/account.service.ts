import type { ConfirmUserEmailDto, CreateStoreTenant, RegisterStoreTenantResponseDto, SendConfirmEmailDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ResetPasswordDto, SendPasswordResetCodeDto } from '../volo/abp/account/models';
import type { TenantDto } from '../volo/abp/tenant-management/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiName = 'Default';
  

  getAvailableTenants = (email: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TenantDto[]>({
      method: 'GET',
      url: '/api/app/account/available-tenants',
      params: { email },
    },
    { apiName: this.apiName,...config });
  

  postCompleteRegisterTenant = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/account/complete-register-tenant',
    },
    { apiName: this.apiName,...config });
  

  postConfirmUserEmail = (input: ConfirmUserEmailDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/account/confirm-user-email',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  postRegisterTenant = (input: CreateStoreTenant, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RegisterStoreTenantResponseDto>({
      method: 'POST',
      url: '/api/app/account/register-tenant',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  resetPassword = (input: ResetPasswordDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/account/reset-password',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  sendPasswordResetCode = (input: SendPasswordResetCodeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/account/send-password-reset-code',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  sendUserConfirmationEmail = (input: SendConfirmEmailDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/account/send-user-confirmation-email',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
