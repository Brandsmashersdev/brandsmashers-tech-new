import React from "react";
import styles from "./TechnologiesSection.module.css";

const TechnologiesSection = () => {
  const cards = [
    { title: "Backend", description: "Building robust, scalable backend systems that handle the business logic, manage databases, and integrate APIs for smooth application performance." },
    { title: "FrontEnd", description: "Creating engaging and intuitive user interfaces with modern web technologies like React.js, Angular, and Vue.js, ensuring a seamless user experience." },
    { title: "Mobile", description: "Developing high-performance mobile applications for iOS and Android, delivering seamless user experiences with cross-platform compatibility." },
    { title: "Database", description: "Managing and optimizing data storage solutions, from SQL to NoSQL databases, ensuring secure, efficient, and scalable data handling." },
    { title: "Testing", description: "Ensuring software reliability and performance through automated and manual testing strategies, detecting bugs early to improve quality and user experience." },
    { title: "Cloud & DevOps", description: "Leveraging cloud computing to provide scalable solutions and integrating DevOps for faster development cycles, continuous integration, and seamless deployments." },
    { title: "Others", description: "Utilizing a wide range of technologies including AI, machine learning, blockchain, IoT, and more to deliver innovative, future-proof solutions tailored to client needs." },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Technologies</h1>
        <p className={styles.subheading}>
        At Brandsmashers, we leverage cutting-edge technologies to deliver innovative, scalable, and secure solutions that meet the evolving needs of businesses across industries. Our expertise spans across a wide array of tools, platforms, and languages, ensuring that we can handle any project, regardless of its complexity or scope. Below is a list of technologies that power our custom software, mobile apps, digital marketing, and more.
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          ))}
          {cards.map((card, index) => (
            <div key={index + cards.length} className={styles.card}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
