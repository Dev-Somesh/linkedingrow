import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, XCircle, Download, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { useResumeStore } from '../store/resumeStore';
import { generatePDF } from '../services/pdf';

export const ResumeAnalysis: React.FC = () => {
  const { analysis, atsScore, improvedVersion } = useResumeStore();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownload = async () => {
    if (!improvedVersion) return;
    
    setIsGeneratingPDF(true);
    try {
      const pdfBlob = generatePDF(improvedVersion);
      const url = URL.createObjectURL(pdfBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'improved-resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (!analysis) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">ATS Compatibility Score</h2>
          <div className="flex items-center">
            <div className={`text-2xl font-bold ${
              atsScore && atsScore >= 70 ? 'text-green-600' : 'text-red-600'
            }`}>
              {atsScore}%
            </div>
          </div>
        </div>
        
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              atsScore && atsScore >= 70 ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ width: `${atsScore}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis</h2>
        <div className="prose max-w-none">
          {analysis.split('\n').map((line, index) => (
            <p key={index} className="mb-2">{line}</p>
          ))}
        </div>
      </div>

      {improvedVersion && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Improved Version</h2>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleDownload}
              disabled={isGeneratingPDF}
            >
              {isGeneratingPDF ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              Download PDF
            </Button>
          </div>
          <div className="prose max-w-none">
            {improvedVersion.split('\n').map((line, index) => (
              <p key={index} className="mb-2">{line}</p>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};