'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center px-4 sm:px-6 md:px-10 py-20 sm:py-28 md:py-32 lg:py-40 text-center"
      style={{
        backgroundImage: "url('/Nav-Dropdown-icons/career3_page.jpg')",
      }}
    >
      <div className="max-w-5xl mx-auto px-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight sm:leading-snug lg:leading-[1.2]">
          <span className="text-white">Join The </span>
          <span className="text-[#ff5010]">Dream Team</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-10 max-w-4xl mx-auto leading-relaxed">
          At <span className="font-semibold text-[#ff5010]">Brandsmashers Tech</span>, we don’t just build technology — we build futures.
          We’re a dynamic team of creators, coders, marketers, and dreamers who thrive on innovation and collaboration.
          If you're looking to grow, challenge yourself, and make an impact, your journey starts here.
        </p>

        <Link
          href="/careers"
          className="inline-block bg-[#ff5010] text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-8 text-base sm:text-lg rounded-lg hover:bg-orange-600 transition-all duration-200"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
