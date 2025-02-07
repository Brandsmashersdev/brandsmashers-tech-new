import React from 'react';
import styles from './valuesection.module.css';

const ValuesSection = () => {
  const values = [
    {
      title: 'Commitment to Excellence',
      subtitle: '',
      description: 'At Brandsmashers, we prioritize quality in every aspect of our work. With cutting-edge infrastructure and deep technical expertise, we deliver top-tier solutions tailored to your needs, ensuring efficiency, reliability, and success.'
    },
    {
      title: 'Streamlined Processes',
      subtitle: '',
      description: 'Our refined frameworks and well-structured methodologies drive seamless execution. With a proven track record in IT outsourcing, we emphasize consistency, precision, and delivering results that exceed expectations.'
    },
    {
      title: 'Innovative Thinking',
      subtitle: '',
      description: 'We embrace innovation by integrating fresh perspectives and cutting-edge technologies. Our forward-thinking strategies empower businesses to evolve, optimize performance, and stay ahead in the digital landscape.'
    },
    {
      title: 'Diverse Industry Expertise',
      subtitle: '',
      description: 'With years of experience across various industries, we craft tailored solutions that give our clients a competitive advantage. Our deep industry knowledge and hands-on expertise translate into impactful and scalable business solutions.'
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