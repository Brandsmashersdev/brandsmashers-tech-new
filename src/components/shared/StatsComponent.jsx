"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const StatsComponent = ({ 
  stats = [
    { value: 10, label: "Years of Expertise" },
    { value: 998, label: "Timely Deliveries" },
    { value: 30, label: "Markets Worldwide" },
    { value: 90, label: "Global Brands" },
  ],
  className = "",
  threshold = 0.2,
  duration = 2.5
}) => {
  const [isReady, setIsReady] = useState(false);
  const [counts, setCounts] = useState(stats.map(s => s.value));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const animateCount = useCallback((targetValue, index) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
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
    if (!sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = 0;
              return newCounts;
            });
            setTimeout(() => animateCount(stat.value, index), index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [threshold, stats, animateCount, hasAnimated]);

  if (!isReady) {
    return (
      <div ref={sectionRef} className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ff5010] mb-2">
                  {stat.value}
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
  }

  return (
    <div ref={sectionRef} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff5010] mb-2">
                {counts[index].toLocaleString()}
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
