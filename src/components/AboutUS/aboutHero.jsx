import React from 'react';
import styles from './aboutHero.module.css';

const AboutHeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.image}>
          <img src="/About-Hero.png" alt="Hero Section About Us" />
        </div>
        <div className={styles.heading}>
        Empowering  <span className={styles.highlight}>Businesses  </span> with Cutting-Edge
        <span className={styles.highlight}> Software Solutions
        </span> & Top-Tier Talent.
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;