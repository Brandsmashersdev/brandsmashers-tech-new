import { useState, useEffect, useRef, useCallback } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);

  const callback = useCallback((entries) => {
    const [firstEntry] = entries;
    setEntry(firstEntry);
    setIsIntersecting(firstEntry.isIntersecting);
    
    if (firstEntry.isIntersecting && !hasIntersected) {
      setHasIntersected(true);
    }
  }, [hasIntersected]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(callback, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      root: options.root || null,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callback, options.threshold, options.rootMargin, options.root]);

  const ref = useCallback((node) => {
    elementRef.current = node;
  }, []);

  return {
    ref,
    isIntersecting,
    hasIntersected,
    entry,
  };
};

export default useIntersectionObserver;
