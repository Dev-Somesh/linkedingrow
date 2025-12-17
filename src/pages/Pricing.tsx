import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Basic profile analysis for individuals',
    features: [
      'Basic profile analysis',
      'Skills assessment',
      'Limited recommendations',
      '1 profile per month',
      'Export basic reports'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'Advanced insights for professionals',
    features: [
      'Advanced profile analysis',
      'Detailed skills assessment',
      'Personalized recommendations',
      'Unlimited profiles',
      'Export detailed reports',
      'Network analysis',
      'Competitor benchmarking'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Team',
    price: '$29.99',
    period: 'per month',
    description: 'Complete solution for teams and businesses',
    features: [
      'Everything in Pro',
      'Team dashboard',
      'Bulk profile analysis',
      'Advanced analytics',
      'Custom reporting',
      'API access',
      'Priority support'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  
  const handlePlanSelect = (plan: string) => {
    navigate('/dashboard');
  };
  
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that's right for you
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden
                ${plan.highlighted ? 'ring-2 ring-blue-600 transform lg:-translate-y-2' : ''}
              `}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-gray-500">{plan.description}</p>
                
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-6">
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
          </div>
          
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="text-lg font-medium text-gray-900">How does the profile analysis work?</h4>
              <p className="mt-2 text-gray-600">
                Our AI-powered system analyzes your LinkedIn profile PDF to extract insights about your professional presence, 
                skills, experience, and network. We then provide personalized recommendations to help you optimize your profile.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900">Is my data secure?</h4>
              <p className="mt-2 text-gray-600">
                Yes, we take data security seriously. Your profile information is processed securely and is never shared with 
                third parties. All analysis happens on your device, and we don't store your profile data after analysis.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900">Can I cancel my subscription anytime?</h4>
              <p className="mt-2 text-gray-600">
                Absolutely. You can cancel your subscription at any time, and you won't be charged for the next billing cycle.
                There are no long-term commitments or cancellation fees.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900">Do you offer refunds?</h4>
              <p className="mt-2 text-gray-600">
                Yes, we offer a 14-day money-back guarantee if you're not satisfied with our service. Simply contact our 
                support team within 14 days of your purchase for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;