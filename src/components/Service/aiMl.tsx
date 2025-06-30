import React from 'react';
import styles from './rightservice.module.css';
import Image from 'next/image';

const AIML = () => {
  return (
    <div className={styles.serviceContainer} id='ai-ml'>
      <div className={styles.contentWrapper}>
        {/* Left Content Section */}
        <div className={styles.leftSection}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>
              <span>AI/ML </span>
              <span className={styles.highlight}>Development</span>
            </h1>
            <p className={styles.subtitle}>
              Leverage advanced AI and ML for actionable insights and innovation
            </p>
          </div>

          <div className={styles.textContent}>
            <p>
              Leverage Advanced AI and ML for Actionable Insights and Innovation! The Brandsmashers team
              offers innovative AI and ML solutions that create measurable change in your enterprise.
              We specialize in developing, implementing, and maintaining AI and machine learning solutions
              for government organizations, focusing on predicting customer trends and improving resource management.
              Our core expertise in Machine Learning drives tangible results for businesses, incorporating the
              latest technologies to keep you ahead in today&apos;s digital world.
              Choose Brandsmashers for professional AI/ML services and let us help you achieve your strategic goals
              with enhanced technologies.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={styles.rightSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/aiml.png"
              alt="AI/ML Development"
              className={styles.image}
              width={500} // or your desired width
              height={300} // or your desired height
            />

            {/* Overlay Box */}
            <div className={styles.overlayBox}>
              <p>We leverage <span className={styles.highlightoverlay}>AI and ML</span> to enhance operational
                efficiency by automating and streamlining your business processes. Our solutions provide deep insights
                into customer behaviors, enabling more informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIML;
