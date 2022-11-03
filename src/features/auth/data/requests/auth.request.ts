export interface LoginRequest {
  username: string;
  password: string;
  captchaToken?: string;
}

export interface ResetPasswordRequest {
  secretKey: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResendPasswordRequest {
  email: string;
}
