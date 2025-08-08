import ReadyToInnovate from "@/components/HomePage/ReadyToInnovate";
import ITSolutions from "@/components/HomePage/ITSolutions";
import OurVision from "@/components/HomePage/OurVision";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhyChooseUs from "@/components/HomePage/whyChooseUs";
import Testimonial from "@/components/HomePage/Testimonial";
import HeroSection from "@/components/HomePage/HeroSectionWrapper";
import Blogs from "@/components/HomePage/Blogs";
import TechnologyServices from "@/components/HomePage/TechnologyServices";
import Industries from "@/components/HomePage/Industries";
import FAQSection from "@/components/HomePage/FAQSection";
import Chatbot from "@/components/HomePage/Chatbot";
import Qualifications from "@/components/HomePage/Qualifications";

export default function Home() {
  return (
    <div className="bg-[#343333]">
      <Navbar />
      <HeroSection />
      <ITSolutions />
      <Qualifications />
      <ReadyToInnovate />
      <OurVision />
      <TechnologyServices />
      <Testimonial />
      <Industries />
      <WhyChooseUs />
      <Blogs />
      <FAQSection />
      <Footer />
      <Chatbot />
    </div>
  );
}
