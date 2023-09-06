import type { AuditLogDto, AuditLogRequestDto, AuditLogs } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditLogService {
  apiName = 'Default';
  

  getActions = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AuditLogDto>({
      method: 'GET',
      url: `/api/app/audit-log/${id}/actions`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: AuditLogRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AuditLogs[]>({
      method: 'GET',
      url: '/api/app/audit-log',
      params: { top: input.top, tenantId: input.tenantId, tenantName: input.tenantName },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
