import React from 'react';
import { MapPin, Clock, Shield, Camera, Users, BarChart3, Globe, Smartphone } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Geofence-Based Presence Detection',
      description: 'Create virtual boundaries around work locations and automatically detect when employees enter or leave designated areas.',
      color: 'blue',
      details: [
        'Customizable geofence radius',
        'Multiple location support',
        'Instant notifications',
        'Visual boundary mapping'
      ]
    },
    {
      icon: Globe,
      title: 'Real-time + Offline GPS Sync',
      description: 'Seamless GPS tracking that works online and offline, with automatic synchronization when connectivity is restored.',
      color: 'green',
      details: [
        'Offline data storage',
        'Automatic sync on reconnection',
        'Satellite and mobile network integration',
        'Low battery optimization'
      ]
    },
    {
      icon: Clock,
      title: 'Automatic Timer Tracking',
      description: 'Intelligent time tracking that starts and stops automatically based on location and user activity.',
      color: 'purple',
      details: [
        'Auto clock-in/out',
        'Break time detection',
        'Overtime calculations',
        'Time zone adjustment'
      ]
    },
    {
      icon: Camera,
      title: 'Face/Selfie Check-in',
      description: 'Optional facial recognition and selfie verification for enhanced security and identity confirmation.',
      color: 'orange',
      details: [
        'Facial recognition AI',
        'Selfie timestamp verification',
        'Anti-spoofing protection',
        'Privacy-compliant processing'
      ]
    },
    {
      icon: Shield,
      title: 'Fake GPS Detection',
      description: 'Advanced algorithms to detect and prevent location spoofing attempts, ensuring data integrity.',
      color: 'red',
      details: [
        'Real-time spoof detection',
        'Multiple validation layers',
        'Behavioral analysis',
        'Fraud reporting system'
      ]
    },
    {
      icon: BarChart3,
      title: 'Admin Dashboard & Reports',
      description: 'Comprehensive analytics and reporting tools for workforce management and attendance insights.',
      color: 'indigo',
      details: [
        'Real-time attendance view',
        'Customizable reports',
        'Data export options',
        'Performance analytics'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Workforce Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how GeoTrack's advanced technology suite transforms attendance tracking 
            with precision, security, and intelligence.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform leverages the latest in GPS, AI, and mobile technology to deliver unparalleled accuracy and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GPS & Satellite</h3>
              <p className="text-gray-600">High-precision location tracking with multiple satellite networks and mobile towers.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Integration</h3>
              <p className="text-gray-600">Seamless integration with iOS and Android devices for maximum compatibility.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Security</h3>
              <p className="text-gray-600">Machine learning algorithms for fraud detection and behavioral analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience These Features Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already benefiting from GeoTrack's advanced attendance management features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Book Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;