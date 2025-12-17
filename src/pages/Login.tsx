import React from 'react';
import { getLinkedInAuthUrl } from '../services/api';
import { Button } from '../components/Button';
import { Linkedin } from 'lucide-react';

const Login: React.FC = () => {
  const handleLinkedInLogin = () => {
    window.location.href = getLinkedInAuthUrl();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Button
            onClick={handleLinkedInLogin}
            className="w-full justify-center gap-2"
            size="lg"
          >
            <Linkedin className="w-5 h-5" />
            Continue with LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;