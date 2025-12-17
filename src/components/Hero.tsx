import React from 'react';
import { Button } from './Button';
import { LineChart, Upload, BarChart3, Activity, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleAnalyzeClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  const handleDemoClick = () => {
    navigate('/demo');
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-24 lg:pt-40 lg:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Optimize Your LinkedIn Presence</span>
              <span className="block text-blue-600 mt-2">with Personalized Insights</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Analyze your LinkedIn profile, unlock actionable insights, and elevate your professional brand with data-driven recommendations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2" onClick={handleAnalyzeClick}>
                <Upload className="w-5 h-5" />
                {user ? 'Go to Dashboard' : 'Upload LinkedIn PDF'}
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={handleDemoClick}>
                <BarChart3 className="w-5 h-5" />
                View Demo
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-gray-500">
              No LinkedIn account required. Simply upload your profile PDF.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500">Profile Views</p>
                        <h3 className="text-2xl font-bold">1,234</h3>
                        <p className="text-green-500 text-sm">+12% this month</p>
                      </div>
                      <Activity className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500">Connections</p>
                        <h3 className="text-2xl font-bold">500+</h3>
                        <p className="text-green-500 text-sm">+25 new</p>
                      </div>
                      <Users className="w-8 h-8 text-green-500" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500">Endorsements</p>
                        <h3 className="text-2xl font-bold">89</h3>
                        <p className="text-green-500 text-sm">+5 this week</p>
                      </div>
                      <Award className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500">Engagement</p>
                        <h3 className="text-2xl font-bold">92%</h3>
                        <p className="text-green-500 text-sm">+8% increase</p>
                      </div>
                      <BarChart3 className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="h-48 bg-gray-50 rounded-lg flex items-end justify-between gap-2 p-4">
                    {[45, 60, 35, 80, 55, 75, 90].map((height, index) => (
                      <div
                        key={index}
                        className="w-full bg-blue-600 rounded-t transition-all duration-300 hover:bg-blue-700"
                        style={{ 
                          height: `${height}%`,
                          opacity: 0.2 + (index / 7) * 0.8
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;