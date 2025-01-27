import React from 'react';
import styles from './ourBusiness.module.css';

const OurBusiness = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
         <h2>Our <span className={styles.highlight}>Business Engagement </span>Approach</h2>
          <p>
          At Brandsmashers, we offer flexible and client-centric business engagement models that ensure efficiency
          and high-quality results. Whether you're looking to augment your team with skilled professionals or need a dedicated team to build and manage your software solutions, we have the right approach for you.
          </p>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>End-to-End Services</h3>
            <p>
            We provide full software development services, including planning, design, development, testing, and maintenance, ensuring that your project is completed to the highest standard.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Team Augmentation</h3>
            <p>
            Access a pool of highly experienced developers and IT professionals to fill immediate skill gaps, boost your team's capabilities, and accelerate project timelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBusiness;