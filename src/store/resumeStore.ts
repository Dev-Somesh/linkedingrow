import { create } from 'zustand';

interface ResumeState {
  originalText: string | null;
  analysis: string | null;
  improvedVersion: string | null;
  atsScore: number | null;
  setOriginalText: (text: string) => void;
  setAnalysis: (analysis: string) => void;
  setImprovedVersion: (text: string) => void;
  setATSScore: (score: number) => void;
  reset: () => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  originalText: null,
  analysis: null,
  improvedVersion: null,
  atsScore: null,
  setOriginalText: (text) => set({ originalText: text }),
  setAnalysis: (analysis) => set({ analysis }),
  setImprovedVersion: (text) => set({ improvedVersion: text }),
  setATSScore: (score) => set({ atsScore: score }),
  reset: () => set({ 
    originalText: null, 
    analysis: null, 
    improvedVersion: null, 
    atsScore: null 
  })
}));