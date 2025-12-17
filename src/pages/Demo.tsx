import React, { useState } from 'react';
import { FileUpload } from '../components/FileUpload';
import { 
  BarChart3, 
  Users, 
  Award,
  Activity,
  Download
} from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Profile data based on Somesh Bhardwaj's LinkedIn
  const profileData = {
    name: "Somesh Bhardwaj",
    headline: "Full Stack Developer",
    location: "India",
    profileViews: 1234,
    connections: 500,
    endorsements: 28,
    engagement: 89,
    skills: [
      { name: "JavaScript", endorsements: 42 },
      { name: "React", endorsements: 38 },
      { name: "TypeScript", endorsements: 31 },
      { name: "Node.js", endorsements: 27 },
      { name: "GraphQL", endorsements: 19 },
      { name: "AWS", endorsements: 15 }
    ],
    experience: [
      { 
        company: "Tech Company", 
        title: "Senior Software Engineer", 
        duration: "2 years 3 months",
        keywords: ["React", "TypeScript", "Node.js", "AWS"]
      },
      { 
        company: "Previous Corp", 
        title: "Software Engineer", 
        duration: "3 years 1 month",
        keywords: ["JavaScript", "React", "Redux", "MongoDB"]
      },
      { 
        company: "Startup Inc", 
        title: "Junior Developer", 
        duration: "1 year 8 months",
        keywords: ["JavaScript", "HTML", "CSS", "jQuery"]
      }
    ],
    recommendations: {
      received: 8,
      given: 5
    },
    posts: {
      total: 24,
      avgEngagement: 76,
      topCategories: ["Web Development", "Career Advice", "Technology Trends"]
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Profile Views"
                value={profileData.profileViews.toLocaleString()}
                change="+12%"
                icon={Activity}
              />
              <StatCard
                title="Total Connections"
                value={`${profileData.connections}+`}
                change="+5"
                icon={Users}
              />
              <StatCard
                title="Skills Endorsed"
                value={profileData.endorsements.toString()}
                change="+3"
                icon={Award}
              />
              <StatCard
                title="Post Engagement"
                value={`${profileData.engagement}%`}
                change="+7%"
                icon={BarChart3}
              />
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile View Trends</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[
                      { date: '2024-03', views: 980 },
                      { date: '2024-02', views: 850 },
                      { date: '2024-01', views: 720 },
                      { date: '2023-12', views: 650 },
                      { date: '2023-11', views: 590 },
                      { date: '2023-10', views: 480 }
                    ].map((data, index) => (
                      <div key={data.date} className="flex flex-col items-center flex-1">
                        <div 
                          className="w-full bg-blue-600 rounded-t"
                          style={{ 
                            height: `${(data.views / 1000) * 100}%`,
                            opacity: 0.5 + (index / 6) * 0.5
                          }}
                        />
                        <span className="text-xs text-gray-500 mt-2">{data.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Engagement Summary</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Profile Completeness</span>
                        <span className="text-sm font-medium text-gray-700">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Skill Endorsements</span>
                        <span className="text-sm font-medium text-gray-700">68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Post Engagement</span>
                        <span className="text-sm font-medium text-gray-700">89%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Network Growth</span>
                        <span className="text-sm font-medium text-gray-700">72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
              <p className="text-gray-600 mt-1">{profileData.headline}</p>
              <p className="text-gray-500 text-sm mt-1">{profileData.location}</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <nav className="flex space-x-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'overview'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
          </nav>
        </div>
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">This is a Demo</h3>
            <p className="mt-2 text-gray-600">
              This is a demonstration of the LinkedInsights dashboard with sample data based on your profile. 
              To analyze your own LinkedIn profile in detail, return to the dashboard and upload your profile PDF.
            </p>
            <Button 
              className="mt-4"
              onClick={() => window.location.href = '/dashboard'}
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.FC<any>;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div className="mt-2 flex items-baseline">
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <p className="ml-2 text-sm font-medium text-green-600">{change}</p>
    </div>
  </div>
);

export default Demo;