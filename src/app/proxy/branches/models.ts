import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { AddressDto, CreateUpdateAddressDto } from '../core/models';

export interface BranchDto extends AuditedEntityDto<string> {
  name?: string;
  parentId?: string;
  parentName?: string;
  disabled: boolean;
  addressId?: string;
  address: AddressDto;
  creatorUserName?: string;
  lastModifierUserName?: string;
}

export interface BranchFilter {
  onlyChildren: boolean;
  disabled?: boolean;
}

export interface BranchOptionsRequestDto {
  enableAllItems?: boolean;
  enableAllCategories?: boolean;
  enableAllBrands?: boolean;
  enableAllTaxes?: boolean;
  enableAllWarehouses?: boolean;
}

export interface BranchesRequestDto extends PagedAndSortedResultRequestDto {
  onlyChildren: boolean;
}

export interface CreateBranchDto {
  name: string;
  parentId?: string;
  address: CreateUpdateAddressDto;
  options: BranchOptionsRequestDto;
}

export interface UpdateBranchDto extends CreateBranchDto {
  id?: string;
}
