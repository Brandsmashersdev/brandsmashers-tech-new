import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Inaccurate Tracking of Attendance and Leaves.',
  'Lack of Transparency in Approvals.',
  'Difficulty Generating Monthly Reports.',
  'No Centralized View for HR or Management.',
];

const solutionDetails = [
  {
    title: 'Interactive Calendar',
    description: 'A visually rich monthly calendar shows attendance status with color-coded days (present, absent, leave, remote).',
  },
  {
    title: 'Streamlined Workflows',
    description: 'Employees can easily mark attendance or apply for various leave types directly from the calendar, with a real-time approval process for managers.',
  },
  {
    title: 'Dynamic Admin Dashboard',
    description: 'HR and management get a central view of real-time attendance data and can generate one-click monthly reports for payroll.',
  },
  {
    title: 'Security',
    description: 'The system features role-based access and is hosted securely on the cloud with data encryption and regular backups.',
  },
];

const results = [
  { value: '90%', label: 'Reduction in Manual HR Time' },
  { value: '30%', label: 'Improvement in Attendance Compliance' },
  { value: 'One-Click', label: 'Monthly Reporting' },
  { value: 'Foundation', label: 'For a Digitally Empowered Workplace' },
];

export default function SmartAttendCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | SmartAttend</title>
        <meta name="description" content="A case study on building a cloud-based attendance and leave management portal to automate HR processes." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: SmartAttend
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Digital Attendance & Leave Portal
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              The client faced significant challenges managing the attendance of over 200 employees using traditional, manual methods.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We developed **SmartAttend** — a cloud-based, intuitive platform that modernizes and automates attendance and leave management.
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
                  src="/CaseStudyImages/portalweb.png" // Placeholder image
                  alt="SmartAttend Portal"
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
                The new system laid the foundation for a more transparent, efficient, and digitally empowered workplace.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}