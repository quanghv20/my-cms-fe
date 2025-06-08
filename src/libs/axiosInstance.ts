import axios from 'axios';
import { configService } from '@/libs/configService';

export const axiosInstance = axios.create({
  baseURL: configService.apiBaseUrl,
  timeout: configService.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Thêm interceptor nếu muốn
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error.response || error.message);
    return Promise.reject(error);
  }
);
