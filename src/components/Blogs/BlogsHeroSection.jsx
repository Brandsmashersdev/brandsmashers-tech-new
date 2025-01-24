import React from "react";
import styles from "./BlogsHeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/Blogs-HeroSection.png" />
      </div>
    </div>
  );
};

export default HeroSection;
