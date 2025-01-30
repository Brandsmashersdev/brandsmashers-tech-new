import React, { useState } from 'react';
import styles from './TrialForm.module.css';

const TrialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    projectRequirement: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const projectOptions = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Other'
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <img 
              src="/robot.png"
              alt="Robot mascot" 
              className={styles.robotImage}
            />
          </div>
          
          <div className={styles.rightSection}>
            <h2 className={styles.heading}>Start your 1-Week Risk-FREE Trial Now!</h2>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.nameEmailGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Enter Phone Number</label>
                <div className={styles.phoneInputContainer}>
                  <select 
                    className={styles.countrySelect}
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+86">🇨🇳 +86</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className={styles.phoneInput}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="projectRequirement">Project Requirement</label>
                <select 
                  id="projectRequirement"
                  name="projectRequirement"
                  className={styles.select}
                  value={formData.projectRequirement}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Project Requirements</option>
                  {projectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="projectDescription">Project Description</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Let us Know your requirements"
                  className={styles.textarea}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialForm;