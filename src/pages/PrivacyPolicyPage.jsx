import Footer from '@/components/footer/footer'
// // import WebAppDevelopment from '@/components/Service/webDevelopment'
// import HeroSection from '@/components/HomePage/herosection'

import Navbar from "@/components/navbar/navbar";


// import PrivayPolicy from '@/components/Service/privacypolicy';
// function privacyPolicy() {
//   return (
//     <div>
//       <Navbar />
//      <PrivayPolicy/>
//      <Footer/>
//     </div>
//   )
// }

// export default privacyPolicy;
import React from 'react'
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';

function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />

    </div>
  )
}

export default PrivacyPolicyPage