import { mapEnumToOptions } from '@abp/ng.core';

export enum TwilioVerificationChannels {
  Sms = 0,
  WhatsApp = 1,
  Call = 2,
  SNA = 3,
}

export const twilioVerificationChannelsOptions = mapEnumToOptions(TwilioVerificationChannels);
