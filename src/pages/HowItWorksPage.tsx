import React from 'react';
import { Download, MapPin, Clock, CheckCircle, BarChart3, Users } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      step: '01',
      icon: Download,
      title: 'Install & Setup',
      description: 'Download the GeoTrack app and complete the simple setup process with GPS permissions.',
      details: [
        'Download from App Store or Google Play',
        'Enable GPS and location services',
        'Complete profile setup',
        'Sync with company account'
      ]
    },
    {
      step: '02',
      icon: MapPin,
      title: 'Admin Defines Geofence',
      description: 'Company administrators set up virtual boundaries around work locations and define attendance rules.',
      details: [
        'Draw geofence boundaries on map',
        'Set radius and precision levels',
        'Configure multiple locations',
        'Define work hours and policies'
      ]
    },
    {
      step: '03',
      icon: Clock,
      title: 'Auto Timer Activation',
      description: 'The system automatically starts tracking time when employees enter the designated work area.',
      details: [
        'Automatic detection on entry',
        'Real-time location validation',
        'Background monitoring',
        'Offline data storage'
      ]
    },
    {
      step: '04',
      icon: CheckCircle,
      title: 'Exit Detection',
      description: 'Timer stops automatically when employees leave the geofenced area, calculating total work time.',
      details: [
        'Automatic exit detection',
        'Break time calculations',
        'Overtime tracking',
        'Data synchronization'
      ]
    },
    {
      step: '05',
      icon: BarChart3,
      title: 'Attendance Recording',
      description: 'All attendance data is processed, validated, and stored securely for reporting and payroll.',
      details: [
        'Fraud detection algorithms',
        'Data validation and processing',
        'Secure cloud storage',
        'Real-time dashboard updates'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How GeoTrack Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the simple yet powerful process that revolutionizes attendance tracking 
            with advanced geofencing technology.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Step Number Circle */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-blue-600 mb-1">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Mobile Step Number */}
                <div className="lg:hidden w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why This Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined approach ensures accuracy, security, and ease of use for both employees and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">99.9% Accuracy</h3>
              <p className="text-gray-600">Precise location tracking with advanced GPS and cellular technology ensures reliable attendance data.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Effort</h3>
              <p className="text-gray-600">Completely automated process requires no manual check-ins or time clock interactions.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Insights</h3>
              <p className="text-gray-600">Instant visibility into attendance patterns and workforce analytics for better decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Technology Behind the Scenes
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">GPS & Cellular Integration</h3>
                    <p className="text-gray-600">Combines GPS, cellular towers, and Wi-Fi for precise location accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Machine Learning Detection</h3>
                    <p className="text-gray-600">AI algorithms detect and prevent location spoofing and fraudulent activities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Real-Time Processing</h3>
                    <p className="text-gray-600">Instant data processing and synchronization across all connected devices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">System Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-600">3s</div>
                    <div className="text-sm text-gray-600">Detection Time</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-orange-600">5m</div>
                    <div className="text-sm text-gray-600">Precision</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the seamless GeoTrack process with a personalized demo tailored to your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Schedule Demo
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;