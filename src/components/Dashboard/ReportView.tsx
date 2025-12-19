import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, TrendingUp, RefreshCw, FileText } from 'lucide-react';
import { Button } from '../Button'; // Fixed path (was ../components/Button) which is wrong if file is in Dashboard/
// Actually, file is in src/components/Dashboard/ReportView.tsx.
// Button is in src/components/Button.tsx?
// Let's check FileUpload.tsx, it's in src/components, so it imports ./Button.
// So from Dashboard/ReportView.tsx, it should be ../Button.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
                        <div className="flex items-center gap-6">
                            <div className="relative w-24 h-24">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="48" cy="48" r="40" stroke="#bfdbfe" strokeWidth="8" fill="transparent" />
                                    <circle
                                        cx="48" cy="48" r="40"
                                        stroke={score > 70 ? "#2563eb" : "#eab308"}
                                        strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={`${score * 2.51} 251`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900">
                                    {score}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-2">
                                    {score > 70 ? "Great job! Your profile is mostly optimized." : "Room for improvement. See suggestions below."}
                                </p>
                            </div>
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
                        <p className="text-gray-700 mb-6">
                            We've identified key areas to improve. You can manually update your LinkedIn profile, or let our AI generate a optimized resume for you.
                        </p>
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
