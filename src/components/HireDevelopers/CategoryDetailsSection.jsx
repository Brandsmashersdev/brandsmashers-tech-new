import React from "react";
import styles from "./CategoryDetailsSection.module.css";

const CategoryDetailsSection = ({ title, description, imageSrc, benefits=[] }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt="Technology" className={styles.techImage} />
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
