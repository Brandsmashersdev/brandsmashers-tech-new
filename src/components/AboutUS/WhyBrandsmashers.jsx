import React from "react";
import styles from "./WhyBrandsmashers.module.css";

const cardData = [
  {
    icon: "/about_icon1.svg",
    title: "All in One Solution",
    description:
      "We offer end-to-end IT services, design, development, quality assurance with a dedicated group of experts for various industry domains and technologies.",
  },
  {
    icon: "/about_icon2.svg",
    title: "Customer Focus",
    description:
      "In this constantly changing and challenging business world, we aim to provide competent advice as per the custom needs of the client to meet their business goals.",
  },
  {
    icon: "/about_icon3.svg",
    title: "Commitment",
    description:
      "We deliver the maximum value to our customers by becoming their reliable technology partner. Our success is defined by the success of our customer.",
  },
];

const WhyBrandsmashers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header className={styles.heading}>
          <h2 className={styles.title}>Why <span className={styles.highlight}>Brandsmashers</span></h2>
          <p className={styles.subheading}>
            At <span className={styles.highlight}>Brandsmashers</span>, we don't just build software, we build long-term
            partnerships based on trust, quality, and innovation. Our commitment
            to excellence ensures that we consistently deliver top-tier
            solutions that meet your evolving business needs.
          </p>
        </header>
        <div className={styles.cards}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, description }) => (
  <div className={styles.card}>
    <div className={styles.icon}>
      <img src={icon} alt={title} className={styles.iconImage} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

export default WhyBrandsmashers;
