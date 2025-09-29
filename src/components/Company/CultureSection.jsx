
'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function CultureSection() {
  const events = [
    {
      title: 'Ganesh Puja Celebration',
      description:
        'From decorating the office with vibrant colors to performing the Ganesh Puja together, our celebrations bring the team closer, fostering joy, gratitude, and a sense of shared tradition. Moments like these strengthen our bonds and fill the workplace with positive energy.',
      image: '/Images/whowearetwo.jpg',
    },
    {
      title: 'Fun Saturday',
      description:
        "Who said weekends were only for rest? At Brandsmashers Tech, some Saturdays are reserved for fun, games, creativity, and camaraderie. Whether it's a hackathon or a movie day, we make sure fun stays on the calendar.",
      image: '/Images/funfridayCareer.jpg',
    },
  ];

  const carouselImages = [
    '/Images/carerpagesharvari.jpeg',
    '/Images/funfridayCareer.jpg',
    '/Images/WHOWEARE.jpeg',
    '/Images/whoWeAre.jpg',
    '/Images/whowearetwo.jpg',
  ];

  function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const length = images.length;
    const timeoutRef = useRef(null);

    useEffect(() => {
      const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
      timeoutRef.current = setTimeout(nextSlide, 3000);
      return () => clearTimeout(timeoutRef.current);
    }, [current, length]);

    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
    const nextSlide = () => setCurrent((current + 1) % length);

    return (
      <div className="relative w-full max-w-5xl mx-auto mt-8 overflow-hidden rounded-xl shadow-2xl border-4 border-[#ff5010] border-opacity-20">
        {/* Slides */}
        <div
          className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-full relative h-[22rem] sm:h-[32rem] flex justify-center items-center transform transition-transform duration-700"
            >
              <Image
                src={img}
                alt={`slide-${idx}`}
                fill
                className={`object-contain rounded-xl shadow-2xl transition-transform duration-500 ${
                  idx === current ? 'scale-105 shadow-[0_0_60px_rgba(255,80,16,0.35)]' : 'scale-95'
                }`}
                style={{ willChange: 'transform' }}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-4 rounded-full hover:bg-opacity-70 shadow-xl transition-all duration-300"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-4 rounded-full hover:bg-opacity-70 shadow-xl transition-all duration-300"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                idx === current ? 'bg-[#ff5010] scale-125 shadow-lg' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse sm:flex-row ${
              index % 2 !== 0 ? 'sm:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Image block */}
            <div className="w-full sm:w-1/2 h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text block */}
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="text-black">{event.title.split(' ')[0]}</span>{' '}
                <span className="text-[#ff5010]">{event.title.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-left text-gray-700 text-base sm:text-lg">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Heading & Description */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          <span className="text-black">Gallery</span>
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          A collection of moments and memories from our events, celebrations, and fun-filled office days.
        </p>
      </div>

      {/* Carousel Below Section */}
      <Carousel images={carouselImages} />
    </section>
  );
}