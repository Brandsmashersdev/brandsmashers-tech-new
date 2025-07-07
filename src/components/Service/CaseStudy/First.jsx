




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
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function First() {
  return (
    <>
      <Head>
        <title>Case Study | Smart Buyer Management System - Local Mart</title>
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        
        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Case Study: Building a Smart Buyer Management System for a Local Mart
          </h1>

          {/* Hero Image */}
          <div className="flex justify-center mb-12">
            <Image
              src="/Untitled design (1) (2).png"
              alt="Smart Buyer System Overview"
              width={900}
              height={500}
              className="rounded-xl shadow-md w-full max-w-5xl h-auto object-cover"
            />
          </div>

          {/* The Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Challenge</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              The client ran a vibrant retail mart that was experiencing significant growth...
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              To overcome these hurdles, they envisioned a sleek, user-friendly website...
            </p>

            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
              <li>A secure vault for storing customer details, ensuring privacy and protection.</li>
              <li>A dynamic system to meticulously track each buyer&apos;s purchase history...</li>
              <li>An intuitive interface for logging and analyzing product information...</li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Solution</h2>

            {/* Image between sections */}
            <div className="flex justify-center mb-8">
              <Image
                src="/Web-img.png"
                alt="Website Solution"
                width={900}
                height={500}
                className="rounded-xl shadow-md w-full max-w-2xl h-auto object-cover"
              />
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              We meticulously crafted a state-of-the-art website that features...
            </p>

            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Secure Administrator Login:</strong> ...</li>
              <li><strong>Comprehensive Buyer Profiles:</strong> ...</li>
              <li><strong>Interactive Purchasing Table:</strong> ...</li>
              <li><strong>Robust Search and Filter Functions:</strong> ...</li>
              <li><strong>Mobile-Responsive Design:</strong> ...</li>
            </ul>
          </div>

          {/* The Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Results</h2>

            {/* Final image */}
            <div className="flex justify-center mb-8">
              <Image
                src="/WhatsApp Image 2025-06-26 at 12.20.32.jpeg"
                alt="Customer Results Snapshot"
                width={900}
                height={500}
                className="rounded-xl shadow-md w-full max-w-3xl h-auto object-cover"
              />
            </div>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Digitized over 700+ buyer records in the first month.</li>
              <li>Gained clear insights into best-selling items and pricing trends.</li>
              <li>Enabled quick reordering of popular products.</li>
              <li>Introduced targeted discounts and loyalty programs.</li>
              <li>
                The owner stated: <em>&quot;This system saves me hours every week and gives me real control over my customers and sales.&quot;</em>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}




