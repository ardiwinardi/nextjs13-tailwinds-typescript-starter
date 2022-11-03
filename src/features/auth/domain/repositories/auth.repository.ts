import { User } from '../../../user/domain/entities/user.entity';
import {
  ForgotPasswordRequest,
  LoginRequest,
  ResendPasswordRequest,
  ResetPasswordRequest,
} from '../../data/requests/auth.request';
import { Auth } from '../entities/auth.entity';

export interface AuthRepository {
  login(request: LoginRequest): Promise<Auth>;
  refreshToken(refreshToken: string): Promise<Auth>;
  resetPassword(request: ResetPasswordRequest): Promise<void>;
  forgotPassword(request: ForgotPasswordRequest): Promise<void>;
  resendPassword(request: ResendPasswordRequest): Promise<void>;
  revalidate(): Promise<Partial<User>>;
}
