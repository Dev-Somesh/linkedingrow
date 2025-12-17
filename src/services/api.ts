import axios, { AxiosError } from 'axios';
import { useAuthStore } from '../store/authStore';
import { LINKEDIN_CONFIG } from '../config/constants';

// Create axios instance with default config
export const api = axios.create({
  baseURL: 'https://api.linkedin.com/v2',
  timeout: 10000,
});

// Add request interceptor for auth
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    
    // Handle 401 Unauthorized
    if (error.response?.status === 401 && originalRequest) {
      try {
        // Attempt to refresh token
        const token = await refreshAccessToken();
        useAuthStore.getState().setAuth(token, null);
        
        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, logout user
        useAuthStore.getState().logout();
        throw refreshError;
      }
    }
    
    throw error;
  }
);

// LinkedIn OAuth URL generator
export const getLinkedInAuthUrl = () => {
  const params = new URLSearchParams({
    response_type: LINKEDIN_CONFIG.responseType,
    client_id: LINKEDIN_CONFIG.clientId,
    redirect_uri: LINKEDIN_CONFIG.redirectUri,
    state: LINKEDIN_CONFIG.state,
    scope: LINKEDIN_CONFIG.scope
  });

  return `https://www.linkedin.com/oauth/v2/authorization?${params}`;
};

// Exchange auth code for tokens
export const getAccessToken = async (code: string) => {
  try {
    const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
      grant_type: 'authorization_code',
      code,
      client_id: LINKEDIN_CONFIG.clientId,
      client_secret: LINKEDIN_CONFIG.clientSecret,
      redirect_uri: LINKEDIN_CONFIG.redirectUri,
    });
    return response.data.access_token;
  } catch (error) {
    throw new Error('Failed to get access token');
  }
};

// Refresh access token
export const refreshAccessToken = async () => {
  try {
    const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
      grant_type: 'refresh_token',
      refresh_token: useAuthStore.getState().refreshToken,
      client_id: LINKEDIN_CONFIG.clientId,
      client_secret: LINKEDIN_CONFIG.clientSecret,
    });
    return response.data.access_token;
  } catch (error) {
    throw new Error('Failed to refresh token');
  }
};

// Get user profile
export const getLinkedInProfile = async () => {
  try {
    const response = await api.get('/me');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch profile');
  }
};

// Analyze PDF
export const analyzePDF = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post('/analyze-pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to analyze PDF');
  }
};