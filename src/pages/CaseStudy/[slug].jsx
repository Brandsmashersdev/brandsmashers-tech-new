import { useRouter } from 'next/router';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import caseStudies from '@/data/caseStudies';

// Import all case study components
import First from '@/components/Service/CaseStudy/First';
import Second from '@/components/Service/CaseStudy/Second';
import Third from '@/components/Service/CaseStudy/Third';

// Map slug to component
const components = {
  first: First,
  second: Second,
  third: Third,
};

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null; // optional loading fallback

  const SelectedComponent = components[slug];

  if (!SelectedComponent) {
    return <div className="text-center mt-10 text-red-500">Case study not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <SelectedComponent />
      <Footer />
    </div>
  );
}
