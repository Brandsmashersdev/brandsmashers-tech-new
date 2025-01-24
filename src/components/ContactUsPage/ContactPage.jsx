import React, { useState } from 'react';
import { Check, ChevronDown, Code, Database, Globe, Server, Cpu, Cloud } from 'lucide-react';
import styles from './ContactPage.module.css';

const IconSlider = () => {
  const iconRows = [
    [
      { icon: <Code className={styles.techIcon} />, label: "Frontend" },
      { icon: <Database className={styles.techIcon} />, label: "Backend" },
      { icon: <Globe className={styles.techIcon} />, label: "Web Dev" }
    ],
    [
      { icon: <Server className={styles.techIcon} />, label: "DevOps" },
      { icon: <Cpu className={styles.techIcon} />, label: "ML/AI" },
      { icon: <Cloud className={styles.techIcon} />, label: "Cloud" }
    ]
  ];

  return (
    <div className={styles.iconSliderContainer}>
      {iconRows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.iconRow}>
          <div className={styles.slideTrack}>
            {[...row, ...row,].map((item, index) => (
              <div key={index} className={styles.iconBox}>
                {item.icon}
                <span className={styles.iconLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactPage = () => {
  const [helpType, setHelpType] = useState('recruiting');
  
  const skillOptions = [
    'React js',
    'Node js',
    'JavaScript',
    'Python',
    'Java',
    'SQL',
    'AWS',
    'Machine Learning',
    'Angular',
    'Android'
  ];

  const sourceOptions = [
    'Google',
    'Twitter',
    'LinkedIn',
    'The Right Hire',
    'Blog/News/Article',
    'Friend/Colleague'
  ];

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h1 className={styles.mainTitle}>
              <span className={styles.brandName}>Brandsmashers</span>
              <span className={styles.techText}> Tech.</span>
            </h1>
            <h2 className={styles.subTitle}>
              Work With <span className={styles.highlight}>Only The</span>
              <br />
              Top Pre-vetted <span className={styles.highlight}>Tech Talent</span>
            </h2>
          </div>
          <div>
            <div className={styles.badgeContainer}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>in</span>
                <span className={styles.badgeText}>Top 20 Indians Startups of 2023</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>G</span>
                <span className={styles.badgeText}>AI Bootcamp Top 20</span>
              </div>
            </div>
          
            <p className={styles.tagline}>
              Top Devs, Trusted by The <span className={styles.highlight}>Best</span> in Business
            </p>
          </div>
          <IconSlider />
        </div>

        {/* Right Section - Form */}
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name</label>
                <div className={styles.nameInputs}>
                  <input
                    type="text"
                    placeholder="First name"
                    className={`${styles.formInput} ${styles.halfWidth}`}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className={`${styles.formInput} ${styles.halfWidth}`}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={`${styles.formLabel} ${styles.helpLabel}`}>How we can Help</label>
                <div className={styles.helpOptions}>
                  <label 
                    className={styles.helpOption}
                    onClick={() => setHelpType('recruiting')}
                  >
                    <div className={styles.radioButton}>
                      {helpType === 'recruiting' && (
                        <Check className={styles.checkIcon} />
                      )}
                    </div>
                    <span className={styles.optionText}>I'm Recruiting</span>
                  </label>
                  <label 
                    className={styles.helpOption}
                    onClick={() => setHelpType('developer')}
                  >
                    <div className={styles.radioButton}>
                      {helpType === 'developer' && (
                        <Check className={styles.checkIcon} />
                      )}
                    </div>
                    <span className={styles.optionText}>I'm a Developer</span>
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  What skills are you looking for?
                </label>
                <div className={styles.selectWrapper}>
                  <select className={styles.formSelect}>
                    <option value="">What skills are you looking for?</option>
                    {skillOptions.map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                  <div className={styles.selectIcon}>
                    <ChevronDown className={styles.chevronIcon} />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  How did you hear about Brandsmashers?
                </label>
                <div className={styles.selectWrapper}>
                  <select className={styles.formSelect}>
                    <option value="">How did you hear about Brandsmashers?</option>
                    {sourceOptions.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                  <div className={styles.selectIcon}>
                    <ChevronDown className={styles.chevronIcon} />
                  </div>
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Lets Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;