import React from "react";
import styles from "./ITSolutions.module.css"; // Import the CSS module

const ITSolutions = () => {
  const images = [
    { height: "small", id: 1, src: "/IT-Solutions-1.svg" },
    { height: "medium", id: 2, src: "/IT-Solutions-2.svg" },
    { height: "small", id: 3, src: "/IT-Solutions-3.svg" },
  ];

  return (
    <div className={styles.container}>
      {/* Left side - Stacked Images */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          {images.map((img) => (
            <div
              key={img.id}
              className={`${styles.image} ${styles[img.height]}`}
            >
              <img
                src={img.src}
                alt={`Development team ${img.id}`}
                className={styles.imageElement}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Content */}
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Software Development & IT Solutions for Startups to Fortune 500s in
          India
        </h2>
        <p className={styles.paragraph}>
          At Brandsmashers, a leading software development company in India, we
          tackle complex challenges with innovative technology and strategic
          solutions. As Bhopal's trusted IT partner, we deliver personalized
          software solutions tailored to each business’s objectives.
          Specializing in software development outsourcing, we help industries
          achieve their goals with scalable, high-performance applications.
          Whether you need a reliable custom software development company in
          India or end-to-end IT services, Brandsmashers Tech ensures a seamless
          digital transformation with precision and excellence.
        </p>
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} />
    </div>
  );
};

export default ITSolutions;
