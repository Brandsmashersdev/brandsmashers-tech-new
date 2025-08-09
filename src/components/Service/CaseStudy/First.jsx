




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
import dynamic from 'next/dynamic';
import Image from 'next/image';
import caseStudies from '@/data/caseStudies';
import { FaShieldAlt, FaBolt, FaUsers, FaCloud } from 'react-icons/fa';

// Lazy load react-slick only on client to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false });
// Slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function First() {
  return (
    <>
      <Head>
        <title>Case Study: Fintech Mobile App - Brandsmashers Tech</title>
        <meta name="description" content="Discover how we built a secure, scalable fintech mobile app with real-time data processing and advanced security features." />
        <meta property="og:title" content="Case Study: Fintech Mobile App - Brandsmashers Tech" />
        <meta property="og:description" content="Secure, scalable fintech mobile app with real-time data processing." />
        <meta property="og:image" content="/finance.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Fintech Mobile App',
              description:
                'Secure, scalable fintech mobile app with real-time data processing and advanced security features.',
              author: { '@type': 'Organization', name: 'Brandsmashers Tech' },
              articleSection: 'Case Study',
              about: 'Finance',
              datePublished: '2024-01-15',
              image: ['/finance.png'],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#ff5010] to-[#e0450e] text-white py-20" id="overview">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div className="flex items-center mb-6">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Finance</span>
                <span className="mx-4">•</span>
                <span className="text-white/80">4 months</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Fintech Mobile App</h1>
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
              <div className="relative h-64 md:h-80 lg:h-96">
                <Image
                  src="/finance.png"
                  alt="Fintech app interface"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* On this page (TOC) */}
        <nav className="bg-white/90 backdrop-blur sticky top-0 z-30 border-b">
          <div className="container mx-auto px-6 overflow-x-auto">
            <ul className="flex gap-4 py-3 text-sm text-gray-600 whitespace-nowrap">
              {[
                { href: '#challenge', label: 'Challenge' },
                { href: '#solution', label: 'Solution' },
                { href: '#results', label: 'Results' },
                { href: '#tech', label: 'Technical' },
                { href: '#gallery', label: 'Gallery' },
                { href: '#timeline', label: 'Timeline' },
                { href: '#testimonial', label: 'Testimonial' },
                { href: '#faqs', label: 'FAQs' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#ff5010] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Challenge Section */}
        <section className="py-16" id="challenge">
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
        <section className="py-16 bg-gray-50" id="solution">
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
        <section className="py-16" id="results">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex justify-center text-[#ff5010] mb-2"><FaBolt size={28} /></div>
                  <div className="text-4xl font-bold text-[#ff5010] mb-2">
                    <CountUp end={40} suffix="%" duration={1.2} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-gray-600">Increase in user engagement</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center text-[#ff5010] mb-2"><FaCloud size={26} /></div>
                  <div className="text-4xl font-bold text-[#ff5010] mb-2">
                    <CountUp end={99.9} decimals={1} suffix="%" duration={1.2} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-gray-600">Uptime achieved</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center text-[#ff5010] mb-2"><FaShieldAlt size={26} /></div>
                  <div className="text-4xl font-bold text-[#ff5010] mb-2">
                    <CountUp end={50} suffix="%" duration={1.2} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-gray-600">Reduction in transaction time</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center text-[#ff5010] mb-2"><FaUsers size={26} /></div>
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
        <section className="py-16 bg-gray-50" id="tech">
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

        {/* Visual Gallery */}
        <section className="py-16" id="gallery">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visual Gallery</h2>
              <Slider
                arrows
                dots
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                adaptiveHeight
              >
                {[
                  { src: '/finance.png', alt: 'Finance analytics dashboard' },
                  { src: '/Statistics.png', alt: 'Key performance statistics' },
                  { src: '/chart1.svg', alt: 'Growth trend chart' },
                ].map((img) => (
                  <div key={img.src} className="relative h-[380px] md:h-[460px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={false}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-16 bg-gray-50" id="timeline">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Timeline</h2>
              <ol className="relative border-s border-gray-200">
                {[ 
                  { title: 'Discovery & Research', desc: 'Workshops, user interviews, requirement mapping, success metrics' },
                  { title: 'Solution Design', desc: 'Information architecture, user flows, low-to-high fidelity prototypes' },
                  { title: 'MVP Build', desc: 'Core banking flows, authentication, dashboards, CI/CD' },
                  { title: 'Scale & Optimize', desc: 'Performance tuning, observability, security hardening, autoscaling' },
                  { title: 'Launch & Iterate', desc: 'Feature flags, A/B tests, post-launch analytics and support' },
                ].map((step, index) => (
                  <li key={index} className="mb-10 ms-6">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff5010] ring-8 ring-white"></span>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="py-16" id="testimonial">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-5xl text-[#ff5010] mb-4">“</div>
              <p className="text-xl text-gray-800 leading-relaxed">
                Brandsmashers delivered a secure, scalable fintech app that our users love. We saw an immediate lift in engagement and a drastic cut in transaction latency without compromising compliance or security.
              </p>
              <div className="mt-6 text-gray-600">— Product Lead, Fintech Startup</div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50" id="faqs">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">FAQs</h2>
            <div className="space-y-4">
              {[ 
                { q: 'How did you ensure bank‑level security?', a: 'Multi-factor auth, biometric unlock, encrypted storage, signed requests, and continuous vulnerability scans.' },
                { q: 'What was the approach to performance?', a: 'Real-time streaming with backpressure, client-side caching, lazy modules, and autoscaling on peak hours.' },
                { q: 'How long did the MVP take?', a: 'We delivered the MVP in about 12 weeks, followed by iterative releases every two weeks.' },
              ].map((item, i) => (
                <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <span className="text-lg font-semibold text-gray-800">{item.q}</span>
                    <span className="text-[#ff5010]">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {caseStudies
                .filter((s) => s.slug !== 'first')
                .slice(0, 3)
                .map((s) => (
                  <div key={s.slug} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                    <div className="text-sm text-gray-500 mb-2">{s.industry}</div>
                    <div className="font-bold text-gray-800 mb-2">{s.title}</div>
                    <p className="text-gray-600 line-clamp-3 mb-4">{s.description}</p>
                    <Link href={`/CaseStudy/${s.slug}`} className="text-[#ff5010] font-semibold">Read more →</Link>
                  </div>
                ))}
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




