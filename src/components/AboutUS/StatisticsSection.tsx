import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import styles from "./StatisticsSection.module.css";

const statsData = [
  { value: 2001, label: "Year of foundations", isStatic: true },
  { value: 810, label: "Global Customers", suffix: "+" },
  { value: 1080, label: "IT Professionals", suffix: "+" },
  { value: 36, label: "Countries with active customers" },
  { value: 1800, label: "Completed Projects", suffix: "+" },
  { value: 5, label: "Offices" },
  { value: 90, label: "Customer Retention", suffix: "%" },
  { value: 22, label: "Industries Served", suffix: "+" },
];

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current; // Save the current ref value to a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <section className={styles.container} ref={sectionRef}>
      <div className={styles.layer}></div>
      <div className={styles.overlay}>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h3 className={styles.value}>
                {stat.isStatic ? (
                  stat.value
                ) : (
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                  />
                )}
              </h3>
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
