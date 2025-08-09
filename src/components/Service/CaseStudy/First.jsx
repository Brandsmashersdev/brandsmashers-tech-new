




// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Navbar from '@/components/navbar/navbar';

// export default function First() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Smart Buyer Management System - Local Mart</title>
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black">
//             Case Study: Building a Smart Buyer Management System for a Local Mart
//           </h1>

//           {/* The Challenge */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-red-600">The Challenge</h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               The client ran a vibrant retail mart that was experiencing significant growth,
//               but a daunting challenge loomed over their success: the absence of a structured
//               system to manage essential customer information, purchase histories, and pricing
//               details. This disarray hindered their ability to effectively monitor customer loyalty,
//               optimize inventory based on customer demand, and craft targeted promotions.
//             </p>
//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               To overcome these hurdles, they envisioned a sleek, user-friendly website that would
//               serve as a robust hub for their operations.
//             </p>

//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
//               <li>A secure vault for storing customer details, ensuring privacy and protection.</li>
//               <li>
//                 A dynamic system to meticulously track each buyer&apos;s purchase history, allowing for
//                 personalized service and promotions.
//               </li>
//               <li>
//                 An intuitive interface for logging and analyzing product information and pricing,
//                 empowering the client to make data-driven decisions and enhance their retail strategy.
//               </li>
//             </ul>
//           </div>

//           {/* The Solution */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-red-600">The Solution</h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               We meticulously crafted a state-of-the-art website that features a fully integrated
//               buyer data management module, specifically designed to address the distinctive
//               requirements of the mart:
//             </p>

//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
//               <li>
//                 <strong>Secure Administrator Login:</strong> Store administrators can access the system
//                 through a fortified login portal, employing advanced security measures.
//               </li>
//               <li>
//                 <strong>Comprehensive Buyer Profiles:</strong> Each buyer profile is enriched with
//                 vital contact info, detailed visit logs, and spending summaries.
//               </li>
//               <li>
//                 <strong>Interactive Purchasing Table:</strong> Records each purchased item with
//                 details like date and price, helping identify buying trends.
//               </li>
//               <li>
//                 <strong>Robust Search and Filter Functions:</strong> Intuitive tools to quickly
//                 navigate buyer and product data.
//               </li>
//               <li>
//                 <strong>Mobile-Responsive Design:</strong> Ensures access from tablets at counters for
//                 on-the-spot service.
//               </li>
//             </ul>
//           </div>

//           {/* The Results */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-red-600">The Results</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2">
//               <li>Digitized over 700+ buyer records in the first month.</li>
//               <li>Gained clear insights into best-selling items and pricing trends.</li>
//               <li>Enabled quick reordering of popular products.</li>
//               <li>Introduced targeted discounts and loyalty programs.</li>
//               <li>
//                 The owner stated: <em>&quot;This system saves me hours every week and gives me real control over my customers and sales.&quot;</em>
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }




'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CountUp from 'react-countup';

export default function First() {
  return (
    <>
      <Head>
        <title>Case Study: Fintech Mobile App - Brandsmashers Tech</title>
        <meta name="description" content="Discover how we built a secure, scalable fintech mobile app with real-time data processing and advanced security features." />
        <meta property="og:title" content="Case Study: Fintech Mobile App - Brandsmashers Tech" />
        <meta property="og:description" content="Secure, scalable fintech mobile app with real-time data processing." />
      </Head>

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#ff5010] to-[#e0450e] text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Finance</span>
                <span className="mx-4">•</span>
                <span className="text-white/80">4 months</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fintech Mobile App
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Developed a secure, scalable financial solution with real-time data processing and advanced security features for a leading fintech startup.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full">React Native</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Node.js</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">MongoDB</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">AWS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg mb-12">
                <h2 className="text-2xl font-bold text-red-600 mb-4">The Challenge</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Building a secure, scalable mobile banking application with real-time transaction processing that could handle thousands of concurrent users while maintaining the highest security standards.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Implementing bank-level security protocols</li>
                  <li>Real-time transaction processing and synchronization</li>
                  <li>Scalable architecture for rapid user growth</li>
                  <li>Compliance with financial regulations</li>
                  <li>Cross-platform mobile development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Solution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend Development</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• React Native for cross-platform mobile app</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Biometric authentication integration</li>
                    <li>• Offline-first architecture</li>
                    <li>• Intuitive user interface design</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Backend Development</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Node.js with Express.js framework</li>
                    <li>• MongoDB for flexible data storage</li>
                    <li>• JWT-based authentication</li>
                    <li>• Real-time WebSocket connections</li>
                    <li>• AWS cloud infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ff5010] mb-2">
                    <CountUp end={40} suffix="%" duration={1.2} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-gray-600">Increase in user engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ff5010] mb-2">
                    <CountUp end={99.9} decimals={1} suffix="%" duration={1.2} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-gray-600">Uptime achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ff5010] mb-2">
                    <CountUp end={50} suffix="%" duration={1.2} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-gray-600">Reduction in transaction time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ff5010] mb-2">
                    <CountUp end={10000} separator="," suffix="+" duration={1.4} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-gray-600">Active users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Features</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Biometric authentication</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Secure API endpoints</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Real-time data sync</li>
                    <li>• Offline functionality</li>
                    <li>• Optimized app size</li>
                    <li>• Fast loading times</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Scalability</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Microservices architecture</li>
                    <li>• Auto-scaling infrastructure</li>
                    <li>• Load balancing</li>
                    <li>• Database optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Fintech Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can create a secure, scalable financial application for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 font-semibold"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}




