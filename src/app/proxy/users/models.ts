import type { IdentityUserDto } from '../volo/abp/identity/models';
import type { UserType } from './user-type.enum';
import type { TwilioVerificationChannels } from './twilio-verification-channels.enum';

export interface UserDto extends IdentityUserDto {
  type: UserType;
  typeId?: string;
  appName?: string;
}

export interface SendVerificationDto {
  phoneNumber?: string;
  channel: TwilioVerificationChannels;
}

export interface UserResetPasswordDto {
  password: string;
  logout: boolean;
}
