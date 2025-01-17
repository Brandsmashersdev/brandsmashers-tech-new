import React from 'react';
import styles from './ITSolutions.module.css'; // Import the CSS module

const ITSolutions = () => {
  const images = [
    { height: 'small', id: 1, src: '/IT-Solutions-1.svg' },
    { height: 'medium', id: 2, src: '/IT-Solutions-2.svg' },
    { height: 'small', id: 3, src: '/IT-Solutions-3.svg' }
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
          Software Development & IT Solutions for Startups to Fortune 500s in India
        </h2>
        <p className={styles.paragraph}>
          At Brandsmashers, one of the leading software development companies in
          India, we masterfully tackle complex software development challenges
          with innovative technology solutions and strategic thought processes.
          As a trusted software development company in Bhopal, we ensure that
          our approach is customized to meet the unique needs of each business
          we work with.
        </p>
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} />
    </div>
  );
};

export default ITSolutions;
