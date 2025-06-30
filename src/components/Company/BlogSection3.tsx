import React from 'react';

export default function ModernDigitalMarketingBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 sm:mb-6">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Marketing Insights
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              Scoop of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Digital Marketing
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              In a world overflowing with products and ideas, the clearest voice wins. 
              Marketing bridges the gap between what you offer and what your audience truly needs.
            </p>
          </div>
        </div>
        
        {/* Decorative elements - Hidden on very small screens */}
        <div className="hidden sm:block absolute top-10 sm:top-20 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Introduction */}
        <div className="mb-12 sm:mb-16">
          <div className="prose prose-sm sm:prose-lg max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 first-letter:text-4xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1">
              Marketing is not a nice-to-have option; it&apos;s a necessity. No matter how great your service, product, or team is, if people don&apos;t know about it, they are irrelevant in the market. Marketing is about communicating value, building trust, and guiding growth.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Whether you&apos;re a startup founder, part of a tech team, or running a global enterprise, marketing bridges the gap between what you offer and what your audience truly needs. Today marketing is digital, data-driven, and interactive—it&apos;s more than marketing, it&apos;s Digital Marketing.
            </p>
          </div>
        </div>

        {/* Key Channels Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-orange-500 to-red-500 mr-3 sm:mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Key Digital Marketing Channels</h2>
          </div>
          
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Digital marketing encompasses multiple channels and strategies, each serving unique purposes in your overall marketing ecosystem. The key is understanding which channels align best with your audience and business objectives.
            </p>
          </div>

          {/* Marketing Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">S</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">SEO</h3>
              <p className="text-gray-300 text-sm">Helps your website rank higher on Google and drive organic traffic</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">@</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Social Media Marketing</h3>
              <p className="text-gray-300 text-sm">Engages audiences on platforms where they spend their time</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">✉</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Email Marketing</h3>
              <p className="text-gray-300 text-sm">Personalized outreach campaigns for direct customer communication</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">C</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Content Marketing</h3>
              <p className="text-gray-300 text-sm">Blogs, videos, and guides that provide value to your audience</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">$</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Paid Advertising</h3>
              <p className="text-gray-300 text-sm">Targeted ads on platforms for immediate visibility and results</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">★</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Influencer Marketing</h3>
              <p className="text-gray-300 text-sm">Leveraging partnerships to expand reach and credibility</p>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 px-4">Digital Marketing Focus Areas</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Target Audience */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">1. Precise Target Audience</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Location-Based</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Geographic targeting for local and global audiences</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Behavioral Targeting</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Based on user actions, preferences, and online behavior</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Interest-Based</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Targeting users based on their interests and affinities</p>
                </div>
              </div>
            </div>

            {/* Measurable Results */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">2. Measurable Results & Analytics</h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Real-time performance monitoring and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Detailed insights into traffic, leads, and conversion rates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">ROI tracking and campaign optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional focus areas */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">3. Cost Efficiency & Scalability</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-2 bg-black text-white rounded-full text-xs sm:text-sm">Higher ROI</span>
                <span className="px-3 sm:px-4 py-2 bg-black text-white rounded-full text-xs sm:text-sm">Flexible Budget</span>
                <span className="px-3 sm:px-4 py-2 bg-black text-white rounded-full text-xs sm:text-sm">24/7 Visibility</span>
                <span className="px-3 sm:px-4 py-2 bg-black text-white rounded-full text-xs sm:text-sm">Customer Engagement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Brandsmashers Approach Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-orange-500 to-red-500 mr-3 sm:mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">How Brandsmashers Tech Approaches It</h2>
          </div>
          
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              At Brandsmashers Tech, we discovered the power of resilience and adaptability during challenging times. We forged our brand amid a global crisis, thriving by embracing our humanity, agility, and boldness.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Our offerings range from expert staff augmentation to innovative tech solutions, each designed to meet the unique needs of the market. Our message is simple: <strong>we evolve with you</strong>.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-orange-500">
              Our branding reflects our energy. Our marketing connects that energy to the people who need it most.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto bg-black text-white rounded-xl sm:rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Either Go with the Flow or 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mt-2">
                Be Outdated
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                In today&apos;s fast-moving digital landscape, marketing is no longer a supporting role — it&apos;s a strategic pillar. From building brand awareness to driving measurable growth, smart marketing is how businesses rise above the noise.
              </p>
              <p>
                At Brandsmashers Tech, we don&apos;t just create marketing strategies — we embody them. We&apos;ve built our own brand from the ground up, utilizing the same tools and techniques that we offer to our clients.
              </p>
              <p className="text-orange-400 font-semibold text-lg sm:text-xl">
                Because we believe if you can market your own brand with clarity and confidence, you can do it for anyone.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white">
                And at Brandsmashers — that&apos;s exactly what we do.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}