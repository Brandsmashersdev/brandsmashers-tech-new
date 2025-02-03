import React from "react";
import CountUp from "react-countup";
import styles from "./Stats.module.css";

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <h2>
            <CountUp start={0} end={100} duration={3} suffix="+" />
          </h2>
          <p>Projects</p>
        </div>
        <div className={styles.statBox}>
          <h2>
            <CountUp start={0} end={6} duration={4} suffix="+" />
          </h2>
          <p>Years of experience</p>
        </div>
        <div className={styles.statBox}>
          <h2>
            <CountUp start={0} end={600} duration={3} suffix="+" />
          </h2>
          <p>Clients</p>
        </div>
        <div className={styles.statBox}>
          <h2>
            <CountUp start={0} end={400} duration={3} suffix="+" />
          </h2>
          <p>Creative Team</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
