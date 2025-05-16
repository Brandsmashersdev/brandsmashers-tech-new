import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const HeroSection = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  highlightedText, 
  titlee, 
  description, 
  features 
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content - Text and features */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title}
                <span className="text-[#ff5010]">{highlightedText}</span>
                <span className="block mt-1">{titlee}</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl">
                {description}
              </p>
            </div>
            
            <div className="mt-8">
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-[#ff5010] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6">
              <button className="px-8 py-4 bg-[#ff5010] text-white font-medium rounded-lg shadow-lg hover:bg-[#e04509] transition-all duration-300 flex items-center space-x-2">
                <span>Get Started</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-orange-100 rounded-full blur-xl opacity-70 z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#ff5010] rounded-full blur-xl opacity-20 z-0"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="aspect-w-16 aspect-h-12 relative">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-16 h-16 bg-[#ff5010] rounded-full opacity-10 z-0"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-24 h-24 bg-orange-100 rounded-full opacity-80 z-0"></div>
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-white p-4 rounded-lg shadow-xl z-20 hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-50 rounded-full">
                  <svg className="w-6 h-6 text-[#ff5010]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Customer Satisfaction</p>
                  <p className="text-xl font-bold text-gray-900">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AndroidPageHero = () => {
  return (
    <HeroSection 
      imageSrc="/Development.png"
      imageAlt="Development Setup"
      title="Why Hire "
      highlightedText="Android Developer"
      titlee="from Brandsmashers Tech?"
      description="Elevate your business by engaging your audience with a stunning, feature-packed mobile app designed for maximum impact."
      features={[
        "Dedicated Experts, No Extra Charges",
        "Fully-Vetted In-House Developers",
        "100% Resource Replacement Guarantee",
        "Agile Development Process",
        "Upfront & Transparent Pricing",
        "24/7 Customer Support"
      ]}
    />
  );
};

export default AndroidPageHero;