import React from 'react';

const ServiceSection = () => {
  return (
    <div className="w-full min-h-[500px] bg-gradient-to-r from-gray-900 to-teal-900 text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Content Section */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">
              <span className="text-white">Web </span>
              <span className="text-cyan-400">Design</span>
            </h1>
            <p className="text-cyan-400 text-lg">
              Create stunning, user-friendly websites that captivate and convert.
            </p>
          </div>

          <div className="space-y-4 text-gray-200">
            <p className="leading-relaxed">
              At Brandsmashers, the Best Web Development Company in Bhopal, we create scalable, 
              performance-focused websites with modular code adaptable to any device.
            </p>
            <p className="leading-relaxed">
              We specialize in Custom Web Development, Responsive Web Design, and CMS like WordPress 
              and Shopify. Our services include eCommerce Development, API Integrations, caching, 
              CDN, and database optimization.
            </p>
            <p className="leading-relaxed">
              We ensure security with SSL certificates and regular audits. Partner with us to bring 
              your digital vision to life and drive long-term business growth.
            </p>
          </div>
        </div>

        {/* Right Image Section with Overlay Box */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <img 
              src="/web-img.png"
              alt="Web Development"
              className="rounded-lg w-full h-auto shadow-xl"
            />
            
            {/* Overlay Box */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] bg-gradient-to-r from-blue-600 to-cyan-600 p-8 shadow-lg  rounded-tr-[70px] rounded-bl-[70px]">
              <p className="text-sm text-white text-center">
                Brandsmashers, the Best Web Development Company in Bhopal, creates 
                scalable, secure, and user-focused web solutions. From custom websites to 
                eCommerce platforms, we optimize performance, enhance security, and align 
                with your business goals to drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;