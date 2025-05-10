import React from 'react'
import Introduction from '@/components/Company/Introduction';
import OurStory from '@/components/Company/OurStory';
import OurCompany from '@/components/Company/OurCompany';
import Navbar from '@/components/navbar/navbar';
import Team from '@/components/Company/Team';
import TL from '@/components/Company/TL';
import Map from '@/components/Company/Map';
import Footer from '@/components/footer/footer';
const whoweare = () => {
  return (
    <div>
        <Navbar />
      <Introduction />
      <OurStory />
      <OurCompany />
      <Team />
      <TL />
      <Map />
    </div>
  )
}

export default whoweare
