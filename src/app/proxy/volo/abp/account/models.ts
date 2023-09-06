
export interface ResetPasswordDto {
  userId?: string;
  resetToken: string;
  password: string;
}

export interface SendPasswordResetCodeDto {
  email: string;
  appName: string;
  returnUrl?: string;
  returnUrlHash?: string;
}
