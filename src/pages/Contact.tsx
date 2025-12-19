import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        We'd love to hear from you. Get in touch with the LinkedIn Evolved team.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                    <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Email Support
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                For general inquiries and support requests.
                                <br />
                                <a href="mailto:hello@someshbhardwaj.me" className="text-blue-600 hover:text-blue-500 hover:underline">
                                    hello@someshbhardwaj.me
                                </a>
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                    <Linkedin className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Connect on LinkedIn
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Follow us for updates and career tips.
                                <br />
                                <a href="https://linkedin.com/in/ersomeshbhardwaj" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 hover:underline">
                                    Somesh Bhardwaj
                                </a>
                            </dd>
                        </div>

                    </dl>
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-gray-50 rounded-2xl p-8 max-w-xl mx-auto border border-gray-100">
                        <h3 className="text-lg font-semibold mb-4">Have specific feedback?</h3>
                        <p className="text-gray-600 mb-6">
                            We are constantly improving LinkedIn Evolved. Your feedback helps us shape the product.
                        </p>
                        <a
                            href="mailto:hello@someshbhardwaj.me?subject=LinkedIn Evolved Feedback"
                            className="inline-flex items-center justify-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Send Feedback
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
