import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { configService } from '@/libs/configService';

export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export interface ApiResponse<T = any> {
  data: T;
  message: string;
  statusCode: number;
  path?: string;
  timestamp?: string;
}

export const axiosInstance = axios.create({
  baseURL: configService.apiBaseUrl,
  timeout: configService.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fix kiểu headers trong interceptor request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      // Ép kiểu headers để tránh lỗi TS
      (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    if (response.data.statusCode >= 400) {
      const error = new Error(response.data.message || 'API error');
      // @ts-ignore
      error.data = response.data;
      return Promise.reject(error);
    }
    return response;
  },
  (error) => {
    let message = 'Unknown error occurred';

    if (error.response) {
      const apiRes: ApiResponse | undefined = error.response.data;
      if (apiRes && typeof apiRes === 'object') {
        message = apiRes.message || `Request failed with status code ${error.response.status}`;
      } else {
        message = `Server responded with status ${error.response.status}`;
      }
    } else if (error.request) {
      message = 'No response received from server. Please check your network.';
    } else if (error.message) {
      message = error.message;
    }

    const customError = new Error(message);
    // @ts-ignore
    customError.data = error.response?.data;

    return Promise.reject(customError);
  },
);


// Hàm helper unwrap response.data, có kiểu rõ ràng
export async function requestApi<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
  const response = await axiosInstance.request<ApiResponse<T>>(config);
  return response.data;
}
