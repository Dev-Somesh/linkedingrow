import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  Network, 
  Zap,
  Shield,
  Rocket,
  Upload,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Eye,
  Award,
  ArrowRight,
  Cpu,
  Bot,
  Globe,
  Layers,
  Activity,
  BarChart3
} from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: 'Neural Processing Engine',
    description: 'Advanced deep learning algorithms analyze your profile with human-level comprehension, understanding context, sentiment, and professional nuances.',
    gradient: 'from-purple-500 to-pink-500',
    stats: '99.7% accuracy'
  },
  {
    icon: Target,
    title: 'Quantum Precision Targeting',
    description: 'Laser-focused recommendations powered by quantum computing principles, delivering hyper-personalized optimization strategies.',
    gradient: 'from-blue-500 to-cyan-500',
    stats: '347% improvement'
  },
  {
    icon: Network,
    title: 'Neural Network Mapping',
    description: 'AI-powered relationship analysis reveals hidden connection opportunities and optimal networking pathways for exponential growth.',
    gradient: 'from-green-500 to-emerald-500',
    stats: '2.8M reach expansion'
  },
  {
    icon: Rocket,
    title: 'Velocity Acceleration',
    description: 'Quantum-speed optimization algorithms boost your professional visibility by 300%+ with real-time performance tracking.',
    gradient: 'from-orange-500 to-red-500',
    stats: '2.3s processing'
  },
  {
    icon: Eye,
    title: 'Predictive Vision AI',
    description: 'Future-casting algorithms predict career trajectories and identify emerging opportunities before they become visible.',
    gradient: 'from-indigo-500 to-purple-500',
    stats: '94% prediction rate'
  },
  {
    icon: Shield,
    title: 'Quantum Security Matrix',
    description: 'Military-grade encryption with quantum-resistant algorithms ensures your professional data remains absolutely secure.',
    gradient: 'from-gray-600 to-slate-600',
    stats: 'Zero breaches'
  }
];

const aiCapabilities = [
  {
    icon: Cpu,
    title: 'Neural Architecture',
    description: 'Multi-layered neural networks process millions of data points simultaneously',
    color: 'text-blue-400'
  },
  {
    icon: Bot,
    title: 'Autonomous Learning',
    description: 'Self-improving AI that evolves with LinkedIn algorithm changes',
    color: 'text-purple-400'
  },
  {
    icon: Globe,
    title: 'Global Intelligence',
    description: 'Worldwide professional data analysis for comprehensive insights',
    color: 'text-green-400'
  },
  {
    icon: Layers,
    title: 'Deep Analysis',
    description: 'Multi-dimensional profile evaluation across 50+ parameters',
    color: 'text-orange-400'
  }
];

const howItWorks = [
  {
    icon: Upload,
    title: 'Neural Upload',
    description: 'Upload your profile and watch our AI instantly begin deep neural analysis across multiple processing layers.',
    gradient: 'from-blue-500 to-purple-500',
    time: '0.1s'
  },
  {
    icon: Brain,
    title: 'Quantum Processing',
    description: 'Advanced algorithms process your data through neural networks, analyzing patterns invisible to human perception.',
    gradient: 'from-purple-500 to-pink-500',
    time: '2.3s'
  },
  {
    icon: Rocket,
    title: 'Transformation Launch',
    description: 'Receive AI-generated optimization strategies and watch your professional presence achieve quantum-level growth.',
    gradient: 'from-pink-500 to-red-500',
    time: 'Instant'
  }
];

const Features: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black py-32 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Neural Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '400px 400px, 400px 400px, 40px 40px, 40px 40px'
          }} />
        </div>

        {/* Floating Neural Connections */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        ))}

        {/* Dynamic Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-400/20 text-purple-300 text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 mr-3" />
              </motion.div>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
                Quantum-Powered Neural Architecture
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                AI THAT THINKS
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                BEYOND HUMAN
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Experience the next evolution of professional optimization with AI that doesn't just analyze—it 
              <span className="text-blue-400 font-semibold"> understands</span>, 
              <span className="text-purple-400 font-semibold"> predicts</span>, and 
              <span className="text-pink-400 font-semibold"> transforms</span> your career trajectory.
            </p>
          </motion.div>
        </div>

        {/* AI Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl blur group-hover:blur-none transition-all duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <capability.icon className={`w-8 h-8 ${capability.color} mb-4`} />
                <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative h-full bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {feature.stats}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* How It Works Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 text-green-300 text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-5 h-5 mr-3" />
              <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent font-semibold">
                Quantum-Speed Transformation
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                NEURAL EVOLUTION
              </span>
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                IN 3 STEPS
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light">
              From upload to transformation in under 3 seconds. Our quantum processors work at the speed of thought.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Neural Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400/30 via-purple-400/50 to-pink-400/30 -translate-y-1/2">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center group"
                >
                  <div className="relative inline-block mb-8">
                    <motion.div 
                      className={`flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-r ${step.gradient} shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <step.icon className="w-14 h-14 text-white" />
                    </motion.div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-black font-black flex items-center justify-center text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-mono">
                      {step.time}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 max-w-xs mx-auto leading-relaxed group-hover:text-gray-200 transition-colors">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Final CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-gray-700/50 overflow-hidden"
        >
          {/* Background Neural Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 text-center">
            <motion.div 
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-400/20 text-yellow-300 text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-5 h-5 mr-3" />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-semibold">
                Join The Neural Revolution
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Ready to Transcend
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Human Limitations?
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light">
              Join 50,000+ professionals who've already experienced quantum-level career acceleration. 
              Your neural transformation awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="group px-12 py-6 text-xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 border-0 shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-500 rounded-2xl"
                  onClick={() => navigate('/dashboard')}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Rocket className="w-7 h-7" />
                    </motion.div>
                    INITIATE NEURAL SCAN
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
                  onClick={() => navigate('/demo')}
                >
                  <Eye className="w-7 h-7 mr-4" />
                  WITNESS THE DEMO
                </Button>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: CheckCircle, text: 'Zero Setup Required', subtext: 'Instant activation' },
                { icon: Zap, text: 'Quantum Processing', subtext: '2.3s analysis time' },
                { icon: Shield, text: 'Military Security', subtext: 'Zero-trust architecture' },
                { icon: Globe, text: 'Global Network', subtext: '150+ countries' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-8 h-8 text-green-400 mb-3 group-hover:text-green-300 transition-colors" />
                  <span className="text-white font-semibold mb-1">{feature.text}</span>
                  <span className="text-gray-400 text-sm">{feature.subtext}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;