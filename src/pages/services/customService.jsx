
import React, { useEffect } from 'react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import CustomSoftwareDevelopmentPage from '@/components/Service/Customservice/CustomService';
import Head from 'next/head';
import { trackServicePageView } from '@/lib/gtm';


const demo = () => {
  useEffect(() => {
    // GTM Page View Tracking
    trackServicePageView('customService', 'Custom Software Development - Brandsmashers Tech');
  }, []);

  return (
     <>
     <Head>
       <title>Custom Software Development - Tailored Solutions</title>
       <meta name="description" content="Get custom software development solutions tailored to your business needs. Expert developers ready to build your next project." />
     </Head>
     <Navbar/>
     <CustomSoftwareDevelopmentPage/>
     <Footer/>
     </>

  );
}


   export default demo;
   

