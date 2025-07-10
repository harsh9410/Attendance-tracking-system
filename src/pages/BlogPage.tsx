import React from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'The Future of Workforce Management: How Geofencing is Revolutionizing Attendance Tracking',
    excerpt: 'Discover how advanced geofencing technology is transforming traditional attendance systems and why modern businesses are making the switch.',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2'
  };

  const blogPosts = [
    {
      title: 'GPS vs. Traditional Time Clocks: A Complete Cost-Benefit Analysis',
      excerpt: 'Compare the true costs and benefits of GPS-based attendance systems versus traditional time clock solutions.',
      author: 'Michael Rodriguez',
      date: 'March 12, 2025',
      readTime: '6 min read',
      category: 'Business',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2'
    },
    {
      title: 'Remote Work and Location Tracking: Balancing Productivity and Privacy',
      excerpt: 'Explore best practices for implementing location-based attendance while respecting employee privacy.',
      author: 'Jennifer Park',
      date: 'March 10, 2025',
      readTime: '5 min read',
      category: 'Privacy',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2'
    },
    {
      title: 'Field Service Management: How GPS Tracking Improves Customer Service',
      excerpt: 'Learn how real-time location tracking enhances field service operations and customer satisfaction.',
      author: 'Robert Kim',
      date: 'March 8, 2025',
      readTime: '7 min read',
      category: 'Field Service',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2'
    },
    {
      title: 'Compliance and Labor Laws: GPS Attendance Tracking Legal Considerations',
      excerpt: 'Understanding the legal landscape and compliance requirements for GPS-based attendance systems.',
      author: 'Lisa Thompson',
      date: 'March 5, 2025',
      readTime: '9 min read',
      category: 'Legal',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2'
    },
    {
      title: '10 Common Attendance Tracking Mistakes and How to Avoid Them',
      excerpt: 'Identify and prevent the most common pitfalls in attendance management systems.',
      author: 'David Chen',
      date: 'March 3, 2025',
      readTime: '4 min read',
      category: 'Best Practices',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2'
    },
    {
      title: 'The Psychology of Attendance: How Technology Affects Employee Behavior',
      excerpt: 'Examining the psychological impact of automated attendance systems on workplace culture.',
      author: 'Dr. Emily Johnson',
      date: 'March 1, 2025',
      readTime: '6 min read',
      category: 'Psychology',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2'
    }
  ];

  const categories = [
    { name: 'Technology', count: 12 },
    { name: 'Business', count: 8 },
    { name: 'Privacy', count: 5 },
    { name: 'Field Service', count: 7 },
    { name: 'Legal', count: 4 },
    { name: 'Best Practices', count: 9 }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            GeoTrack Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, best practices, and insights in workforce management and location-based attendance tracking.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500">Featured</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <a 
                    href="https://blog.geoattendance.com/the-importance-of-geofencing-in-workforce-management/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        {post.title === 'GPS vs. Traditional Time Clocks: A Complete Cost-Benefit Analysis' ? (
                          <a 
                            href="https://blog.geoattendance.com/geo-attendance-vs-traditional-time-clocks/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : post.title === 'Remote Work and Location Tracking: Balancing Productivity and Privacy' ? (
                          <a 
                            href="https://www.shrm.org/in/topics-tools/news/all-things-work/monitoring-remote-workers" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : post.title === 'Field Service Management: How GPS Tracking Improves Customer Service' ? (
                          <a 
                            href="https://www.razorsync.com/resources/field-service-software-gps-tracking-improves-customer-service/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : post.title === 'Compliance and Labor Laws: GPS Attendance Tracking Legal Considerations' ? (
                          <a 
                            href="https://aaronhall.com/legal-implications-of-employee-gps-tracking/#:~:text=The%20legal%20implications%20of%20employee%20GPS%20tracking%20involve,employee%20consent%20is%20obtained%20before%20implementing%20tracking%20measures." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : post.title === '10 Common Attendance Tracking Mistakes and How to Avoid Them' ? (
                          <a 
                            href="https://www.wifiattendance.com/blog/10-attendance-tracking-mistakes" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : post.title === 'The Psychology of Attendance: How Technology Affects Employee Behavior' ? (
                          <a 
                            href="https://attendancesystem.io/analyzing-the-impact-of-an-attendance-system-on-employee-performance/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                          {category.name}
                        </a>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                          {category.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Removed Newsletter and Popular Tags sections */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Attendance Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using GeoTrack to streamline their workforce management.
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

export default BlogPage;