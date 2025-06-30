import React from "react";

const TechnologiesSection = () => {
  const cards = [
    {
      title: "Backend",
      description:
        "Building robust, scalable backend systems that handle the business logic, manage databases, and integrate APIs for smooth application performance.",
    },
    {
      title: "FrontEnd",
      description:
        "Creating engaging and intuitive user interfaces with modern web technologies like React.js, Angular, and Vue.js, ensuring a seamless user experience.",
    },
    {
      title: "Mobile",
      description:
        "Developing high-performance mobile applications for iOS and Android, delivering seamless user experiences with cross-platform compatibility.",
    },
    {
      title: "Database",
      description:
        "Managing and optimizing data storage solutions, from SQL to NoSQL databases, ensuring secure, efficient, and scalable data handling.",
    },
    {
      title: "Testing",
      description:
        "Ensuring software reliability and performance through automated and manual testing strategies, detecting bugs early to improve quality and user experience.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Leveraging cloud computing to provide scalable solutions and integrating DevOps for faster development cycles, continuous integration, and seamless deployments.",
    },
    {
      title: "Others",
      description:
        "Utilizing a wide range of technologies including AI, machine learning, blockchain, IoT, and more to deliver innovative, future-proof solutions tailored to client needs.",
    },
  ];

  return (
    <div className="w-full min-h-[100vh] bg-black px-6 py-14 text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Heading Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Our <span className="text-orange-500">Technologies</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At Brandsmashers, we leverage cutting-edge technologies to deliver innovative, scalable, and secure solutions. Our expertise spans a wide array of tools, platforms, and languages, ensuring we can handle projects of any complexity or scope.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Below is a list of technologies that power our custom software, mobile apps, digital marketing, and more.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#131313] border border-gray-800 rounded-lg p-6 h-full shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-3">{card.title}</h4>
              <p className="text-gray-400 text-sm">{card.description}</p>
              <div className="mt-4 text-sm text-orange-500 cursor-pointer hover:underline">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
