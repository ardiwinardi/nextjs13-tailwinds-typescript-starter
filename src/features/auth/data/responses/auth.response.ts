export interface AuthDTO {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
