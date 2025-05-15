import React, { useState, useRef, useEffect } from 'react';

const ExploreOffering = () => {
  const offeringsData = [
    {
      id: "software-consulting",
      number: "01.",
      title: "Software Consulting Services",
      description: "As one of the most sought-after custom software consulting companies, we analyze your business needs, conceptualize software structure, and help you get the best value from its development. Our dedicated team of experts leverages its technical prowess to deliver tailored software solutions that drive efficiency and productivity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "custom-software",
      number: "02.",
      title: "Custom Software Development Services",
      description: "A software development company with 35 years of business excellence, we can engineer reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: "enterprise-software",
      number: "03.",
      title: "Enterprise Software Development Services",
      description: "Our enterprise software development services focus on creating robust, scalable solutions designed for large organizations. We develop and implement complex systems that streamline operations, integrate with existing infrastructure, and support the specific needs of enterprise-level businesses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: "software-product",
      number: "04.",
      title: "Software Product Development Services",
      description: "We specialize in taking product ideas from concept to market with our comprehensive software product development services. Our approach includes market research, product strategy, design, development, testing, and launch support to ensure your software product succeeds in the marketplace.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: "mobile-app-development",
      number: "05.",
      title: "Mobile App Development",
      description: "Our mobile app development team creates high-performance, feature-rich applications for iOS and Android platforms. Using the latest technologies and following best practices in UI/UX design, we deliver mobile solutions that engage users and drive business growth across various industries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "cloud-solutions",
      number: "06.",
      title: "Cloud Solutions & Migration",
      description: "We provide comprehensive cloud solutions including architecture design, deployment, migration, and management services. Our team helps businesses leverage the power of cloud computing to improve scalability, reduce operational costs, and enhance security while ensuring smooth transitions from legacy systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: "ai-ml-solutions",
      number: "07.",
      title: "AI & Machine Learning Solutions",
      description: "Our AI and machine learning services help businesses implement intelligent automation, predictive analytics, and data-driven decision making. We develop custom AI solutions that transform raw data into actionable insights, optimize processes, and create competitive advantages in your industry.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const [activeOffering, setActiveOffering] = useState(offeringsData[0].id);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sidebarRef = useRef(null);
  const maxScroll = useRef(0);
  
  // Color theme constant
  const primaryColor = "#ff5010";
  const primaryColorHover = "#ff6a30";
  const darkBgColor = "#1a1a1a";

  useEffect(() => {
    if (sidebarRef.current) {
      maxScroll.current = sidebarRef.current.scrollHeight - sidebarRef.current.clientHeight;
    }
  }, []);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  const handleOfferingClick = (offeringId) => {
    setActiveOffering(offeringId);
    
    // Find the index of the clicked offering
    const index = offeringsData.findIndex(offering => offering.id === offeringId);
    
    // Calculate the scroll position based on item height (approximate)
    if (sidebarRef.current) {
      const itemHeight = 84; // Approximate height of each item in pixels
      const targetScroll = Math.max(0, Math.min(index * itemHeight - 100, maxScroll.current));
      sidebarRef.current.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const activeOfferingData = offeringsData.find(offering => offering.id === activeOffering);

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Our <span style={{ color: primaryColor }}>Offering</span>
        </h2>
        
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl">
          {/* Left sidebar with orange gradient */}
          <div 
            ref={sidebarRef}
            className="w-full md:w-2/5 text-white p-8 max-h-96 overflow-y-auto" 
            style={{ 
              background: `linear-gradient(135deg, ${primaryColor}, ${primaryColorHover})`,
              scrollbarWidth: 'thin',
              scrollbarColor: 'white rgba(255, 255, 255, 0.1)'
            }}
            onScroll={handleScroll}
          >
            {offeringsData.map((item) => (
              <div 
                key={item.id}
                className={`py-4 cursor-pointer transition-all duration-300 border-b border-opacity-30 ${
                  activeOffering === item.id
                    ? "opacity-100 font-semibold" 
                    : "opacity-75 hover:opacity-95"
                }`}
                style={{ borderBottomColor: "rgba(255, 255, 255, 0.3)" }}
                onClick={() => handleOfferingClick(item.id)}
              >
                <div className="flex items-start">
                  <div className="w-16 font-bold text-xl">{item.number}</div>
                  <div className="flex-1">{item.title}</div>
                </div>
              </div>
            ))}
            <div className="py-2 text-sm text-white opacity-60 mt-2 text-center">
              {scrollPosition < maxScroll.current ? "Scroll for more" : ""}
            </div>
          </div>
          
          {/* Right content area */}
          <div className="w-full md:w-3/5 bg-gray-900 text-white p-8">
            <div className="flex mb-8">
              <div className="rounded-lg p-4 mr-6" style={{ backgroundColor: primaryColor }}>
                {activeOfferingData.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-2">
                {activeOfferingData.title}
              </h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {activeOfferingData.description}
            </p>
            
            <button 
              className="px-6 py-2 rounded-lg font-medium transition-all duration-300 mt-2"
              style={{ 
                backgroundColor: primaryColor, 
                boxShadow: '0 4px 12px rgba(255, 80, 16, 0.3)' 
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = primaryColorHover}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryColor}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOffering;