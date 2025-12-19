import React from 'react';

const Privacy = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Privacy Policy</h1>

                    <div className="prose prose-blue max-w-none text-gray-600">
                        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to LinkedIn Evolved ("we," "our," or "us"). We respect your privacy and are committed to protecting
                            your personal data. This privacy policy will inform you as to how we look after your personal data when you
                            visit our website and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. The Data We Collect</h2>
                        <p className="mb-4">
                            We collect data that you provide to us directly, such as when you upload a PDF resume for analysis.
                            This may include your name, contact details, work history, and education. We do not store this data
                            permanently on our servers; it is processed in-memory or temporarily for the purpose of analysis.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
                        <p className="mb-4">
                            We use your data solely to provide the services you have requested, specifically to analyze your
                            LinkedIn profile and provide optimization recommendations. We do not sell your data to third parties.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
                        <p className="mb-4">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally
                            lost, used, or accessed in an unauthorized way.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            <br />
                            hello@someshbhardwaj.me
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
