import React from 'react';
import styles from './section1.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>
          Founded in 2018, <strong>Brandsmashers</strong> has rapidly established itself as a trusted leader in software development and staff augmentation. We specialize in delivering tailor-made software solutions that empower businesses to scale efficiently, optimize operations, and stay ahead in the digital landscape. Our expertise spans a wide range of industries, including fintech, healthcare, e-commerce, and education, ensuring that our clients receive cutting-edge, industry-specific solutions. With a strong focus on innovation, agility, and quality, we leverage the latest technologies, including AI, cloud computing, and full-stack development, to transform ideas into impactful digital products. At Brandsmashers, we don’t just build software—we create long-term technology partnerships that drive sustainable growth and success.
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