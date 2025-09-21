// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function B2BLeadsCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Driving B2B Leads with SEO & Email Marketing</title>
//         <meta name="description" content="A case study on how a fintech company transformed its online presence and lead generation through a comprehensive SEO and email marketing strategy." />
//         <meta property="og:title" content="B2B Leads with SEO & Email Marketing - Case Study" />
//         <meta property="og:image" content="/b2b-leads-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Driving B2B Leads with SEO & Email Marketing
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/b2b-leads-1.jpeg" // Placeholder image
//               alt="SEO & Email Marketing Strategy Overview"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-cyan-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               FinServe, a growing fintech company, was struggling with low online visibility and an outdated email marketing strategy. They needed to move away from cold outreach and generate more inbound leads.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-cyan-500">
//               <li>Poor visibility and low rankings for key industry terms.</li>
//               <li>Minimal organic traffic to their website.</li>
//               <li>Decreasing open and click-through rates from email campaigns.</li>
//               <li>Few inbound leads, leading to heavy reliance on cold outreach.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/b2b-leads-2.jpeg" // Placeholder image
//                 alt="Keyword Strategy and Content"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We implemented a comprehensive digital strategy starting with an in-depth SEO audit and a refreshed approach to email marketing. Our solution was designed to transform their online presence and generate qualified B2B leads.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-cyan-500">
//               <li>**Technical SEO & On-Page Optimization:** Fixed site speed and indexing issues. Optimized landing pages, metadata, and headings for key search terms.</li>
//               <li>**Targeted Content Strategy:** Conducted keyword research to identify high-intent phrases for B2B buyers. Created a 6-month content calendar with valuable blogs and whitepapers.</li>
//               <li>**Lead Magnet Creation:** Developed high-value lead magnets like eBooks and checklists with custom landing pages to capture prospect information.</li>
//               <li>**Advanced Email Nurturing:** Segmented email lists and developed personalized nurture sequences to re-engage leads and guide them through the sales funnel.</li>
//               <li>**Sales & Marketing Alignment:** Integrated with CRM systems like HubSpot to implement lead scoring and create a seamless handoff process between marketing and sales teams.</li>
//               <li>**Analytics & Reporting:** Established a comprehensive dashboard to track key metrics and provide monthly reports for data-driven decisions.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-cyan-600">The Results</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/b2b-leads-3.jpeg" // Placeholder image
//                 alt="Growth Metrics"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-cyan-500">
//               <li>**Organic Traffic:** Achieved a **120% increase** in search-driven website visitors in just 6 months.</li>
//               <li>**Keyword Ranking:** Secured **Page 1 ranking** on Google for over 15 key terms.</li>
//               <li>**Lead Generation:** Captured **150+ qualified B2B leads** through gated content.</li>
//               <li>**Email Performance:** Open rates soared from 12% to **36%**, and click-through rates doubled.</li>
//               <li>**Sales Impact:** Generated over **$1 million in new business pipeline** from inbound leads.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// src/components/B2BLeadsCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Poor visibility and low rankings for key industry terms.',
  'Minimal organic traffic to their website.',
  'Decreasing open and click-through rates from email campaigns.',
  'Few inbound leads, leading to heavy reliance on cold outreach.',
];

const solutionDetails = [
  {
    title: 'Technical SEO & On-Page Optimization',
    description: 'Fixed site speed and indexing issues. Optimized landing pages, metadata, and headings for key search terms.',
  },
  {
    title: 'Targeted Content Strategy',
    description: 'Conducted keyword research and created a 6-month content calendar with valuable blogs and whitepapers.',
  },
  {
    title: 'Lead Magnet Creation',
    description: 'Developed high-value lead magnets like eBooks and checklists with custom landing pages to capture prospect information.',
  },
  {
    title: 'Advanced Email Nurturing',
    description: 'Segmented email lists and developed personalized nurture sequences to re-engage leads and guide them through the sales funnel.',
  },
  {
    title: 'Sales & Marketing Alignment',
    description: 'Integrated with CRM systems like HubSpot to implement lead scoring and create a seamless handoff process between teams.',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Established a comprehensive dashboard to track key metrics and provide monthly reports for data-driven decisions.',
  },
];

const results = [
  { value: '120%', label: 'Increase in Organic Traffic' },
  { value: '150+', label: 'Qualified B2B Leads' },
  { value: '36%', label: 'Email Open Rate' },
  { value: '$1M+', label: 'In New Business Pipeline' },
];

export default function B2BLeadsCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | B2B Leads with SEO & Email Marketing</title>
        <meta name="description" content="A case study on how a fintech company transformed its online presence and lead generation through a comprehensive SEO and email marketing strategy." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: B2B Leads
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Driving Growth with SEO & Email Marketing
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              A growing fintech company was struggling with low online visibility and an outdated email marketing strategy, leading to heavy reliance on cold outreach.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Key Issues</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                {challengeIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We implemented a comprehensive digital strategy with a focus on SEO and email marketing to transform their online presence and generate qualified B2B leads.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                  {solutionDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{detail.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/CaseStudyImages/b2b.png" // Placeholder image
                  alt="SEO & Email Marketing Strategy"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {results.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The strategy successfully shifted the company from a cold outreach model to a powerful inbound lead generation engine.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}