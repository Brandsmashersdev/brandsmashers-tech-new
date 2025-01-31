import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import HeroSectionTech from "@/components/HireDevelopers/HeroSectionForTech";
import Stats from "@/components/HireDevelopers/Android/Stats";
import PartnerCompanies from "@/components/HireDevelopers/Android/PartnerCompanies";
import CategoryDetailsSection from "@/components/HireDevelopers/CategoryDetailsSection";
import Head from "next/head";

// Technology data
const technologyData = {
  "android-developer": {
    title: "Hire Best Android App Developer from India",
    description: "Need a remote Android app developer from India? Your search ends here! Hire top Android developers through Brandsmashers Tech and get custom-built mobile solutions designed for a seamless, visually stunning user experience. Our experts ensure high-quality, performance-driven apps tailored to your business needs..",
    buttonText: "Hire Android Developer",
    imageSrc: "/android.png",
    benefits: ["No charges for project manager", "Flexible hiring models", "On-time project delivery", "100% client satisfaction"],
  },
  "ios-developer": {
    title: "Hire Expert iOS Developers",
    description: "Build innovative and feature-rich iOS applications with the best developers in the industry.",
    buttonText: "Hire iOS Developer",
    imageSrc: "/ios-developer.png",
    benefits: ["Secure coding standards", "Dedicated iOS expertise", "Performance-optimized apps", "Custom iOS solutions"],
  },
  "flutter-developer": {
    title: "Hire Skilled Flutter Developers",
    description: "Build cross-platform apps with Flutter to deliver high performance and cost-effective solutions.",
    buttonText: "Hire Flutter Developer",
    imageSrc: "/images/flutter-developer.jpg",
    benefits: ["Cost-effective development", "Single codebase for all platforms", "Fast development cycles"],
  },
  "react-js-developer": {
    title: "Hire React JS Developers",
    description: "Develop scalable and modern web applications with our React JS experts.",
    buttonText: "Hire React Developer",
    imageSrc: "/images/react-developer.jpg",
    benefits: ["State management expertise", "High-performance UI", "SEO-friendly applications"],
  },
  "laravel-developer": {
    title: "Hire Laravel Developers",
    description: "Build powerful web applications with Laravel, ensuring security and scalability.",
    buttonText: "Hire Laravel Developer",
    imageSrc: "/images/laravel-developer.jpg",
    benefits: ["Secure & scalable", "MVC architecture", "Robust API integration"],
  },
};

export default function TechnologyDetails() {
  const router = useRouter();
  const [data, setData] = useState(null);

  // Update data when route changes
  useEffect(() => {
    if (router.isReady) {
      const { technology } = router.query;
      setData(technologyData[technology] || null);
    }
  }, [router.isReady, router.query.technology]);

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">Page Not Found</h1>
          <p className="text-gray-400 mt-2">This technology does not exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} - Brand Smashers</title>
        <meta name="description" content={data.description} />
      </Head>

      <Navbar />
      <HeroSectionTech 
        title={data.title} 
        description={data.description} 
        buttonText={data.buttonText} 
        imageSrc={data.imageSrc} 
      />
      <Stats />
      <PartnerCompanies />
      
      {/* 🔥 Dynamic Section with Different Data */}
      <CategoryDetailsSection 
        title={data.title}
        description={data.description}
        imageSrc={data.imageSrc}
        benefits={data.benefits}
      />
      
      <Footer />
    </>
  );
}
