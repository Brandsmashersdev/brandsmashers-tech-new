import React, { useState, useRef, useEffect } from 'react';

const ExploreOffering = () => {
  const offeringsData = [
    {
      id: "Mobile App Development",
      number: "01.",
      title: "Mobile App Development",
      description: "We design and develop high-performance mobile applications for iOS and Android platforms. Our team focuses on intuitive user interfaces, smooth performance, and scalable architecture, ensuring your app meets business goals and user expectations effectively across various industries.",
      link: "/services/mobileAppDevelopment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "Web development",
      number: "02.",
      title: "Web Development",
      description: "We create dynamic, responsive, and secure websites tailored to your brand’s needs. Our expert developers use modern frameworks and best practices to deliver high-quality web experiences that perform seamlessly across devices while aligning with your business objectives and target audience.",
      link: "/services/webdevelopement",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: "Custom Software development",
      number: "03.",
      title: "Custom Software development",
      description: "We build bespoke software solutions designed to meet your specific business needs. Whether you need internal tools or customer-facing platforms, our team ensures functionality, scalability, and seamless integration with existing systems to enhance productivity and drive digital transformation.",
      link: "/services/CustomService",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: "Digital Marketing Services",
      number: "04.",
      title: "Digital Marketing Services",
      description: "Our digital marketing services help businesses grow online through targeted SEO, social media strategies, content marketing, and paid advertising. We focus on enhancing visibility, engagement, and conversions to build brand authority and deliver measurable ROI across digital channels.",
      link: "/services/digitalMarketingServices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: "AIML services",
      number: "05.",
      title: "AIML Development",
      description: "We develop customized AI and machine learning solutions that unlock insights from your data, automate complex tasks, and enhance decision-making. From predictive analytics to natural language processing, our AIML services help businesses gain a competitive edge through intelligent automation.",
      link: "/services/aimlservice",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "Product Development",
      number: "06.",
      title: "Product Development",
      description: "Our product development team transforms ideas into market-ready solutions. We guide you through product strategy, design, development, and launch—ensuring innovation, usability, and performance at every stage to meet user demands and business objectives effectively.",
      link: "/services/productDevelopment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: "UI/UX Development",
      number: "07.",
      title: "UI/UX Development",
      description: "We design engaging and user-centric digital experiences that combine aesthetics with usability. Our UI/UX development focuses on intuitive navigation, consistent branding, and responsive layouts, ensuring a seamless and delightful experience across all platforms and screen sizes.",
      link: "#",
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
            
            <a 
              href={activeOfferingData.link}
              className="inline-block px-6 py-2 rounded-lg font-medium transition-all duration-300 mt-2"
              style={{ 
                backgroundColor: primaryColor, 
                boxShadow: '0 4px 12px rgba(255, 80, 16, 0.3)',
                textDecoration: 'none',
                color: 'white'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = primaryColorHover}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryColor}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOffering;