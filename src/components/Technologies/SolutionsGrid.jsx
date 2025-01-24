import React from 'react';

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: "🏠",
      title: "Real Estate Solutions",
      description: "Innovative solutions for real estate businesses, facilitating property transactions and providing comprehensive listings.",
      bgColor: "bg-pink-50",
      containerStyle: "w-full lg:w-[380px]"
    },
    {
      icon: "🏪",
      title: "Retail Solutions",
      description: "Comprehensive solutions for retail and ecommerce businesses, enabling seamless online transactions and customer experiences.",
      bgColor: "bg-emerald-50",
      containerStyle: "w-full lg:w-[380px]"
    },
    {
      icon: "🚗",
      title: "Logistic and Distribution",
      description: "Efficient solutions for logistics and distribution networks, optimizing supply chain processes and enhancing operational efficiency.",
      bgColor: "bg-blue-50",
      containerStyle: "w-full lg:w-[380px]"
    },
    {
      icon: "🏠+",
      title: "Social Networking",
      description: "Dynamic platforms for social networking, fostering connections and interactions through innovative features and functionalities.",
      bgColor: "bg-yellow-50",
      containerStyle: "w-full lg:w-[480px]"
    },
    {
      icon: "✈️",
      title: "Travel and Hospitality",
      description: "Innovative solutions for travel and hospitality businesses, enhancing customer experiences and streamlining bookings and reservations.",
      bgColor: "bg-sky-50",
      containerStyle: "w-full lg:w-[380px]"
    },
    {
      icon: "📚",
      title: "Education Solutions",
      description: "Innovative educational solutions that enhance learning experiences through interactive content and intuitive user interfaces.",
      bgColor: "bg-purple-50",
      containerStyle: "w-full lg:w-[380px]"
    },
    {
      icon: "🏥",
      title: "Health Solutions",
      description: "Revolutionary solutions for healthcare and fitness industries, promoting wellness and facilitating access to medical resources.",
      bgColor: "bg-green-50",
      containerStyle: "w-full lg:w-[400px]"
    },
    {
      icon: "🥤",
      title: "Food and Beverage",
      description: "Innovative solutions for food and beverage industries, enhancing customer experiences and optimizing restaurant operations.",
      bgColor: "bg-amber-50",
      containerStyle: "w-full lg:w-[380px]"
    }
  ];

  return (
    <div className="w-full min-h-[75vh] bg-[#343333] px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Container for all items */}
        <div className="flex flex-col items-center space-y-2">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-center w-full">
            {solutions.slice(0, 3).map((solution, index) => (
              <div key={index} className={`${solution.containerStyle} min-w-0`}>
                <div className={`rounded-xl p-6 h-[160px] shadow-sm ${solution.bgColor} overflow-hidden`}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-3 w-full">
                      <span className="text-4xl flex-shrink-0 mr-2">{solution.icon}</span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold italic text-black truncate pr-2">{solution.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-black line-clamp-3 overflow-ellipsis">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:pl-14 w-full">
            {solutions.slice(3, 5).map((solution, index) => (
              <div key={index} className={`${solution.containerStyle} min-w-0`}>
                <div className={`rounded-xl p-6 h-[140px] shadow-sm ${solution.bgColor} overflow-hidden`}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-3 w-full">
                      <span className="text-4xl flex-shrink-0 mr-2">{solution.icon}</span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold italic text-black truncate pr-2">{solution.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-black line-clamp-3 overflow-ellipsis">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-center w-full">
            {solutions.slice(5).map((solution, index) => (
              <div key={index} className={`${solution.containerStyle} min-w-0`}>
                <div className={`rounded-xl p-6 h-[160px] shadow-sm ${solution.bgColor} overflow-hidden`}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-3 w-full">
                      <span className="text-4xl flex-shrink-0 mr-2">{solution.icon}</span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold italic text-black truncate pr-2">{solution.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-black line-clamp-3 overflow-ellipsis">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsGrid;