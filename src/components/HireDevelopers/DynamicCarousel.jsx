import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import styles from "./DynamicCarousel.module.css";

const TechnologyCard = React.memo(
  ({ icon1, icon2, title, description, isVisible }) => (
    <div
      className={`${styles.technology_card} ${
        isVisible ? styles.fade_in : styles.fade_out
      }`}
    >
      {/* NEW HEADER WRAPPER: Keeps Icon and Title in one line */}
      <div className={styles.card_header}>
        <div className={styles.icon_container}>
          <Image
            src={icon1 || "/placeholder.png"}
            alt={`${title} primary icon`}
            width={50}
            height={50}
            className={styles.tech_icon}
          />
          {icon2 && (
            <Image
              src={icon2}
              alt={`${title} secondary icon`}
              width={50}
              height={50}
              className={styles.tech_icon}
            />
          )}
        </div>
        <h3 className={styles.card_title}>{title}</h3>
      </div>

      <p className={styles.card_description}>{description}</p>
    </div>
  )
);

TechnologyCard.displayName = "TechnologyCard";

const DynamicCarousel = ({
  heading = {},
  title = "",
  description = "",
  cardsData = [],
}) => {
  // ... (All your existing logic remains exactly the same below) ...
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [totalSlides, setTotalSlides] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);

  const getCardsPerSlide = useCallback(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 768) return 1;
      if (width >= 768 && width <= 834) return 2;
      if (width > 834 && width <= 1024) return 2;
      if (width > 1024 && width <= 1366) return 3;
      return 3;
    }
    return 3;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerSlide = getCardsPerSlide();
      if (newCardsPerSlide !== cardsPerSlide) {
        setCardsPerSlide(newCardsPerSlide);
        setCurrentSlide(0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getCardsPerSlide, cardsPerSlide]);

  useEffect(() => {
    if (!Array.isArray(cardsData) || cardsData.length === 0) {
      setTotalSlides(1);
      setCurrentCards([]);
      return;
    }
    const newTotalSlides = Math.ceil(cardsData.length / cardsPerSlide);
    setTotalSlides(newTotalSlides);

    const validCurrentSlide = Math.min(currentSlide, newTotalSlides - 1);
    if (validCurrentSlide !== currentSlide) {
      setCurrentSlide(validCurrentSlide);
    }

    const newCurrentCards = cardsData.slice(
      validCurrentSlide * cardsPerSlide,
      validCurrentSlide * cardsPerSlide + cardsPerSlide
    );
    setCurrentCards(newCurrentCards);
  }, [cardsData, cardsPerSlide, currentSlide]);

  useEffect(() => {
    if (totalSlides <= 1) return;
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

  const handleDotClick = useCallback(
    (index) => {
      if (!isTransitioning && index !== currentSlide) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide(index);
          setIsTransitioning(false);
        }, 500);
      }
    },
    [isTransitioning, currentSlide]
  );

  if (!Array.isArray(cardsData) || cardsData.length === 0) {
    return null;
  }

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.carousel_container}>
        {heading && (
          <h1 className={styles.carousel_heading}>
            {heading.beforeHighlight || ""}
            {heading.highlight && <span>{heading.highlight}</span>}
            {heading.afterHighlight || ""}
          </h1>
        )}

        {description && (
          <p className={styles.carousel_description}>{description}</p>
        )}

        <div className={styles.cards_container}>
          {currentCards.map((card) => (
            <TechnologyCard
              key={card.id || Math.random()}
              icon1={card.icon1}
              icon2={card.icon2}
              title={card.title || ""}
              description={card.description || ""}
              isVisible={!isTransitioning}
            />
          ))}
        </div>

        {totalSlides > 1 && (
          <div className={styles.navigation_dots}>
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  currentSlide === index ? styles.active : ""
                }`}
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
