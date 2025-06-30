import React from 'react';

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: "🏠",
      title: "Real Estate Solutions",
      description: "Innovative property management, virtual tours, and smart building applications."
    },
    {
      icon: "🛒",
      title: "Retail Solutions",
      description: "End-to-end e-commerce platforms, inventory management, and customer loyalty systems."
    },
    {
      icon: "🚗",
      title: "Automotive Solutions",
      description: "Vehicle management, dealer platforms, and connected car applications."
    },
    {
      icon: "⚡",
      title: "E.V. Industry Solutions",
      description: "Charging infrastructure software, battery management, and fleet monitoring systems."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud computing services tailored to business needs."
    },
    {
      icon: "🏥",
      title: "Healthcare Solutions",
      description: "Advanced healthcare platforms, patient management systems, and telemedicine solutions."
    },
    {
      icon: "🎓",
      title: "Education Solutions",
      description: "Interactive learning platforms, LMS systems, and virtual classroom solutions."
    },
    {
      icon: "💰",
      title: "Finance IT Solutions",
      description: "Robust financial software for banking, insurance, and investment sectors."
    }
  ];

  return (
    <div className="w-full min-h-[100vh] bg-[#000000] px-6 py-14 text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At Brandsmashers Tech, we empower businesses across all industries with innovative, tailor-made technology solutions. From startups to enterprises, we deliver cutting-edge software, web, mobile, and AI-driven services that drive growth, efficiency, and digital transformation.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our IT staff augmentation services help you scale your team effortlessly with top-tier, on-bench talent ready to jump into your projects and accelerate delivery.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-[#131313] border border-orange-600 rounded-lg p-8 text-center shadow-lg">
          <div className="text-5xl mb-4">⚙️</div>
          <h3 className="text-2xl font-semibold mb-2">Custom Technology Solutions</h3>
          <p className="text-gray-400">Tailored to your specific industry needs and business goals</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#131313] border border-gray-800 rounded-lg p-6 h-full shadow hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{solution.icon}</span>
                <h4 className="text-lg font-semibold">{solution.title}</h4>
              </div>
              <p className="text-gray-400 text-sm">{solution.description}</p>
              <div className="mt-4 text-sm text-orange-500 cursor-pointer hover:underline">Learn more →</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SolutionsGrid;
