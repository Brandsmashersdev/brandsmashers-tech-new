import React from 'react';

export default function ModernTechBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 sm:mb-6">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Innovation & Sustainability
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              Scalable Tech &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Green IT
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Building sustainable software solutions for a better tomorrow. 
              Where cutting-edge technology meets environmental responsibility.
            </p>
          </div>
        </div>
        
        {/* Decorative elements - hidden on small screens */}
        <div className="hidden sm:block absolute top-20 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Introduction */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 first-letter:text-4xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1">
              As we move through the Industrial Revolution and the Information Revolution, we are now experiencing a Social Revolution where the quality of life matters more than merely meeting standard living conditions. The conversation around sustainability has never been more urgent, and rapid technological advancement is also raising concern for the environment.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We at Brandsmashers believe in advancement with Sustainable Tech and Green IT. Growth without harming the environment is the ideal world for all. These concepts aim to reduce the environmental footprint of technology while enhancing its efficiency and lifespan.
            </p>
          </div>
        </div>

        {/* What is Sustainable Tech Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-orange-500 to-red-500 mr-3 sm:mr-4"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight">What is Sustainable Tech & Green IT</h2>
          </div>
          
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Sustainable Technology refers to innovations and advancements that minimize negative environmental impact and promote environment-friendly practices. This includes development and deployment of technologies that prioritize environmental responsibility throughout their lifecycle.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Green IT, a key part of this, focuses specifically on making information technology—hardware, software, systems, and processes—more environmentally friendly.
            </p>
          </div>

          {/* Key Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Software Infrastructure Impact</h3>
              <p className="text-gray-300 text-sm">Understanding how software choices affect underlying infrastructure and energy consumption.</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Energy-Intensive Cloud Solutions</h3>
              <p className="text-gray-300 text-sm">Optimizing SaaS and cloud deployments for maximum efficiency and minimal waste.</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Customer & Investor Expectations</h3>
              <p className="text-gray-300 text-sm">Meeting growing demands for ESG compliance and sustainability commitments.</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">4</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Developer Responsibility</h3>
              <p className="text-gray-300 text-sm">Empowering developers to make environmentally conscious technical decisions.</p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 px-2">Our Approach to Sustainable Tech</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Energy-Efficient Software Design */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">1. Energy-Efficient Software Design</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Lean Coding</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Resource-efficient and modular code development</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Optimized Algorithms</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Refined algorithms to reduce CPU and memory usage</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Load Management</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Dynamic scaling to minimize idle compute time</p>
                </div>
              </div>
            </div>

            {/* Green Hosting & Infrastructure */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">2. Green Hosting & Infrastructure</h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Partnership with renewable energy cloud providers (AWS, Google Cloud, Azure)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Serverless architecture to reduce always-on server load</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Strategic hosting in clean energy regions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sustainable Software Deployment */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">3. Sustainable Software Deployment</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Batch Updates</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Containerization</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Docker & Kubernetes</span>
              </div>
            </div>

            {/* Carbon-Aware Development Tools */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">4. Carbon-Aware Development Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Green Software Tools</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Track emissions per function</p>
                </div>
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Energy Profiling</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Assess energy use during testing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Building a Better Future</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Sustainable technology and Green IT have become strategic imperatives for every forward-thinking 
              software company. From writing cleaner code to selecting greener infrastructure, every technical 
              decision can help shape a more sustainable future.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}