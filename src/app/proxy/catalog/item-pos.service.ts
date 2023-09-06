import type { ItemPosDto, ItemStoreRequestDtoV2 } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemPosService {
  apiName = 'Default';
  

  getList = (input: ItemStoreRequestDtoV2, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ItemPosDto>>({
      method: 'GET',
      url: '/api/app/item-pos',
      params: { branchId: input.branchId, warehouseId: input.warehouseId, search: input.search, barcode: input.barcode, categoryId: input.categoryId, brandId: input.brandId, priceListId: input.priceListId, salesChannel: input.salesChannel, customerId: input.customerId, hideOutOfStock: input.hideOutOfStock, languagePosition: input.languagePosition, fromPrice: input.fromPrice, toPrice: input.toPrice, latestOnly: input.latestOnly, featuredOnly: input.featuredOnly, offersOnly: input.offersOnly, ids: input.ids, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
