import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const TechnologyCard = ({ icon1, icon2, title, description, isVisible }) => (
  <div className={`w-full md:w-72 h-auto min-h-[237px] bg-[#343333] p-6 flex flex-col items-center justify-center rounded-[12px_55px_12px_55px] border-l-[7px] border-[#2CC5D9] transition-opacity duration-500 flex-shrink-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <div className="flex gap-4 mb-4">
      <Image src={icon1} alt={`${title} primary icon`} className="w-12 h-12" width={48} height={48} />
      <Image src={icon2} alt={`${title} secondary icon`} className="w-12 h-12" width={48} height={48} />
    </div>
    <h3 className="text-white text-xl mb-4 text-center">{title}</h3>
    <p className="text-[#00B2FF] text-sm text-[#2CC5D9] text-center">{description}</p>
  </div>
);

const CARDS_DATA = [
  // Same data...
];

const AndroidCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Adjust cards per slide based on screen size
  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3; // Default
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
  const totalSlides = Math.ceil(CARDS_DATA.length / cardsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerSlide = getCardsPerSlide();
      if (newCardsPerSlide !== cardsPerSlide) {
        setCardsPerSlide(newCardsPerSlide);
        setCurrentSlide(0); // Reset to first slide on resize
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsPerSlide]);

  // Wrap nextSlide in useCallback to prevent unnecessary recreation
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 500);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleDotClick = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const currentCards = CARDS_DATA.slice(
    currentSlide * cardsPerSlide,
    (currentSlide * cardsPerSlide) + cardsPerSlide
  );

  return (
    <div className="w-full bg-[#D9D9D9] py-8 flex justify-center">
      <div className="w-[90%] md:w-[80%] max-w-[1440px] mx-auto flex flex-col items-center">
        <h1 className="w-full max-w-[1160px] text-center font-inter text-black text-2xl md:text-3xl lg:text-4xl italic font-medium leading-normal mb-4">
          Hire Remote <span className="text-[#2CC5D9]">Android Application Developers</span> with Relevant Technologies
        </h1>
        
        <p className="w-full max-w-[941px] font-inter text-black text-base md:text-lg lg:text-xl italic font-medium leading-normal text-center mb-8">
          The Android platform is a robust and highly favored platform for developing top-notch mobile apps. 
          Explore our array of relevant services.
        </p>

        <div className="w-full overflow-hidden">
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap md:flex-nowrap">
            {currentCards.map((card) => (
              <TechnologyCard 
                key={card.id}
                icon1={card.icon1}
                icon2={card.icon2}
                title={card.title}
                description={card.description}
                isVisible={!isTransitioning}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#00B2FF]' : 'bg-[#4B5563]'}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AndroidCarousel;
