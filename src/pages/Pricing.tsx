import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Priority access for everyone</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe career growth should be accessible. That's why LinkedIn Evolved is completely free for individual professionals.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 mt-16 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime Free Access</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Get full access to our advanced analysis engine without spending a dime. We're committed to helping you land your dream job.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">What's included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {[
                'Unlimited PDF Uploads',
                'Detailed ATS Analysis',
                'Keyword Optimization',
                'Section-by-Section Score',
                'Impact Recommendations',
                'Downloadable Reports',
                'Privacy-First Processing',
                'Instant Results'
              ].map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <div className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$0</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </div>
                <div className="mt-10">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-500"
                    onClick={() => navigate('/dashboard')}
                  >
                    Get Started for Free
                  </Button>
                </div>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-2xl mt-24 divide-y divide-gray-900/10 active:none">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-8">Frequently asked questions</h2>
          <dl className="space-y-8 divide-y divide-gray-900/10">
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-12">Is it really free?</dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 lg:col-span-12 lg:mt-2">
                Yes! We are currently in open beta and offering full access to all features for free to help gather feedback and improve the product.
              </dd>
            </div>
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-12">Do I need a LinkedIn Premium account?</dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 lg:col-span-12 lg:mt-2">
                No, this tool works with any LinkedIn profile. You just need to export your profile to PDF from your LinkedIn page.
              </dd>
            </div>
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-12">Is my data safe?</dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 lg:col-span-12 lg:mt-2">
                Absolutely. All analysis happens in your browser session. We do not store your personal data or your PDF files.
              </dd>
            </div>
          </dl>
        </div>

      </div>
    </div>
  );
};

export default Pricing;