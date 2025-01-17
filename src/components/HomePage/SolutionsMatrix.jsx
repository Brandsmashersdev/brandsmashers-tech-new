import React from 'react';
import styles from './SolutionsMatrix.module.css';

const SolutionsMatrix = () => {
  const stats = [
    { value: "6+", label: "Years of Expertise" },
    { value: "95+", label: "Timely Deliveries" },
    { value: "20+", label: "Markets Worldwide" },
    { value: "50+", label: "Global Brands" },
  ];

  return (
    <div className={styles.solutionsContainer}>
      <div className={styles.solutionsWrapper}>
        {/* Left Section */}
        <div className={styles.solutionsLeft}>
          <h2 className={styles.solutionsTitle}>Solutions Matrix</h2>
          <h3 className={styles.solutionsSubtitle}>
            Proof is in the <span className={styles.italicText}>Numbers</span>
          </h3>
          <p className={styles.solutionsDescription}>
            A Reliable Tech Partner Driving Growth and Preparing You for the Future with Innovative Solutions.
          </p>
          <button className={styles.solutionsButton}>Get Started</button>
        </div>

        {/* Right Section */}
        <div className={styles.solutionsRight}>
          <div className={styles.solutionsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.solutionsStat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMatrix;