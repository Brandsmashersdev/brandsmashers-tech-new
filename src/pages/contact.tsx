import ContactForm from '@/components/contactform';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import React from 'react';
import SEO from '@/components/SEO';

const contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Brandsmashers Tech"
        description="Contact Brandsmashers Tech for custom software development, IT outsourcing, and digital solutions. We're here to help!"
        ogImage="/logo.jpg"
      />
      <div>
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default contact;
