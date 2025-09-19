import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import caseStudies from '@/data/caseStudies';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import bespoke case study pages when available
import DynamicBookCaseStudy from '@/pages/CaseStudyPages/Mobile/DynamicBookPlatform';
import MediInfoCaseStudy from '@/pages/CaseStudyPages/Mobile/MusicCollaborationNLearningPlatform';
import MusicAppCaseStudy from '@/pages/CaseStudyPages/Mobile/MediInfoPharmaceuticalDataManagementPlatform';

import SmartAttendCaseStudy from '@/pages/CaseStudyPages/Web/DigitalAttendanceNLeavePortal';
import ImageLicensingCaseStudy from '@/pages/CaseStudyPages/Web/ImageLicensingPlatform';
import SmartBuyerCaseStudy from '@/pages/CaseStudyPages/Web/SmartBuyerManagementSystem';
import BankAIUseCaseStudy from '@/pages/CaseStudyPages/AIML/CaseStudyIHowaLeadingBankHarnessedAItoPredictRiskandStrengthenCustomerLoyalty';
import MarketingAgencyCaseStudy from '@/pages/CaseStudyPages/AIML/CreatingaScalableProductEngineforaRapidlyGrowingMarketingAgency';
import AIinHealthcareCaseStudy from '@/pages/CaseStudyPages/AIML/TransformingDiagnosiswithAI';
import TranslationPlatformCaseStudy from '@/pages/CaseStudyPages/CustomMade/FeatureRichWebBasedLanguageTranslationPlatform';
import FinancePlatformCaseStudy from '@/pages/CaseStudyPages/CustomMade/PersonalFinanceWebPlatform';
import CoachingPlatformCaseStudy from '@/pages/CaseStudyPages/CustomMade/SmartWebPlatformforCoachingInstitutes';
import DigitalMarketingCaseStudy from '@/pages/CaseStudyPages/DigitalMarketing/BrainstormingOurWaytoaWinningDigitalMarketingStrategy';
import B2BLeadsCaseStudy from '@/pages/CaseStudyPages/DigitalMarketing/DrivingB2BLeadswithSEOEmailMarketing';
import SocialMediaCaseStudy from '@/pages/CaseStudyPages/DigitalMarketing/GrowingBrandAwarenesswithSocialMediaContentMarketing';
import BrandsmashersVendorManagementCaseStudy from '@/pages/CaseStudyPages/Productdevelopment/HowBrandsmashersReimaginedVendorManagementtoPowerItsOwnGrowth';
import IdeaXCaseStudy from '@/pages/CaseStudyPages/Productdevelopment/HowWeBroughtIdeaXtoLifeFromVisiontoProductLaunch';
import EntertainmentPlatformCaseStudy from '@/pages/CaseStudyPages/UIUX/EnhancingEntertainmentPlatformsforScalableEngagement';
import AdAgencyCaseStudy from '@/pages/CaseStudyPages/UIUX/SimplifyingComplexityinanAdvertisingWorld';
import FitnessAppCaseStudy from '@/pages/CaseStudyPages/UIUX/UXRevampingTheFitnessExperience';

// Optional: lazy-load react-countup if we use it here later
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

const customComponents = {
  Mobile1: DynamicBookCaseStudy,
  Mobile2: MediInfoCaseStudy,
  Mobile3: MusicAppCaseStudy,
  web1: SmartAttendCaseStudy,
  web2: ImageLicensingCaseStudy,
  web3: SmartBuyerCaseStudy,
  aiml1: BankAIUseCaseStudy,
  aiml2: MarketingAgencyCaseStudy,
  aiml3: AIinHealthcareCaseStudy,
  custom1: TranslationPlatformCaseStudy,
  custom2: FinancePlatformCaseStudy,
  custom3: CoachingPlatformCaseStudy,
  digital1: DigitalMarketingCaseStudy,
  digital2: B2BLeadsCaseStudy,
  digital3: SocialMediaCaseStudy,
  product1: BrandsmashersVendorManagementCaseStudy,
  product2: IdeaXCaseStudy,
  ui1: EntertainmentPlatformCaseStudy,
  ui2: AdAgencyCaseStudy,
  ui3: FitnessAppCaseStudy,
};

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const Custom = customComponents[slug];
  const data = caseStudies.find((s) => s.slug === slug);

  return (
    <div>
      <Navbar />

      {Custom ? (
        <Custom />
      ) : data ? (
        <>
          <Head>
            <title>{`Case Study: ${data.title} - Brandsmashers Tech`}</title>
            <meta name="description" content={data.description} />
            <meta property="og:title" content={`Case Study: ${data.title} - Brandsmashers Tech`} />
            <meta property="og:description" content={data.description} />
          </Head>

          {/* Hero */}
          <section className="bg-gradient-to-r from-[#ff5010] to-[#e0450e] text-white py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-6">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">{data.industry}</span>
                  <span className="mx-4">•</span>
                  <span className="text-white/80">{data.duration || '3-6 months'}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{data.description}</p>
                {data.technologies?.length ? (
                  <div className="flex flex-wrap gap-3">
                    {data.technologies.slice(0, 8).map((t) => (
                      <span key={t} className="bg-white/20 px-4 py-2 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          {/* Challenge */}
          {data.challenge ? (
            <section className="py-16">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
                  <h2 className="text-2xl font-bold text-red-600 mb-4">The Challenge</h2>
                  <p className="text-lg text-gray-700">{data.challenge}</p>
                </div>
              </div>
            </section>
          ) : null}

          {/* Solution */}
          {data.solution ? (
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Solution</h2>
                  <div className="bg-white p-8 rounded-xl shadow-lg text-gray-700 leading-relaxed">
                    {data.solution}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* Results */}
          {data.results?.length ? (
            <section className="py-16">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">The Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.results.map((r, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-md text-gray-700">
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* CTA */}
          <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let’s discuss how we can build a secure, scalable solution tailored to your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 font-semibold">Get in touch</Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 font-semibold">View more case studies</Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="text-center mt-10 text-red-500">Case study not found.</div>
      )}

      <Footer />
    </div>
  );
}
