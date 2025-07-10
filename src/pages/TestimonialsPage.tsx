import React from 'react';
import { Star, Quote, Users, Building, GraduationCap, Truck } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Manager',
      company: 'TechCorp Solutions',
      category: 'Company',
      icon: Building,
      rating: 5,
      content: 'GeoTrack has transformed our attendance management completely. The accuracy of GPS tracking and the automated reporting has saved us countless hours of manual work.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Michael Chen',
      role: 'Field Operations Manager',
      company: 'LogiTrans Inc.',
      category: 'Field Worker',
      icon: Truck,
      rating: 5,
      content: 'As someone managing 200+ field workers, GeoTrack\'s real-time tracking and geofencing features have made attendance monitoring effortless. The fraud detection is incredibly accurate.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Academic Administrator',
      company: 'State University',
      category: 'Student',
      icon: GraduationCap,
      rating: 5,
      content: 'We use GeoTrack for student attendance in our practical courses. The system is reliable, easy to use, and has significantly improved our attendance tracking accuracy.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'James Wilson',
      role: 'Construction Supervisor',
      company: 'BuildRight Construction',
      category: 'Field Worker',
      icon: Building,
      rating: 5,
      content: 'The offline sync feature is a game-changer for our construction sites. Even in remote locations, we can track attendance accurately and sync data when connectivity returns.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Lisa Anderson',
      role: 'Operations Director',
      company: 'ServicePro Network',
      category: 'Company',
      icon: Users,
      rating: 5,
      content: 'The facial recognition feature adds an extra layer of security that we needed. Combined with GPS tracking, we have complete confidence in our attendance data.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Robert Kim',
      role: 'Student Body President',
      company: 'Metro Community College',
      category: 'Student',
      icon: GraduationCap,
      rating: 5,
      content: 'As a student, I appreciate how seamless the check-in process is. No more waiting in lines or manual sign-ins. The app is user-friendly and works perfectly.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      employees: '500+',
      challenge: 'Manual attendance tracking was consuming 10+ hours weekly for HR team',
      solution: 'Implemented GeoTrack with multiple office locations and automated reporting',
      results: [
        '90% reduction in manual tracking time',
        '99.5% attendance accuracy',
        '$50K annual savings in administrative costs'
      ]
    },
    {
      company: 'LogiTrans Inc.',
      industry: 'Transportation',
      employees: '200+',
      challenge: 'Field workers across multiple states with no centralized attendance system',
      solution: 'GeoTrack with geofencing for delivery hubs and real-time tracking',
      results: [
        'Complete visibility across all locations',
        '30% improvement in payroll accuracy',
        'Eliminated attendance fraud incidents'
      ]
    },
    {
      company: 'State University',
      industry: 'Education',
      employees: '1000+',
      challenge: 'Student attendance tracking for practical courses and labs',
      solution: 'GeoTrack implementation for specific lab locations and time slots',
      results: [
        '95% student satisfaction rate',
        'Automated compliance reporting',
        'Reduced administrative workload by 60%'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Organizations Worldwide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how GeoTrack is transforming attendance management for students, field workers, and employers across diverse industries.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Detailed case studies showing how GeoTrack solved real-world challenges.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-600">{study.employees} employees</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your attendance management? Join thousands of satisfied customers using GeoTrack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;