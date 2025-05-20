import React, { useEffect, useRef, useState } from "react";
import { Send, Code, ChevronDown, Star, ArrowRight } from "lucide-react";
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
  // { src: "/assets/amazon.png", alt: "amazon" },
  // { src: "/assets/onestream.png", alt: "onestream" },
  // { src: "/assets/ecolab.png", alt: "ecolab" },
  // { src: "/assets/kimberly-clark.png", alt: "kimberly-clark" },
  // { src: "/assets/brightview.png", alt: "brightview" },
  // { src: "/assets/eliogroup.png", alt: "eliogroup" },
];

const HeroSection = () => {
  // Typing effect
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Partners carousel
  const partnersContainerRef = useRef(null);
  const partnersTrackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [partnerWidth, setPartnerWidth] = useState(200); // Default width estimation

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

  // Calculate responsive spacing for partners
  useEffect(() => {
    const calculateResponsiveWidth = () => {
      if (partnersContainerRef.current) {
        // Determine space based on screen size
        const containerWidth = partnersContainerRef.current.offsetWidth;
        let itemsPerRow;
        
        if (containerWidth <= 640) { // mobile
          itemsPerRow = 2;
        } else if (containerWidth <= 768) { // small tablet
          itemsPerRow = 3;
        } else if (containerWidth <= 1024) { // large tablet
          itemsPerRow = 4;
        } else { // desktop
          itemsPerRow = 5;
        }
        
        // Calculate width with some spacing
        const newWidth = Math.floor(containerWidth / itemsPerRow) - 20;
        setPartnerWidth(newWidth);
      }
    };

    calculateResponsiveWidth();
    window.addEventListener('resize', calculateResponsiveWidth);
    
    return () => window.removeEventListener('resize', calculateResponsiveWidth);
  }, []);
  
  // Partners auto-scroll effect
  useEffect(() => {
    if (!partnersTrackRef.current) return;
    
    // Clear previous partners to prevent duplication
    while (partnersTrackRef.current.firstChild) {
      partnersTrackRef.current.removeChild(partnersTrackRef.current.firstChild);
    }
    
    // Clone partners for infinite effect - add multiple sets based on screen size
    const createInfinitePartners = () => {
      // Determine how many sets to add based on screen width
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
          partnersTrackRef.current.appendChild(div);
        });
      }
    };
    
    createInfinitePartners();
    
    // Handle resize for partner logos
    const handleResize = () => {
      createInfinitePartners();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
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
      <div className="w-full min-h-screen bg-cover bg-center relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            height="100%"
            width="100%"
          // Optional: Add a poster image while video loads
          >
            <source src="/background_video.mp4" type="video/mp4" />
            {/* Add additional source formats for better browser compatibility if needed */}
            {/* <source src="/assets/background-video.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
          
          {/* Video overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Background with overlay */}
        <div className="absolute inset-0 z-10">
          {/* Geometric patterns */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#111827" opacity="0.5" />
                <path d="M0,0 L100,0 L0,100 Z" fill="#ff5010" opacity="0.05" />
                <path d="M100,0 L100,100 L0,100 Z" fill="#ff5010" opacity="0.03" />
              </svg>
            </div>
          </div>
          
          {/* Animated gradient orbs - adjusted for mobile */}
          <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 rounded-full bg-gradient-to-r from-[#ff5010]/10 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 sm:w-48 md:w-80 h-32 sm:h-48 md:h-80 rounded-full bg-gradient-to-l from-[#ff5010]/15 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
          
          {/* Animated accent lines - less visible on mobile */}
          <div className="hidden sm:block absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/20 to-transparent"></div>
          <div className="hidden sm:block absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/30 to-transparent"></div>
          <div className="hidden sm:block absolute top-0 right-2/3 w-px h-3/4 bg-gradient-to-b from-transparent via-[#ff5010]/10 to-transparent"></div>
        </div>
        
        {/* Hero content - improved responsiveness */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 flex flex-col justify-center items-center md:items-start h-full min-h-screen">
          <div className="pt-20 sm:pt-24 md:pt-0 md:max-w-3xl text-center md:text-left">
            {/* Animated intro badge */}
            <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 mb-4 sm:mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5010]/0 via-[#ff5010]/20 to-[#ff5010]/0 -translate-x-full animate-shimmer"></div>
              <Star size={12} className="text-[#ff5010] mr-1 sm:mr-2" />
              <div className="h-5 sm:h-6 flex items-center text-gray-200 text-xs sm:text-sm">
                <span className="mr-1">We Are</span>
                <span className="text-[#ff5010] font-semibold">
                  {text}
                  <span className="border-r-2 border-[#ff5010] animate-pulse ml-1" />
                </span>
              </div>
            </div>
            
            {/* Main heading with gradient effect - responsive text sizes */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-[#ff5010]">Hire Skilled Remote Developers 
</span>
              <div className="relative inline-block">
                <span className="relative z-10 text-white">from India Today </span>
                {/* <span className="absolute -bottom-2 left-1 right-1 h-3 bg-gradient-to-r from-[#ff5010]/30 to-[#ff5010]/0 blur-sm"></span> */}
              </div>
            </h1>
            
            {/* Subheading with custom styling - improved for small screens */}
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 text-white">
                <span className="text-[#ff5010] font-bold">Expert Developers</span>
                <span className="relative inline-block px-2">
                  <span className="relative z-10">×</span>
                  <span className="absolute inset-0 bg-[#ff5010]/10 rounded-full"></span>
                </span>
                <span>Streamlined Solutions</span>
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg mx-auto md:mx-0">
              Access top-tier tech talent at competitive rates. Hire pre-vetted remote developers from India to scale your team quickly, efficiently, and cost-effectively.
 <span className="text-[#ff5010] font-semibold"></span>
              </p>
            </div>
            
            {/* Enhanced CTA buttons - stack on mobile, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 justify-center md:justify-start mb-6 sm:mb-10">
              <Link href="/">
                <button className="group relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 bg-[#ff5010] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    <span>Contact Us</span>
                  </div>
                </button>
              </Link>
              
              <a href="/contactus" className="inline-block mb-4 md:mb-6">
              <button className="group relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 bg-black border border-[#ff5010] text-[#ff5010] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <span className="absolute inset-0 bg-[#ff5010] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <Code size={16} className="group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:text-white transition-colors duration-300">Hire Developers</span>
                </div>
              </button>
            </a>
            
            </div>
            
            {/* Stats counter - more compact on mobile */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-sm mx-auto md:mx-0">
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl">7+</div>
                <div className="text-gray-400 text-xs">Years</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl">250+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl">50+</div>
                <div className="text-gray-400 text-xs">Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Global Brands indicator */}
        <div 
          className="hidden sm:flex absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex-col items-center transition-opacity duration-300"
          style={{ opacity: scrollOpacity }}
        >
          {/* <div className="flex flex-col items-center">
            <span className="text-white text-xs sm:text-sm font-medium mb-1">Trusted By Global Brands</span>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div> */}
        </div>

        {/* Partners Section - enhanced for mobile responsiveness */}
        <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-6 overflow-hidden z-20">
          {/* Subtle divider with more visible separation */}
          <div className="absolute top-0 left-0 w-full h-px"></div>
          
          {/* Partner logos overlay with semi-transparent background */}
          <div className="absolute inset-0"></div>
          
          <div 
            ref={partnersContainerRef}
            className="partners-container relative z-10 w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Title for partners section - visible only on mobile */}
            <div className="text-center mb-2 sm:hidden">
              {/* <span className="text-white text-xs font-medium">Our Partners</span> */}
            </div>
            
            <div
              ref={partnersTrackRef}
              className="flex items-center"
              style={{
                animation: `scrollPartners 30s linear infinite${isPaused ? ' paused' : ''}`,
              }}
            >
              {/* Partners will be dynamically added here by useEffect */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations - adjusted for responsiveness */}
      <style jsx>{`
        @keyframes scrollPartners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${partners.length * partnerWidth}px));
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