import React from 'react';
import styles from './TrialForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'; // Import Image from next/image
import { useWeb3Form } from '@/lib/useWeb3Form';
import { TrialFormData, FormErrors } from '@/types/form';

const TrialForm = ({ closeForm }) => {
  const toastConfig = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { background: '#2CC5D9', color: 'white' },
  };

  const {
    form: formData,
    loading,
    handleChange,
    handleSubmit,
  } = useWeb3Form<TrialFormData, FormErrors>(
    {
      name: '',
      email: '',
      phone: '',
      countryCode: '+91',
      projectRequirement: '',
      projectDescription: '',
    },
    toast,
    toastConfig
  );

  const projectOptions = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Other',
  ];

  return (
    <div className={styles.mainContainer}>
      <ToastContainer />
      <div className={styles.innerContainer}>
        <button className={styles.closeButton} onClick={closeForm}>
          ×
        </button>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <div className={styles.robotImageWrapper}>
              <Image
                src="/robot.png"
                alt="Robot mascot"
                className={styles.robotImage}
                width={300} // Adjust width as needed
                height={300} // Adjust height as needed
                layout="intrinsic" // Ensures aspect ratio is maintained
              />
            </div>
          </div>

          <div className={styles.rightSection}>
            <h2 className={styles.heading}>Start your 1-Week Risk-FREE Trial Now!</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.nameEmailGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
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
                  <label className={styles.label} htmlFor="email">
                    Your Email
                  </label>
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
                <label className={styles.label} htmlFor="phone">
                  Enter Phone Number
                </label>
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
                <label className={styles.label} htmlFor="projectRequirement">
                  Project Requirement
                </label>
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
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="projectDescription">
                  Project Description
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Let us know your requirements"
                  className={styles.textarea}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialForm;
