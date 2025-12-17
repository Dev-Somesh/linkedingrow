import React from 'react';
import { Button } from './Button';
import { ArrowRight, Upload, BarChart3, Activity, Users, Award, CheckCircle, Star, Sparkles, Brain, Zap, TrendingUp, Eye, Network, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleAnalyzeClick = () => {
    navigate('/dashboard');
  };

  const handleDemoClick = () => {
    navigate('/demo');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-blue-400">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="50" x2="100" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30" />
                <line x1="50" y1="50" x2="100" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* AI Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Powered by Advanced AI
                </span>
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Elevate Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  LinkedIn Game
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Harness the power of AI to transform your LinkedIn presence. Get personalized insights, 
                optimize your profile, and accelerate your professional growth with cutting-edge analytics.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Button 
                  size="lg" 
                  className="group relative px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300" 
                  onClick={handleAnalyzeClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    Start AI Analysis
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-10 py-5 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300" 
                  onClick={handleDemoClick}
                >
                  <Eye className="w-6 h-6 mr-3" />
                  View Live Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-blue-200/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  No signup required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  AI-powered insights
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Enterprise security
                </div>
              </div>
            </motion.div>
          </div>

          {/* AI Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-24 max-w-7xl mx-auto"
          >
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 rounded-3xl blur-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Futuristic Browser Header */}
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 px-8 py-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-400/80 shadow-lg shadow-red-400/30"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-400/80 shadow-lg shadow-yellow-400/30"></div>
                      <div className="w-4 h-4 rounded-full bg-green-400/80 shadow-lg shadow-green-400/30"></div>
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-2 border border-white/10">
                      <div className="flex items-center gap-3 text-blue-200/70">
                        <div className="w-4 h-4 rounded bg-green-400/80"></div>
                        <span className="text-sm font-mono">linkdngrow.netlify.app</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Dashboard Content */}
                <div className="p-8 lg:p-12">
                  {/* AI Insights Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
                      <Brain className="w-4 h-4 mr-2" />
                      AI-Powered Analytics
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Your LinkedIn Intelligence Dashboard</h3>
                    <p className="text-blue-200/70">Real-time insights powered by advanced machine learning</p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                      { icon: Eye, label: 'Profile Views', value: '2,847', change: '+23%', color: 'from-blue-500 to-cyan-500', delay: 0.5 },
                      { icon: Users, label: 'Connections', value: '1,250', change: '+47', color: 'from-green-500 to-emerald-500', delay: 0.6 },
                      { icon: Award, label: 'Endorsements', value: '156', change: '+12', color: 'from-yellow-500 to-orange-500', delay: 0.7 },
                      { icon: TrendingUp, label: 'Engagement', value: '94%', change: '+15%', color: 'from-purple-500 to-pink-500', delay: 0.8 }
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: metric.delay, duration: 0.5 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur group-hover:opacity-30 transition-opacity" 
                             style={{ background: `linear-gradient(135deg, ${metric.color.split(' ')[1]}, ${metric.color.split(' ')[3]})` }}></div>
                        <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color} shadow-lg`}>
                              <metric.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{metric.value}</div>
                              <div className="text-green-400 text-sm font-medium">{metric.change}</div>
                            </div>
                          </div>
                          <div className="text-blue-200/70 font-medium">{metric.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* AI Insights Panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">AI Recommendations</h4>
                        <p className="text-purple-200/70">Personalized insights for profile optimization</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { title: 'Optimize Headline', desc: 'Add 3 industry keywords', impact: 'High Impact' },
                        { title: 'Enhance Summary', desc: 'Include quantified achievements', impact: 'Medium Impact' },
                        { title: 'Update Skills', desc: 'Add 5 trending technologies', impact: 'High Impact' }
                      ].map((rec, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-white">{rec.title}</h5>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              rec.impact === 'High Impact' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {rec.impact}
                            </span>
                          </div>
                          <p className="text-blue-200/70 text-sm">{rec.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-24 text-center"
          >
            <p className="text-blue-200/60 mb-8 text-lg">Trusted by professionals at leading companies</p>
            <div className="flex items-center justify-center gap-12 opacity-60">
              <div className="text-3xl font-bold text-white/80">25K+</div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-lg text-white/60">Profiles Analyzed</div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-3xl font-bold text-white/80">98%</div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-lg text-white/60">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;