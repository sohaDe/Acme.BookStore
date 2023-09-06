import type { CreateNotificationDto, MyNotificationDto, NotificationDto, NotificationFilterDto, NotificationsRequestDto, UpdateSeenAndActionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  apiName = 'Default';
  

  create = (input: CreateNotificationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NotificationDto>({
      method: 'POST',
      url: '/api/app/notification',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/notification/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteReceiver = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/notification/${id}/receiver`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NotificationDto>({
      method: 'GET',
      url: `/api/app/notification/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: NotificationsRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<NotificationDto>>({
      method: 'GET',
      url: '/api/app/notification',
      params: { search: input.search, type: input.type, target: input.target, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMy = (input: NotificationFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MyNotificationDto>>({
      method: 'GET',
      url: '/api/app/notification/my',
      params: { token: input.token, seen: input.seen, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getNumberNotificationReceiversByInput = (input: CreateNotificationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/notification/number-notification-receivers',
      params: { prefixTitle: input.prefixTitle, title: input.title, title2: input.title2, title3: input.title3, message: input.message, message2: input.message2, message3: input.message3, image: input.image, allLanguages: input.allLanguages, targetId: input.targetId, target: input.target, audience: input.audience, customersFilter: input.customersFilter, specificCustomersIds: input.specificCustomersIds, specificUsersIds: input.specificUsersIds, type: input.type, salesChannel: input.salesChannel, tenantId: input.tenantId },
    },
    { apiName: this.apiName,...config });
  

  getUnseenCount = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/notification/unseen-count',
      params: { token },
    },
    { apiName: this.apiName,...config });
  

  sendOrderTestNotification = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/notification/send-order-test-notification',
    },
    { apiName: this.apiName,...config });
  

  sendSignupTestNotification = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/notification/send-signup-test-notification',
    },
    { apiName: this.apiName,...config });
  

  updateActionTaken = (input: UpdateSeenAndActionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/notification/action-taken',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateSeen = (input: UpdateSeenAndActionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/notification/seen',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateSeenAll = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/notification/seen-all',
      params: { token },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
