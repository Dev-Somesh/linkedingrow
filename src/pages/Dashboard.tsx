import React, { useState } from 'react';
import { FileUpload } from '../components/FileUpload';
import { toast } from 'sonner';
import { StatsCards } from '../components/Dashboard/StatsCards';
import { ReportView } from '../components/Dashboard/ReportView';
import { ResumePreview } from '../components/Dashboard/ResumePreview';
import { useResumeStore } from '../store/resumeStore';
import { generateResume } from '../services/api';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { analysis, atsScore, originalText, improvedVersion, userDirectives, setImprovedVersion, setATSScore, reset } = useResumeStore();

  const handleGenerateResume = async () => {
    if (!originalText || !analysis) return;

    setIsGenerating(true);
    try {
      const { generatedResume, newAnalysis } = await generateResume(originalText, analysis, userDirectives);
      setImprovedVersion(generatedResume);
      if (newAnalysis && typeof newAnalysis.ats_score === 'number') {
        setATSScore(newAnalysis.ats_score);
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed to generate resume. Please check your connection or API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">

      {/* LEFT PANEL: Inputs & Analysis */}
      <div className="w-full lg:w-1/2 flex flex-col border-r border-gray-200 bg-white h-full">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Linkedingrow AI
          </h1>
          {(analysis || originalText) && (
            <Button variant="ghost" size="sm" onClick={reset} className="text-gray-500">
              New Upload
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {!analysis ? (
            <div className="max-w-xl mx-auto space-y-8 py-12">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimize your resume for ATS.</h2>
                <p className="text-gray-500 text-lg mb-8">Upload your PDF to get instant scoring, detailed feedback, and a perfectly formatted rewrite.</p>
                <FileUpload onAnalysisComplete={() => { }} />
              </motion.div>

              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-1">90+ ATS Score</h3>
                  <p className="text-sm text-blue-700">Targeting top-tier parsing standards.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-1">Smart Rewrite</h3>
                  <p className="text-sm text-green-700">Context-aware bullet point improvements.</p>
                </div>
              </div>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ReportView
                score={atsScore || 0}
                analysis={analysis}
                onGenerate={handleGenerateResume}
                isGenerating={isGenerating}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL: Output & Preview */}
      <div className="w-full lg:w-1/2 bg-gray-100 h-full flex flex-col">
        {improvedVersion ? (
          <div className="h-full flex flex-col p-6 space-y-4">
            {/* Refinement Bar - Sticky Top of Right Panel */}
            <div className="bg-white p-3 rounded-lg border shadow-sm flex items-center gap-3 shrink-0">
              <textarea
                className="flex-1 p-2 text-sm border-none focus:ring-0 resize-none bg-transparent"
                placeholder="Refine (e.g. 'Make summary shorter')..."
                rows={1}
                value={userDirectives}
                onChange={(e) => useResumeStore.getState().setUserDirectives(e.target.value)}
              />
              <div className="h-6 w-px bg-gray-200"></div>
              <Button
                onClick={handleGenerateResume}
                disabled={isGenerating}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              </Button>
            </div>

            {/* Preview Area */}
            <div className="flex-1 overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <ResumePreview content={improvedVersion} onBack={() => { }} />
            </div>
          </div>
        ) : analysis ? (
          <div className="h-full flex flex-col p-8 overflow-y-auto">
            <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-6">Live Analysis Metrics</h3>
            <StatsCards />
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm mt-10 border-2 border-dashed border-gray-200 rounded-xl">
              Waiting for generation...
            </div>
          </div>
        ) : (
          /* Empty State Hero */
          <div className="h-full flex items-center justify-center p-12 text-center bg-gray-50/50">
            <div className="max-w-md space-y-4 opacity-50">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <p className="text-sm text-gray-400 pt-4">Preview will appear here after upload.</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Dashboard;