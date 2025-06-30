import React from 'react';
import styles from './DeveloperSkills.module.css';
const DeveloperSkills = () => {
  const skillCategories = [
    ['HTML', 'CSS', 'MySQL', 'APIs and web services', 'Database management skills', 'Python', 'Java'],
    ['JavaScript', 'C#', 'C++', 'Ruby', 'PHP', 'Visual Studio', 'IntelliJ IDEA', 'Eclipse'],
    ['PyCharm', 'Git', 'SVN', 'Mercurial', 'Maven', 'Gradle', 'Front end development'],
    ['Back end development', 'Jenkins', 'Travis CI', 'CircleCI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    ['Puppet', 'Chef', 'AWS', 'Azure', 'Google Cloud Platform', 'JUnit', 'NUnit', 'Selenium'],
    ['JMeter', 'LoadRunner', 'SonarQube', 'ESLint', 'PMD', 'Singleton', 'MVC'],
    ['Monolithic Architectures', 'OWASP Top Ten', 'SSL/TLS', 'OAuth', 'JWT', 'Bash', 'PowerShell'],
  ];

  const getTagColor = (index) => {
    const colors = ['primary', 'secondary', 'tertiary'];
    return colors[index % colors.length];
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Smart Solutions,<span className={styles.titleHighlight}>Cost-Effective Developers</span> </h1>
      <p className={styles.subheading}>
        At <span className={styles.highlight}>Brandsmashers Tech</span> we offer skilled remote developers who deliver high-quality solutions at competitive costs. From custom web to mobile app development, our experts ensure innovative, efficient, and budget-friendly results tailored to your business needs.

      </p>
 
      <div className={styles.skillsContainer}>
        {skillCategories.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.skillRow}>
            {row.map((skill, index) => (
              <div 
                key={`${rowIndex}-${index}`} 
                className={`${styles.skillTag} ${styles[getTagColor(index)]}`}
              >
                {skill}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperSkills;