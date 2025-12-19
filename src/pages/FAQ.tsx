import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Is it really free?",
            answer: "Yes! We are currently in open beta and offering full access to all features for free to help gather feedback and improve the product. There are no hidden fees or credit card requirements."
        },
        {
            question: "Do I need a LinkedIn Premium account?",
            answer: "No, this tool works with any LinkedIn profile. You just need to export your profile to PDF from your LinkedIn page (More > Save to PDF)."
        },
        {
            question: "Is my data safe?",
            answer: "Absolutely. All analysis happens in your browser session or securely processed for the duration of the analysis. We do not store your personal data or your PDF files permanently."
        },
        {
            question: "How does the ATS scoring work?",
            answer: "We use advanced AI models to compare your resume against industry-standard Application Tracking System (ATS) criteria. We check for keyword matching, formatting, impact metrics, and section completeness."
        },
        {
            question: "Can I edit the optimized resume?",
            answer: "Yes! After the AI generates the optimized version, you have full control to copy the text, print to PDF, or regenerate sections with specific instructions using the 'Refine Results' feature."
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Got Questions?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Everything you need to know about LinkedIn Evolved and how to optimize your resume.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl divide-y divide-gray-900/10">
                    <dl className="space-y-8 divide-y divide-gray-900/10">
                        {faqs.map((faq, index) => (
                            <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8 ring-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                                    {faq.question}
                                </dt>
                                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button variant="outline">Contact Support</Button>
                        </Link>
                        <Link to="/dashboard">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
