import { create } from 'zustand';

export interface AnalysisResult {
  ats_score: number;
  match_score: number;
  format_score: number;
  content_score: number;
  impact_score: number;
  keyword_coverage: {
    present: string[];
    missing: string[];
    coverage_percent: number;
  };
  sections_detected: {
    contact: boolean;
    summary: boolean;
    experience: boolean;
    skills: boolean;
    education: boolean;
    projects: boolean;
    certifications: boolean;
  };
  ats_red_flags: string[];
  rewrite_plan: {
    top_changes: string[];
    role_keywords_to_inject: string[];
    bullets_to_strengthen: string[];
    format_fixes: string[];
  };
  extracted: {
    name: string;
    email: string;
    phone: string;
    links: string[];
    skills_normalized: {
      technical: string[];
      tools: string[];
      ai: string[];
      domain: string[];
      soft: string[];
    };
  };
  confidence: number;
}

interface ResumeState {
  originalText: string | null;
  analysis: AnalysisResult | null;
  improvedVersion: string | null;
  atsScore: number | null;
  userDirectives: string;
  setOriginalText: (text: string) => void;
  setAnalysis: (analysis: AnalysisResult) => void;
  setImprovedVersion: (text: string | null) => void;
  setATSScore: (score: number) => void;
  setUserDirectives: (text: string) => void;
  reset: () => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  originalText: null,
  analysis: null,
  improvedVersion: null,
  atsScore: null,
  userDirectives: "",
  setOriginalText: (text) => set({ originalText: text }),
  setAnalysis: (analysis) => set({ analysis }),
  setImprovedVersion: (text) => set({ improvedVersion: text }),
  setATSScore: (score) => set({ atsScore: score }),
  setUserDirectives: (text) => set({ userDirectives: text }),
  reset: () => set({
    originalText: null,
    analysis: null,
    improvedVersion: null,
    atsScore: null,
    userDirectives: ""
  })
}));