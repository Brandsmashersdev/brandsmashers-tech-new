import React from 'react';
import styles from './leftservice.module.css';

const Browser = () => {
  return (
    <div className={styles.serviceContainer} id='beyond-the-browser'>
      <div className={styles.contentWrapper}>
        {/* Left Image Section */}
        <div className={styles.leftSection}>
          <div className={styles.imageWrapper}>
            <img 
              src="/browser.png"
              alt="Web Development"
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
              <span>Beyond the </span>
              <span className={styles.highlight}>Browser</span>
            </h1>
            <p className={styles.subtitle}>
            Innovate with Applications and Technologies That Stand Out!            </p>
          </div>

          <div className={styles.textContent}>
            <p>
            At Brandsmashers our focus is shifted from simple website solutions to
            creating unique digital experiences that redefine your brand. Some of our
            services include creating new applications and incorporating new technologies
            that would help improve the interaction and effectiveness of processes. Being a 
            technology-savvy company, we are focused on providing the best digital experiences
            to solve your business problems effectively. We are determined to make your brand
            shine and receive more attention among the numerous Internet users. Using up-to-date
            techniques, we ensure you capture the consumer's attention, evoke their emotions, and
            produce measurable outcomes. We at Brandsmashers are ready to bring your idea to life 
            and help you become an unbeatable force on the online stage!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;