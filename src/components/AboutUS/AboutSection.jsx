import React from 'react';
import styles from './section1.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>
          Founded in 2018, <strong>Brandsmashers</strong> has quickly grown into a trusted name in the world of software development and staff augmentation. 
           specialize in developing tailor-made software solutions that drive business success and help companies scale their
            operations with top-tier talent. By combining technical expertise with innovative solutions, we help our 
            clients navigate the complexities of digital transformation with ease.
          </p>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <p>
              Our mission is to empower businesses by providing top-notch software solutions and access to highly skilled talent, helping them accelerate growth and drive innovation. We aim to be a reliable partner that delivers superior quality and sustainable results, enabling our clients to achieve their goals.
            </p>
          </div>

          <div className={styles.card}>
            <p>
              We envision a future where Brandsmashers is the go-to partner for businesses looking to innovate, scale, and thrive in a constantly evolving digital landscape. Our goal is to set new benchmarks in delivering software development and staff augmentation services that power businesses to new heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;