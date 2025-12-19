import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, TrendingUp, RefreshCw, FileText } from 'lucide-react';
import { Button } from '../Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useResumeStore } from '../../store/resumeStore';

interface ReportViewProps {
    score: number;
    analysis: any;
    onGenerate: () => void;
    isGenerating: boolean;
}

const GENERATION_STEPS = [
    "Preparing context...",
    "Consulting expert models...",
    "Rewriting summary...",
    "Optimizing bullet points...",
    "Formatting document..."
];

export const ReportView: React.FC<ReportViewProps> = ({ score, analysis, onGenerate, isGenerating }) => {
    // Adapter for new Backend Schema
    const suggestions = [
        ...(analysis.ats_red_flags || []),
        ...(analysis.rewrite_plan?.top_changes || []),
        ...(analysis.rewrite_plan?.format_fixes || [])
    ];

    const strengths = [
        ...(analysis.keyword_coverage?.present?.map((k: string) => `found keyword: ${k}`) || []),
        ...(Object.entries(analysis.sections_detected || {})
            .filter(([_, v]) => v)
            .map(([k]) => `Has ${k} section`) || [])
    ].slice(0, 5); // Limit to 5

    const [step, setStep] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isGenerating) {
            setStep(0);
            interval = setInterval(() => {
                setStep(prev => (prev + 1) % GENERATION_STEPS.length);
            }, 2500);
        }
        return () => clearInterval(interval);
    }, [isGenerating]);

    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                {/* Score Card */}
                <Card className="border-blue-100 bg-blue-50/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-800">
                            <TrendingUp className="w-5 h-5" /> ATS Compatibility Score
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center justify-center w-full py-4">
                            <div className="relative w-40 h-40">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle
                                        cx="50" cy="50" r="45"
                                        stroke="#e2e8f0"
                                        strokeWidth="8"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50" cy="50" r="45"
                                        stroke={score >= 90 ? "#22c55e" : score >= 70 ? "#3b82f6" : "#eab308"}
                                        strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={`${score * 2.83}, 283`}
                                        strokeLinecap="round"
                                        className="transition-all duration-1000 ease-out"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        {score}
                                    </span>
                                    <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                                        Score
                                    </span>
                                </div>
                            </div>
                            <p className="mt-4 text-center text-sm font-medium text-gray-600 max-w-[80%]">
                                {score >= 90 ? "Excellent! Your resume is top-tier." : score >= 70 ? "Good foundation, but needs polishing." : "Needs significant optimization."}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Card */}
                <Card className="border-green-100 bg-green-50/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-800">
                            <CheckCircle className="w-5 h-5" /> Next Steps
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 mb-4">
                            Ready to transform? Let our AI rewrite your resume.
                        </p>

                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700 mb-1 block">
                                Custom Instructions (Optional)
                            </label>
                            <textarea
                                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 min-h-[80px]"
                                placeholder="E.g., 'Emphasize my leadership in Project X', 'Remove the temporary role in 2020', 'Make it strictly 1 page'."
                                value={useResumeStore((state) => state.userDirectives)}
                                onChange={(e) => useResumeStore.getState().setUserDirectives(e.target.value)}
                            />
                        </div>

                        <Button
                            onClick={onGenerate}
                            disabled={isGenerating}
                            className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
                        >
                            {isGenerating ? (
                                <>
                                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> {GENERATION_STEPS[step]}
                                </>
                            ) : (
                                <>
                                    <FileText className="w-4 h-4 mr-2" /> Generate ATS Resume
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Strengths */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-gray-900">Key Strengths</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {strengths.map((str: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-gray-700">{str}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Suggestions */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-gray-900">Improvement Areas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {suggestions.map((sugg: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                                    <span className="text-gray-700">{sugg}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
