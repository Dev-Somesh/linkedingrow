import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../Button';
import { Download, ArrowLeft, Copy, Printer } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useReactToPrint } from 'react-to-print';

interface ResumePreviewProps {
    content: string;
    onBack: () => void;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ content, onBack }) => {
    const componentRef = useRef<HTMLDivElement>(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Optimized_Resume',
        pageStyle: `
            @page {
                size: auto;
                margin: 20mm;
            }
            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                }
            }
        `,
        onAfterPrint: () => console.log("Print triggered successfully"),
        onPrintError: (errorLocation, error) => console.error("Print failed", errorLocation, error),
    });

    return (
        <div className="h-full flex flex-col space-y-4">
            <div className="flex items-center justify-between flex-shrink-0">
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopy}>
                        <Copy className="w-4 h-4 mr-2" /> Copy Text
                    </Button>
                    <Button size="sm" onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-2" /> Print / Save PDF
                    </Button>
                </div>
            </div>

            <Card className="bg-white border-gray-200 shadow-lg flex-1 flex flex-col overflow-hidden">
                <CardHeader className="border-b border-gray-100 bg-gray-50 flex-shrink-0">
                    <CardTitle className="text-gray-700">Optimized Resume Preview</CardTitle>
                </CardHeader>
                <CardContent className="p-0 overflow-y-auto flex-1 bg-white">
                    {/* Print Container with Padding */}
                    <div ref={componentRef} className="p-8">
                        <div className="text-gray-800 text-sm leading-relaxed font-sans text-justify print:text-black">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => (
                                        <h1 className="text-4xl font-black text-gray-900 border-b-[3px] border-gray-900 pb-2 mb-6 uppercase tracking-wider text-center break-after-avoid" {...props} />
                                    ),
                                    h2: ({ node, ...props }) => (
                                        <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-200 mt-6 mb-3 pb-1 uppercase tracking-wide break-after-avoid flex items-center" {...props} />
                                    ),
                                    h3: ({ node, ...props }) => (
                                        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-1 break-after-avoid" {...props} />
                                    ),
                                    p: ({ node, ...props }) => (
                                        <p className="mb-2 leading-relaxed text-gray-700 text-justify" {...props} />
                                    ),
                                    ul: ({ node, ...props }) => (
                                        <ul className="list-disc pl-5 mb-4 space-y-1.5 text-gray-700" {...props} />
                                    ),
                                    li: ({ node, ...props }) => (
                                        <li className="pl-1 marker:text-blue-500" {...props} />
                                    ),
                                    hr: ({ node, ...props }) => <hr className="my-6 border-gray-300" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
