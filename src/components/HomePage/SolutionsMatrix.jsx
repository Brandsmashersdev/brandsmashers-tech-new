import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import styles from "./SolutionsMatrix.module.css";
import Link from "next/link";

const SolutionsMatrix = () => {
  const stats = [
    { value: 6, label: "Years of Expertise" },
    { value: 95, label: "Timely Deliveries" },
    { value: 20, label: "Markets Worldwide" },
    { value: 50, label: "Global Brands" },
  ];

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect(); 
        };
  }, []);

  return (
    <div className={styles.solutionsContainer} ref={sectionRef}>
      <div className={styles.solutionsWrapper}>
        {/* Left Section */}
        <div className={styles.solutionsLeft}>
          <h2 className={styles.solutionsTitle}>Solutions Matrix</h2>
          <h3 className={styles.solutionsSubtitle}>
            Proof is in the <span className={styles.italicText}>Numbers</span>
          </h3>
          <p className={styles.solutionsDescription}>
          With over 6+ years of experience, Brandsmashers Tech is a trusted software development company in India, delivering innovative, custom solutions to drive your growth and prepare you for the future.
          </p>
          <Link href="/contactus" passHref>
          <button className={styles.solutionsButton}>Get Started</button>
          </Link>
        </div>

        {/* Right Section */}
        <div className={styles.solutionsRight}>
          <div className={styles.solutionsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.solutionsStat}>
                <div className={styles.statValue}>
                  {startCount ? <CountUp end={stat.value} duration={2} /> : "0"}+
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMatrix;
