import React from 'react';
import Image from 'next/image';
import styles from './leftservice.module.css';

const MobileApp = () => {
  return (
    <div className={styles.serviceContainer} id='mobile-apps'>
      <div className={styles.contentWrapper}>
        {/* Left Image Section */}
        <div className={styles.leftSection}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/mobileapp-img.png"
              alt="Web Development"
              className={styles.image}
              width={500}
              height={400}
              priority
            />
            
            {/* Overlay Box */}
            <div className={styles.overlayBox}>
              <p>
                <span className={styles.highlightoverlay}>Brandsmashers Tech&apos;s</span>, mobile 
                app development services empowered the client to enhance user engagement and streamline business operations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className={styles.rightContent}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>
              <span>Mobile</span>
              <span className={styles.highlight}>App</span>
            </h1>
            <p className={styles.subtitle}>
              Develop Seamless, Engaging Mobile Experiences with Custom Mobile App Development Services
            </p>
          </div>

          <div className={styles.textContent}>
            <p>
              At Brandsmashers, where innovation meets mobility, we create mobile solutions that drive business 
              growth and set higher standards. Our Custom Mobile App Development Services in Bhopal deliver responsive,
              unique apps tailored to targeted platforms, combining exceptional user experiences with modern technologies. 
              From simple apps to feature-rich products, we offer a full range of services to meet diverse business needs. 
              We design solutions that engage users, ensure seamless navigation, and align businesses with modern demands.
              Partnering with Brandsmashers means transforming ideas into robust mobile apps that help your business thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;