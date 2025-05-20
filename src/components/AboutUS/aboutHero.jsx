import React from 'react';
import styles from './aboutHero.module.css';
import Image from 'next/image'; // Import the Image component from Next.js

const AboutHeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.image}>
          {/* Use the Image component from next/image */}
          <Image 
            src="/About-Hero.png" 
            alt="Hero Section About Us" 
            width={1200}  // Provide the width of the image
            height={800}  // Provide the height of the image
            layout="intrinsic" // Optional: Helps maintain aspect ratio
          />
        </div>
        <div className={styles.heading}>
          Empowering  <span className={styles.highlight}>Businesses</span> with Cutting-Edge
          <span className={styles.highlight}> Software Solutions</span> & Top-Tier Talent.
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
