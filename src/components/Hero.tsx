import React from 'react';
import { Button } from './Button';
import { ArrowRight, Brain, Sparkles, Zap, Eye, CheckCircle, Network, TrendingUp, Users, Award, Target, Cpu, Bot, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    navigate('/dashboard');
  };

  const handleDemoClick = () => {
    navigate('/demo');
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
          </div>
        </div>

        {/* Floating Neural Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Dynamic Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* AI Badge */}
              <motion.div 
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/20 text-blue-300 text-sm font-medium mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="w-5 h-5 mr-3" />
                </motion.div>
                <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
                  Next-Gen AI • Neural Processing • Real-Time Analysis
                </span>
                <Sparkles className="w-5 h-5 ml-3 animate-pulse" />
              </motion.div>

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8">
                <motion.span 
                  className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  LINKEDIN
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  EVOLVED
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Harness the power of <span className="text-blue-400 font-semibold">advanced AI neural networks</span> to 
                transform your professional presence. Experience the future of career optimization with 
                <span className="text-purple-400 font-semibold"> quantum-level insights</span> and 
                <span className="text-cyan-400 font-semibold"> predictive analytics</span>.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-8 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group relative px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 border-0 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 rounded-2xl" 
                    onClick={handleAnalyzeClick}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Brain className="w-7 h-7" />
                      </motion.div>
                      ACTIVATE AI ANALYSIS
                      <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-12 py-6 text-xl font-bold bg-black/50 backdrop-blur-xl border-2 border-gray-600 text-white hover:bg-gray-900/50 hover:border-gray-500 transition-all duration-500 rounded-2xl" 
                    onClick={handleDemoClick}
                  >
                    <Eye className="w-7 h-7 mr-4" />
                    NEURAL DEMO
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center gap-12 text-sm text-gray-400 mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Zero Setup Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Quantum-Speed Processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Military-Grade Security</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* AI Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="mt-24 max-w-7xl mx-auto"
          >
            <div className="relative">
              {/* Holographic Glow Effects */}
              <div className="absolute -inset-12 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
              
              <div className="relative bg-black/80 backdrop-blur-2xl rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl">
                {/* Futuristic Browser Header */}
                <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 px-8 py-6 border-b border-gray-700/50">
                  <div className="flex items-center gap-6">
                    <div className="flex gap-3">
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      />
                    </div>
                    <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-600/30">
                      <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-4 h-4 rounded bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-mono">linkedin-evolved.ai/neural-dashboard</span>
                        <div className="ml-auto flex items-center gap-2 text-xs">
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                          <span>AI ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Neural Dashboard Content */}
                <div className="p-8 lg:p-12">
                  {/* AI Status Header */}
                  <div className="text-center mb-12">
                    <motion.div 
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Bot className="w-4 h-4 mr-2" />
                      </motion.div>
                      Neural Network Processing Complete
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-2">AI-Powered Professional Intelligence</h3>
                    <p className="text-gray-400">Real-time analysis powered by quantum computing algorithms</p>
                  </div>

                  {/* Advanced Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                      { 
                        icon: TrendingUp, 
                        label: 'Neural Score', 
                        value: '98.7%', 
                        change: '+23.4%', 
                        gradient: 'from-blue-500 to-cyan-500',
                        description: 'AI Optimization Level'
                      },
                      { 
                        icon: Users, 
                        label: 'Network Reach', 
                        value: '2.8M', 
                        change: '+847K', 
                        gradient: 'from-green-500 to-emerald-500',
                        description: 'Extended Connections'
                      },
                      { 
                        icon: Award, 
                        label: 'Authority Index', 
                        value: '9.2/10', 
                        change: '+1.8', 
                        gradient: 'from-yellow-500 to-orange-500',
                        description: 'Industry Recognition'
                      },
                      { 
                        icon: Target, 
                        label: 'Visibility Boost', 
                        value: '347%', 
                        change: '+89%', 
                        gradient: 'from-purple-500 to-pink-500',
                        description: 'Profile Enhancement'
                      }
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-10 rounded-2xl blur group-hover:opacity-20 transition-opacity`}></div>
                        <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.gradient} shadow-lg`}>
                              <metric.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{metric.value}</div>
                              <div className="text-green-400 text-sm font-medium">{metric.change}</div>
                            </div>
                          </div>
                          <div className="text-gray-300 font-medium mb-1">{metric.label}</div>
                          <div className="text-gray-500 text-xs">{metric.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Neural Network Visualization */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    className="bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <Network className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">Neural Network Analysis</h4>
                        <p className="text-purple-200/70">Deep learning insights and predictive modeling</p>
                      </div>
                      <div className="ml-auto">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { 
                          title: 'Semantic Analysis', 
                          desc: 'AI understands context and meaning', 
                          score: '96%',
                          icon: Brain
                        },
                        { 
                          title: 'Predictive Modeling', 
                          desc: 'Forecasts career trajectory paths', 
                          score: '94%',
                          icon: TrendingUp
                        },
                        { 
                          title: 'Network Mapping', 
                          desc: 'Identifies hidden opportunities', 
                          score: '98%',
                          icon: Globe
                        }
                      ].map((analysis, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <analysis.icon className="w-6 h-6 text-purple-400" />
                            <span className="text-2xl font-bold text-white">{analysis.score}</span>
                          </div>
                          <h5 className="font-semibold text-white mb-2">{analysis.title}</h5>
                          <p className="text-gray-400 text-sm">{analysis.desc}</p>
                          <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                            <motion.div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: analysis.score }}
                              transition={{ delay: 2 + index * 0.2, duration: 1 }}
                            />
                          </div>
                        </motion.div>
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
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-24 text-center"
          >
            <p className="text-gray-400 mb-8 text-lg">Trusted by AI researchers and Fortune 500 executives worldwide</p>
            <div className="flex items-center justify-center gap-16 opacity-60">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Neural Analyses</div>
              </motion.div>
              <div className="w-px h-16 bg-gray-600"></div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">99.7%</div>
                <div className="text-gray-400">AI Accuracy</div>
              </motion.div>
              <div className="w-px h-16 bg-gray-600"></div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">2.3s</div>
                <div className="text-gray-400">Processing Time</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;