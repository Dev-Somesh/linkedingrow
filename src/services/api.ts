import axios, { AxiosError } from 'axios';
import { useAuthStore } from '../store/authStore';
import { AnalysisResult } from '../store/resumeStore';

// Create axios instance
export const api = axios.create({
  baseURL: '/api', // Proxy will handle this
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
    // Basic error handling for now
    throw error;
  }
);

// Login with email/password
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Login Failed', error);
    throw new Error('Failed to login');
  }
};

// Removed LinkedIn OAuth specific helpers


// Refresh access token (Optional for MVP, implemented on backend if needed)
export const refreshAccessToken = async () => {
  // Placeholder implementation if store calls this
  return null;
};

// Get user profile
export const getLinkedInProfile = async () => {
  try {
    const response = await api.get('/me');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch profile');
  }
};

// Analyze PDF
export const analyzePDF = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    // Increase timeout for analysis
    const response = await api.post('/analyze-pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 300000 // 5 minutes to handle rate limit backoffs
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API Error Details:', error.response?.data || error.message);
      throw new Error(error.response?.data?.error || 'Failed to analyze PDF');
    }
    console.error('Unexpected Error:', error);
    throw new Error('Failed to analyze PDF');
  }
};

// Generate/Rewrite Resume
// Generate/Rewrite Resume
export const generateResume = async (originalText: string, analysisResult: AnalysisResult) => {
  try {
    // Increase timeout for generation
    const response = await api.post('/generate-resume', {
      originalText,
      analysisResult
    }, {
      timeout: 300000 // 5 minutes to handle rate limit backoffs
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Generation Error:', error.response?.data || error.message);
    } else {
      console.error('Generation Error:', error);
    }
    throw new Error('Failed to generate resume');
  }
};