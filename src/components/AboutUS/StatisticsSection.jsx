import React from "react";
import styles from "./StatisticsSection.module.css";

const statsData = [
  { value: "2,001", label: "Year of foundations" },
  { value: "810+", label: "Global Customers" },
  { value: "1,080+", label: "IT Professionals" },
  { value: "36", label: "Countries with active customers" },
  { value: "1,800", label: "Completed Projects" },
  { value: "5", label: "Offices" },
  { value: "90%", label: "Customer Retention" },
  { value: "22+", label: "Industries Served" },
];

const StatisticsSection = () => {
  return (
    <section className={styles.container}>
        <div className={styles.layer}></div>
      <div className={styles.overlay}>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h3 className={styles.value}>{stat.value}</h3>
              <div className={styles.divider}></div>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
