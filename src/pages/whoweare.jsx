import React from 'react'
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

const whoweare = () => {
  return (
    <div>
        <Navbar />
      
        <WhoWeAreHero/>
      <Introduction />
      <OurStory />
      <OurCompany />
      <Team />
      <TL />
      <Map />
      <Footer/>
    </div>
  )
}

export default whoweare
