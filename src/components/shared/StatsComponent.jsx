"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const StatsComponent = ({ 
  stats = [
    { value: 6, label: "Years of Expertise" },
    { value: 95, label: "Timely Deliveries" },
    { value: 20, label: "Markets Worldwide" },
    { value: 50, label: "Global Brands" },
  ],
  className = "",
  threshold = 0.5,
  duration = 2.5
}) => {
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
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={sectionRef} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff5010] mb-2">
                {startCount ? (
                  <CountUp
                    end={stat.value}
                    duration={duration}
                    separator=","
                  />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
