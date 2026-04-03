import React, { useEffect } from 'react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import CustomSoftwareDevelopmentPage from '@/components/Service/Customservice/CustomService';
import Head from 'next/head';
import { trackServicePageView } from '@/lib/gtm';
import CalendlyWidget from '@/components/CalendlyWidget';


const Demo = () => {
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
     <div className="bg-[#1a1a1a] py-16">
       <div className="container mx-auto px-4">
         <div className="text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             Book a Free 30-Minute Consultation
           </h2>
           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
             Speak directly with our engineering team. No sales pitch — just an honest conversation about your needs.
           </p>
         </div>
         <CalendlyWidget />
       </div>
     </div>
     <Footer/>
     </>

   );
}


   export default Demo;
