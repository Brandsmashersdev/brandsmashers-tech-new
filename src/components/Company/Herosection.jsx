'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center py-24 sm:py-28 md:py-32 lg:py-40 px-6 text-black text-center"
      style={{
        backgroundImage: "url('/Nav-Dropdown-icons/design_page.jpg')",
        //backgroundColor: 'rgba(255, 255, 255, 0.5)', // White background with 50% opacity
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">
          Join The Dream Team
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto">
          At <span className="font-semibold text-[#ff5010]">Brandsmashers Tech</span>, we don’t just build technology — we build futures.
          We’re a dynamic team of creators, coders, marketers, and dreamers who thrive on innovation and collaboration.
          If you're looking to grow, challenge yourself, and make an impact, your journey starts here.
        </p>
        <Link
          href="/careers"
          className="inline-block bg-[#ff5010] text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-200"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
