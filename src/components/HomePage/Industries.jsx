import React, { useState } from "react";

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define the industries data
  const industriesData = [
    {
      title: "Real Estate Solutions",
      img: "/api/placeholder/80/80",
      description: "Innovative property management, virtual tours, and smart building applications.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Retail Solutions",
      img: "/api/placeholder/80/80",
      description: "End-to-end e-commerce platforms, inventory management, and customer loyalty systems.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Automotive Solutions",
      img: "/api/placeholder/80/80",
      description: "Vehicle management, dealer platforms, and connected car applications.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "E.V. Industry Solutions",
      img: "/api/placeholder/80/80",
      description: "Charging infrastructure software, battery management, and fleet monitoring systems.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Cloud Solutions",
      img: "/api/placeholder/80/80",
      description: "Secure cloud migration, SaaS development, and serverless architecture implementation.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Healthcare Solutions", 
      img: "/api/placeholder/80/80",
      description: "Patient management, telemedicine platforms, and medical data analysis systems.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Education Solutions",
      img: "/api/placeholder/80/80",
      description: "Learning management systems, virtual classrooms, and educational content platforms.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Finance IT Solutions",
      img: "/api/placeholder/80/80",
      description: "Banking portals, payment gateways, and financial analysis software.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#ff5010] to-transparent opacity-15 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#ff5010] to-transparent opacity-15 rounded-tr-full"></div>
       */}
      {/* Orange accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5010] via-transparent to-[#ff5010] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff5010] to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industries We <span className="text-[#ff5010]">Serve</span>
            </h2>
            <div className="w-20 h-1 bg-[#ff5010] mb-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              At Brandsmashers Tech, we empower businesses across all industries with innovative, 
              tailor-made technology solutions. From startups to enterprises, we deliver cutting-edge 
              software, web, mobile, and AI-driven services that drive growth, efficiency, and digital transformation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our IT staff augmentation services help you scale your team effortlessly with top-tier, 
              on-bench talent ready to jump into your projects and accelerate delivery.
            </p>
          </div>
          
          {/* Decorative graphic */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5010] to-[#ff7040] opacity-20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5010] to-[#ff7040] opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#ff5010] bg-opacity-20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#ff5010]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-4">Custom Technology Solutions</h3>
                <p className="text-center text-gray-400">Tailored to your specific industry needs and business goals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-800"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Colored top bar */}
              <div className={`h-1 w-full bg-[#ff5010]`}></div>
              
              <div className="p-6">
                {/* Icon and title */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300 ${
                    hoveredIndex === index ? "bg-[#ff5010] text-white" : "bg-[#ff5010] bg-opacity-20 text-[#ff5010]"
                  }`}>
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white">{industry.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-300">{industry.description}</p>
                
                {/* Learn more link */}
                <a 
                  href="#" 
                  className={`mt-4 inline-flex items-center text-sm font-medium transition-colors duration-300 ${
                    hoveredIndex === index ? "text-[#ff5010]" : "text-gray-400"
                  }`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-px bg-gradient-to-r from-[#ff5010] to-[#ff7040] rounded-lg">
            <button className="px-8 py-3 bg-gray-900 text-[#ff5010] font-semibold rounded-lg hover:bg-transparent hover:text-white transition-all duration-300">
              Discuss Your Industry Needs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;