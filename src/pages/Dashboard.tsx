import React, { useState } from 'react';
import { FileUpload } from '../components/FileUpload';
import { StatsCards } from '../components/Dashboard/StatsCards';
import { ReportView } from '../components/Dashboard/ReportView';
import { ResumePreview } from '../components/Dashboard/ResumePreview';
import { useResumeStore } from '../store/resumeStore';
import { generateResume } from '../services/api';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { analysis, atsScore, originalText, improvedVersion, setImprovedVersion, setATSScore, reset } = useResumeStore();

  const handleGenerateResume = async () => {
    if (!originalText || !analysis) return;

    setIsGenerating(true);
    try {
      const { generatedResume, newAnalysis } = await generateResume(originalText, analysis);
      setImprovedVersion(generatedResume);
      if (newAnalysis && typeof newAnalysis.ats_score === 'number') {
        setATSScore(newAnalysis.ats_score);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  // State 1: Comparison View (Final Stage)
  if (improvedVersion) {
    return (
      <div className="min-h-screen bg-gray-50/50 p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Resume Transformation</h1>
            <p className="text-muted-foreground mt-1">
              Compare your original resume with the AI-optimized version.
            </p>
          </div>
          <Button variant="outline" onClick={() => setImprovedVersion(null)}>
            Back to Analysis
          </Button>
        </div>

        {/* Content Comparison Area - Fixed Height Scrollable Windows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Old Resume */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">BEFORE</span>
              Original Content
            </h3>
            <div className="bg-white rounded-lg border shadow-sm h-[600px] overflow-hidden flex flex-col">
              <div className="p-6 overflow-y-auto flex-1 bg-white">
                <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed whitespace-pre-line font-serif">
                  {originalText}
                </div>
              </div>
            </div>
          </div>

          {/* New Resume */}
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-700 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">AFTER</span>
              Optimized Resume
            </h3>
            <div className="h-[600px]">
              <ResumePreview content={improvedVersion} onBack={() => { }} />
            </div>
          </div>
        </div>

        {/* Analytics Section (Below Comparison) */}
        <div className="pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Performance Analytics</h2>
          <StatsCards />
        </div>
      </div>
    );
  }

  // State 2: Analysis View (Middle Stage)
  if (analysis) {
    return (
      <div className="min-h-screen bg-gray-50/50 p-8 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Analysis Report</h1>
            <p className="text-muted-foreground mt-1">
              Here is what we found in your resume.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={reset}>Upload New Resume</Button>
          </div>
        </div>

        {/* Dashboard of Metrics */}
        <ReportView
          score={atsScore || 0}
          analysis={analysis}
          onGenerate={handleGenerateResume}
          isGenerating={isGenerating}
        />
      </div>
    );
  }

  // State 3: Upload View (Initial Stage)
  return (
    <div className="min-h-screen bg-gray-50/50 p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Transform Your Resume with <span className="text-blue-600">AI Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upload your PDF to unlock instant ATS scoring, skills gap analysis, and a professional rewrite—all powered by advanced AI.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto mt-12 bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
          <FileUpload onAnalysisComplete={() => { }} />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto pt-8 border-t border-gray-200">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">ATS Optimization</h3>
            <p className="text-sm text-gray-500">Get past the robots with keyword-rich content tailored for Applicant Tracking Systems.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Smart Formatting</h3>
            <p className="text-sm text-gray-500">Auto-formatted Markdown output that looks professional and clean.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Detailed Analytics</h3>
            <p className="text-sm text-gray-500">Understand your strengths and weaknesses with scoring and insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;