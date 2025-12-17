import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { extractTextFromPDF } from '../services/pdf';
import { analyzeResume, improveResume } from '../services/openai';
import { useResumeStore } from '../store/resumeStore';

interface FileUploadProps {
  onAnalysisComplete: () => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onAnalysisComplete }) => {
  const [fileError, setFileError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { setOriginalText, setAnalysis, setImprovedVersion, setATSScore } = useResumeStore();

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      setFileError('Please upload a valid PDF file');
      return;
    }
    
    if (acceptedFiles.length > 0) {
      setFileError(null);
      setSelectedFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    noClick: !!selectedFile
  });

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setFileError(null);

    try {
      // Extract text from PDF
      const text = await extractTextFromPDF(selectedFile);
      if (!text || text.trim().length === 0) {
        throw new Error('No text could be extracted from the PDF. Please ensure the file contains readable text.');
      }
      setOriginalText(text);

      // Analyze resume
      const analysisResult = await analyzeResume(text);
      setAnalysis(analysisResult);

      // Extract ATS score from analysis
      const scoreMatch = analysisResult.match(/ATS Compatibility Score: (\d+)/);
      if (scoreMatch) {
        setATSScore(parseInt(scoreMatch[1]));
      }

      // Generate improved version
      const improved = await improveResume(text, analysisResult);
      setImprovedVersion(improved);

      onAnalysisComplete();
    } catch (error) {
      console.error('Analysis error:', error);
      setFileError(error instanceof Error ? error.message : 'Failed to analyze resume. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setFileError(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div
        {...getRootProps()}
        className={`rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'bg-blue-50' : 'hover:bg-gray-50'}
          ${selectedFile ? 'border-none' : 'border-2 border-dashed border-gray-300'}`}
      >
        <input {...getInputProps()} />
        
        {!selectedFile ? (
          <>
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Upload Your Resume
            </h3>
            <p className="text-gray-500 mb-4">
              {isDragActive
                ? "Drop your file here"
                : "Drag and drop your resume PDF, or click to select"}
            </p>
            <Button variant="outline" size="sm">
              Select File
            </Button>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              {selectedFile.name}
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              {(selectedFile.size / 1024).toFixed(1)} KB
            </p>
            
            <div className="flex gap-3">
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={handleRemoveFile}
                disabled={isAnalyzing}
              >
                Remove
              </Button>
            </div>
          </motion.div>
        )}
      </div>
      
      {fileError && (
        <div className="bg-red-50 text-red-600 p-4 rounded-b-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{fileError}</span>
        </div>
      )}

      {isAnalyzing && (
        <div className="bg-blue-50 text-blue-700 p-4 rounded-b-lg">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-3"></div>
            <span>Analyzing your resume...</span>
          </div>
        </div>
      )}
    </div>
  );
};