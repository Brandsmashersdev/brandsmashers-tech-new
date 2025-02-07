import React from 'react';
import styles from './rightservice.module.css';

const Digital = () => {
  return (
    <div className={styles.serviceContainer} id='digital-marketing'>
      <div className={styles.contentWrapper}>
        {/* Left Content Section */}
        <div className={styles.leftSection}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>
              <span>Digital </span>
              <span className={styles.highlight}>Marketing</span>
            </h1>
            <p className={styles.subtitle}>
              Grow Your Brand with Tailored Digital Marketing Strategies!
            </p>
          </div>

          <div className={styles.textContent}>
            <p>
              At Brandsmashers, the Best Digital Marketing Agency in Bhopal, we start our digital marketing strategies 
              by understanding your market and your consumers for the most tailored promo setups.
              It provides you with complete solutions through effective Search Engine Optimization, engaging Social Media Management, 
              and effective and interesting Content Marketing.
              Our team also understands that digital marketing should be a constant evolution process, so we closely supervise 
              the existing strategies in order to optimize results.
              This zeal to deliver growth helps guarantee not only the growth of your business but also the differentiation of the 
              same in a competitive environment. Try Brandsmashers to boost your internet marketing approach and get spectacular 
              change for your brand!
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={styles.rightSection}>
          <div className={styles.imageWrapper}>
            <img 
              src="/digital.png"
              alt="Digital Marketing"
              className={styles.image}
            />
            
            {/* Overlay Box */}
            <div className={styles.overlayBox}>
              <p>
              <span className={styles.highlightoverlay}>Brandsmashers</span>, the Best Digital Marketing Agency in Bhopal, offers tailored strategies through SEO, Social Media Management, 
                and Content Marketing. We optimize results by evolving strategies, ensuring business growth and differentiation in a competitive market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
