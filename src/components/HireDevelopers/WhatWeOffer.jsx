import React, { useState } from "react";
import styles from "./WhatWeOffer.module.css";

const WhatWeOffer = () => {
  const [activeTab, setActiveTab] = useState("Engage with Precision");

  const data = {
    "Engage with Precision": [
      { title: "Targeted Talent Acquisition", description: "Find candidates who fit both your skills and company culture." },
      { title: "Streamlined Screening Process", description: "Receive only top-quality profiles, saving you time." },
      { title: "Expert Matchmaking", description: "Get developers matched to your specific project needs." },
    ],
    "Global Talent Access": [
      { title: "Worldwide Talent Pool", description: "Access a diverse selection of skilled developers from various regions around the world." },
      { title: "Local Expertise, Global Reach", description: "Hire professionals fluent in multiple languages. Combine our local market knowledge with a global talent network to find the best fit." },
      { title: "Time-Zone Flexibility", description: "Work with developers in different time zones to align with your project's schedule." },
    ],
    "Seamless Hiring Journey": [
      { title: "End-to-End Recruitment Management", description: "We manage the entire hiring process, from initial outreach to final onboarding." },
      { title: "Customized Hiring Stages", description: "Tailor each phase of recruitment to meet your specific hiring needs and preferences." },
      { title: "Efficient Onboarding", description: "Our streamlined onboarding process ensures new hires integrate smoothly and quickly." },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.button}>What we offer</div>
        <h1 className={styles.heading}>
          Your Expert <span className={styles.highlight}>in Tech Recruitment</span>
        </h1>
   <p className={styles.subheading}>
  Let Brandsmashers handle the entire hiring process. We guarantee you&apos;ll find and onboard the ideal software developers tailored to your business needs. With our expertise, you can easily hire remote developers from India who are skilled, reliable, and aligned with your project goals, ensuring efficient development and smooth delivery.
</p>

      </div>
      <div className={styles.tabContainer}>
        {Object.keys(data).map((tab) => (
          <span
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className={styles.cardsContainer}>
        {data[activeTab].map((card, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
