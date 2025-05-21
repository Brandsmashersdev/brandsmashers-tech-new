import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import styles from './DynamicCarousel.module.css';

const TechnologyCard = ({ icon1, icon2, title, description, isVisible }) => (
  <div className={`${styles.technology_card} ${isVisible ? styles.fade_in : styles.fade_out}`}>
    <div className={styles.icon_container}>
      {/* Use next/image for optimized image rendering */}
      <Image 
        src={icon1 || '/placeholder.png'} 
        alt={`${title} primary icon`} 
        width={50} 
        height={50} // Set appropriate width and height
      />
      {icon2 && (
        <Image 
          src={icon2} 
          alt={`${title} secondary icon`} 
          width={50} 
          height={50} // Set appropriate width and height
        />
      )}
    </div>
    <h3 className={styles.card_title}>{title}</h3>
    <p className={styles.card_description}>{description}</p>
  </div>
);

const DynamicCarousel = ({ heading = {}, title = '', description = '', cardsData = [] }) => {
  // Initialize hooks at the top level
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Ensure the data is valid before proceeding with the component logic
  if (!Array.isArray(cardsData) || cardsData.length === 0) {
    return null; // Return null if no cards are available
  }

  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const totalSlides = Math.ceil(cardsData.length / cardsPerSlide);

  // Handle window resize to adjust the number of cards per slide
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerSlide = getCardsPerSlide();
      if (newCardsPerSlide !== cardsPerSlide) {
        setCardsPerSlide(newCardsPerSlide);
        setCurrentSlide(0); // Reset to first slide on resize
      }
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsPerSlide]);

  // Slide logic, now checking conditions inside the useEffect
  useEffect(() => {
    if (totalSlides <= 1) return; // No sliding needed if there's only one slide

    const nextSlide = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsTransitioning(false);
      }, 500);
    };

    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleDotClick = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const currentCards = cardsData.slice(
    currentSlide * cardsPerSlide,
    (currentSlide * cardsPerSlide) + cardsPerSlide
  );

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.carousel_container}>
        {heading && (
          <h1 className={styles.carousel_heading}>
            {heading.beforeHighlight || ''} 
            {heading.highlight && <span>{heading.highlight}</span>} 
            {heading.afterHighlight || ''}
          </h1>
        )}

        {description && (
          <p className={styles.carousel_description}>
            {description}
          </p>
        )}

        <div className={styles.cards_container}>
          {currentCards.map((card) => (
            <TechnologyCard 
              key={card.id || Math.random()}
              icon1={card.icon1}
              icon2={card.icon2}
              title={card.title || ''}
              description={card.description || ''}
              isVisible={!isTransitioning}
            />
          ))}
        </div>

        {totalSlides > 1 && (
          <div className={styles.navigation_dots}>
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicCarousel;
