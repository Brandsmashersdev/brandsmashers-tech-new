import React from "react";
import Image from "next/image";
import styles from "./ProjectDiscussion.module.css";

const ProjectDiscussion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2 className={styles.title}>
            Know What Makes <span className={styles.highlight}>Appinventiv</span> Your Ideal Software Development Partner
          </h2>
          <div className={styles.points}>
            {[...Array(4)].map((_, index) => (
              <div key={index} className={styles.point}>
                <span className={styles.icon}>✔</span>
                <p>At Brandsmashers Tech, the process of developing custom software is streamlined to ensure that your specific needs are met.</p>
              </div>
            ))}
          </div>
          <button className={styles.ctaButton}>Discuss Your Project Ideas</button>
        </div>

        {/* Right Section (Image) */}
        <div className={styles.rightSection}>
          <Image src="/ProjectDiscussion.png" alt="Software Development" width={300} height={200} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDiscussion;
