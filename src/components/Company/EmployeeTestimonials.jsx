'use client';

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sagar Rai",
    role: "Intern Experience",
    review:
      "I joined as an intern and the mentorship I received has shaped me into a confident software engineer.",
  },
  {
    name: "Ayushi Namdev",
    role: "Software Developer",
    review:
      "Working at Brandsmashers Tech as a Software Developer was a great experience. I had the opportunity to work on exciting projects, collaborate with a skilled and supportive team, and grow both technically and professionally.",
  },
  {
    name: "Nisarg Shah",
    role: "Client Review",
    review:
      "BrandSmasher Tech is truly impressive! The team is professional, innovative, and always delivers on time. Highly recommend them!",
  },
  {
    name: "Virendra Kumar Dwivedi",
    role: "Developer – 1.5 years",
    review:
      "I’ve been a developer here for 1.5 years and the variety of projects keeps me motivated. Each sprint brings something new to learn.",
  },
  {
    name: "Vishakha Pawar",
    role: "First Company Experience",
    review:
      "This is my first company. I’m genuinely grateful for the opportunity to begin my journey here. The work culture is very positive and supportive.",
  },
  {
    name: "Jaydeep",
    role: "Developer Review",
    review:
      "Peer reviews and coding standards are taken seriously. My problem-solving and clean-code habits have improved a lot since joining.",
  },
  {
    name: "Tarun Namdev",
    role: "Team Culture",
    review:
      "The culture is collaborative but also respects personal time. Deadlines are set realistically so late nights are rare.",
  },
  {
    name: "Chirag Shukla",
    role: "Intern Experience",
    review:
      "I joined Brand Smashers a month ago as an intern, and it’s been a fantastic experience. The environment here is collaborative and inspiring.",
  },
  {
    name: "Mayank Rajpoot",
    role: "Client Review",
    review:
      "Brandsmashers delivers exceptional services. Their expertise and dedication to client satisfaction are truly impressive.",
  },
  {
    name: "Priya Kumari",
    role: "Client Review",
    review:
      "The team at Brandsmashers demonstrated deep understanding of our requirements and delivered a top-notch software solution.",
  },
];

export default function EmployeeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="text-black dark:text-white">Employee</span>{" "}
          <span className="text-[#ff5010]">Testimonials</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg sm:text-xl">
          Hear what our team and clients have to say about working with
          Brandsmashers Tech. We believe in appreciation, growth, and a culture
          of innovation.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex justify-start mb-4 text-[#ffb400]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.447a1 1 0 00.95.69h3.631c.969 0 1.371 1.24.588 1.81l-2.94 2.137a1 1 0 00-.364 1.118l1.12 3.447c.3.921-.755 1.688-1.54 1.118l-2.94-2.137a1 1 0 00-1.176 0l-2.94 2.137c-.784.57-1.838-.197-1.539-1.118l1.12-3.447a1 1 0 00-.364-1.118L2.81 8.874c-.783-.57-.38-1.81.588-1.81h3.631a1 1 0 00.95-.69l1.12-3.447z" />
                </svg>
              ))}
            </div>

            {/* Review */}
            <p className="text-left text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
              “{testimonials[currentIndex].review}”
            </p>

            {/* Author */}
            <div className="text-left">
              <p className="font-bold text-gray-900 dark:text-white">
                {testimonials[currentIndex].name}
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[currentIndex].role}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[#ff5010]"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[#ff5010]"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#ff5010] w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
