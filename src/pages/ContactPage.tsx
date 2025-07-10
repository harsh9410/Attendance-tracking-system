import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    plan: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoForm, setDemoForm] = useState({ name: '', email: '', company: '' });
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoError, setDemoError] = useState('');
  const [demoFormErrors, setDemoFormErrors] = useState<{[key: string]: string}>({});

  // Handle plan selection from pricing page
  useEffect(() => {
    if (location.state?.plan) {
      setFormData(prev => ({
        ...prev,
        plan: location.state.plan,
        role: 'company'
      }));
    }
  }, [location.state]);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("m4gEoizTa3mlw9peT");
  }, []);

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.role) {
      errors.role = 'Please select your role';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        role: formData.role,
        company: formData.company || 'Not specified',
        plan: formData.plan || 'Not specified',
        message: formData.message,
        to_name: 'GeoTrack Team'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_08wuxti',
        'template_lzj1ykm',
        templateParams
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          role: '',
          company: '',
          plan: '',
          message: ''
        });
        setFormErrors({});
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('Email sending failed:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setError('');
    setFormErrors({});
  };

  // Demo form validation
  const validateDemoForm = () => {
    const errors: {[key: string]: string} = {};
    if (!demoForm.name.trim()) errors.name = 'Name is required';
    if (!demoForm.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(demoForm.email)) errors.email = 'Enter a valid email';
    setDemoFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  // Demo form submit
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoError('');
    if (!validateDemoForm()) return;
    setDemoSubmitting(true);
    try {
      const params = {
        from_name: demoForm.name,
        from_email: demoForm.email,
        company: demoForm.company || 'Not specified',
        message: 'Demo Request',
        to_name: 'GeoTrack Team',
      };
      const response = await emailjs.send('service_08wuxti', 'template_lzj1ykm', params);
      if (response.status === 200) {
        setDemoSubmitted(true);
        setDemoForm({ name: '', email: '', company: '' });
        setDemoFormErrors({});
      } else throw new Error('Failed to send');
    } catch {
      setDemoError('Failed to send request. Try again.');
    } finally {
      setDemoSubmitting(false);
    }
  };
  const handleDemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDemoForm({ ...demoForm, [name]: value });
    if (demoFormErrors[name]) setDemoFormErrors(prev => ({ ...prev, [name]: '' }));
  };
  const closeDemoModal = () => {
    setShowDemoModal(false);
    setDemoSubmitted(false);
    setDemoError('');
    setDemoFormErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your message! We'll get back to you within 24 hours.
          </p>
          <button
            onClick={handleReset}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to revolutionize your attendance management? Contact us for a personalized demo 
            or to discuss your specific requirements.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.role ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your role</option>
                      <option value="student">Student</option>
                      <option value="company">Company/Employer</option>
                      <option value="admin">Administrator</option>
                      <option value="other">Other</option>
                    </select>
                    {formErrors.role && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.role}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                {formData.plan && (
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                      Selected Plan
                    </label>
                    <input
                      type="text"
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your requirements or questions..."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">harshgupta3732@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">9257650180</p>
                  </div>
                </div>
              </div>

              {/* Demo Request */}
              <div className="mt-12 bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Demo</h3>
                <p className="text-gray-600 mb-6">
                  See GeoTrack in action with a personalized demo tailored to your organization's needs.
                </p>
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setShowDemoModal(true)}
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Demo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Geofencing Demo Zone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience how our geofencing technology works with this interactive demonstration.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map Demo</h3>
                <p className="text-gray-600 max-w-md">
                  This would show a live map with geofence boundaries, real-time tracking, and attendance zones.
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Active Zone</h4>
                  <p className="text-sm text-gray-600">Employees currently in work area</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Geofence Boundary</h4>
                  <p className="text-sm text-gray-600">Virtual attendance perimeter</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tracking Points</h4>
                  <p className="text-sm text-gray-600">Real-time location updates</p>
                </div>
              </div>
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
            <p className="text-xl text-gray-600">
              Quick answers to common questions about GeoTrack implementation and support.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can we get started?</h3>
              <p className="text-gray-600">Most organizations can be up and running within 24-48 hours. We provide dedicated onboarding support to ensure smooth implementation.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What kind of support do you provide?</h3>
              <p className="text-gray-600">We offer 24/7 technical support, comprehensive training materials, and dedicated account management for Enterprise customers.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can GeoTrack integrate with our existing systems?</h3>
              <p className="text-gray-600">Yes, we provide API access and custom integrations with popular HR, payroll, and workforce management systems.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a minimum contract period?</h3>
              <p className="text-gray-600">No minimum contract for Basic and Pro plans. Enterprise plans typically include annual agreements with volume discounts.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={closeDemoModal}>&times;</button>
            {demoSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Request Sent!</h2>
                <p className="text-gray-600 mb-4">We'll contact you soon to schedule your demo.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={closeDemoModal}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold mb-2 text-center">Request a Demo</h2>
                {demoError && <p className="text-red-600 text-center">{demoError}</p>}
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input type="text" name="name" value={demoForm.name} onChange={handleDemoChange}
                    className={`w-full px-4 py-2 border rounded-lg ${demoFormErrors.name ? 'border-red-300' : 'border-gray-300'}`}
                    placeholder="Enter your name" />
                  {demoFormErrors.name && <p className="text-sm text-red-600">{demoFormErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input type="email" name="email" value={demoForm.email} onChange={handleDemoChange}
                    className={`w-full px-4 py-2 border rounded-lg ${demoFormErrors.email ? 'border-red-300' : 'border-gray-300'}`}
                    placeholder="Enter your email" />
                  {demoFormErrors.email && <p className="text-sm text-red-600">{demoFormErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <input type="text" name="company" value={demoForm.company} onChange={handleDemoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter company name (optional)" />
                </div>
                <button type="submit" disabled={demoSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50">
                  {demoSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;