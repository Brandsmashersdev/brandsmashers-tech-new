import React from 'react';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import TermsOfService from '@/components/TermsofService';
import SEO from '@/components/SEO';

function termsofservice() {
  return (
    <>
      <SEO
        title="Terms of Service | Brandsmashers Tech"
        description="Read the terms of service for Brandsmashers Tech. Understand your rights and responsibilities when using our services."
        ogImage="/logo.jpg"
      />
      <div>
        <Navbar />
        <TermsOfService />
        <Footer />
      </div>
    </>
  );
}

export default termsofservice;
