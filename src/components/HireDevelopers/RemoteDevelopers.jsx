import React from 'react';
import styles from './RemoteDevelopers.module.css';

const RemoteDev = () => {
  const cards = [
    {
      title: 'Risk-Free Trial',
      value: '7 Days',
    },
    {
      title: 'Availability',
      value: '160 Hours',
      },
    {
      title: 'Cost Efficient Process',
      value: '50%',
      },
    {
      title: 'Start Hiring in',
      value: '2 Business Days',
      bgColor: '#22d3ee'
    }
  ];

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.mainImage}>
            <img 
              src="/remote.png"
              alt="Office workspace"
            />
          </div>
          <div className={styles.cardContainer}>
            {cards.map((card, index) => (
              <div 
                key={index} 
                className={styles.card}
                style={{ backgroundColor: card.bgColor }}
              >
                <div className={styles.cardContent}>
                  <span className={`${styles.cardText} ${card.bgColor === '#22d3ee' ? styles.whiteText : ''}`}>
                    {card.title}
                  </span>
                  <div className={styles.daysContainer}>
                    <span className={`${styles.days} ${card.bgColor === '#22d3ee' ? styles.whiteText : ''}`}>
                      {card.value}
                    </span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Hire Top <span className={styles.highlight}>Remote Developers</span> From India for Your Next Project
            </h1>
          </div>
          <div className={styles.content}>
            <p className={styles.description}>
              At Brandsmashers Tech, we make it seamless to <span className={styles.highlight}>hire remote developers from India</span> who are experts in delivering high-quality solutions tailored to your specific needs. 
              Whether you're upgrading an existing project or launching a new web or mobile application,
              our developers bring technical expertise and a commitment to excellence.
            </p>
            <p className={styles.description}>
              With our <span className={styles.highlight}>IT staff augmentation services</span>, you gain access to a pre-vetted pool of skilled professionals, including web developers, mobile developers, frontend specialists,
              and open-source experts. Each developer is handpicked for their technical prowess and dedication to delivering impactful results.
            </p>
            <p className={styles.description}> 
              Our process is straightforward and hassle-free. You can interview and select your ideal development team while we handle the administrative details, including payroll and team management. Working with our 
              Indian developers ensures not only cost-efficiency but also access to cutting-edge technologies and timely project delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteDev;