'use client';

import React from "react";

export default function EmployeeTestimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="text-white">Employee</span>{' '}
          <span className="text-[#ff5010]">Testimonials</span>
        </h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg sm:text-xl">
          Hear what our team has to say about working at Softude. We believe in
          appreciation, growth, and a great work culture.
        </p>

        {/* Testimonial Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 italic">
            “It has been 10+ years with Brandsmashers (Previously Systematix Infotech) and
            it's truly an AWESOME place to work in. It has a nice work culture and
            allows employees to work freely. Also, there's great support from seniors.
            Employees are motivated and appreciated for their efforts.”
          </p>

          {/* Employee Info */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <img
              src=""
              alt="Aryman Saxena"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#ff5010]"
            />
            <div className="text-left">
              <p className="font-bold text-gray-800 dark:text-white">Aryman Saxena</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
      
      </div>
    </section>
  );
}
