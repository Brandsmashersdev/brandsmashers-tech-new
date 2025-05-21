import React, { useEffect, useRef, useState } from "react";
import { Send, Code, Star } from "lucide-react";
import Link from "next/link";

const phrases = [
  "Modern Trendy",
  "Unique Design",
  "Fully Responsive",
  "Developer Friendly",
];

const partners = [
  { src: "/assets/accionlabs.png", alt: "accion-labs" },
  { src: "/assets/airbnb.png", alt: "airbnb" },
  { src: "/assets/Goeasy.png", alt: "Goeasy" },
  { src: "/assets/salesforce.png", alt: "salesforce" },
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const partnersContainerRef = useRef(null);
  const partnersTrackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [partnerWidth, setPartnerWidth] = useState(200);

  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, charIndex - 1)
          : currentPhrase.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  useEffect(() => {
    const calculateResponsiveWidth = () => {
      if (partnersContainerRef.current) {
        const containerWidth = partnersContainerRef.current.offsetWidth;
        let itemsPerRow;

        if (containerWidth <= 640) itemsPerRow = 2;
        else if (containerWidth <= 768) itemsPerRow = 3;
        else if (containerWidth <= 1024) itemsPerRow = 4;
        else itemsPerRow = 5;

        const newWidth = Math.floor(containerWidth / itemsPerRow) - 20;
        setPartnerWidth(newWidth);
      }
    };

    calculateResponsiveWidth();
    window.addEventListener('resize', calculateResponsiveWidth);

    return () => window.removeEventListener('resize', calculateResponsiveWidth);
  }, []);

  useEffect(() => {
    const track = partnersTrackRef.current;
    if (!track) return;

    const clearTrack = () => {
      while (track.firstChild) {
        track.removeChild(track.firstChild);
      }
    };

    const createInfinitePartners = () => {
      const repeatCount = window.innerWidth < 768 ? 8 : 5;
      for (let i = 0; i < repeatCount; i++) {
        partners.forEach((partner) => {
          const div = document.createElement('div');
          div.className = 'partner-logo flex-shrink-0 transition-transform hover:scale-110 duration-300';
          div.style.margin = `0 ${window.innerWidth < 640 ? '8px' : '12px'}`;

          const img = document.createElement('img');
          img.src = partner.src;
          img.alt = partner.alt;
          img.className = 'h-6 sm:h-8 md:h-10 w-auto object-contain transition-all duration-300 filter brightness-0 invert opacity-80 hover:opacity-100';

          div.appendChild(img);
          track.appendChild(div);
        });
      }
    };

    clearTrack();
    createInfinitePartners();

    const handleResize = () => {
      clearTrack();
      createInfinitePartners();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTrack();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - scrollY / 200;
      setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* ... rest of your hero section (unchanged for brevity) ... */}

      {/* CTA Button Fix */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 justify-center md:justify-start mb-6 sm:mb-10">
        <Link href="/" >
          <button className="group relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 bg-[#ff5010] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
            <div className="relative z-10 flex items-center justify-center space-x-2">
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              <span>Contact Us</span>
            </div>
          </button>
        </Link>

        <Link href="/contactus">
        <div>

          <button className="group relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 bg-black border border-[#ff5010] text-[#ff5010] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
            <span className="absolute inset-0 bg-[#ff5010] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <div className="relative z-10 flex items-center justify-center space-x-2">
              <Code size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="group-hover:text-white transition-colors duration-300">Hire Developers</span>
            </div>
          </button>
        </div>
        </Link>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes scrollPartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${partners.length * partnerWidth}px)); }
        }
        .partners-container::before,
        .partners-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 50px;
          height: 100%;
          z-index: 2;
        }
        @media (min-width: 640px) {
          .partners-container::before,
          .partners-container::after {
            width: 100px;
          }
        }
        .partners-container::before {
          left: 0;
          background: linear-gradient(to right, rgba(17, 24, 39, 0.9), transparent);
        }
        .partners-container::after {
          right: 0;
          background: linear-gradient(to left, rgba(17, 24, 39, 0.9), transparent);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
