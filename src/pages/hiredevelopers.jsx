import { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import DeveloperSkills from "@/components/HireDevelopers/DeveloperSkills";
import HiringModels from "@/components/HireDevelopers/HiringModels";
import WhatWeOffer from "@/components/HireDevelopers/WhatWeOffer";
import ProcessChart from "@/components/HireDevelopers/ProcessChart";
import FAQSection from "@/components/HomePage/FAQSection";
import ExpandableGrid from '@/components/HireDevelopers/ExpandableGrid';
import RemoteDevelopers from "@/components/HireDevelopers/RemoteDevelopers";
import Gridsection from "@/components/HireDevelopers/Gridsection";
import styles from "../components/HireDevelopers/herosection.module.css";
import PartnerCompanies from "@/components/HireDevelopers/PartnerCompanies";
import TrialForm from "@/components/HireDevelopers/Android/Trial";

export default function HireDevelopers() {
  // State to handle visibility of TrialForm
  const [showTrialForm, setShowTrialForm] = useState(false);

  // Handler to show the TrialForm when "Hire Developer" is clicked
  const OpenHandler = () => {
    setShowTrialForm(true);
  };

  // Handler to close the TrialForm
  const closeTrialForm = () => {
    setShowTrialForm(false);
  };
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            {/* Text Content */}
            <div className={styles.textContainer}>
              <div className={styles.subtitleContainer}>
                <p className={styles.subtitle}>
                  We <span className={styles.brandCyan}>Deliver {" "}</span>
                  Perfectly <br />Matched, Highly<br />
                  <span className={styles.brandCyan}> Experienced </span>Developers!
                </p>
              </div>

              <p className={styles.description}>
                Get the best profiles in 24-48 hours, conduct just one or two
                interviews with pre-vetted candidates, and onboard our domain
                experts immediately.
              </p>

              <button onClick={OpenHandler} className={styles.contactButton}>
                Hire Developer
              </button>
              {isFormVisible && <TrialForm closeForm={handleCloseForm} />}
            </div>

            {/* Image Container */}
            <div className={styles.imageContainer}>
              <div className={styles.brandImage}>
                <img
                  src="./heroSection.png"
                  alt="Brandsmashers Logo"
                  className={styles.objectContain}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the TrialForm as a modal */}
      {showTrialForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <TrialForm closeForm={closeTrialForm} />
          </div>
        </div>
      )}
      
      {/* Other components */}
      <RemoteDevelopers />
      <ProcessChart />
      <ExpandableGrid />
      <DeveloperSkills />
      <Gridsection />
      <WhatWeOffer />
      <HiringModels />
      <PartnerCompanies />
      <FAQSection />
      <Footer />
    </>
  );
}
