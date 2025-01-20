import React from 'react';
import styles from './TopRemoteDevelopers.module.css'; // Import the CSS module

const TopRemoteDevelopers = () => {
  const images = [
    { height: 'small', id: 1, src: '/TopRemoteDevelopers-1.svg' },
    { height: 'medium', id: 2, src: '/TopRemoteDevelopers-2.svg' },
    { height: 'small', id: 3, src: '/TopRemoteDevelopers-3.svg' }
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
        Hire Top <span className={styles.titleHighlight}>Remote Developers </span>From India For Your Next Project
        </h2>
        <p className={styles.paragraph}>
        At Brandsmashers, we partially agree with this statement and would like to emphasize that having the right team in place is key to the success of any project. That’s why we offer IT staff augmentation services, providing a team of highly skilled developers on standby to create exactly what you need. Our developers cover all necessary specializations, including web developers, mobile developers, frontend developers, and open-source specialists. Each professional is selected for their high qualifications and dedication to their work.
        </p>
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} />
    </div>
  );
};

export default TopRemoteDevelopers;
