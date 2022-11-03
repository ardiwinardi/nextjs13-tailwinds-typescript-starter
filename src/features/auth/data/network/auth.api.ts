import { storageKeys } from '../../../../shared/data/constants/storage.constant';
import { api } from '../../../../shared/data/network/axios';
import { Auth } from '../../domain/entities/auth.entity';
import { LoginRequest } from '../requests/auth.request';
import { AuthDTO } from '../responses/auth.response';

const endpoint = 'auth';

export const authApi = {
  async login(request: LoginRequest): Promise<Auth> {
    const response = await api.post<AuthDTO>(`/login`, {
      username: request.username,
      password: request.password,
      captchaToken: request.captchaToken,
    });

    if (response.data.accessToken) {
      localStorage.setItem(storageKeys.ACCESS_TOKEN, response.data.accessToken);
      localStorage.setItem(
        storageKeys.REFRESH_TOKEN,
        response.data.refreshToken
      );
    }

    return response.data;
  },

  async refreshToken(refreshToken: string): Promise<Auth> {
    const response = await api.get<AuthDTO>(`${endpoint}/refresh`, {
      params: {
        grantType: 'refreshToken',
        refreshToken,
      },
    });

    if (response.data.accessToken) {
      localStorage.setItem(storageKeys.ACCESS_TOKEN, response.data.accessToken);
      localStorage.setItem(
        storageKeys.REFRESH_TOKEN,
        response.data.refreshToken
      );
    }

    return response.data;
  },
};
