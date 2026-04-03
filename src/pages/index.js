import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/HomePage/HeroSectionWrapper";
import SkeletonLoader from "@/components/shared/SkeletonLoader";

// Dynamic imports for below-fold components (lazy loading)
const ITSolutions = dynamic(() => import("@/components/HomePage/ITSolutions"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const Qualifications = dynamic(() => import("@/components/HomePage/Qualifications"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const ReadyToInnovate = dynamic(() => import("@/components/HomePage/ReadyToInnovate"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const OurVision = dynamic(() => import("@/components/HomePage/OurVision"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const TechnologyServices = dynamic(() => import("@/components/HomePage/TechnologyServices"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const CaseStudiesSection = dynamic(() => import("@/components/HomePage/CaseStudiesSection"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const Testimonial = dynamic(() => import("@/components/HomePage/Testimonial"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const Industries = dynamic(() => import("@/components/HomePage/Industries"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const WhyChooseUs = dynamic(() => import("@/components/HomePage/whyChooseUs"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const Blogs = dynamic(() => import("@/components/HomePage/Blogs"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const FAQSection = dynamic(() => import("@/components/HomePage/FAQSection"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const CalendlyWidget = dynamic(() => import("@/components/CalendlyWidget"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/footer/footer"), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

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
      <CaseStudiesSection />
      <Testimonial />
      <Industries />
      <WhyChooseUs />
      <Blogs />
      <FAQSection />
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
      <Footer />
    </div>
  );
}
