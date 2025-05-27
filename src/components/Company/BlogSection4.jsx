import React from 'react';

export default function ModernBrandsmashersBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 sm:mb-6">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Company Story
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              From Branding to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Brandsmashers
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              In the midst of every crisis, lies great opportunity. This is the story of how 
              Brandsmashers Tech emerged from uncertainty to become a thriving tech company.
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
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 first-letter:text-4xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1">
              "In the midst of every crisis, lies great opportunity." This quote well explains the establishment of Brandsmashers Tech. During the uncertainty of the COVID-19 pandemic, as the world came to a halt, a bold vision was born. While businesses closed and routines shifted overnight, the founders saw not just disruption but opportunity.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Bhopal, a city of lakes, holds great potential for growth. While it boasts several engineering colleges, the job market hasn't kept up with the talent being developed. Brandsmashers Tech aimed to bridge this gap by creating employment opportunities locally, reducing the need for migration.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Why were we named Brandsmashers? It started as a marketing and branding initiative, not staff augmentation. Our evolution into a leading software development company reflects our adaptability and grit. From a handful of employees to a thriving team, the journey involved late nights, tight deadlines, and minimal resources—but also deep partnerships and trust.
            </p>
          </div>
        </div>

        {/* Key Collaborations Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-orange-500 to-red-500 mr-3 sm:mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Key Collaborations</h2>
          </div>
          
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              These partnerships taught us something new with each project. What began with a few people is now a team of 70+. It hasn't been easy—we've invested time, energy, and personal funds—but our perseverance fueled each new chapter.
            </p>
          </div>

          {/* Collaborations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">D</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Dell</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Information Technology / Hardware & Software</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">S</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Sagas AI</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Artificial Intelligence / Web3 / Storytelling</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">C</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Centric</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Financial Technology / Blockchain</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">T</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Turing</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Staff Augmentation / Remote Tech Hiring</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">A</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Accion Labs</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Web3 / Blockchain Development</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">E</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Eventbrite</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Event Management / SaaS</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">G</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Go Easy</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Financial Services / Consumer Lending</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">T</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Tear It Up</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Lifestyle / Fashion / Media</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">K</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Krispy Kreme</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Food & Beverage / QSR</p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 px-4">Our Technology Evolution</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Starting Tools */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Tools We Started With</h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  "When speed, scalability, and a JavaScript-centric approach are paramount, MERN stands out." We began our journey with the MERN stack, React Native, and WordPress—empowering us to deliver versatile digital solutions.
                </p>
              </div>
            </div>

            {/* Current Expertise */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Today, Our Expertise Spans Across</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Front-End Development</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">React.js, Angular, Vue.js, Next.js – For responsive UIs</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Back-End Development</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Node.js, Python, Laravel, Java – For scalable server-side systems</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Mobile Development</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Flutter, React Native, Swift, Kotlin – For cross-platform and native apps</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Full-Stack Development</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Seamless handling of both frontend and backend</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">AI/ML and Data Science</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Using data-driven insights for intelligent solutions</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">DevOps & Cloud Engineering</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Still expanding our capabilities in this area</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-orange-500 to-red-500 mr-3 sm:mr-4"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Sky's the Limit — This is Just the Beginning</h2>
          </div>
          
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Our ambition is to become a trusted engineering partner for global enterprises, solving complex problems through innovation and collaboration. We aim to drive digital transformation with scalable, intelligent solutions.
            </p>
          </div>

          {/* Founder Philosophies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-black text-white rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-orange-400">"Evolution with Struggle"</h3>
              <p className="text-gray-300 text-sm sm:text-base">The mantra of our founder Aayush Jain. Our journey reflects resilience, learning, and relentless pursuit of growth.</p>
            </div>
            <div className="bg-black text-white rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-orange-400">"Youth and Energy"</h3>
              <p className="text-gray-300 text-sm sm:text-base">The philosophy of co-founder Muskan Chhatrasal. She believes in the power of young changemakers with bold ideas and a hunger for innovation.</p>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto bg-black text-white rounded-xl sm:rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              In Times of Uncertainty,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mt-2">
                We Bring Certainty Through Skill
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                Our journey from a small branding initiative to a thriving tech company of 70+ professionals showcases the power of vision, perseverance, and adaptability.
              </p>
              <p>
                Through strategic partnerships with industry leaders and continuous evolution of our technical capabilities, we've proven that great opportunities emerge from the greatest challenges.
              </p>
              <p className="text-orange-400 font-semibold text-lg sm:text-xl">
                This is just the beginning of our story.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white">
                The sky's the limit for Brandsmashers Tech.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}