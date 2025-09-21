// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function DigitalMarketingCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Brainstorming Our Way to a Winning Digital Marketing Strategy</title>
//         <meta name="description" content="A case study on developing a digital marketing strategy to boost brand awareness, engagement, and sales for a healthy snack brand." />
//         <meta property="og:title" content="Digital Marketing Strategy - Case Study" />
//         <meta property="og:image" content="/marketing-strategy-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Brainstorming Our Way to a Winning Digital Marketing Strategy
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/marketing-1.jpeg" // Placeholder image
//               alt="Digital Marketing Strategy"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               Our client, a company with a quality product, struggled with brand recognition and low social media engagement. Their paid ads had a high cost per acquisition, and they were unsure which audience segments to target for growth.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
//               <li>Lack of brand recognition.</li>
//               <li>Low social media engagement.</li>
//               <li>High cost per acquisition (CPA) on paid advertising.</li>
//               <li>Uncertainty about the best audience segments for growth.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/marketing-2.jpeg" // Placeholder image
//                 alt="Strategy Session"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We conducted a multi-session strategy sprint to align our marketing, creative, and analytics teams. This approach allowed us to move beyond simple ads and create a story that would truly resonate with the target audience.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
//               <li>**Audience Exploration:** We went beyond demographics to understand the motivations and frustrations of health-conscious millennials and busy professionals.</li>
//               <li>**Brand Storytelling:** Developed core messaging concepts like &quot;Snack Smart, Live Fully&quot; to define the brand&apos;s soul and emotional connection.</li>
//               <li>**Campaign Blueprint:** Created a blueprint for building brand loyalty through community-driven challenges, influencer collaborations, and engaging behind-the-scenes content.</li>
//             </ul>
//           </div>
          
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">Our Final Strategy</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/marketing-3.jpeg" // Placeholder image
//                 alt="Campaign Implementation"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
//               <li>**Social Media Relaunch:** Revitalized the social presence with user-generated content and short-form videos.</li>
//               <li>**Micro-Influencer Campaign:** Collaborated with 10 health-focused creators for authentic reviews.</li>
//               <li>**Ad Optimization:** Refined paid ads by focusing on top-performing audience segments and fresh creative.</li>
//               <li>**Email Marketing Revamp:** Developed a welcome series and exclusive offers to nurture customer loyalty.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Results</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
//               <li>A **4x increase** in social media engagement.</li>
//               <li>Over **70% growth** in followers within three months.</li>
//               <li>A **35% reduction** in CPA from paid ads.</li>
//               <li>More than **2,000 new leads** generated from influencer campaigns.</li>
//               <li>A significant **$200K increase in sales** over the four-month campaign.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// src/components/DigitalMarketingCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Lack of brand recognition.',
  'Low social media engagement.',
  'High cost per acquisition (CPA) on paid advertising.',
  'Uncertainty about the best audience segments for growth.',
];

const solutionDetails = [
  {
    title: 'Audience Exploration',
    description: 'We went beyond demographics to understand the motivations and frustrations of health-conscious millennials and busy professionals.',
  },
  {
    title: 'Brand Storytelling',
    description: 'Developed core messaging concepts like "Snack Smart, Live Fully" to define the brand’s soul and emotional connection.',
  },
  {
    title: 'Campaign Blueprint',
    description: 'Created a blueprint for building brand loyalty through community-driven challenges, influencer collaborations, and engaging content.',
  },
];

const finalStrategy = [
  {
    title: 'Social Media Relaunch',
    description: 'Revitalized the social presence with user-generated content and short-form videos.',
  },
  {
    title: 'Micro-Influencer Campaign',
    description: 'Collaborated with 10 health-focused creators for authentic reviews.',
  },
  {
    title: 'Ad Optimization',
    description: 'Refined paid ads by focusing on top-performing audience segments and fresh creative.',
  },
  {
    title: 'Email Marketing Revamp',
    description: 'Developed a welcome series and exclusive offers to nurture customer loyalty.',
  },
];

const results = [
  { value: '4x', label: 'Increase in Social Media Engagement' },
  { value: '70%+', label: 'Growth in Followers' },
  { value: '35%', label: 'Reduction in CPA' },
  { value: '$200K', label: 'Increase in Sales' },
];

export default function DigitalMarketingCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Digital Marketing</title>
        <meta name="description" content="A case study on developing a digital marketing strategy to boost brand awareness and sales." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Digital Marketing Strategy
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Brainstorming Our Way to a Winning Strategy
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              Our client, with a quality product, struggled with brand recognition, low social media engagement, and high cost per acquisition on paid ads.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Issues</h3>
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
                  We conducted a multi-session strategy sprint to create a story that would truly resonate with the target audience.
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
                  src="/CaseStudyImages/digitaltwostratergytwo.png" // Placeholder image
                  alt="Strategy Session"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />
          
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>Our Final Strategy</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  The final strategy focused on revitalizing social media, leveraging micro-influencers, optimizing ad campaigns, and revamping email marketing to build lasting customer loyalty.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {finalStrategy.map((item, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 mt-8 md:mt-0">
                <Image
                  src="/CaseStudyImages/digitalstragergytone.png" // Placeholder image
                  alt="Campaign Implementation"
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
          </section>
        </main>
      </div>
    </>
  );
}