import React from 'react';

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: "🏠",
      title: "Real Estate Solutions",
      description: "Innovative solutions for real estate businesses, facilitating property transactions and providing comprehensive listings.",
    },
    {
      icon: "🏪",
      title: "Retail Solutions",
      description: "Comprehensive solutions for retail and ecommerce businesses, enabling seamless online transactions and customer experiences.",
    },
    {
      icon: "🚗",
      title: "Logistic and Distribution",
      description: "Efficient solutions for logistics and distribution networks, optimizing supply chain processes and enhancing operational efficiency.",
    },
    {
      icon: "👥",
      title: "Social Networking",
      description: "Dynamic platforms for social networking, fostering connections and interactions through innovative features and functionalities.",
    },
    {
      icon: "✈️",
      title: "Travel and Hospitality",
      description: "Innovative solutions for travel and hospitality businesses, enhancing customer experiences and streamlining bookings and reservations.",
    },
    {
      icon: "📚",
      title: "Education Solutions",
      description: "Innovative educational solutions that enhance learning experiences through interactive content and intuitive user interfaces.",
    },
    {
      icon: "🏥",
      title: "Health Solutions",
      description: "Revolutionary solutions for healthcare and fitness industries, promoting wellness and facilitating access to medical resources.",
    },
    {
      icon: "🥤",
      title: "Food and Beverage",
      description: "Innovative solutions for food and beverage industries, enhancing customer experiences and optimizing restaurant operations.",
    }
  ];

  return (
    <div className="w-full bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            Industries <span className="text-orange-500">We Serve</span>
          </h2>
          <p className="text-gray-400 max-w-3xl text-base">
            We provide tailored solutions across diverse industries, helping businesses innovate and scale efficiently.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#1c2431] border-t-4 border-orange-500 rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{solution.icon}</span>
                <h4 className="text-xl font-semibold text-white">{solution.title}</h4>
              </div>
              <p className="text-gray-300 text-sm">{solution.description}</p>
              <a href="#" className="text-sm text-orange-500 hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsGrid;
