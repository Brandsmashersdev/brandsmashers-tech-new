import React from "react";
import Image from "next/image"; // Import Image component from next/image
import styles from "./ProcessChart.module.css";

const ProcessChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Hire Remote Developers <span className={styles.highlight}>in 4 </span>Steps</h2>
      </div>
      <div className={styles.charts}>
        <div className={styles.chart1}>
          {/* Replaced <img> with <Image> */}
          <Image 
            src="/chart1.svg" 
            alt="chart1" 
            width={500}  // Specify width (adjust as necessary)
            height={500} // Specify height (adjust as necessary)
          />
        </div>
        <div className={styles.chart1}>
          {/* Replaced <img> with <Image> */}
          <Image 
            src="/chart2.svg" 
            alt="chart2" 
            width={500}  // Specify width (adjust as necessary)
            height={500} // Specify height (adjust as necessary)
          />
        </div>
        <div className={styles.chart2}></div>
      </div>
    </div>
  );
};

export default ProcessChart;
