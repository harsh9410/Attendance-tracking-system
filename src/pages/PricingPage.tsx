import React from 'react';
import { Check, X, Star } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 employees',
        'Basic geofencing',
        'Simple time tracking',
        'Basic reporting',
        'Email support',
        'Mobile app access'
      ],
      limitations: [
        'No advanced analytics',
        'No facial recognition',
        'No custom integrations',
        'Limited geofence areas'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '₹667',
      period: 'per user/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited employees',
        'Advanced geofencing',
        'Facial recognition',
        'Advanced analytics',
        'Custom reports',
        'API access',
        'Priority support',
        'Offline sync',
        'Multiple locations'
      ],
      limitations: [
        'No white-label options',
        'Standard integrations only'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'Custom training',
        'SLA guarantees',
        'On-premise deployment',
        'Custom development'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: 'GPS Tracking', basic: true, pro: true, enterprise: true },
        { name: 'Geofencing', basic: 'Limited', pro: true, enterprise: true },
        { name: 'Time Tracking', basic: true, pro: true, enterprise: true },
        { name: 'Mobile App', basic: true, pro: true, enterprise: true },
        { name: 'Facial Recognition', basic: false, pro: true, enterprise: true },
        { name: 'Offline Sync', basic: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Analytics & Reporting',
      features: [
        { name: 'Basic Reports', basic: true, pro: true, enterprise: true },
        { name: 'Advanced Analytics', basic: false, pro: true, enterprise: true },
        { name: 'Custom Reports', basic: false, pro: true, enterprise: true },
        { name: 'Data Export', basic: false, pro: true, enterprise: true },
        { name: 'API Access', basic: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Support & Security',
      features: [
        { name: 'Email Support', basic: true, pro: true, enterprise: true },
        { name: 'Priority Support', basic: false, pro: true, enterprise: true },
        { name: 'Dedicated Support', basic: false, pro: false, enterprise: true },
        { name: 'Advanced Security', basic: false, pro: false, enterprise: true },
        { name: 'SLA Guarantees', basic: false, pro: false, enterprise: true }
      ]
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-600" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-gray-400" />;
    } else {
      return <span className="text-sm text-gray-600">{value}</span>;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your organization. All plans include core attendance tracking features with no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl shadow-lg ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">/{plan.period}</span>}
                  </div>
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare all features across our pricing plans to find the perfect fit for your needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Basic</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-blue-50">
                        <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-blue-900">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-t border-gray-200">
                          <td className="px-6 py-4 text-sm text-gray-900">{feature.name}</td>
                          <td className="px-6 py-4 text-center">{renderFeatureValue(feature.basic)}</td>
                          <td className="px-6 py-4 text-center">{renderFeatureValue(feature.pro)}</td>
                          <td className="px-6 py-4 text-center">{renderFeatureValue(feature.enterprise)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my plan anytime?</h3>
              <p className="text-gray-600">Yes, you can change your plan at any time. Changes take effect immediately, and you'll only pay for what you use.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees for Basic and Pro plans. Enterprise plans may include implementation and training costs.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-600">Yes, we offer 20% discount for annual billing on Pro and Enterprise plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using GeoTrack to streamline their attendance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;