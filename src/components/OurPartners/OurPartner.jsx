"use client";

import { useEffect, useRef, useState } from 'react';

const images = [
  { src: "/assets/accionlabs.png", alt: "accion-labs" },
  { src: "/assets/airbnb.png", alt: "airbnb" },
  { src: "/assets/Goeasy.png", alt: "Goeasy" },
  { src: "/assets/salesforce.png", alt: "salesforce" },
  { src: "/assets/amazon.png", alt: "amazon" },
];

const OurPartners = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(20); // seconds

  // Store animationDuration in ref to avoid re-renders in event handlers
  const animationDurationRef = useRef(animationDuration);
  animationDurationRef.current = animationDuration;

  useEffect(() => {
    // Clone the images to create the infinite effect
    const createInfiniteScroll = () => {
      if (!innerRef.current) return;
      
      // Clear existing content
      while (innerRef.current.firstChild) {
        innerRef.current.removeChild(innerRef.current.firstChild);
      }
      
      // Create original set
      images.forEach((image) => {
        const div = document.createElement('div');
        div.className = 'partner-image-item flex-shrink-0 px-8 transition-transform hover:scale-110';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.className = 'h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300';
        
        div.appendChild(img);
        innerRef.current.appendChild(div);
      });
      
      // Clone multiple times
      const originalItems = Array.from(innerRef.current.children);
      for (let i = 0; i < 3; i++) {
        originalItems.forEach(item => {
          const clone = item.cloneNode(true);
          innerRef.current.appendChild(clone);
        });
      }
      
      // Calculate animation duration based on total items
      const totalItems = innerRef.current.children.length;
      const newDuration = totalItems * 3; // 3 seconds per item
      setAnimationDuration(newDuration);
    };
    
    createInfiniteScroll();
    
    // Reset animation on resize
    const handleResize = () => {
      if (innerRef.current) {
        innerRef.current.style.animation = 'none';
        setTimeout(() => {
          if (innerRef.current) {
            // Use latest duration from ref
            innerRef.current.style.animation = isPaused ? 'none' : `scrollLeftToRight ${animationDurationRef.current}s linear infinite`;
          }
        }, 50);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // empty deps, runs once on mount

  // Update animation when paused or duration changes
  useEffect(() => {
    if (!innerRef.current) return;
    innerRef.current.style.animation = isPaused ? 'none' : `scrollLeftToRight ${animationDuration}s linear infinite`;
    innerRef.current.style.animationPlayState = isPaused ? 'paused' : 'running';
  }, [isPaused, animationDuration]);

  return (
    <section className="w-full bg-white py-16 overflow-hidden" id="our-partners">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
          Our <span className="text-[#ff5010] italic">Partners</span>
        </h2>
      </div>
      
      <div 
        ref={outerRef}
        className="relative w-full bg-gradient-to-r from-[#ff5010]/5 to-[#ff5010]/10 py-12 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={innerRef}
          className="flex items-center space-x-12 whitespace-nowrap"
          style={{
            animation: `scrollLeftToRight ${animationDuration}s linear infinite`,
          }}
        >
          {/* Items will be dynamically added here */}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${images.length * 100}%);
          }
        }
      `}</style>
    </section>
  );
};

export default OurPartners;