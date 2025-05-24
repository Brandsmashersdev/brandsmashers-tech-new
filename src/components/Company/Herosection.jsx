'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
    className="relative bg-cover bg-center bg-no-repeat text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12"
    style={{ backgroundImage: "url('/Nav-Dropdown-icons/whowe_page.jpg')" }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      
      {/* Left Title Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Join the <span className="text-[#ff5010]">Dream Team</span>
        </h1>
      </div>

      {/* Right Vision Text Section */}
      <div className="md:w-1/2 space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
        <div>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-10 max-w-4xl mx-auto leading-relaxed">
          At <span className="font-semibold text-[#ff5010]">Brandsmashers Tech</span>, we don&apos;t just build technology — we build futures.
          We&apos;re a dynamic team of creators, coders, marketers, and dreamers who thrive on innovation and collaboration.
          If you&apos;re looking to grow, challenge yourself, and make an impact, your journey starts here.
        </p>
        </div>
     
      </div>

    </div>
  </section>
  );
}
