import React, { useEffect } from 'react'
import Introduction from '@/components/Company/Introduction';
import first from '@/components/Company/first';
import OurStory from '@/components/Company/OurStory';
import OurCompany from '@/components/Company/OurCompany';
import Navbar from '@/components/navbar/navbar';
import Team from '@/components/Company/Team';
import TL from '@/components/Company/TL';
import Map from '@/components/Company/Map';
import Footer from '@/components/footer/footer';
import WhoWeAreHero from '@/components/Company/WhoWeAreHero';
import Head from 'next/head';
import { initializePageTracking } from '@/lib/gtm';

const whoweare = () => {
  useEffect(() => {
    // GTM Page View Tracking
    initializePageTracking('Who We Are - Brandsmashers Tech', '/whoweare', {
      page_type: 'about_us'
    });
  }, []);

  return (
    <>
      <Head>
        <title>Who We Are - About Brandsmashers Tech Team</title>
        <meta name="description" content="Learn about our team, company culture, and mission to deliver exceptional software development solutions." />
      </Head>
      <div>
        <Navbar />
        <WhoWeAreHero />
        <Introduction />
        <OurStory />
        <OurCompany />
        <Team />
        {/* <TL /> */}
        <Map />
        <Footer />
      </div>
    </>
  )
}

export default whoweare
