import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import HeroSection from '@/components/Technologies/HeroSection';
import React from 'react';
import TechnologyPage from '@/components/Technologies/TechnologyPage';
import SolutionsGrid from '@/components/Technologies/SolutionsGrid';
import FAQSection from '@/components/HomePage/FAQSection';
import SEO from '@/components/SEO';

const Technologies = () => {
  return (
    <>
      <SEO
        title="Technologies | Brandsmashers Tech"
        description="Discover the technologies and tools used by Brandsmashers Tech to deliver innovative software solutions."
        ogImage="/logo.jpg"
      />
      <div>
        <Navbar />
        <HeroSection />
        <TechnologyPage />
        <SolutionsGrid />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Technologies;
