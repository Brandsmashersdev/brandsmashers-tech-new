import React from 'react';
import styles from './leftservice.module.css';

const DataDive= () => {
  return (
    <div className={styles.serviceContainer} id='data-dive'>
      <div className={styles.contentWrapper}>
        {/* Left Image Section */}
        <div className={styles.leftSection}>
          <div className={styles.imageWrapper}>
            <img 
              src="/datadive.png"
              alt="Web Development"
              className={styles.image}
            />
            
            {/* Overlay Box */}
            <div className={styles.overlayBox}>
              <p>
                <span className={styles.highlightoverlay}>Brandsmashers' Data Science </span>
                Development Services transform raw data 
                into actionable insights. From data collection to advanced analytics, we deliver 
                tailored solutions like predictive analytics and BI dashboards to empower informed decisions
                and drive growth
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className={styles.rightContent}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>
              <span>Data Dive </span>
              <span className={styles.highlight}>Development</span>
            </h1>
            <p className={styles.subtitle}>
            Transform data into valuable insights with expert analysis
            </p>
          </div>

          <div className={styles.textContent}>
            <p>
            Unlock the full potential of your data with Brandsmashers' 
            specialized Data Science Development Services. We are dedicated to transforming raw 
            data into actionable insights that drive strategic decisions and accelerate business growth. 
            Our services encompass every stage of the data lifecycle, from meticulous data collection to 
            advanced analytics and visualization. Our team of skilled professionals leverages cutting-edge
            tools and techniques to deliver tailored solutions that maximize the value of your data. Whether 
            you need predictive analytics, machine learning models, or business intelligence dashboards, we ensure 
            that your data becomes a powerful asset for your organization. By uncovering hidden patterns and trends,
            we empower you to make informed decisions, optimize processes, and stay ahead of the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDive;