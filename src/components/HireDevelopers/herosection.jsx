import React, { useState } from "react";
import styles from "./herosection.module.css";
import TrialForm from "./Android/Trial"; 

const HeroSection = () => {
  // State to control the visibility of the TrialForm
  const [showTrialForm, setShowTrialForm] = useState(false);

  // Open handler to display the TrialForm
  const OpenHandler = () => {
    setShowTrialForm(true);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Text Content */}
          <div className={styles.textContainer}>
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                We <span className={styles.brandCyan}>Deliver {" "}</span>
                Perfectly <br />Matched, Highly<br />
                <span className={styles.brandCyan}> Experienced </span>Developers!
              </p>
            </div>

            <p className={styles.description}>
              Get the best profiles in 24-48 hours, conduct just one or two
              interviews with pre-vetted candidates, and onboard our domain
              experts immediately.
            </p>

            <button onClick={OpenHandler} className={styles.contactButton}>
              Hire Developer
            </button>
          </div>

          {/* Image Container */}
          <div className={styles.imageContainer}>
            <div className={styles.brandImage}>
              <img
                src="/heroSection.png"
                alt="Brandsmashers Logo"
                className={styles.objectContain}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the TrialForm */}
      {showTrialForm && <TrialForm />}
    </div>
  );
};

export default HeroSection;
