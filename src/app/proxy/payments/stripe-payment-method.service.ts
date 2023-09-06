import type { CreatePaymentCheckoutDto, PaymentSharedCardsDto, StripeCheckoutDto, StripeConfirmPaymentRequestDto, StripeOptionsDto, StripePaymentDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StripePaymentMethodService {
  apiName = 'Default';
  

  confirmCardRequiresAuthentication = (input: StripeConfirmPaymentRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StripePaymentDto>({
      method: 'POST',
      url: '/api/app/stripe-payment-method/confirm-card-requires-authentication',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createPaymentCheckout = (input: CreatePaymentCheckoutDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StripeCheckoutDto>({
      method: 'POST',
      url: '/api/app/stripe-payment-method/payment-checkout',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createPaymentIntent = (orderId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StripePaymentDto>({
      method: 'POST',
      url: `/api/app/stripe-payment-method/payment-intent/${orderId}`,
    },
    { apiName: this.apiName,...config });
  

  deleteCard = (cardId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/stripe-payment-method/card/${cardId}`,
    },
    { apiName: this.apiName,...config });
  

  getOptions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, StripeOptionsDto>({
      method: 'GET',
      url: '/api/app/stripe-payment-method/options',
    },
    { apiName: this.apiName,...config });
  

  getSavedCardList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaymentSharedCardsDto[]>({
      method: 'GET',
      url: '/api/app/stripe-payment-method/saved-card-list',
    },
    { apiName: this.apiName,...config });
  

  payWithExistingCard = (orderId: string, stripePaymentMethodId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StripePaymentDto>({
      method: 'POST',
      url: '/api/app/stripe-payment-method/pay-with-existing-card',
      params: { orderId, stripePaymentMethodId },
    },
    { apiName: this.apiName,...config });
  

  payWithNewCard = (stripePaymentIntentId: string, remember?: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/stripe-payment-method/pay-with-new-card/${stripePaymentIntentId}`,
      params: { remember },
    },
    { apiName: this.apiName,...config });
  

  updateOptions = (input: StripeOptionsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/stripe-payment-method/options',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
