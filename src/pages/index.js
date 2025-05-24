import Head from "next/head";
import ReadyToInnovate from "@/components/HomePage/ReadyToInnovate";
import ITSolutions from "@/components/HomePage/ITSolutions";
import OurVision from "@/components/HomePage/OurVision";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhyChooseUs from "@/components/HomePage/whyChooseUs";
import Testimonial from "@/components/HomePage/Testimonial";
import HeroSection from "@/components/HomePage/herosection";
import Blogs from "@/components/HomePage/Blogs";
import SolutionsMatrix from "@/components/HomePage/SolutionsMatrix";
import ExpandableCards from "@/components/HomePage/Whatwedo";
import OurPartner from "@/components/OurPartners/OurPartner";
import TechnologyServices from "@/components/HomePage/TechnologyServices";
import Industries from "@/components/HomePage/Industries";
import FAQSection from "@/components/HomePage/FAQSection";
import Chatbot from "@/components/HomePage/Chatbot";
import Qualifications from "@/components/HomePage/Qualifications";

export default function Home() {
  return (
    <>
      {/* GTM HEAD Script */}
      <Head>
        <title>Home | Your Website</title>
        <meta name="description" content="Your Description Here" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MMM4SMCF');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>

      {/* GTM Noscript */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MMM4SMCF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Main Page Components */}
      <div className="bg-[#343333]">
        <Navbar />
        <HeroSection />
        {/* <SolutionsMatrix/> */}
        <ITSolutions />
        <Qualifications />
        <ReadyToInnovate />
        <OurVision />
        {/* <OurPartner/> */}
        <TechnologyServices />
        <Testimonial />
        <Industries />
        <WhyChooseUs />
        <Blogs />
        <FAQSection />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}
