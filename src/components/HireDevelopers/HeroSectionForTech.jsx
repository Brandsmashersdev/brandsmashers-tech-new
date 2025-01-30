import React from "react";
import styles from "./HeroSectionForTech.module.css";

const HeroSectionTech = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Text Content */}
          <div className={styles.textContainer}>
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                <span className={styles.brandCyan}>{title}</span>
              </p>
            </div>

            <p className={styles.description}>{description}</p>

            <button className={styles.contactButton}>{buttonText}</button>
          </div>

          {/* Image Container */}
          <div className={styles.imageContainer}>
            <div className={styles.brandImage}>
              <img
                src={imageSrc}
                alt="Hero Section Image"
                className={styles.objectContain}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTech;
