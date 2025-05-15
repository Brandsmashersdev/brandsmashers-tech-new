import React, { useEffect, useRef, useState } from "react";
import { Send, Code, ChevronDown, Star, ArrowRight } from "lucide-react";

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
  { src: "/assets/amazon.png", alt: "amazon" },
  { src: "/assets/onestream.png", alt: "onestream" },
  { src: "/assets/ecolab.png", alt: "ecolab" },
  { src: "/assets/kimberly-clark.png", alt: "kimberly-clark" },
  { src: "/assets/brightview.png", alt: "brightview" },
  { src: "/assets/eliogroup.png", alt: "eliogroup" },
];

const HeroSection = () => {
  // Typing effect
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Partners carousel
  const partnersTrackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll down indicator animation
  const [scrollOpacity, setScrollOpacity] = useState(1);
  
  // Typing effect logic
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

  // Partners auto-scroll effect
  useEffect(() => {
    if (!partnersTrackRef.current) return;
    
    // Clone partners for infinite effect
    const createInfinitePartners = () => {
      for (let i = 0; i < 5; i++) {
        partners.forEach((partner) => {
          const div = document.createElement('div');
          div.className = 'partner-logo flex-shrink-0 mx-10 md:mx-12 transition-transform hover:scale-110 duration-300';
          
          const img = document.createElement('img');
          img.src = partner.src;
          img.alt = partner.alt;
          img.className = 'h-10 w-auto object-contain transition-all duration-300 filter brightness-0 invert';
          
          div.appendChild(img);
          partnersTrackRef.current.appendChild(div);
        });
      }
    };
    
    createInfinitePartners();
    
    return () => {
      // Cleanup function
      if (partnersTrackRef.current) {
        while (partnersTrackRef.current.firstChild) {
          partnersTrackRef.current.removeChild(partnersTrackRef.current.firstChild);
        }
      }
    };
  }, []);
  
  // Scroll indicator fade effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - (scrollY / 200);
      setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* Hero Main Section */}
      <div className="w-full min-h-[90vh] bg-cover bg-center relative overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          {/* Geometric patterns */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#111827" />
                <path d="M0,0 L100,0 L0,100 Z" fill="#ff5010" opacity="0.05" />
                <path d="M100,0 L100,100 L0,100 Z" fill="#ff5010" opacity="0.03" />
              </svg>
            </div>
          </div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#ff5010]/10 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-[#ff5010]/15 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
          
          {/* Animated accent lines */}
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/20 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/30 to-transparent"></div>
          <div className="absolute top-0 right-2/3 w-px h-3/4 bg-gradient-to-b from-transparent via-[#ff5010]/10 to-transparent"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center md:items-start h-full min-h-[90vh]">
          <div className="pt-24 md:pt-0 md:max-w-3xl text-center md:text-left">
            {/* Animated intro badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5010]/0 via-[#ff5010]/20 to-[#ff5010]/0 -translate-x-full animate-shimmer"></div>
              <Star size={14} className="text-[#ff5010] mr-2" />
              <div className="h-6 flex items-center text-gray-200 text-sm">
                <span className="mr-1">We Are</span>
                <span className="text-[#ff5010] font-semibold">
                  {text}
                  <span className="border-r-2 border-[#ff5010] animate-pulse ml-1" />
                </span>
              </div>
            </div>
            
            {/* Main heading with gradient effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Brandsmashers</span>
              <div className="relative inline-block">
                <span className="relative z-10 text-[#ff5010]"> Tech.</span>
                <span className="absolute -bottom-2 left-1 right-1 h-3 bg-gradient-to-r from-[#ff5010]/30 to-[#ff5010]/0 blur-sm"></span>
              </div>
            </h1>
            
            {/* Subheading with custom styling */}
            <div className="mb-6">
              <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-white">
                <span className="text-[#ff5010] font-bold">Expert Developers</span>
                <span className="relative inline-block px-2">
                  <span className="relative z-10">×</span>
                  <span className="absolute inset-0 bg-[#ff5010]/10 rounded-full"></span>
                </span>
                <span>Streamlined Solutions</span>
              </p>
              
              <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto md:mx-0">
                All in One Place with <span className="text-[#ff5010] font-semibold">Brandsmashers Tech</span>, a leading Software Development Company in India, Delivering Excellence and Innovation since 2010.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start mb-10">
              <button className="group relative overflow-hidden px-6 py-3 bg-[#ff5010] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </div>
              </button>
              
              <button className="group relative overflow-hidden px-6 py-3 bg-gray-900 border border-[#ff5010] text-[#ff5010] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="absolute inset-0 bg-[#ff5010] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <Code size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:text-white transition-colors duration-300">Hire Developers</span>
                </div>
              </button>
            </div>
            
            {/* Stats counter */}
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto md:mx-0">
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-2xl md:text-3xl">15+</div>
                <div className="text-gray-400 text-xs">Years</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-2xl md:text-3xl">500+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-2xl md:text-3xl">50+</div>
                <div className="text-gray-400 text-xs">Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Global Brands indicator */}
        <div 
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300"
          style={{ opacity: scrollOpacity }}
        >
          {/* <div className="flex flex-col items-center">
            <span className="text-white text-sm font-medium mb-1">Trusted By Global Brands</span>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div> */}
        </div>

        {/* Partners Section directly on hero background */}
        <div className="absolute bottom-0 left-0 right-0 py-6 overflow-hidden">
          {/* Subtle divider with more visible separation */}
          <div className="absolute top-0 left-0 w-full h-px "></div>
          
          {/* Partner logos overlay with semi-transparent background */}
          <div className="absolute inset-0 "></div>
          
          <div 
            className="partners-container relative z-10 w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={partnersTrackRef}
              className="flex items-center"
              style={{
                animation: `scrollPartners 20s linear infinite${isPaused ? ' paused' : ''}`,
              }}
            >
              {/* Partners will be dynamically added here */}
              {partners.map((partner, index) => (
                <div key={index} className="partner-logo flex-shrink-0 mx-10 md:mx-12 transition-transform hover:scale-110 duration-300">
                  <img 
                    src={partner.src} 
                    alt={partner.alt}
                    className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scrollPartners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${partners.length * 200}px));
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes scrollDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-scrollDown {
          animation: scrollDown 1.5s infinite;
        }
        
        .partners-container::before,
        .partners-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
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