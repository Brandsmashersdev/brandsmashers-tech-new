import React from 'react';
import styles from './ourBusiness.module.css';

const OurBusiness = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
         <h2>Our <span className={styles.highlight}>Business Engagement </span>Approach</h2>
          <p>
          At Brandsmashers, we provide dynamic and client-focused engagement models designed to maximize efficiency and deliver top-tier results. Whether you need to scale your team with skilled professionals or require a dedicated development team to bring your vision to life, we have the perfect solution for you.

          </p>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Comprehensive Development Solutions</h3>
            <p>
            We offer full-cycle software development services, covering everything from strategic planning and intuitive design to seamless development, rigorous testing, and ongoing maintenance. Our commitment is to deliver high-quality solutions that align with your business goals.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Expert Team Augmentation</h3>
            <p>
            Gain access to a curated pool of seasoned developers and IT specialists ready to seamlessly integrate with your team. Bridge skill gaps, enhance your team’s capabilities, and accelerate project delivery with our flexible and scalable talent solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBusiness;