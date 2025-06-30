import React, { useState } from "react";
import styles from "./herosection.module.css";
import TrialForm from "./Android/Trial"; 
import Image from 'next/image'; // Import the Image component from next/image

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
              {/* Replace <img> with <Image> from next/image */}
              <Image
                src="/heroSection.png" // Path to your image
                alt="Brandsmashers Logo"
                width={500} // Define width for optimization (adjust as needed)
                height={500} // Define height for optimization (adjust as needed)
                className={styles.objectContain} // Same class as before for styling
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
