import React from "react";
import styles from "./herosection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Text Content */}
          <div className={styles.textContainer}>
            <h1 className={styles.heroTitle}>
              <span className={styles.brandCyan}>Brandsmashers</span>{" "}
              <span className={styles.textWhite}>Tech.</span>
            </h1>

            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                Expert <span className={styles.brandCyan}>Developers</span>,<br />
                Streamlined<span className={styles.brandCyan}> Solutions</span>
              </p>
            </div>

            <p className={styles.description}>
              All in One Place with Brandsmashers Tech
            </p>

            <button className={styles.contactButton}>
              Contact with us
            </button>
          </div>

          {/* Image Container */}
          <div className={styles.imageContainer}>
            <div className={styles.brandImage}>
              <img
                src="./hero-img.png"
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
