"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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

  const animationDurationRef = useRef(animationDuration);
  animationDurationRef.current = animationDuration;

  // Clone and setup scroll effect
  const createInfiniteScroll = useCallback(() => {
    if (!innerRef.current) return;

    innerRef.current.innerHTML = ""; // Clear old content

    images.forEach((image) => {
      const div = document.createElement("div");
      div.className = "partner-image-item flex-shrink-0 px-8 transition-transform hover:scale-110";

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      img.className = "h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300";

      div.appendChild(img);
      innerRef.current.appendChild(div);
    });

    // Clone multiple times
    const originalItems = Array.from(innerRef.current.children);
    for (let i = 0; i < 3; i++) {
      originalItems.forEach((item) => {
        innerRef.current.appendChild(item.cloneNode(true));
      });
    }

    // Set animation duration
    const totalItems = innerRef.current.children.length;
    const newDuration = totalItems * 3;
    setAnimationDuration(newDuration);
  }, []);

  // Resize handling
  const handleResize = useCallback(() => {
    if (innerRef.current) {
      innerRef.current.style.animation = "none";
      setTimeout(() => {
        if (innerRef.current) {
          innerRef.current.style.animation = isPaused
            ? "none"
            : `scrollLeftToRight ${animationDurationRef.current}s linear infinite`;
        }
      }, 50);
    }
  }, [isPaused]);

  useEffect(() => {
    createInfiniteScroll();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [createInfiniteScroll, handleResize]);

  // Animate based on pause or duration change
  useEffect(() => {
    if (!innerRef.current) return;

    innerRef.current.style.animation = isPaused
      ? "none"
      : `scrollLeftToRight ${animationDuration}s linear infinite`;
    innerRef.current.style.animationPlayState = isPaused ? "paused" : "running";
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
        />
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
