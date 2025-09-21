// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function TranslationPlatformCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Feature-Rich Web-Based Language Translation Platform</title>
//         <meta name="description" content="A case study on building a comprehensive web platform for high-accuracy, multi-format language translation with AI-powered features." />
//         <meta property="og:title" content="Language Translation Platform - Case Study" />
//         <meta property="og:image" content="/translation-platform-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Building a Feature-Rich Web-Based Language Translation Platform
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/translation-1.jpeg" // Placeholder image
//               alt="Translation Platform Interface"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               The client wanted a next-generation translation platform to handle various content types and meet the needs of both individual users and large enterprises. The primary goal was to create a tool that was not only accurate but also intelligent, collaborative, and highly secure.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>Real-time, high-accuracy translation across multiple languages.</li>
//               <li>Support for various formats: text, audio, video subtitles, and documents.</li>
//               <li>AI-powered suggestions for tone and context.</li>
//               <li>Collaborative tools for translators and editors.</li>
//               <li>Enterprise-level API integrations with strong data security.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/translation-2.jpeg" // Placeholder image
//                 alt="AI-Powered Features"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We built a powerful web-based platform that seamlessly facilitates communication across language barriers. The tool provides a striking blend of speed, accuracy, and intuitive design, making it a comprehensive solution for global communication.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>**Multi-Format Support:** Real-time text translation, document file conversion (PDFs, Word), and AI-driven subtitle generation for audio/video.</li>
//               <li>**AI-Enhanced Features:** Advanced AI provides tone adjustments (formal, casual, technical) and suggests alternative phrases, ensuring translations are contextually accurate.</li>
//               <li>**Collaborative Workspace:** Teams can work together in real-time with features like commenting, change tracking, and version history.</li>
//               <li>**Enterprise-Ready APIs:** Robust RESTful APIs were developed to integrate translation capabilities into corporate websites, chatbots, and support systems.</li>
//               <li>**Security & Privacy:** The platform is hosted on a secure cloud infrastructure with end-to-end encryption, MFA, and full compliance with GDPR and CCPA.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Results</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/translation-3.jpeg" // Placeholder image
//                 alt="API Integration"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>**Successful Global Launch:** The platform launched in over **20 countries** within the first quarter.</li>
//               <li>**Enterprise Partnerships:** Secured several major **B2B contracts** for API usage.</li>
//               <li>**High User Engagement:** Achieved significant user growth and maintained an average rating of **4.9 stars**.</li>
//               <li>**Operational Impact:** Helped clients reduce manual translation time and lower costs significantly.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// src/components/TranslationPlatformCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeGoals = [
  'Real-time, high-accuracy translation across multiple languages.',
  'Support for various formats: text, audio, video subtitles, and documents.',
  'AI-powered suggestions for tone and context.',
  'Collaborative tools for translators and editors.',
  'Enterprise-level API integrations with strong data security.',
];

const solutionFeatures = [
  {
    title: 'Multi-Format Support',
    description: 'Real-time text translation, document file conversion (PDFs, Word), and AI-driven subtitle generation for audio/video.',
  },
  {
    title: 'AI-Enhanced Features',
    description: 'Advanced AI provides tone adjustments and suggests alternative phrases, ensuring translations are contextually accurate.',
  },
  {
    title: 'Collaborative Workspace',
    description: 'Teams can work together in real-time with features like commenting, change tracking, and version history.',
  },
  {
    title: 'Enterprise-Ready APIs',
    description: 'Robust RESTful APIs were developed to integrate translation capabilities into corporate websites, chatbots, and support systems.',
  },
  {
    title: 'Security & Privacy',
    description: 'The platform is hosted on a secure cloud infrastructure with end-to-end encryption, MFA, and full compliance with GDPR and CCPA.',
  },
];

const results = [
  { value: '20+', label: 'Countries Launched In' },
  { value: '4.9', label: 'Average User Rating' },
  { value: 'B2B', label: 'Partnerships Secured' },
];

export default function TranslationPlatformCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Translation Platform</title>
        <meta name="description" content="A case study on building a web-based language translation platform." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Language Translation Platform
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Building a Feature-Rich Web-Based Solution
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  The client wanted a next-generation translation platform to handle various content types and meet the needs of both individual users and large enterprises. The primary goal was to create a tool that was not only accurate but also intelligent, collaborative, and highly secure.
                </p>
                <div className="rounded-2xl shadow-xl p-8" style={{ backgroundColor: '#f5f5f5' }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Objectives</h3>
                  <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                    {challengeGoals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 mt-8 md:mt-0">
                <Image
                  src="/CaseStudyImages/languagetranslationONEcustom.png" // Placeholder image
                  alt="Translation Platform Interface"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/CaseStudyImages/languagecustomtwo.png" // Placeholder image
                  alt="AI-Powered Features"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We built a powerful web-based platform that seamlessly facilitates communication across language barriers. The tool provides a striking blend of speed, accuracy, and intuitive design, making it a comprehensive solution for global communication.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {solutionFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{feature.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
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