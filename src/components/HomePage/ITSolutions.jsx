import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image'; // Ensure you import Next.js Image

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

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
      {/* Background elements */}
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

      {/* Desktop Grid View */}
      <div className={`hidden lg:grid grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {solutions.map((item, index) => (
          <div
            key={item.id}
            className={`group relative rounded-xl overflow-hidden transition-all duration-500 delay-${200 + index * 100} transform hover:-translate-y-2`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
            <div className="absolute inset-0 bg-[#ff5010]/0 group-hover:bg-[#ff5010]/20 transition-all duration-300 z-20"></div>
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={320}
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
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stack View */}
      <div className="lg:hidden space-y-6 mb-16">
        {solutions.map((item, index) => (
          <div
            key={item.id}
            className={`group relative rounded-xl overflow-hidden transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden">
              <div className="md:w-1/3 relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={192}
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
    </div>
  );
};

export default ITSolutions;
