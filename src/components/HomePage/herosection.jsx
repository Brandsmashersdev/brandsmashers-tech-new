import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { Send, Code, ChevronDown, Star, ArrowRight } from "lucide-react";
import Head from "next/head";
import Link from 'next/link';

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
  const calculateResponsiveWidth = useCallback(() => {
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
  }, []);

  useEffect(() => {
    calculateResponsiveWidth();
    window.addEventListener('resize', calculateResponsiveWidth);

    return () => window.removeEventListener('resize', calculateResponsiveWidth);
  }, [calculateResponsiveWidth]);

  // Partners auto-scroll effect - Optimized with React components
  const [partnerRepeatCount, setPartnerRepeatCount] = useState(5);

  const updateRepeatCount = useCallback(() => {
    setPartnerRepeatCount(window.innerWidth < 768 ? 8 : 5);
  }, []);

  useEffect(() => {
    updateRepeatCount();
    window.addEventListener('resize', updateRepeatCount);

    return () => window.removeEventListener('resize', updateRepeatCount);
  }, [updateRepeatCount]);

  // Scroll indicator fade effect
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const newOpacity = 1 - (scrollY / 200);
    setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (

    <>

      <Head>
        <title>Hire Remote Developers from India | Brandsmashers Tech!</title>
        <meta
          name="description"
          content="Hire pre-vetted remote developers globally on flexible contracts. Get expert talent for your project—hire now and elevate your business!"
        />
      </Head>
      <section className="relative">
        {/* Hero Main Section */}
        <div className="w-full min-h-screen bg-cover bg-center relative overflow-hidden">
          {/* Video Background - Optimized with lazy loading */}
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/heroSection.png"
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
              {/* Conversion-optimized badge with pulse animation */}
              <div className="inline-flex items-center px-3 sm:px-4 nest-hub:px-4 nest-hub-max:px-5 py-1.5 nest-hub:py-1.5 nest-hub-max:py-2 rounded-full bg-gradient-to-r from-[#ff5010] to-[#ff7040] text-white font-medium mt-8 sm:mt-12 md:mt-16 lg:mt-28 mb-4 sm:mb-6 nest-hub:mb-3 nest-hub-max:mb-4 shadow-lg shadow-[#ff5010]/25 animate-pulse">
                <span className="text-sm nest-hub:text-sm nest-hub-max:text-base">⚡ Matched in 48 Hours · 7-Day Risk-Free Trial</span>
              </div>

              {/* Conversion-optimized headline - focus on speed + outcome */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl nest-hub:text-3xl nest-hub-max:text-4xl font-bold leading-tight mb-4 sm:mb-6 nest-hub:mb-3 nest-hub-max:mb-4">
                <span className="text-white">Scale Your Engineering </span>
                <div className="relative inline-block">
                  <span className="relative z-10 text-[#ff5010]">Team in 48 Hours</span>
                </div>
              </h1>

              {/* Conversion-optimized subheading with value proposition */}
              <div className="mb-4 sm:mb-6 nest-hub:mb-3 nest-hub-max:mb-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-xl nest-hub:text-lg nest-hub-max:text-xl font-medium mb-3 nest-hub:mb-2 nest-hub-max:mb-2 text-gray-200 max-w-2xl">
                  Pre-vetted Indian developers who integrate as your extended team. <span className="text-[#ff5010] font-bold">CMMI Level 4 certified.</span> 500+ projects delivered. <span className="text-green-400 font-semibold">Zero risk — pay only if satisfied.</span>
                </p>
              </div>

              {/* Enhanced CTA buttons - optimized layout for Nest Hub */}
              <div className="flex flex-col sm:flex-row nest-hub:flex-row nest-hub-max:flex-row space-y-3 sm:space-y-0 nest-hub:space-y-0 nest-hub-max:space-y-0 sm:space-x-4 nest-hub:space-x-4 nest-hub-max:space-x-6 md:space-x-6 justify-center md:justify-start nest-hub:justify-center nest-hub-max:justify-center mb-6 sm:mb-10 nest-hub:mb-4 nest-hub-max:mb-6">
                <Link href="/contact">
                  <button className="group relative overflow-hidden px-4 sm:px-6 nest-hub:px-5 nest-hub-max:px-6 py-2 sm:py-3 nest-hub:py-2.5 nest-hub-max:py-3 bg-[#ff5010] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto nest-hub:w-auto nest-hub-max:w-auto">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <div className="relative z-10 flex items-center justify-center space-x-2">
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      <span className="text-base">Book a Free Consultation</span>
                    </div>
                  </button>
                </Link>

                <Link href="/developers">
                  <button className="group relative overflow-hidden px-4 sm:px-6 nest-hub:px-5 nest-hub-max:px-6 py-2 sm:py-3 nest-hub:py-2.5 nest-hub-max:py-3 bg-black border border-[#ff5010] text-[#ff5010] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto nest-hub:w-auto nest-hub-max:w-auto">
                    <span className="absolute inset-0 bg-[#ff5010] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <div className="relative z-10 flex items-center justify-center gap-2">

                      <Code
                        size={16}
                        className="text-[#ff5010] group-hover:text-white transition-all duration-300 group-hover:rotate-12 flex-shrink-0"
                      />

                      <span className="text-base text-[#ff5010] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                        Browse Developers
                      </span>

                    </div>
                  </button>
                </Link>
              </div>

              {/* Trust Badges - Above the fold */}
              <div className="mb-6 sm:mb-8 nest-hub:mb-4 nest-hub-max:mb-6">
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 nest-hub:gap-3 nest-hub-max:gap-4">
                  {/* CMMI Level 4 */}
                  <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50">
                    <span className="text-xl">🏆</span>
                    <span className="text-xs sm:text-sm text-gray-200 font-medium">CMMI Level 4</span>
                  </div>
                  {/* ISO 27001 */}
                  <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50">
                    <span className="text-xl">🔒</span>
                    <span className="text-xs sm:text-sm text-gray-200 font-medium">ISO 27001</span>
                  </div>
                  {/* Client Satisfaction */}
                  <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50">
                    <span className="text-xl">⭐</span>
                    <span className="text-xs sm:text-sm text-gray-200 font-medium">99% Client Satisfaction</span>
                  </div>
                  {/* Vetting Process Link */}
                  <Link href="/vetting-process" className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50 hover:border-[#ff5010] transition-colors">
                    <span className="text-xl text-white">✓</span>
                    <span className="text-xs sm:text-sm text-gray-200 font-medium">Top 3% Vetted</span>
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 nest-hub:gap-3 nest-hub-max:gap-4 mt-3">
                  <div className="text-xs sm:text-sm text-gray-400">500+ Projects Delivered</div>
                  <span className="text-gray-600">•</span>
                  <div className="text-xs sm:text-sm text-gray-400">50+ Expert Developers</div>
                  <span className="text-gray-600 hidden sm:inline">•</span>
                  <div className="text-xs sm:text-sm text-gray-400 hidden sm:block">48hr Average Matching</div>
                </div>
              </div>

              {/* Stats - hidden on desktop, visible on tablet/mobile (replaces floating cards) */}
              <div className="md:hidden grid grid-cols-3 gap-3 sm:gap-6 nest-hub:gap-8 nest-hub-max:gap-10 max-w-xs sm:max-w-sm nest-hub:max-w-md nest-hub-max:max-w-lg mx-auto nest-hub:mx-auto nest-hub-max:mx-auto">
                <div className="text-center">
                  <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl nest-hub:text-2xl nest-hub-max:text-3xl">500+</div>
                  <div className="text-gray-400 text-xs nest-hub:text-sm nest-hub-max:text-base">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl nest-hub:text-2xl nest-hub-max:text-3xl">48hr</div>
                  <div className="text-gray-400 text-xs nest-hub:text-sm nest-hub-max:text-base">Matching</div>
                </div>
                <div className="text-center">
                  <div className="text-[#ff5010] font-bold text-xl sm:text-2xl md:text-3xl nest-hub:text-2xl nest-hub-max:text-3xl">99%</div>
                  <div className="text-gray-400 text-xs nest-hub:text-sm nest-hub-max:text-base">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Floating Stat Cards - Desktop Only (hidden below 768px) */}
            <div className="hidden md:block absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-30">
              <div className="flex flex-col gap-4 lg:gap-6">
                {/* 500+ Projects */}
                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-5 lg:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 min-w-[180px] lg:min-w-[220px]">
                  <div className="text-2xl lg:text-3xl font-bold text-[#ff5010]">500+</div>
                  <div className="text-sm text-gray-300 mt-1">Projects Delivered</div>
                </div>
                {/* 48hr Matching */}
                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-5 lg:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 min-w-[180px] lg:min-w-[220px]">
                  <div className="text-2xl lg:text-3xl font-bold text-[#ff5010]">48hr</div>
                  <div className="text-sm text-gray-300 mt-1">Average Matching</div>
                </div>
                {/* 99% Satisfaction */}
                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-5 lg:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 min-w-[180px] lg:min-w-[220px]">
                  <div className="text-2xl lg:text-3xl font-bold text-[#ff5010]">99%</div>
                  <div className="text-sm text-gray-300 mt-1">Client Satisfaction</div>
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
                {useMemo(() => {
                  return Array.from({ length: partnerRepeatCount }).map((_, repeatIndex) =>
                    partners.map((partner, partnerIndex) => (
                      <div
                        key={`${repeatIndex}-${partnerIndex}`}
                        className="partner-logo flex-shrink-0 transition-transform hover:scale-110 duration-300"
                        style={{ margin: `0 ${typeof window !== 'undefined' && window.innerWidth < 640 ? '8px' : '12px'}` }}
                      >
                        <Image
                          src={partner.src}
                          alt={partner.alt}
                          className="h-6 sm:h-8 md:h-10 w-auto object-contain transition-all duration-300 filter brightness-0 invert opacity-80 hover:opacity-100"
                          loading="lazy"
                          width={80}
                          height={40}
                        />
                      </div>
                    ))
                  );
                }, [partnerRepeatCount])}
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