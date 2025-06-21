import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:7284/api', // Changed to your backend URL (make sure to use http if not using https)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Reqauest interceptor with proper typing
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    
    // Ensure headers exist
    config.headers = config.headers || {};
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle authentication errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Clear local storage and redirect to login on authentication error
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
