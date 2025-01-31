import React from "react";
import styles from "./Stats.module.css";

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <h2>100+</h2>
          <p>Projects</p>
        </div>
        <div className={styles.statBox}>
          <h2>6+</h2>
          <p>Years of experience</p>
        </div>
        <div className={styles.statBox}>
          <h2>600+</h2>
          <p>Clients</p>
        </div>
        <div className={styles.statBox}>
          <h2>400+</h2>
          <p>Creative Team</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
