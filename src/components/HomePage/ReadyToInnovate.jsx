import React from "react";
import styles from "./ReadyToInnovate.module.css";

const ReadyToInnovate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/ReadyToInnovate.png"
          alt="Innovation team meeting"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Ready to Innovate? Kickstart Your Project with Us Now!
        </h2>
        <p className={styles.subtitle}>
          Connect with Our Tech Specialists and Get Started Today!
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <span className={styles.triangle1}></span>
            Lets Talk
            <span className={styles.triangle2}></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToInnovate;
