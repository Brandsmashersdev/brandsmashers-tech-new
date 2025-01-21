import React from 'react';
import styles from './whyus.module.css';

const WhyUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Why Brandsmashers?</h2>
        <p>What sets us apart is our expertise and dedication to your success.</p>
      </div>

      <div className={styles.gridContainer}>
        {/* Row 1 */}
        <div className={`${styles.card} ${styles.pinkCard}`}>
          <span className={styles.icon}>🏠</span>
          <h3>Tailored Solutions</h3>
          <p>We offer customized services to match your specific business goals, whether for small-scale or high-impact projects.</p>
        </div>

        <div className={`${styles.card} ${styles.greenCard}`}>
          <span className={styles.icon}>💻</span>
          <h3>Comprehensive IT Services</h3>
          <p>From web development to mobile apps and digital marketing, we cover all your IT needs with precision.</p>
        </div>

        <div className={`${styles.card} ${styles.blueCard}`}>
          <span className={styles.icon}>🛋️</span>
          <h3>Client-Centric Focus</h3>
          <p>Our priority is your satisfaction, with flexible engagement models and dedicated support throughout.</p>
        </div>

        {/* Row 2 */}
        <div className={`${styles.card} ${styles.yellowCard}`}>
          <span className={styles.icon}>🔧</span>
          <h3>Innovative Approach</h3>
          <p>We stay updated on the latest trends, providing future-proof solutions that drive growth.</p>
        </div>

        <div className={`${styles.card} ${styles.lightBlueCard}`}>
          <span className={styles.icon}>☁️</span>
          <h3>Skilled Team</h3>
          <p>Our expert developers specialize in technologies like ReactJs, NextJs, and AWS, ensuring top-notch results.</p>
        </div>

        <div className={`${styles.card} ${styles.purpleCard}`}>
          <span className={styles.icon}>📍</span>
          <h3>Proven Experience</h3>
          <p>With a track record of delivering projects on time and beyond expectations, we guarantee success.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;