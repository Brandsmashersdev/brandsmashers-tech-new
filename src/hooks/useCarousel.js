import { useState, useEffect, useCallback, useRef } from 'react';

const useCarousel = (items = [], autoPlay = false, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goTo = useCallback((index) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  }, [items.length]);

  const pause = useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && autoPlay && items.length > 1) {
      intervalRef.current = setInterval(next, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, autoPlay, items.length, interval, next]);

  // Pause on hover (optional)
  const handleMouseEnter = useCallback(() => {
    if (autoPlay) {
      pause();
    }
  }, [autoPlay, pause]);

  const handleMouseLeave = useCallback(() => {
    if (autoPlay) {
      play();
    }
  }, [autoPlay, play]);

  return {
    currentIndex,
    currentItem: items[currentIndex] || null,
    isPlaying,
    next,
    prev,
    goTo,
    pause,
    play,
    handleMouseEnter,
    handleMouseLeave,
    totalItems: items.length,
  };
};

export default useCarousel;
