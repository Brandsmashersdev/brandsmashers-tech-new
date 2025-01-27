import React from 'react';
import styles from './valuesection.module.css';

const ValuesSection = () => {
  const values = [
    {
      title: 'Quality Driven',
      subtitle: '',
      description: 'At Brandsmashers, quality is at the heart of everything we do. With a state-of-the-art infrastructure and unmatched technical expertise, we deliver high-quality solutions on time and according to your needs.'
    },
    {
      title: 'Innovation',
      subtitle: '',
      description: 'We are constantly pushing the boundaries, bringing fresh ideas and smart solution implementation strategies to help our clients transform their businesses through innovation.'
    },
    {
      title: 'Well Established Processes',
      subtitle: '',
      description: 'Our well-defined internal frameworks and processes have resulted in a proven track record of delivering outstanding IT outsourcing services. We pride ourselves on consistency and reliability.'
    },
    {
      title: 'Broad Industry Experience',
      subtitle: '',
      description: 'With experience spanning across multiple industries, we develop custom applications that give our clients a competitive edge, drawing from our vast knowledge and expertise accumulated over the years.'
    }
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Our <span className={styles.highlight}>Values</span>
        </h2>
        
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;