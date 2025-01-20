import React from 'react';

const WhyChooseUs = () => {
  const features = {
    left: [
      {
        title: "Expertise Across Domains",
        description: "With experience across 20+ fields, we integrate industry-specific knowledge into every project.",
        className: "md:h-44 md:pt-9"
      },
      {
        title: "Customized Solutions",
        description: "Tailored to your business needs for optimal results.",
        className: "md:h-32"
      },
      {
        title: "On-Demand Flexibility",
        description: "They are sufficient and flexible to one's requirements of the project.",
        className: " md:h-32"
      }
    ],
    right: [
      {
        title: "Client-First Approach",
        description: "We collaborate at every stage to ensure the best outcomes.",
        className: "md:h-32"
      },
      {
        title: "Global Reach",
        description: "We offer effective solutions for businesses of all sizes worldwide.",
        className: "md:h-32"
      },
      {
        title: "Eliminate Risk",
        description: "With our well-developed approaches and professional staff, we guarantee our projects' success with a low probability of failure.",
        className: "md:h-44 md:pt-10 h-48"
      }
    ]
  };

  return (
    <section className="w-full py-8 md:py-16 px-4 md:bg-transparent">
      <div className="max-w-md mx-auto sm:max-w-2xl md:max-w-6xl">
        {/* Header Section */}
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h2 className="text-xl text-left md:text-4xl font-medium text-white italic mb-6">
            Why Choose <span className="text-cyan-400">Brandsmashers</span> for 
            IT Services and Solutions?
          </h2>
          <p className="hidden md:block font-medium text-xl text-white">
            Brandsmashers is one of the leading software development companies in India which provides a spectrum of
            services and products to help in your organization's digitalization. Here, you will find everything from unique custom
            software, mobile application development, SEO/SEM, and other comprehensive advertising services. Successful
            V2MOM-approached global projects allow providing low-risk as well as flexibly scalable solutions for companies of
            all sizes. Select Brandsmashers for IT services solutions that adapt to your business needs and aren't stagnant.
          </p>
        </div>

        {/* Mobile/Tablet Layout (up to lg breakpoint) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
          {/* Left Column */}
          <div className="flex flex-col gap-3 sm:gap-4 ">
            {features.left.map((item, index) => (
              <div
                key={index}
                className="bg-[#2CC5D9B8] rounded-lg p-4 sm:p-6"
              >
                <h3 className="text-sm sm:text-lg font-medium text-[#2E2E2E] mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white text-center text-[#FFFFFF]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {features.right.map((item, index) => (
              <div
                key={index}
                className="bg-[#2CC5D9B8] rounded-lg p-4 sm:p-6"
              >
                <h3 className="text-sm sm:text-lg font-medium text-[#2E2E2E] mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white text-center text-[#FFFFFF]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {features.left.map((item, index) => (
              <div
                key={index}
                className={`${item.className} bg-[#2CC5D9B8] rounded-lg p-8 transition-all duration-300 flex flex-row items-start gap-6`}
              > 
             
                <h3 className="font-medium mb-6 text-xl text-[#2E2E2E] text-center pt-2">
                  {item.title}
                </h3>
                <p className="font-medium text-base text-white text-center pl-20 text-[#FFFFFF]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {features.right.map((item, index) => (
              <div
                key={index}
                className={`${item.className} bg-[#2CC5D9B8] rounded-lg p-8 transition-all duration-300 flex flex-row items-start gap-6`}
              >
                <h3 className="font-medium mb-6 text-xl text-[#2E2E2E] text-center pt-2">
                  {item.title}
                </h3>
                <p className="font-medium text-base text-white text-center pl-20 text-[#FFFFFF]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;