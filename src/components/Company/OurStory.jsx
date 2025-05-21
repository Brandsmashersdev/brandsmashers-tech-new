'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FounderCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${isHovered ? 'scale-[1.02] shadow-xl' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 z-10"></div>
          <Image
            src="/Nav-Dropdown-icons/Brandsmashers.jpg"
            alt="Company Founder"
            width={500} // Adjust width and height as necessary
            height={500} // Adjust width and height as necessary
            className="w-full h-full object-cover"
          />
          <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'} md:hidden`}>
            <h3 className="text-2xl font-bold"></h3>
            <p className="text-lg"></p>
          </div>
        </div>

        {/* Content Section */}
        <div className={`md:w-1/2 p-8 bg-white flex flex-col justify-center transition-all duration-300 ${isHovered ? 'bg-gray-50' : ''}`}>
          <div className="hidden md:block mb-6">
            <h3 className="text-3xl font-bold">
              <span className="text-black">Brands</span>
              <span className="text-[#ff5010]">masher&apos;s Story</span> {/* Fixed apostrophe */}
            </h3>
          </div>

          <blockquote className="mb-6 italic text-lg text-gray-700 border-l-4 border-[#ff5010] pl-4">
            We&apos;re proud of how far we&apos;ve come — and even more excited about what lies ahead. {/* Fixed apostrophes */}
          </blockquote>

          <p className="mb-6 text-gray-700">
            Founded in 2018 by Aayush Jain and Muskan Chhatrashal, Brandsmashers Tech began as a two-person venture with a bold vision: to revolutionize the way businesses connect with top tech talent. What started as a small initiative has now grown into a dynamic team of 80+ skilled professionals spread across the globe.<br/><br/>
            Our mission has always been clear — to bridge the gap between IT recruiters and the best remote developers through a simple, fast, and hassle-free hiring process. We&apos;ve helped numerous leading tech companies accelerate their growth by providing expert staffing solutions that integrate seamlessly into their teams. Whether it&apos;s scaling development efforts, meeting tight project deadlines, or finding niche skill sets, our developers step in as an extension of your team from day one.<br/><br/>
            But we&apos;re more than just a staffing agency. Brandsmashers Tech also offers end-to-end software solutions tailored to businesses across multiple sectors. From product ideation to post-launch support, we&apos;re committed to delivering results that drive real business impact. {/* Fixed apostrophes */}
          </p>

          <div className="flex items-center space-x-4 mt-auto">
            {/* Facebook */}
            <button className="p-2 rounded-full bg-[#ff5010] text-white hover:bg-[#e04509] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>

            {/* LinkedIn */}
            <button className="p-2 rounded-full bg-[#ff5010] text-white hover:bg-[#e04509] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>

            {/* Instagram */}
            <button className="p-2 rounded-full bg-[#ff5010] text-white hover:bg-[#e04509] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Orange accent element */}
      <div className="h-2 w-32 bg-[#ff5010] rounded-full mx-auto mt-12"></div>
    </div>
  );
}
