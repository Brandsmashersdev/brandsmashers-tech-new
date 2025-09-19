'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function ImageLicensingCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | User-Generated Image Licensing Platform</title>
        <meta name="description" content="A case study on building a platform for users to create, license, and monetize their own images." />
        <meta property="og:title" content="Image Licensing Platform - Case Study" />
        <meta property="og:image" content="/licensing-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Building a User-Generated Image Licensing Platform
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/licensing-1.jpeg" // Placeholder image
              alt="Image Licensing Platform"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The client had a unique vision of a groundbreaking platform that empowers users to craft their own images by utilizing a diverse library of pre-uploaded images. This platform is designed not only for creative expression but also for monetization, allowing users to earn a commission each time their design is downloaded by other users.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
              <li>**Library Management:** A robust system for uploading and managing an extensive library of base images.</li>
              <li>**In-App Image Editor:** An intuitive and powerful image editing tool for users.</li>
              <li>**Marketplace Integration:** A dynamic marketplace for users to showcase and sell their edited images.</li>
              <li>**Secure Payment and Revenue-Sharing Model:** A transparent payment system to compensate creators.</li>
              <li>**Cross-Platform Accessibility:** Deployment on both web and mobile applications.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/licensing-2.jpeg" // Placeholder image
                alt="Solution Overview"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We designed a comprehensive, end-to-end solution that delivers a smooth experience for admins, users, and creators alike.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
              <li>**Phase 1: Admin Portal:** Developed an **Image Upload & Management Portal** with high-resolution uploads, smart categorization, and a tagging system for fast, accurate search.</li>
              <li>**Phase 2: User Editor:** Introduced a **Web & App-Based Image Editor** with a simple drag-and-drop interface, allowing users to layer images, apply filters, and add text.</li>
              <li>**Phase 3: Marketplace & Monetization:** Established a **Marketplace** where creators could showcase their work. Implemented a revenue-sharing model (30% creator, 70% platform) and an integrated wallet system.</li>
              <li>**Phase 4: Security:** Implemented smart **watermarking techniques** and download protection mechanisms to secure creative work.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Results</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
              <li>Over 2,000 images were created and uploaded in the first month.</li>
              <li>The app generated more than ₹1 lakh in downloads.</li>
              <li>Offers a fully functional experience with a friendly interface and real-time tracking.</li>
              <li>Digital assets are protected with a backend watermark and licensing controls.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}