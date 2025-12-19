import React from 'react';

const Terms = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Terms of Service</h1>

                    <div className="prose prose-blue max-w-none text-gray-600">
                        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
                        <p className="mb-4">
                            By accessing our website and using our services, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
                        <p className="mb-4">
                            LinkedIn Evolved provides AI-powered analysis of LinkedIn profiles and resumes used for job applications.
                            Our improvements and suggestions are advisory in nature.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
                        <p className="mb-4">
                            You are responsible for ensuring that the information you provide is accurate and that you have the
                            right to share it. You agree not to use the service for any illegal or unauthorized purpose.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Disclaimer</h2>
                        <p className="mb-4">
                            The service is provided "as is" without warranties of any kind. We do not guarantee that using our
                            service will result in job offers or interviews.
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
                        <p className="mb-4">
                            Questions about the Terms of Service should be sent to us at:
                            <br />
                            hello@someshbhardwaj.me
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
