import CultureSection from '@/components/Company/CultureSection';
import HeroSection from '@/components/Company/Herosection';
import Story from '@/components/Company/Story';
import StoryBanner from '@/components/Company/StoryBanner';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import React from 'react';
import EmployeeTestimonials from '@/components/Company/EmployeeTestimonials';
import PerksSection from '@/components/Company/PerksSection';
import SEO from '@/components/SEO';

const career = () => {
  return (
    <>
      <SEO
        title="Careers | Brandsmashers Tech"
        description="Join the Brandsmashers Tech team! Explore open positions and career opportunities in software development, design, and IT."
        ogImage="/logo.jpg"
      />
      <div>
        <Navbar />
        <HeroSection />
        <PerksSection />
        <Story />
        <StoryBanner />
        <CultureSection />
        <EmployeeTestimonials />
        <Footer />
      </div>
    </>
  );
};

export default career;
