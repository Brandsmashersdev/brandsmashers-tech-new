"use client"; // Only if you're using Next.js App Router

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const AimlSolutionMetrix = () => {
  const stats = [
    { value: 6, label: "Years of Expertise" },
    { value: 95, label: "Timely Deliveries" },
    { value: 20, label: "Markets Worldwide" },
    { value: 50, label: "Global Brands" },
  ];

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-16 bg-[#0b0b0b] text-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Your Reliable Partner for 
 <span className="text-[#ff5722]"> Scalable</span> and <span className="text-[#ff5722]">Intelligent AI/ML Development</span>
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
        Looking to bring smart automation to your business? Brandsmashers Tech is here to turn your vision into reality with scalable, AI-powered solutions that grow with you. Let’s build the future—together.

      </p>
    </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#161616] border border-gray-800 rounded-xl shadow-[0_0_20px_#ff572233] hover:shadow-[0_0_25px_#ff572244] transition-shadow duration-300"
            >
              <div className="text-4xl font-extrabold mb-2 text-[#ff5722] drop-shadow-[0_0_6px_#ff5722aa]">
                {startCount ? <CountUp end={item.value} duration={2} /> : "0"}+
              </div>
              <p className="text-lg text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AimlSolutionMetrix;
