'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function SmartAttendCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | SmartAttend – Digital Attendance & Leave Portal</title>
        <meta name="description" content="A case study on building a cloud-based attendance and leave management portal to automate HR processes." />
        <meta property="og:title" content="SmartAttend - Digital Attendance Portal" />
        <meta property="og:image" content="/smart-attend-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: SmartAttend – Digital Attendance & Leave Portal
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/smart-attend-1.jpeg" // Placeholder image
              alt="SmartAttend Portal Dashboard"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The client faced significant challenges managing the attendance of over 200 employees using traditional methods like manual registers and spreadsheets. This led to several inefficiencies and a lack of transparency.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>Inaccurate Tracking of Attendance and Leaves.</li>
              <li>Lack of Transparency in Approvals.</li>
              <li>Difficulty Generating Monthly Reports.</li>
              <li>No Centralized View for HR or Management.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/smart-attend-2.jpeg" // Placeholder image
                alt="SmartAttend Leave Request"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed **SmartAttend** — a cloud-based, intuitive platform that modernizes and automates attendance and leave management.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>**Interactive Calendar:** A visually rich monthly calendar shows attendance status with color-coded days (present, absent, leave, remote).</li>
              <li>**Streamlined Workflows:** Employees can easily mark attendance or apply for various leave types directly from the calendar, with a real-time approval process for managers.</li>
              <li>**Dynamic Admin Dashboard:** HR and management get a central view of real-time attendance data and can generate one-click monthly reports for payroll.</li>
              <li>**Security:** The system features role-based access and is hosted securely on the cloud with data encryption and regular backups.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Results</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/smart-attend-3.jpeg" // Placeholder image
                alt="SmartAttend Reporting"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>**90% Reduction** in the time spent on manual tracking and leave approvals for the HR department.</li>
              <li>**30% Improvement** in employee attendance compliance within the first quarter.</li>
              <li>Department heads embraced the one-click monthly reporting feature, simplifying their operations.</li>
              <li>The system laid the foundation for a more transparent, efficient, and digitally empowered workplace.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}