import axios, { InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7284/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Correctly typed interceptor using InternalAxiosRequestConfig
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  // Ensure headers exist
  config.headers = config.headers || {};

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
