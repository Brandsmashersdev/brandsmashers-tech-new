import React from 'react';
import styles from './whyChooseUs.module.css';

const WhyChooseUs = () => {
  const features = {
    left: [
      {
        title: "Expertise Across Domains",
        description: "With experience across 20+ fields, we integrate industry-specific knowledge into every project.",
        className: styles.expertiseCard
      },
      {
        title: "Customized Solutions",
        description: "Tailored to your business needs for optimal results.",
        className: styles.standardCard
      },
      {
        title: "On-Demand Flexibility",
        description: "They are sufficient and flexible to one's requirements of the project.",
        className: styles.standardCard
      }
    ],
    right: [
      {
        title: "Client-First Approach",
        description: "We collaborate at every stage to ensure the best outcomes.",
        className: styles.standardCard
      },
      {
        title: "Global Reach",
        description: "We offer effective solutions for businesses of all sizes worldwide.",
        className: styles.standardCard
      },
      {
        title: "Eliminate Risk",
        description: "With our well-developed approaches and professional staff, we guarantee our projects' success with a low probability of failure.",
        className: styles.eliminateRiskCard
      }
    ]
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <h2 className={styles.title}>
            Why Choose <span className={styles.highlightText}>Brandsmashers</span> for 
            IT Services and Solutions?
          </h2>
          <p className={styles.description}>
            Brandsmashers is one of the leading software development companies in India which provides a spectrum of
            services and products to help in your organization's digitalization. Here, you will find everything from unique custom
            software, mobile application development, SEO/SEM, and other comprehensive advertising services. Successful
            V2MOM-approached global projects allow providing low-risk as well as flexibly scalable solutions for companies of
            all sizes. Select Brandsmashers for IT services solutions that adapt to your business needs and aren't stagnant.
          </p>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className={styles.gridContainer}>
          {/* Left Column */}
          <div className={styles.column}>
            {features.left.map((item, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className={styles.column}>
            {features.right.map((item, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className={styles.desktopGrid}>
          {/* Left Column */}
          <div className={styles.column}>
            {features.left.map((item, index) => (
              <div key={index} className={`${styles.desktopCard} ${item.className}`}>
                <h3 className={styles.desktopCardTitle}>{item.title}</h3>
                <p className={styles.desktopCardDescription}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className={styles.column}>
            {features.right.map((item, index) => (
              <div key={index} className={`${styles.desktopCard} ${item.className}`}>
                <h3 className={styles.desktopCardTitle}>{item.title}</h3>
                <p className={styles.desktopCardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;