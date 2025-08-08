"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

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
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  // Custom count animation
  const animateCount = useCallback((targetValue, index) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = currentValue;
        return newCounts;
      });
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          // Start animations for all stats
          stats.forEach((stat, index) => {
            animateCount(stat.value, index);
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, stats, animateCount]);

  return (
    <div ref={sectionRef} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff5010] mb-2">
                {startCount ? counts[index].toLocaleString() : "0"}
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
