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
  Zap
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Get comprehensive insights into your profile performance and engagement metrics.'
  },
  {
    icon: Users,
    title: 'Network Analysis',
    description: 'Understand your connection demographics and identify networking opportunities.'
  },
  {
    icon: Award,
    title: 'Skills Assessment',
    description: 'Track endorsements and discover trending skills in your industry.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Tracking',
    description: 'Monitor your professional growth and career progression over time.'
  },
  {
    icon: BookOpen,
    title: 'Custom Reports',
    description: 'Generate detailed reports and actionable recommendations.'
  },
  {
    icon: Share2,
    title: 'Export & Share',
    description: 'Export insights or share them directly on your LinkedIn profile.'
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
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features to Enhance Your Profile
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