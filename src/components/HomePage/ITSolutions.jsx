import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';

const ITSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const solutions = [
    {
      id: 1,
      src: "/digital.png",
      alt: "Mobile App Development",
      title: "Mobile App Development",
      description: "Scalable software systems for complex enterprise needs",
      icon: "💼",
      link: "/services/mobileAppDevelopment"
    },
    {
      id: 2,
      src: "/development.png",
      alt: "Web Development",
      title: "Web Development",
      description: "Native and cross-platform app solutions",
      icon: "📱",
      link: "/services/webdevelopment"
    },
    {
      id: 3,
      src: "/desktop.png", 
      alt: "Product Development",
      title: "Product Development",
      description: "Seamless cloud migration and management",
      icon: "☁️",
      link: "/services/productDevelopment"
    },
    {
      id: 4,
      src: "/mobileapp-img.png",
      alt: "Custom Software Development",
      title: "Custom Software Development",
      description: "Insightful data processing and visualization",
      icon: "📊",
      link: "/services/customService"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-900 text-white relative overflow-hidden py-16 md:py-24">
      {/* Geometric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#111827" />
            <path d="M0,0 L100,0 L50,100 L0,100 Z" fill="#ff5010" opacity="0.05" />
            <path d="M50,0 L100,0 L100,100 L0,100 Z" fill="#ff5010" opacity="0.03" />
          </svg>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-bl from-[#ff5010]/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ff5010]/15 to-transparent blur-3xl"></div>
      </div>
      
      {/* Animated Accent Lines */}
      {/* <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/30 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/20 to-transparent"></div>
      <div className="absolute top-0 right-2/3 w-px h-1/2 bg-gradient-to-b from-transparent via-[#ff5010]/10 to-transparent"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[#ff5010]/10 text-[#ff5010] font-medium rounded-full text-sm mb-4">
            INNOVATIVE SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Software Development & Engineering 
 <span className="text-[#ff5010]">Services</span>
          </h2>
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#ff5010]"></div>
            <div className="w-12 h-2 rounded-full bg-[#ff5010]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ff5010]"></div>
          </div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg ">
          Build innovative, scalable, and user-centric digital solutions with our end-to-end Software Development & Engineering Services. From custom software and mobile apps to AI/ML, UI/UX, and digital marketing—we turn your ideas into powerful products.

          </p>
        </div>
        
        {/* Solution Cards - Desktop Grid */}
        <div className={`hidden lg:grid grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {solutions.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative rounded-xl overflow-hidden transition-all duration-500 delay-${200 + index * 100} transform hover:-translate-y-2`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <div className="absolute inset-0 bg-[#ff5010]/0 group-hover:bg-[#ff5010]/20 transition-all duration-300 z-20"></div>
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-80 object-cover object-center transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 z-30">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#ff5010] text-white text-2xl">
                  {item.icon}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#ff5010] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <div className="flex items-center space-x-2 text-[#ff5010] cursor-pointer">
                    <span className="font-medium text-sm">Explore</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Solution Cards - Mobile */}
        <div className="lg:hidden space-y-6 mb-16">
          {solutions.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative rounded-xl overflow-hidden transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden">
                <div className="md:w-1/3 relative">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ff5010] text-white text-xl">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <Link href={item.link}>
                    <div className="flex items-center space-x-2 text-[#ff5010]">
                      <span className="font-medium text-sm">Learn more</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Content Block */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="max-w-xl mx-auto lg:mx-0">
              <span className="inline-block px-3 py-1 bg-[#ff5010]/10 text-[#ff5010] rounded-md text-sm font-medium mb-4">WHY CHOOSE US</span>
              
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Cut Through the Noise 

                <span className="text-[#ff5010] block mt-1">Connect Only with the Top 1% of Qualified Candidates</span>
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                Stop wasting time on endless interviews and underqualified profiles. With our expert IT Staff Augmentation services, we match you with pre-vetted, highly skilled professionals who are ready to make an impact from day one. Whether you're looking to hire remote developers from India or expand your in-house team with niche tech talent, we ensure you engage with only the best — faster, smarter, and without the hiring headaches.



                </p>
                
                {/* <p className="text-gray-300 leading-relaxed">
                  From concept to deployment, we embrace a collaborative approach that ensures your vision is realized with precision and purpose, creating software that not only meets your current needs but scales with your future ambitions.
                </p> */}
                
                {/* Feature Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  {[
                    " Share Your Talent Requirements", 
                    "Receive Handpicked CVs", 
                    "Interview the Best-Fit Engineers", 
                    "Smooth Documentation & Compliance",
                    "Onboard & Get Started"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#ff5010]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#ff5010]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-100 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              {/* <div className="mt-8 flex flex-wrap gap-4">
                <button className="group relative overflow-hidden px-6 py-3 bg-[#ff5010] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="relative z-10">Start Your Project</span>
                  <span className="absolute inset-0 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
                
                <button className="group px-6 py-3 border-2 border-gray-600 hover:border-[#ff5010] text-gray-300 hover:text-[#ff5010] font-semibold rounded-lg transition-all duration-300">
                  <span>Our Process</span>
                </button>
              </div> */}
            </div>
          </div>
          
          {/* Featured Image Block */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#ff5010]/30 rounded-xl -rotate-6"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#ff5010]/20 rounded-xl rotate-12"></div>
              
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5010]/20 to-transparent opacity-60 mix-blend-overlay"></div>
                
                <img 
                  src="/digital.png" 
                  alt="Digital transformation services"
                  className="w-full h-full object-cover"
                />
                
                {/* Stats Overlay */}
                {/* <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <h4 className="text-[#ff5010] text-3xl font-bold">98%</h4>
                      <p className="text-gray-300 text-xs">Client Retention</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-[#ff5010] text-3xl font-bold">350+</h4>
                      <p className="text-gray-300 text-xs">Projects</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Clients" },
              { value: "250+", label: "Projects Completed" },
              { value: "7+", label: "Years of Excellence" },
              { value: "50+", label: "Tech Specialists" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#ff5010]/50 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5010]/0 via-[#ff5010] to-[#ff5010]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h4 className="text-[#ff5010] text-3xl md:tex-t-4xl font-bold mb-2">{stat.value}</h4>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutions;