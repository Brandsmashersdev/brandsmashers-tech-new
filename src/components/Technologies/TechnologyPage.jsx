import React from 'react';

const IndustriesPage = () => {
  const industries = [
    {
      title: "Real Estate Solutions",
      description: "Innovative property management, virtual tours, and smart building applications.",
      icon: "home"
    },
    {
      title: "Retail Solutions",
      description: "End-to-end e-commerce platforms, inventory management, and customer loyalty systems.",
      icon: "shopping-bag"
    },
    {
      title: "Automotive Solutions",
      description: "Vehicle management, dealer platforms, and connected car applications.",
      icon: "car"
    },
    {
      title: "E.V. Industry Solutions",
      description: "Charging infrastructure software, battery management, and fleet monitoring systems.",
      icon: "bolt"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and managed cloud solutions.",
      icon: "cloud"
    },
    {
      title: "Healthcare Solutions",
      description: "Patient management systems, telemedicine platforms, and healthcare analytics.",
      icon: "heart"
    },
    {
      title: "Education Solutions",
      description: "Learning management systems, virtual classrooms, and educational content platforms.",
      icon: "book"
    },
    {
      title: "Finance IT Solutions",
      description: "Financial management software, payment processing, and fintech solutions.",
      icon: "dollar-sign"
    }
  ];

  // Icons for the industry cards
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'shopping-bag':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'car':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16v-4m4 4v-8m4 8v-12" />
          </svg>
        );
      case 'bolt':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'cloud':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'book':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'dollar-sign':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:space-y-0">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">
              Industries We <span style={{ color: '#ff5010' }}>Serve</span>
            </h1>
            <div className="w-48 h-1 bg-ff5010 mb-8" style={{ backgroundColor: '#ff5010' }}></div>
            <p className="text-gray-300 mb-8">
              At Brandsmashers Tech, we empower businesses across all industries
              with innovative, tailor-made technology solutions. From startups to
              enterprises, we deliver cutting-edge software, web, mobile, and AI-driven
              services that drive growth, efficiency, and digital transformation.
            </p>
            <p className="text-gray-300 mb-8">
              Our IT staff augmentation services help you scale your team effortlessly
              with top-tier, on-bench talent ready to jump into your projects and
              accelerate delivery.
            </p>
          </div>

          {/* Info Card for Custom Technology Solutions */}
          <div className="w-full md:w-96 bg-gray-900 rounded-lg border border-gray-800 p-6 mt-8 md:mt-0">
            <div className="flex justify-center mb-4">
              <div className="bg-ff5010 rounded-full p-3" style={{ backgroundColor: 'rgba(255, 80, 16, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff5010" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium text-center mb-4">Custom Technology Solutions</h3>
            <p className="text-gray-300 text-center">
              Tailored to your specific industry needs and business goals
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative overflow-hidden"
              style={{ 
                borderTop: '2px solid #ff5010',
              }}
            >
              <div className="mb-4 text-ff5010" style={{ color: '#ff5010' }}>
                {getIcon(industry.icon)}
              </div>
              <h3 className="text-lg font-medium mb-3">{industry.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{industry.description}</p>
              <a 
                href="#" 
                className="text-gray-400 text-sm flex items-center hover:text-ff5010 transition-colors"
                style={{ color: '#gray-400' }}
              >
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="bg-ff5010 rounded-full p-3 shadow-lg"
          style={{ backgroundColor: '#ff5010' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: black;
          color: white;
        }

        .bg-ff5010 {
          background-color: #ff5010;
        }

        .text-ff5010 {
          color: #ff5010;
        }

        .border-ff5010 {
          border-color: #ff5010;
        }

        .hover\:text-ff5010:hover {
          color: #ff5010;
        }
      `}</style>
    </div>
  );
};

export default IndustriesPage;