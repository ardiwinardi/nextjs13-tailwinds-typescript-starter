import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { storageKeys } from '../constants/storage.constant';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    if (config.headers) {
      const token = localStorage.getItem(storageKeys.ACCESS_TOKEN);
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return { data: response.data } as
      | AxiosResponse<any, any>
      | Promise<AxiosResponse<any, any>>;
  },
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(storageKeys.ACCESS_TOKEN);
      window.location.href = '/';
      return Promise.reject(error);
    }

    if (error.response.data?.message)
      return Promise.reject(error.response.data.message);
    return Promise.reject(error.message);
  }
);
export { api };
