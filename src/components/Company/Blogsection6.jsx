import React from 'react';

export default function Gitex2025DubaiBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
            <span className="text-white font-semibold text-xs tracking-wide uppercase">
              GITEX 2025 Dubai Recap
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight px-2">
            GITEX 2025 Dubai:{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              The Future of Technology and Humanity
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A 5-Day Journey with Brandsmashers Tech exploring AI, Quantum, Sovereign Clouds, and Human-Centric Innovation shaping the new world.
          </p>
        </div>

        <div className="hidden sm:block absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Main Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-3">
            When the Brandsmashers Tech team arrived at GITEX 2025 Dubai, we weren’t just attending another tech conference — we were stepping into a living, breathing ecosystem of ideas shaping the future of humanity.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            This year’s theme wasn’t about what’s next; it was about what’s now. From AI innovation and quantum computing to sovereign clouds and physical AI, every corner of GITEX echoed one message: the future of technology is no longer abstract — it’s alive.
          </p>
        </section>

        {/* Day Sections (Only 3 images, GITEX.jpeg removed) */}
        {[
          {
            title: "Day 1 – The Future Isn’t Coming, It’s Already Here",
            text: `The first day was electrifying. The exhibition floor became a living display of AI, Robotics, and Quantum breakthroughs — from HurayPositive’s AI-driven precision medicine to Tensor’s personal robocar and K2’s humanoid robots. Each innovation revealed that true progress isn’t novelty — it’s utility. We left Day 1 reminded that innovation builds excitement, but responsibility builds trust.`,
            img: "showcase-pic4.png",
          },
          {
            title: "Day 3 – The Human-Centric Intelligence Pivot",
            text: `Day 3 turned deeply human. From Paradromics’ brain-computer implants restoring speech to CRISPR-powered genetic breakthroughs, technology met empathy. Topics like Sovereign AI, sustainability, and Agentic AI surfaced. The message was clear: the future of AI isn’t about dominance — it’s about purpose.`,
            img: "1. GITEX GLOBAL 1.jpeg",
          },
          {
            title: "Day 5 – The Bridge Between Vision and Action",
            text: `The final day shifted from inspiration to implementation. Talks from IBM, OpenAI, and G42 emphasized AI-first strategies — systems that learn, adapt, and sustain value. As the event closed, we realized that GITEX wasn’t an end but the beginning of a movement — toward technology that uplifts humanity.`,
            img: "GITEX Connecting images .png",
          },
        ].map((day, i) => (
          <section key={i} className="mb-12 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 mr-3"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">{day.title}</h2>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{day.text}</p>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300">
              <img
                src={day.img}
                alt={day.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </section>
        ))}

        {/* Conclusion */}
        <section className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-black text-white rounded-xl sm:rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              The Future is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Human
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              GITEX 2025 wasn’t just a showcase — it was a mirror reflecting humanity’s ambition to build with purpose. Across AI, digital transformation, and human collaboration, the message was universal: technology is not a tool but a partner.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              At Brandsmashers Tech, we return with one mission — to create intelligent, ethical, and human-centered digital solutions that shape a better tomorrow.
            </p>
            <p className="mt-6 text-orange-400 font-semibold">
              By Team Brandsmashers Tech — Building for Humanity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}