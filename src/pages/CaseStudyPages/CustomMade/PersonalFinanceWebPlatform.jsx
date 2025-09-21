// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function FinancePlatformCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Personal Finance Web Platform</title>
//         <meta name="description" content="A case study on building a personal finance web platform to empower users with real-time tracking, smart insights, and goal management." />
//         <meta property="og:title" content="Personal Finance Platform - Case Study" />
//         <meta property="og:image" content="/finance-platform-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Building a Personal Finance Web Platform That Empowers Users
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/finance-1.jpeg" // Placeholder image
//               alt="Personal Finance Dashboard"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               The client envisioned a web-based personal finance platform that would empower users to confidently manage their finances. The goal was to provide a secure and intuitive tool for tracking spending, setting goals, and gaining insights.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
//               <li>**Real-Time Tracking:** Enable users to log income, categorize expenses, and set customizable savings goals.</li>
//               <li>**Smart Insights:** Provide personalized recommendations based on spending habits using advanced algorithms.</li>
//               <li>**Secure Account Linking:** Allow secure linking of multiple bank accounts and credit cards to a single dashboard.</li>
//               <li>**Seamless User Experience:** Cater to all financial knowledge levels with an intuitive interface and helpful resources.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/finance-2.jpeg" // Placeholder image
//                 alt="Financial Insights"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We developed a secure and intelligent personal finance platform that not only tracks user data but also provides actionable insights to promote healthier financial behaviors. At its core, the platform integrates with various financial institutions to provide a **centralized, real-time view** of a user&#39;s entire financial life.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
//               <li>**Secure API Integration:** Utilized a robust and secure API to link bank accounts and credit cards, ensuring data privacy and compliance with financial regulations.</li>
//               <li>**AI-Powered Analytics Engine:** A custom-built algorithm analyzes spending patterns and income to provide **personalized insights** and recommendations, such as identifying spending leaks or suggesting optimal savings plans.</li>
//               <li>**Intuitive Goal Setting:** Implemented a user-friendly module for setting and tracking financial goals. The system provides visual progress trackers and automated reminders to keep users motivated.</li>
//               <li>**Cross-Platform Accessibility:** The web-based platform was designed to be fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Results</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/finance-3.jpeg" // Placeholder image
//                 alt="User Engagement"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
//               <li>**On-Time Launch:** The feature-rich web application was successfully delivered and launched on time.</li>
//               <li>**User Growth:** Achieved an impressive increase in new users within the first 60 days.</li>
//               <li>**Increased Engagement:** Users interacted with their dashboards an average of **15 times per week**, indicating high utility and engagement.</li>
//               <li>**Positive Feedback:** Earned an outstanding user rating of **4.8★**, with praise for the app&#39;s ease of use and insightful analytics.</li>
//               <li>**Revenue Impact:** The launch enabled a new subscription tier, resulting in a **30% increase in recurring revenue**.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }



// src/components/FinancePlatformCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeGoals = [
  'Real-Time Tracking: Enable users to log income, categorize expenses, and set customizable savings goals.',
  'Smart Insights: Provide personalized recommendations based on spending habits using advanced algorithms.',
  'Secure Account Linking: Allow secure linking of multiple bank accounts and credit cards to a single dashboard.',
  'Seamless User Experience: Cater to all financial knowledge levels with an intuitive interface and helpful resources.',
];

const solutionDetails = [
  {
    title: 'Secure API Integration',
    description: 'Utilized a robust and secure API to link bank accounts and credit cards, ensuring data privacy and compliance with financial regulations.',
  },
  {
    title: 'AI-Powered Analytics Engine',
    description: 'A custom-built algorithm analyzes spending patterns and income to provide personalized insights and recommendations.',
  },
  {
    title: 'Intuitive Goal Setting',
    description: 'Implemented a user-friendly module for setting and tracking financial goals with visual progress trackers and automated reminders.',
  },
  {
    title: 'Cross-Platform Accessibility',
    description: 'The web-based platform was designed to be fully responsive, ensuring a seamless experience on all devices.',
  },
];

const results = [
  { value: '4.8★', label: 'User Rating' },
  { value: '15', label: 'Dashboard Interactions per week' },
  { value: '30%', label: 'Increase in Recurring Revenue' },
];

export default function FinancePlatformCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Personal Finance Platform</title>
        <meta name="description" content="A case study on building a personal finance web platform." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Personal Finance Platform
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Building a Platform That Empowers Users
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              The client envisioned a web-based personal finance platform that would empower users to confidently manage their finances by providing a secure and intuitive tool for tracking spending, setting goals, and gaining insights.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Goals</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                {challengeGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
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
                  We developed a secure and intelligent personal finance platform that not only tracks user data but also provides actionable insights to promote healthier financial behaviors. At its core, the platform integrates with various financial institutions to provide a **centralized, real-time view** of a user&apos;s entire financial life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                  src="/CaseStudyImages/personalfinancecuston.png" // Placeholder image
                  alt="Financial Insights"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {results.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The on-time launch achieved impressive user growth and high engagement, indicating a successful solution that met and exceeded the client&apos;s goals.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}