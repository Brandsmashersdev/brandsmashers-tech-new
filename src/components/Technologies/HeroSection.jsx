import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.image}>
          <img src="/HeroSection-Technologies.svg" alt="Hero Section Technologies" />
        </div>
        <div className={styles.heading}>
          Advancing digital <span className={styles.highlight}>disruptions</span> with breakthrough software{' '}
          <span className={styles.highlight}>development solutions</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
