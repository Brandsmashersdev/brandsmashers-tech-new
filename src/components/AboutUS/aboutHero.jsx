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
        Creating <span className={styles.highlight}>technology solutions</span> that enable businesses to achieve
        <span className={styles.highlight}> success </span>.
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;