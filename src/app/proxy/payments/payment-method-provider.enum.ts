import { mapEnumToOptions } from '@abp/ng.core';

export enum PaymentMethodProvider {
  Manual = 0,
  PayPal = 10,
  Stripe = 20,
  BankTransfer = 30,
  Tap = 40,
  Iyzico = 50,
  Tdsp = 60,
  Myfatoorah = 70,
  Saifalo = 80,
}

export const paymentMethodProviderOptions = mapEnumToOptions(PaymentMethodProvider);
