import React from "react";
import styles from "./herosection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Text Content */}
          <div className={styles.textContainer}>
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                We <span className={styles.brandCyan}>Deliver {" "}</span>
                 Perfectly <br/>Matched, Highly<br/>
                <span className={styles.brandCyan}> Experienced </span>Developers!
              </p>
            </div>

            <p className={styles.description}>
              Get the best profiles in 24-48 hours,conduct just one or two
              interviews with pre-vetted candidates, and onboard our domain
              experts immediately.
            </p>

            <button className={styles.contactButton}>Hire Developer</button>
          </div>

          {/* Image Container */}
          <div className={styles.imageContainer}>
            <div className={styles.brandImage}>
              <img
                src="./heroSection.png"
                alt="Brandsmashers Logo"
                className={styles.objectContain}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
