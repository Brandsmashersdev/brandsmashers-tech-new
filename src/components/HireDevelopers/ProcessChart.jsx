import React from "react";
import styles from "./ProcessChart.module.css";

const ProcessChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.charts}>
        <div className={styles.chart1}>
          <img src="/chart1.svg" alt="chart1" />
        </div>
        <div className={styles.chart1}>
          <img src="/chart2.svg" alt="chart2" />
        </div>
        <div className={styles.chart2}></div>
      </div>
    </div>
  );
};

export default ProcessChart;
