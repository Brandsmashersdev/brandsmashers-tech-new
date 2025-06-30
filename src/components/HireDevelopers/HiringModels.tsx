import React from "react";
import styles from "./HiringModels.module.css";

const hiringModelsData = [
  {
    title: "Dedicated Developers",
    description: "Hire a dedicated developer or a team to work exclusively on your project. This model is perfect for long-term engagements and complex projects that require constant collaboration and development.",
  },
  {
    title: "Hourly Hiring",
    description: "Need a developer for a few hours or a specific task? Our hourly hiring model allows you to hire remote developers on a flexible basis, ensuring you pay only for the work you need.",
  },
  {
    title: "Project-Based Hiring",
    description: "If you have a clearly defined project with specific deliverables, opt for our project-based model, where our developers focus entirely on delivering your project on time and within budget.",
  },
];

const HiringModels = () => (
  <div className={styles.container}>
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>
        Our <span className={styles.highlight}>Hiring</span> Models
      </h1>
      <p className={styles.subheading}>
        We offer flexible hiring models to suit your specific project needs
      </p>
    </div>
    <div className={styles.modelsContainer}>
      {hiringModelsData.map((model, index) => (
        <div key={index} className={styles.cards}>
          <div className={styles.content}>
            <h2 className={styles.title}>{model.title}</h2>
            <p className={styles.description}>{model.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HiringModels;
