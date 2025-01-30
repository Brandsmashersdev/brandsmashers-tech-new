import React from 'react';
import styles from './RemoteDevelopers.module.css';

const RemoteDev = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.mainImage} >
            <img 
              src="/androidourvision.png"
              alt="Office workspace"
             
            />
          </div>
          <div className={styles.cardContainer}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={styles.card}>
                <div className={styles.cardContent}>
                  <span className={styles.cardText}>Risk-Free Trial</span>
                  <div className={styles.daysContainer}>
                    <span className={styles.days}>7 Days</span>
                    <svg 
                      className={styles.clockIcon} 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
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
              Hire <span className={styles.highlight}>Remote Developers</span> for Your Startups
            </h1>
          </div>
          <div className={styles.content}>
            <p className={styles.description}>
            <span className={styles.highlight}>Best Remote Team</span> is your one-stop solution if you are looking to hire a team of expert developers. Whether you need a team to work on your existing project or to develop a new web or mobile app, our team of India-based software developers will ensure the best outcomes that align with your business needs. We have a large database of dedicated developers, designers, quality analysts, UI/UX designers, project managers, and others. Our hiring process is simple, straightforward, and can be completed in a few clicks. A dedicated developer associated with Best Remote Team is already pre-vetted, and you can trust their skills, expertise, and experience. The dedicated developer model is one of the most preferred hiring models worldwide. With this model, you have the opportunity to personally interview and hire a dedicated team of developers with the specific skill set you need for your project. Once you have chosen your dedicated development team, we will take care of payroll, administration, and talent management affairs. Our remote developers are well-equipped with the latest technologies and tools. You can save your overhead costs to a great extent. Our talented Indian developers will first understand your business requirements, business nature, and competitors, and then design a development strategy. Also, our web and mobile app developers have earned a reputation for completing and delivering development projects on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteDev;