import React, { useState } from 'react';
import { Check, ChevronDown, Code, Database, Globe, Server, Cpu, Cloud, Smartphone, Palette, Users, Brain, BarChart3 } from 'lucide-react';
import styles from './ContactPage.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextCarousel = () => {
  return (
    <div className={styles.textCarouselContainer}>
      <div className={styles.textCarouselTrack}>
        {[...Array(10)].map((_, index) => (
          <span key={index} className={styles.carouselText}>
            Brandsmashers Tech
          </span>
        ))}
      </div>
    </div>
  );
};


const IconSlider = () => {
  const iconRows = [
    [
      { icon: <Code className={styles.techIcon} />, label: "Frontend" },
      { icon: <Database className={styles.techIcon} />, label: "Backend" },
      { icon: <Globe className={styles.techIcon} />, label: "Web Dev" },
      { icon: <Brain className={styles.techIcon} />, label: "AI/ML" },
      { icon: <Smartphone className={styles.techIcon} />, label: "Mobile App" },
      { icon: <Users className={styles.techIcon} />, label: "UI/UX" },
      { icon: <BarChart3 className={styles.techIcon} />, label: "Data Dive" }
    ]
  ];

  return (
    <div className={styles.iconSliderContainer}>
      {iconRows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.iconRow}>
          <div className={styles.slideTrack}>
            {[...row, ...row, ...row, ...row, ...row, ...row, ...row, ...row, ...row, ...row].map((item, index) => (
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
const toastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  style: { background: '#2CC5D9', color: 'white' }
};
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    skills: '',
    source: ''
  });

  const [errors, setErrors] = useState({});
  const [helpType, setHelpType] = useState(null);

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

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value && !validateName(value)) {
          error = 'Please enter only letters';
          newValue = formData[name];
        }
        break;

      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (digits.length > 10) {
          newValue = formData[name];
        } 
        break;

      default:
        break;
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = 'Please enter only letters';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Please enter only letters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // if (!helpType) {
    //   newErrors.helpType = 'Please select how we can help';
    // }

    if (!formData.skills) {
      newErrors.skills = 'Please select your skills';
    }

    if (!formData.source) {
      newErrors.source = 'Please select how you heard about us';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        
        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, formData[key]);
        });
        formDataToSend.append('helpType', helpType);
        formDataToSend.append('access_key', '26fd49ac-7bdb-4e08-9818-dbca12903e42');

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formDataToSend
        });

        const data = await response.json();
        
        if (data.success) {
          toast.success('Form submitted successfully!', toastConfig);
          
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            skills: '',
            source: '',
          });
          setHelpType(null);
        } else {
          toast.error('Error submitting form. Please try again.', toastConfig);
        }
      } catch (error) {
        console.error('Submission Error:', error);
        toast.error('Network error. Please try again later.', toastConfig);
      }
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <ToastContainer />
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
            <TextCarousel />
          </div>

          {/* Form Section */}
          <div className={styles.formSection}>
            <div className={styles.formContainer}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Name</label>
                  <div className={styles.nameInputs}>
                    <div className={styles.inputWrapper}>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`${styles.formInput} ${styles.halfWidth} ${errors.firstName ? styles.error : ''}`}
                      />
                      {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
                    </div>
                    <div className={styles.inputWrapper}>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`${styles.formInput} ${styles.halfWidth} ${errors.lastName ? styles.error : ''}`}
                      />
                      {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone Number</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${styles.formInput} ${errors.phone ? styles.error : ''}`}
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={`${styles.formLabel} ${styles.helpLabel}`}>How we can Help</label>
                  <div className={styles.helpOptions}>
                    <label className={styles.helpOption}>
                      <div 
                        className={`${styles.radioButton} ${helpType === 'recruiting' ? styles.checked : ''}`}
                        onClick={() => setHelpType('recruiting')}
                      >
                        {helpType === 'recruiting' && <Check className={styles.checkIcon} />}
                      </div>
                      <span className={styles.optionText}>I'm Recruiting</span>
                    </label>
                    <label className={styles.helpOption}>
                      <div 
                        className={`${styles.radioButton} ${helpType === 'developer' ? styles.checked : ''}`}
                        onClick={() => setHelpType('developer')}
                      >
                        {helpType === 'developer' && <Check className={styles.checkIcon} />}
                      </div>
                      <span className={styles.optionText}>I'm a Developer</span>
                    </label>
                  </div>
                  {errors.helpType && <span className={styles.errorText}>{errors.helpType}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>What skills are you looking for?</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className={`${styles.formSelect} ${errors.skills ? styles.error : ''}`}
                    >
                      <option value="">What skills are you looking for?</option>
                      {skillOptions.map((skill) => (
                        <option key={skill} value={skill}>{skill}</option>
                      ))}
                    </select>
                    <div className={styles.selectIcon}>
                      <ChevronDown className={styles.chevronIcon} />
                    </div>
                    {errors.skills && <span className={styles.errorText}>{errors.skills}</span>}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>How did you hear about Brandsmashers?</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className={`${styles.formSelect} ${errors.source ? styles.error : ''}`}
                    >
                      <option value="">How did you hear about us?</option>
                      {sourceOptions.map((source) => (
                        <option key={source} value={source}>{source}</option>
                      ))}
                    </select>
                    <div className={styles.selectIcon}>
                      <ChevronDown className={styles.chevronIcon} />
                    </div>
                    {errors.source && <span className={styles.errorText}>{errors.source}</span>}
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

      {/* Privacy Notice Section */}
      <div className={styles.privacySection}>
        <div className={styles.privacyContainer}>
          <p className={styles.privacyText}>
            Your <span className={styles.highlight}>trust is our priority</span>. 
            We value your privacy and ensure that your personal information is{' '}
            <span className={styles.highlight}>kept secure</span>. 
            Rest assured, we do{' '}
            <span className={styles.highlight}>not share, sell,</span> or{' '}
            <span className={styles.highlight}>misuse</span> your{' '}
            <span className={styles.highlight}>data</span> in any way. 
            Your information will never be{' '}
            <span className={styles.highlight}>pirated or shared</span> with{' '}
            <span className={styles.highlight}>third parties</span> without{' '}
            <span className={styles.highlight}>your consent</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;