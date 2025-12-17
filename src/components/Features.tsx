import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Award,
  TrendingUp,
  BookOpen,
  Share2,
  Upload,
  Shield,
  Zap,
  Target,
  Brain,
  Rocket
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze your profile and provide intelligent recommendations for maximum impact.'
  },
  {
    icon: Target,
    title: 'Targeted Optimization',
    description: 'Get specific, actionable recommendations tailored to your industry and career goals.'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Monitor your profile views, connection growth, and engagement metrics over time.'
  },
  {
    icon: Users,
    title: 'Network Insights',
    description: 'Understand your connection demographics and discover new networking opportunities.'
  },
  {
    icon: Rocket,
    title: 'Career Acceleration',
    description: 'Boost your professional visibility and attract better career opportunities.'
  },
  {
    icon: Shield,
    title: 'Privacy Protected',
    description: 'Your data is processed securely and never shared with third parties.'
  }
];

const howItWorks = [
  {
    icon: Upload,
    title: 'Upload Your Profile',
    description: 'Export your LinkedIn profile as a PDF and upload it to our platform.'
  },
  {
    icon: BarChart3,
    title: 'Get Instant Analysis',
    description: 'Our AI analyzes your profile and generates comprehensive insights.'
  },
  {
    icon: Zap,
    title: 'Receive Recommendations',
    description: 'Get personalized suggestions to optimize your professional presence.'
  }
];

const Features: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234299e1' fill-opacity='0.02'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="block text-blue-600">Optimize Your Profile</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of tools helps you understand, optimize, and grow your LinkedIn presence with data-driven insights.
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started in
              <span className="block text-green-600">Three Easy Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              Transform your LinkedIn profile in minutes with our streamlined analysis process.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative z-10 ${
                      index === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                      index === 1 ? 'bg-gradient-to-br from-green-100 to-green-200' :
                      'bg-gradient-to-br from-purple-100 to-purple-200'
                    }`}>
                      <step.icon className={`w-10 h-10 ${
                        index === 0 ? 'text-blue-600' :
                        index === 1 ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div className={`absolute top-2 right-2 w-8 h-8 rounded-full text-white font-bold flex items-center justify-center text-sm ${
                      index === 0 ? 'bg-blue-600' :
                      index === 1 ? 'bg-green-600' :
                      'bg-purple-600'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 max-w-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Your Privacy is Our Priority
                </h2>
              </div>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                We take your privacy seriously. Your LinkedIn profile data is processed securely with end-to-end encryption and is never shared with third parties.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-blue-100">End-to-end encryption</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-blue-100">No data sharing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-blue-100">Secure processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-blue-100">GDPR compliant</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0 lg:w-1/3 lg:pl-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Security Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2 mt-1">•</span>
                    <span className="text-blue-100">256-bit SSL encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2 mt-1">•</span>
                    <span className="text-blue-100">Local data processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2 mt-1">•</span>
                    <span className="text-blue-100">Automatic data deletion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2 mt-1">•</span>
                    <span className="text-blue-100">SOC 2 Type II certified</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to understand and optimize your LinkedIn presence
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute top-6 right-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-8">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Three simple steps to optimize your LinkedIn profile
            </p>
          </div>
          
          <div className="mt-16">
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gray-200 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {howItWorks.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 relative z-10">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32 bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Your Data Privacy is Our Priority
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We take your privacy seriously. Your LinkedIn profile data is processed securely and is never shared with third parties.
              </p>
              <div className="mt-6 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">End-to-end encryption for all uploads</span>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Privacy Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Your data is never sold to third parties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">All analysis happens on your device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">You control what data you share</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;