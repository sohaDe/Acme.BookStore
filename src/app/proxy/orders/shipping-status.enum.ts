import { mapEnumToOptions } from '@abp/ng.core';

export enum ShippingStatus {
  NotYetShipped = 0,
  Submitted = 10,
  AssigningDriver = 20,
  GoingToPickup = 30,
  ArrivedToPickup = 31,
  PickedUp = 32,
  InTransit = 33,
  Shipped = 40,
  Delivered = 41,
  PartiallyShipped = 42,
  ReturnProcessing = 70,
  Returned = 71,
  Canceled = 90,
  Failed = 91,
  Rejected = 92,
  Expired = 93,
  ShippingNotRequired = 100,
  MultipleShipments = 200,
}

export const shippingStatusOptions = mapEnumToOptions(ShippingStatus);
