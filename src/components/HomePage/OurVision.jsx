import React from 'react';
import Image from 'next/image';
import styles from './OurVision.module.css';

const OurVision = () => {
  return (
    <div className={styles.visionContainer}>
      <div className={styles.visionContent}>
        <h2 className={styles.title}>
          Our <span className={styles.highlight}>Vision</span>
        </h2>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <Image
                src="/OurVision.png"
                alt="Office Space"
                width={400}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.imageFrame}>
              <Image
                src="/OurVision2.png"
                alt="Office Space Mobile"
                width={400}
                height={500}
                className={styles.mobileImage}
              />
            </div>
          </div>
          <div className={styles.textContent}>
            <p className={styles.description}>
              We design tailored software. The company's vision entails offering the needed technology support to businesses as they transform in today's complex digitized economy. Here at Web Marketing, we challenge ourselves to provide solutions that are above the said market trends appropriate indicators. Through the offer of advanced software development solutions and IT services, the company's mission is to drive development and evolution for every business at all levels.
            </p>
            <p className={styles.description}>
              At <span className={styles.highlight}>Brandsmashers</span>, technology is how we reveal more to ourselves and the world. It is a pleasure to extend this vision to a level where organizations shall be able to rely on the solutions we shall provide whereby they will be able to expand their operational capacities, grow, and create competitive advantage in their respective markets. Should it be software development that is top-of-the-line, applications tailored just for your needs, or digital marketing, we are driven by seeing your business solutions enhance your business workflows, increasing efficiency and productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
