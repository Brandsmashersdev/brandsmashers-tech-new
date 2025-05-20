import React from 'react';
import styles from './herosection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        
        <div className={styles.heading}>
        Deeply <span className={styles.highlight}>customized software solutions</span> and 
          <span className={styles.highlight}> IT services </span> to make your business disruption-proof
        </div>
      </div>
    </div>
  );
};

export default HeroSection;