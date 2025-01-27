import React from 'react';

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: "🏠",
      title: "Real Estate Solutions",
      description: "Innovative solutions for real estate businesses, facilitating property transactions and providing comprehensive listings.",
      bgColor: "bg-pink-50",
      containerStyle: "w-[380px]"
    },
    {
      icon: "🏪",
      title: "Retail Solutions",
      description: "Comprehensive solutions for retail and ecommerce businesses, enabling seamless online transactions and customer experiences.",
      bgColor: "bg-emerald-50",
      containerStyle: "w-[380px]"
    },
    {
      icon: "🚗",
      title: "Logistic and Distribution",
      description: "Efficient solutions for logistics and distribution networks, optimizing supply chain processes and enhancing operational efficiency.",
      bgColor: "bg-blue-50",
      containerStyle: "w-[380px]"
    },
    {
      icon: "🏠+",
      title: "Social Networking",
      description: "Dynamic platforms for social networking, fostering connections and interactions through innovative features and functionalities.",
      bgColor: "bg-yellow-50",
      containerStyle: "w-[480px]"
    },
    {
      icon: "✈️",
      title: "Travel and Hospitality",
      description: "Innovative solutions for travel and hospitality businesses, enhancing customer experiences and streamlining bookings and reservations.",
      bgColor: "bg-sky-50",
      containerStyle: "w-[380px]"
    },
    {
      icon: "📚",
      title: "Education Solutions",
      description: "Innovative educational solutions that enhance learning experiences through interactive content and intuitive user interfaces.",
      bgColor: "bg-purple-50",
      containerStyle: "w-[380px]"
    },
    {
      icon: "🏥",
      title: "Health Solutions",
      description: "Revolutionary solutions for healthcare and fitness industries, promoting wellness and facilitating access to medical resources.",
      bgColor: "bg-green-50",
      containerStyle: "w-[400px]"
    },
    {
      icon: "🥤",
      title: "Food and Beverage",
      description: "Innovative solutions for food and beverage industries, enhancing customer experiences and optimizing restaurant operations.",
      bgColor: "bg-amber-50",
      containerStyle: "w-[380px]"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-6">
      {/* Row 1 */}
      
      <div className="flex justify-between">
        {solutions.slice(0, 3).map((solution, index) => (
          <div key={index} className={`${solution.containerStyle}`}>
            <div className={`rounded-xl p-6 h-[160px] shadow-sm ${solution.bgColor}`}>
              <div className="flex items-start">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="text-lg font-semibold italic text-black">{solution.title}</h3>
                </div>
              </div>
              <p className="text-sm text-black">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-6 pl-4">
        {solutions.slice(3, 5).map((solution, index) => (
          <div key={index} className={`${solution.containerStyle}`}>
            <div className={`rounded-xl p-6 h-[140px] shadow-sm ${solution.bgColor}`}>
              <div className="flex items-start">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="text-lg font-semibold italic text-black">{solution.title}</h3>
                </div>
              </div>
              <p className="text-sm text-black">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex justify-between">
        {solutions.slice(5).map((solution, index) => (
          <div key={index} className={`${solution.containerStyle}`}>
            <div className={`rounded-xl p-6 h-[160px] shadow-sm ${solution.bgColor}`}>
              <div className="flex items-start">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="text-lg font-semibold italic text-black">{solution.title}</h3>
                </div>
              </div>
              <p className="text-sm text-black">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsGrid;