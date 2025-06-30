import React from "react";
import styles from "./CategoryDetailsSection.module.css";
import Image from 'next/image';  // Import Image from next/image

const CategoryDetailsSection = ({ title, description, imageSrc, benefits = [] }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={imageSrc} 
            alt="Technology" 
            className={styles.techImage}
            width={500}  // Adjust the width as necessary
            height={300} // Adjust the height as necessary
            layout="intrinsic"  // Maintain aspect ratio
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                ✅ {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailsSection;
