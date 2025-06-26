'use client';

import React from "react";
import Image from 'next/image'; // Import Image from Next.js

export default function EmployeeTestimonials() {
  return (
    <section className="bg-gray-50 dark:bg py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="text-black">Employee</span>{' '}
          <span className="text-[#ff5010]">Testimonials</span>
        </h2>
        <p className="text-black mb-12 max-w-3xl mx-auto text-lg sm:text-xl">
          Hear what our team has to say about working at Brandsmashers Tech. We believe in appreciation, growth, and a great work culture.

        </p>

        {/* Testimonial Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 ">
            “It’s been 4+ years with Brandsmashers Tech, and it’s truly an AWESOME place to work! The work culture is supportive and flexible, allowing employees to work with freedom and creativity. There’s strong support from seniors, and efforts are always recognized and appreciated.”
          </p>

          {/* Employee Info */}
          <div className="flex items-center space-x-4">
            <Image
              src="/path-to-image.jpg" // Replace with the actual path to the image
              alt="Aryman Saxena"
              width={56} // Set the image width (in pixels)
              height={56} // Set the image height (in pixels)
              className="w-14 h-14 rounded-full object-cover border-2 border-[#ff5010]"
            />
            <div className="text-left">
              <p className="font-bold text-gray-800 dark:text-white">Aryman Saxena</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        {/* Add dot indicators or other content here */}
      </div>
    </section>
  );
}
