import React from 'react';

const WhyHireRemoteDevelopers = () => {
  // Main brand color
  const primaryColor = "#ff5010";
  
  // Features data
  const features = [
    {
      title: "Access to Top-Tier Talent",
      description: "Our developers are handpicked through a rigorous vetting process to ensure you work with only the best – experienced, innovative, and industry-ready professionals."
    },
    {
      title: "Cost-effective & Scalable Solution",
      description: "Avoid the overhead of in-house hiring. Scale your team up or down based on project demands while keeping costs under control."
    },
    {
      title: "Quick Onboarding & Integration",
      description: "We make team expansion effortless. Our developers are trained to adapt quickly to new environments, tools, and workflows – getting started in days, not weeks."
    },
    {
      title: "Diverse Skill Sets Across Technologies",
      description: "We make team expansion effortless. Our developers are trained to adapt quickly to new environments, tools, and workflows – getting started in days, not weeks."
    },
    {
      title: "Reliable Communication & Time Zone Alignment",
      description: "We ensure smooth collaboration through clear communication practices and developers who can align with your working hours, no matter where you are."
    },
    {
      title: "Ongoing Support & Quality Assurance",
      description: "Our commitment doesn’t end with hiring. We offer continuous support, performance monitoring, and quality assurance to ensure your projects stay on track and meet the highest standards."
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-black">
            Why Hire Remote Developers From
            <span className="ml-2" style={{ color: primaryColor }}>Brandsmashers Tech</span>
            {/* <div className="absolute h-1 w-24 left-1/2 -translate-x-1/2 bottom-0" style={{ backgroundColor: primaryColor }}></div> */}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            At Brandsmashers Tech, we provide highly skilled, pre-vetted remote developers who seamlessly integrate with your team. 
            Whether you're scaling fast, filling a skill gap, or looking to reduce development costs, our experts are ready to 
            deliver quality work with flexibility and speed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ borderTop: `4px solid ${primaryColor}` }}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white text-sm" 
                  style={{ backgroundColor: primaryColor }}>
                  {index + 1}
                </span>
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Visual Element */}
        <div className="mt-16 relative">
          {/* <div className="hidden md:block absolute -left-16 -top-8 w-32 h-32 rounded-full opacity-10" 
            style={{ backgroundColor: primaryColor }}></div>
          <div className="hidden md:block absolute right-4 bottom-8 w-24 h-24 rounded-full opacity-10" 
            style={{ backgroundColor: primaryColor }}></div>
          
           */}
        </div>
      </div>
    </section>
  );
};

export default WhyHireRemoteDevelopers;