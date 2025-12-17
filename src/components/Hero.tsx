import React from 'react';
import { Button } from './Button';
import { ArrowRight, Upload, BarChart3, Activity, Users, Award, CheckCircle, Star } from 'lucide-react';
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
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234299e1' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                AI-Powered LinkedIn Optimization
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  LinkedIn Presence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get personalized insights, optimize your profile, and accelerate your career growth with our AI-powered LinkedIn analyzer.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="gap-2 px-8 py-4 text-lg" onClick={handleAnalyzeClick}>
                  <Upload className="w-5 h-5" />
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2 px-8 py-4 text-lg" onClick={handleDemoClick}>
                  <BarChart3 className="w-5 h-5" />
                  View Live Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No signup required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Instant results
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  100% secure
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Browser Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 bg-white rounded-lg px-4 py-1 text-sm text-gray-600 border">
                      linkdngrow.netlify.app
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-blue-600 font-medium">Profile Views</p>
                          <h3 className="text-3xl font-bold text-blue-900">2,847</h3>
                        </div>
                        <Activity className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-green-600 text-sm font-medium">+23% this month</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-green-600 font-medium">Connections</p>
                          <h3 className="text-3xl font-bold text-green-900">1,250</h3>
                        </div>
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-green-600 text-sm font-medium">+47 new</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                      className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-yellow-600 font-medium">Endorsements</p>
                          <h3 className="text-3xl font-bold text-yellow-900">156</h3>
                        </div>
                        <Award className="w-8 h-8 text-yellow-600" />
                      </div>
                      <p className="text-green-600 text-sm font-medium">+12 this week</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-purple-600 font-medium">Engagement</p>
                          <h3 className="text-3xl font-bold text-purple-900">94%</h3>
                        </div>
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                      </div>
                      <p className="text-green-600 text-sm font-medium">+15% increase</p>
                    </motion.div>
                  </div>

                  {/* Chart Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Growth Trend</h3>
                    <div className="h-32 flex items-end justify-between gap-2">
                      {[65, 78, 52, 89, 67, 94, 82, 96, 73, 88, 91, 100].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                          style={{ maxWidth: '40px' }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-500 mb-8">Trusted by professionals worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">10K+</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-gray-400">Profiles Analyzed</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-gray-400">95%</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-gray-400">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;