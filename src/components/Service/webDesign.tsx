import React from 'react';
import Image from 'next/image';  // Import Image from next/image
import styles from './rightservice.module.css';

const Webdesign  = () => {
  return (
    <div className={styles.serviceContainer} id="webdesign">
      <div className={styles.contentWrapper}>
                
        <div className={styles.leftSection}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>
              <span>Web </span>
              <span className={styles.highlight}>Design</span>
            </h1>
            <p className={styles.subtitle}>
              Create stunning, user-friendly websites that captivate and convert.
            </p>
          </div>

          <div className={styles.textContent}>
            <p>
              At Brandsmashers, the Best Web Development Company in Bhopal, we create scalable, 
              performance-focused websites with modular code adaptable to any device.
              We specialize in Custom Web Development, Responsive Web Design, and CMS like WordPress 
              and Shopify. Our services include eCommerce Development, API Integrations, caching, 
              CDN, and database optimization.
              We ensure security with SSL certificates and regular audits. Partner with us to bring 
              your digital vision to life and drive long-term business growth.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={styles.rightSection}>
          <div className={styles.imageWrapper}>
            {/* Replaced <img> with <Image /> for optimization */}
            <div className="relative w-full h-72"> {/* Container with relative position */}
              <Image 
                src="/Web-img.png"  // Assuming the image is inside the public folder
                alt="Web Development"
                layout="fill"  // Make it fill the container
                objectFit="contain"  // Maintain aspect ratio
                className={styles.image}
              />
            </div>

            {/* Overlay Box */}
            <div className={styles.overlayBox}>
              <p>
                <span className={styles.highlightoverlay}>Brandsmashers</span>, the Best Web Development Company in Bhopal, creates 
                scalable, secure, and user-focused web solutions. From custom websites to 
                eCommerce platforms, we optimize performance, enhance security, and align 
                with your business goals to drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdesign;
