import React, { useEffect, useRef } from 'react';
import styles from './FloatingBubbles.module.css';

const stats = [
  { value: '100+', label: 'IT Resources', icon: '👨‍💻' },
  { value: '500+', label: 'Projects', icon: '🚀' },
  { value: '8+', label: 'Years Experience', icon: '⭐' },
  { value: '3Mn$', label: 'Revenue', icon: '💰' },
  { value: '200+', label: 'Clients', icon: '🤝' },
];

const FloatingBubbles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bubbles = container.querySelectorAll(`.${styles.bubble}`);
    
    bubbles.forEach((bubble, index) => {
      // Random initial position
      const randomX = Math.random() * 80 + 10; // 10% to 90%
      const randomY = Math.random() * 80 + 10; // 10% to 90%
      
      bubble.style.left = `${randomX}%`;
      bubble.style.top = `${randomY}%`;
      
      // Random animation delay
      bubble.style.animationDelay = `${index * 0.5}s`;
      
      // Random animation duration for variety
      const duration = 3 + Math.random() * 2; // 3-5 seconds
      bubble.style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      className={styles.container}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={styles.bubble}
        >
          <span className={styles.icon}>{stat.icon}</span>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
      
      {/* Background decorative elements */}
      <div className={styles.backgroundOrb}>
        <div className={`${styles.backgroundOrb} ${styles.orb1}`}></div>
        <div className={`${styles.backgroundOrb} ${styles.orb2}`}></div>
        <div className={`${styles.backgroundOrb} ${styles.orb3}`}></div>
      </div>
    </div>
  );
};

export default FloatingBubbles;
