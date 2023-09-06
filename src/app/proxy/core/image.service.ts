import type { CreateImageDto, ImageDto, UpdateImageDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiName = 'Default';
  

  create = (input: CreateImageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImageDto>({
      method: 'POST',
      url: '/api/app/image',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/image/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImageDto>({
      method: 'GET',
      url: `/api/app/image/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ImageDto>>({
      method: 'GET',
      url: '/api/app/image',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateImageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImageDto>({
      method: 'PUT',
      url: `/api/app/image/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
