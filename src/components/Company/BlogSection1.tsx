import React from 'react';

export default function ModernDocumentationBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 sm:mb-6">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Featured Article
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              Healthy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Documentation
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              The foundation of every scalable team. Building knowledge systems that transform how teams collaborate and grow.
            </p>
            <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-xs sm:text-sm text-gray-400">
              <span>5 min read</span>
              <div className="w-px h-3 sm:h-4 bg-gray-600"></div>
              <span>Essential reading</span>
            </div>
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
              Good documentation isn&apos;t glamorous. It does&apos;t cost much. But it&apos;s the hidden tool that separates scalable teams from struggling ones. Consider the silent cost of poor documentation — the invisible drain on productivity, trust, and organizational efficiency.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              What preserves vital knowledge over time? How do you capture insights, processes, and outcomes in a way that scales with your team? The answer lies in building robust documentation systems that grow with your organization.
            </p>
          </div>
        </div>

        {/* Why It Matters Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-orange-500 to-red-500 mr-3 sm:mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Why Documentation Matters</h2>
          </div>
          
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Documentation becomes the central nervous system of successful teams. It&apos;s not just about recording information—it&apos;s about creating a knowledge ecosystem that enables faster decision-making, smoother onboarding, and sustained growth.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              When done right, documentation eliminates bottlenecks, reduces meetings, and empowers every team member to work independently while staying aligned with collective goals.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">→</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Speed & Efficiency</h3>
              <p className="text-gray-300 text-sm">Teams move faster when answers are documented and easily accessible.</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">↗</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Scalable Knowledge</h3>
              <p className="text-gray-300 text-sm">Information becomes accessible to everyone, reducing dependency on key individuals.</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">○</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Seamless Onboarding</h3>
              <p className="text-gray-300 text-sm">New hires gain confidence and contribute faster with comprehensive guides.</p>
            </div>

            <div className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold">✓</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-300 text-sm">Documented processes reduce errors and maintain consistency across projects.</p>
            </div>
          </div>
        </section>

        {/* Brandsmashers Approach Section */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 px-2">Our Documentation Philosophy</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Documentation Types */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">1. Comprehensive Coverage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Technical Documentation</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">APIs, architecture, code structure, and development guides</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Project Management</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Timelines, goals, decisions, and milestone tracking</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Process Documentation</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">DevOps workflows, testing procedures, and CI/CD pipelines</p>
                </div>
              </div>
            </div>

            {/* Tools & Technology */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">2. Powerful Documentation Tools</h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { name: 'Notion', desc: 'All-in-one workspace for teams' },
                    { name: 'Confluence', desc: 'Enterprise knowledge management' },
                    { name: 'GitHub Wiki', desc: 'Developer-focused documentation' },
                    { name: 'Google Docs', desc: 'Real-time collaborative editing' },
                    { name: 'Scribe', desc: 'Automated process documentation' },
                    { name: 'Read the Docs', desc: 'Beautiful documentation hosting' },
                  ].map((tool, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">{tool.name}</span>
                        <p className="text-gray-600 text-xs sm:text-sm">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">3. Documentation Best Practices</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Living Documents</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Version Control</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Search Optimization</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Regular Updates</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm">Team Ownership</span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">4. Custom Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Tailored Workflows</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">No generic solutions — everything customized for your team</p>
                </div>
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Integration Focus</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Seamless connection with your existing tools and processes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}