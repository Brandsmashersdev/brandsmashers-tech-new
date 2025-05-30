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
  const [partnerWidth, setPartnerWidth] = useState(200);

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
        const containerWidth = partnersContainerRef.current.offsetWidth;
        let itemsPerRow;

        if (containerWidth <= 640) {
          itemsPerRow = 2;
        } else if (containerWidth <= 768) {
          itemsPerRow = 3;
        } else if (containerWidth <= 1024) {
          itemsPerRow = 4;
        } else {
          itemsPerRow = 5;
        }

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

    while (partnersTrackRef.current.firstChild) {
      partnersTrackRef.current.removeChild(partnersTrackRef.current.firstChild);
    }

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
          partnersTrackRef.current.appendChild(div);
        });
      }
    };

    createInfinitePartners();

    const handleResize = () => {
      createInfinitePartners();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

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

    <>

     <Head>
        <title>Brand Smashers Tech</title>
        <meta
          name="description"
          content="Brand Smashers Tech offers innovative custom software development, IT outsourcing, and scalable web & mobile app solutions."
        />
      </Head>
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
          >
            <source src="/background_video.mp4" type="video/mp4" />
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

          {/* Animated gradient orbs - adjusted for Nest Hub */}
          <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 md:w-96 nest-hub:w-48 nest-hub-max:w-56 h-40 sm:h-64 md:h-96 nest-hub:h-48 nest-hub-max:h-56 rounded-full bg-gradient-to-r from-[#ff5010]/10 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 sm:w-48 md:w-80 nest-hub:w-40 nest-hub-max:w-48 h-32 sm:h-48 md:h-80 nest-hub:h-40 nest-hub-max:h-48 rounded-full bg-gradient-to-l from-[#ff5010]/15 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

          {/* Animated accent lines - adjusted for Nest Hub */}
          <div className="hidden sm:block nest-hub:hidden nest-hub-max:block absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/20 to-transparent"></div>
          <div className="hidden sm:block nest-hub:hidden nest-hub-max:block absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff5010]/30 to-transparent"></div>
          <div className="hidden sm:block nest-hub:hidden nest-hub-max:block absolute top-0 right-2/3 w-px h-3/4 bg-gradient-to-b from-transparent via-[#ff5010]/10 to-transparent"></div>
        </div>

        {/* Hero content - optimized for Nest Hub devices */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 nest-hub:px-8 nest-hub-max:px-12 flex flex-col justify-center items-center md:items-start h-full min-h-screen nest-hub:min-h-[600px] nest-hub-max:min-h-[800px] " style={{ marginTop: "-6rem" }}>
          <div className="pt-20 sm:pt-24 md:pt-0 nest-hub:pt-4 nest-hub-max:pt-8 md:max-w-3xl nest-hub:max-w-4xl nest-hub-max:max-w-5xl text-center md:text-left nest-hub:text-center nest-hub-max:text-center">
            {/* Animated intro badge - adjusted for Nest Hub */}
            <div className="inline-flex items-center px-2 sm:px-3 nest-hub:px-4 nest-hub-max:px-5 py-1 nest-hub:py-1.5 nest-hub-max:py-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 mb-4 sm:mb-6 nest-hub:mb-3 nest-hub-max:mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5010]/0 via-[#ff5010]/20 to-[#ff5010]/0 -translate-x-full animate-shimmer"></div>
              <Star size={12} className="text-[#ff5010] mr-1 sm:mr-2 nest-hub:mr-2 nest-hub-max:mr-3" />
              <div className="h-5 sm:h-6 nest-hub:h-5 nest-hub-max:h-6 flex items-center text-gray-200 text-xs sm:text-sm nest-hub:text-sm nest-hub-max:text-base">
                <span className="mr-1">We Are</span>
                <span className="text-[#ff5010] font-semibold">
                  {text}
                  <span className="border-r-2 border-[#ff5010] animate-pulse ml-1" />
                </span>
              </div>
            </div>

            {/* Main heading with gradient effect - responsive for Nest Hub */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl nest-hub:text-3xl nest-hub-max:text-4xl font-bold leading-tight mb-4 sm:mb-6 nest-hub:mb-3 nest-hub-max:mb-4 " >
              <span className="text-[#ff5010]">Hire Skilled Remote Developers
              </span>
              <div className="relative inline-block">
                <span className="relative z-10 text-white">from India Today </span>
              </div>
            </h1>

            {/* Subheading with custom styling - optimized for Nest Hub */}
            <div className="mb-4 sm:mb-6 nest-hub:mb-3 nest-hub-max:mb-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl nest-hub:text-lg nest-hub-max:text-xl font-medium mb-2 nest-hub:mb-1 nest-hub-max:mb-2 text-white">
                <span className="text-[#ff5010] font-bold">Expert Developers</span>
                <span className="relative inline-block px-2">
                  <span className="absolute inset-0 bg-[#ff5010]/10 rounded-full"></span>
                </span>
                <span>Streamlined Solutions</span>
              </p>

              <p className="text-xs sm:text-sm md:text-base nest-hub:text-sm nest-hub-max:text-base text-gray-300 max-w-lg nest-hub:max-w-2xl nest-hub-max:max-w-3xl mx-auto md:mx-0 nest-hub:mx-auto nest-hub-max:mx-auto">
                Access top-tier tech talent at competitive rates. Hire pre-vetted remote developers from India to scale your team quickly, efficiently, and cost-effectively.
                <span className="text-[#ff5010] font-semibold"></span>
              </p>
            </div>

            {/* Enhanced CTA buttons - optimized layout for Nest Hub */}
            <div className="flex flex-col sm:flex-row nest-hub:flex-row nest-hub-max:flex-row space-y-3 sm:space-y-0 nest-hub:space-y-0 nest-hub-max:space-y-0 sm:space-x-4 nest-hub:space-x-4 nest-hub-max:space-x-6 md:space-x-6 justify-center md:justify-start nest-hub:justify-center nest-hub-max:justify-center mb-6 sm:mb-10 nest-hub:mb-4 nest-hub-max:mb-6">
              <button className="group relative overflow-hidden px-4 sm:px-6 nest-hub:px-5 nest-hub-max:px-6 py-2 sm:py-3 nest-hub:py-2.5 nest-hub-max:py-3 bg-[#ff5010] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto nest-hub:w-auto nest-hub-max:w-auto">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </div>
              </button>

              <button className="group relative overflow-hidden px-4 sm:px-6 nest-hub:px-5 nest-hub-max:px-6 py-2 sm:py-3 nest-hub:py-2.5 nest-hub-max:py-3 bg-black border border-[#ff5010] text-[#ff5010] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto nest-hub:w-auto nest-hub-max:w-auto">
                <span className="absolute inset-0 bg-[#ff5010] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <Code size={16} className="group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:text-white transition-colors duration-300">Hire Developers</span>
                </div>
              </button>
            </div>

            {/* Stats counter - optimized for Nest Hub */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 nest-hub:gap-8 nest-hub-max:gap-10 max-w-xs sm:max-w-sm nest-hub:max-w-md nest-hub-max:max-w-lg mx-auto md:mx-0 nest-hub:mx-auto nest-hub-max:mx-auto">
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl nest-hub:text-2xl nest-hub-max:text-3xl">7+</div>
                <div className="text-gray-400 text-xs nest-hub:text-sm nest-hub-max:text-base">Years</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl nest-hub:text-2xl nest-hub-max:text-3xl">250+</div>
                <div className="text-gray-400 text-xs nest-hub:text-sm nest-hub-max:text-base">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl nest-hub:text-2xl nest-hub-max:text-3xl">50+</div>
                <div className="text-gray-400 text-xs nest-hub:text-sm nest-hub-max:text-base">Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Global Brands indicator - hidden on Nest Hub for space */}
        <div
          className="hidden sm:flex nest-hub:hidden nest-hub-max:flex absolute bottom-20 sm:bottom-24 nest-hub-max:bottom-16 left-1/2 transform -translate-x-1/2 flex-col items-center transition-opacity duration-300"
          style={{ opacity: scrollOpacity }}
        >
        </div>

        {/* Partners Section - optimized for Nest Hub devices */}
        <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-6 nest-hub:py-3 nest-hub-max:py-4 overflow-hidden z-20">
          <div className="absolute top-0 left-0 w-full h-px"></div>
          <div className="absolute inset-0"></div>

          <div
            ref={partnersContainerRef}
            className="partners-container relative z-10 w-full overflow-hidden nest-hub:h-12 nest-hub-max:h-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="text-center mb-2 sm:hidden nest-hub:hidden nest-hub-max:hidden">
            </div>

            <div
              ref={partnersTrackRef}
              className="flex items-center nest-hub:h-full nest-hub-max:h-full"
              style={{
                animation: `scrollPartners 30s linear infinite${isPaused ? ' paused' : ''}`,
              }}
            >
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations - enhanced for Nest Hub responsiveness */}
      <style jsx global>{`
        /* Nest Hub (1024x600) specific responsive classes */
        @media (width: 1024px) and (height: 600px) and (orientation: landscape) {
          .nest-hub\:px-8 { padding-left: 2rem; padding-right: 2rem; }
          .nest-hub\:pt-4 { padding-top: 1rem; }
          .nest-hub\:mb-3 { margin-bottom: 0.75rem; }
          .nest-hub\:mb-1 { margin-bottom: 0.25rem; }
          .nest-hub\:mb-4 { margin-bottom: 1rem; }
          .nest-hub\:px-4 { padding-left: 1rem; padding-right: 1rem; }
          .nest-hub\:py-1\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
          .nest-hub\:mr-2 { margin-right: 0.5rem; }
          .nest-hub\:h-5 { height: 1.25rem; }
          .nest-hub\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
          .nest-hub\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
          .nest-hub\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
          .nest-hub\:max-w-2xl { max-width: 42rem; }
          .nest-hub\:mx-auto { margin-left: auto; margin-right: auto; }
          .nest-hub\:flex-row { flex-direction: row; }
          .nest-hub\:space-y-0 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0px * var(--tw-space-y-reverse)); }
          .nest-hub\:space-x-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1rem * var(--tw-space-x-reverse)); margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); }
          .nest-hub\:px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
          .nest-hub\:py-2\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
          .nest-hub\:w-auto { width: auto; }
          .nest-hub\:justify-center { justify-content: center; }
          .nest-hub\:gap-8 { gap: 2rem; }
          .nest-hub\:max-w-md { max-width: 28rem; }
          .nest-hub\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
          .nest-hub\:text-center { text-align: center; }
          .nest-hub\:w-48 { width: 12rem; }
          .nest-hub\:h-48 { height: 12rem; }
          .nest-hub\:hidden { display: none; }
          .nest-hub\:min-h-\[600px\] { min-height: 600px; margin-left: 8rem; }
          .nest-hub\:max-w-4xl { max-width: 56rem; }
          .nest-hub\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .nest-hub\:h-12 { height: 3rem; }
          .nest-hub\:h-full { height: 100%; }
        }
        
        /* Nest Hub Max (1280x800) specific responsive classes */
        @media (width: 1280px) and (height: 800px) and (orientation: landscape) {
          .nest-hub-max\:px-12 { padding-left: 3rem; padding-right: 3rem; }
          .nest-hub-max\:pt-8 { padding-top: 2rem; }
          .nest-hub-max\:mb-4 { margin-bottom: 1rem; }
          .nest-hub-max\:mb-2 { margin-bottom: 0.5rem; }
          .nest-hub-max\:px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
          .nest-hub-max\:py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .nest-hub-max\:mr-3 { margin-right: 0.75rem; }
          .nest-hub-max\:h-6 { height: 1.5rem; }
          .nest-hub-max\:text-base { font-size: 1rem; line-height: 1.5rem; }
          .nest-hub-max\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
          .nest-hub-max\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
          .nest-hub-max\:max-w-3xl { max-width: 48rem; }
          .nest-hub-max\:mx-auto { margin-left: auto; margin-right: auto; }
          .nest-hub-max\:flex-row { flex-direction: row; }
          .nest-hub-max\:space-y-0 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0px * var(--tw-space-y-reverse)); }
          .nest-hub-max\:space-x-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1.5rem * var(--tw-space-x-reverse)); margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse))); }
          .nest-hub-max\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .nest-hub-max\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .nest-hub-max\:w-auto { width: auto; }
          .nest-hub-max\:justify-center { justify-content: center; }
          .nest-hub-max\:mb-6 { margin-bottom: 1.5rem; }
          .nest-hub-max\:gap-10 { gap: 2.5rem; }
          .nest-hub-max\:max-w-lg { max-width: 32rem; }
          .nest-hub-max\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
          .nest-hub-max\:text-center { text-align: center; }
          .nest-hub-max\:w-56 { width: 14rem; }
          .nest-hub-max\:h-56 { height: 14rem; }
          .nest-hub-max\:w-48 { width: 12rem; }
          .nest-hub-max\:h-48 { height: 12rem; }
          .nest-hub-max\:block { display: block; }
          .nest-hub-max\:flex { display: flex; }
          .nest-hub-max\:hidden { display: none; }
          .nest-hub-max\:min-h-\[800px\] { min-height: 800px; margin-left: 10rem; }
          .nest-hub-max\:max-w-5xl { max-width: 64rem; }
          .nest-hub-max\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .nest-hub-max\:bottom-16 { bottom: 4rem; }
          .nest-hub-max\:h-16 { height: 4rem; }
          .nest-hub-max\:h-full { height: 100%; }
        }
        
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
        
        /* Nest Hub specific styles */
        @media (width: 1024px) and (height: 600px) and (orientation: landscape) {
          .partners-container::before,
          .partners-container::after {
            width: 80px;
          }
        }
        
        /* Nest Hub Max specific styles */
        @media (width: 1280px) and (height: 800px) and (orientation: landscape) {
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
        
        /* Nest Hub specific styles */
        @media (width: 1024px) and (height: 600px) and (orientation: landscape) {
          .partners-container::before,
          .partners-container::after {
            width: 80px;
          }
        }
        
        /* Nest Hub Max specific styles */
        @media (width: 1280px) and (height: 800px) and (orientation: landscape) {
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
    </>
  );
};

export default HeroSection;