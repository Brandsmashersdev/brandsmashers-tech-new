import React from 'react';
import styles from './leftservice.module.css';

const UIUX = () => {
  return (
    <div className={styles.serviceContainer} id='ui-ux'>
      <div className={styles.contentWrapper}>
        {/* Left Image Section */}
        <div className={styles.leftSection}>
          <div className={styles.imageWrapper}>
            <img 
              src="/UIUX.png"
              alt="ui-ux"
              className={styles.image}
            />
            
            {/* Overlay Box */}
            <div className={styles.overlayBox}>
              <p>At <span className={styles.highlightoverlay}>Brandsmashers</span>, we craft intuitive and visually appealing interfaces by 
                understanding your audience, refining designs with wireframes and prototypes, and ensuring seamless responsiveness across all devices.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className={styles.rightContent}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>
              <span>UI/UX </span>
              <span className={styles.highlight}>Development</span>
            </h1>
            <p className={styles.subtitle}>
            Design intuitive interfaces that boost user satisfaction
            </p>
          </div>

          <div className={styles.textContent}>
            <p>
            Craft stunning interfaces that enhance user satisfaction and drive success with Brandsmashers!
            As a leading provider of the Best UI/UX Design Services in Bhopal, we create visually appealing,
            intuitive, and functional interfaces. By closely collaborating with you, we identify target groups
            and behaviors, ensuring every touchpoint delivers exceptional usability. From rough concepts to detailed
            designs, we craft impactful digital interfaces that boost engagement, attract customers, and foster brand growth.
            Trust Brandsmashers to transform your ideas into designs that resonate with users and elevate your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUX;