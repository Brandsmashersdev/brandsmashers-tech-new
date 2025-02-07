import React from 'react';
import styles from './rightservice.module.css';

const DesktopApp = () => {
  return (
    <div className={styles.serviceContainer} id='desktop-apps'>
      <div className={styles.contentWrapper}>
        {/* Left Content Section */}
        <div className={styles.leftSection}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>
              <span>Desktop App </span>
              <span className={styles.highlight}>Development</span>
            </h1>
            <p className={styles.subtitle}>
              Innovative Desktop App Development Solutions with the Best Desktop App Development Services
            </p>
          </div>

          <div className={styles.textContent}>
            <p>
              Brandsmashers delivers tailored desktop applications designed to meet your specific needs. 
              As a leader in Desktop App Development Services in Bhopal, we use advanced technologies to 
              create high-performance apps with intuitive interfaces.Whether for multiplatform solutions or modern enterprise utilities, our developers ensure 
              productivity-focused apps with robust security and user-friendly features. 
              We prioritize creating effective, easy-to-navigate applications that enhance business operations 
              and employee performance. Collaborating with you throughout the process, we ensure the final product 
              meets both current and future needs.
              Choose Brandsmashers for innovative desktop applications that set you apart in today's competitive market.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={styles.rightSection}>
          <div className={styles.imageWrapper}>
            <img 
              src="/desktop.png"
              alt="Desktop App Development"
              className={styles.image}
            />
            
            {/* Overlay Box */}
            <div className={styles.overlayBox}>
              <p>
              <span className={styles.highlightoverlay}>Brandsmashers</span>, a leader in Desktop App Development Services, creates high-performance, 
                secure, and user-friendly desktop applications. Let us help you stand out in the market 
                with innovative and intuitive solutions tailored to your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopApp;
