import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { getAccessToken, getLinkedInProfile } from '../services/api';

export const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setAuth } = useAuthStore();
  
  useEffect(() => {
    const handleAuth = async () => {
      try {
        const code = searchParams.get('code');
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');

        if (error || errorDescription) {
          throw new Error(errorDescription || 'Authentication failed');
        }

        if (!code) {
          throw new Error('No authorization code received');
        }

        // Exchange code for access token
        const token = await getAccessToken(code);
        
        // Get user profile
        const profile = await getLinkedInProfile();
        
        // Store auth state
        setAuth(token, null, profile);
        
        // Redirect to dashboard
        navigate('/dashboard');
      } catch (err) {
        console.error('Auth error:', err);
        navigate('/login', { 
          state: { 
            error: err instanceof Error ? err.message : 'Authentication failed'
          }
        });
      }
    };

    handleAuth();
  }, [searchParams, navigate, setAuth]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Authenticating with LinkedIn...</p>
      </div>
    </div>
  );
};

export default AuthCallback;