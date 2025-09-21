// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function AIinHealthcareCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Transforming Diagnosis with AI</title>
//         <meta name="description" content="A case study on an AI-powered clinical decision support system designed to assist clinicians in early disease diagnosis and risk prediction." />
//         <meta property="og:title" content="AI in Healthcare - Transforming Diagnosis" />
//         <meta property="og:image" content="/ai-healthcare-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Transforming Diagnosis with AI
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/ai-healthcare-1.jpeg" // Placeholder image
//               alt="AI-Powered Clinical System"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               Despite skilled clinicians and advanced technology, delayed diagnoses and complications from diseases were increasing. The primary issues stemmed from fragmented data, overwhelmed clinicians, and missed critical signs, especially in high-risk patients.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
//               <li>Fragmented Medical Data scattered across various formats.</li>
//               <li>Overwhelmed Clinicians with little time for in-depth data analysis.</li>
//               <li>Missed Critical Signs, particularly in high-risk cases.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/ai-healthcare-2.jpeg" // Placeholder image
//                 alt="AI System Dashboard"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We developed an AI-powered clinical decision support system named **App**. This system was built to act as a **clinical co-pilot**, assisting healthcare professionals by predicting disease risk and facilitating early diagnosis.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
//               <li>**Insights Collection:** We gathered and anonymized five years of patient data to train the models.</li>
//               <li>**Model Development:** Utilized machine learning models like XGBoost and a BERT-based NLP engine to uncover hidden patterns and interpret unstructured notes.</li>
//               <li>**Human-Centered Design:** Designed the system to enhance clinician capabilities with timely alerts on potentially overlooked symptoms.</li>
//               <li>**Pilot Testing:** Integrated the model with existing hospital software via FHIR APIs and created a user-friendly web dashboard using React.js.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Technologies Used</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Languages & Libraries:</strong> Python, Scikit-learn, XGBoost, Hugging Face Transformers
//               </div>
//               <div>
//                 <strong>Frontend:</strong> React.js
//               </div>
//               <div>
//                 <strong>Backend/API:</strong> Flask, FastAPI, FHIR
//               </div>
//               <div>
//                 <strong>Infrastructure:</strong> Docker, Kubernetes, AWS
//               </div>
//               <div>
//                 <strong>Security:</strong> HIPAA-aligned anonymization and access control
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Results</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
//               <li>Doctors were able to identify conditions like sepsis up to **12 hours sooner**.</li>
//               <li>Diagnostic accuracy for high-risk cases improved from 82% to **91%**.</li>
//               <li>The time needed for preliminary diagnoses was reduced by over **40%**.</li>
//               <li>Initially skeptical staff members came to rely on the app for additional insights during demanding shifts.</li>
//             </ul>
//             <blockquote className="mt-8 text-xl italic text-gray-600 border-l-4 border-emerald-500 pl-4">
//               <p>&quot;It&#39;s akin to having a colleague who never tires — one who meticulously reviews every detail, recalls each patient’s information, and aids us in making timely decisions.&quot;</p>
//             </blockquote>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// src/components/AIinHealthcareCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  {
    title: 'Fragmented Medical Data',
    description: 'Data was scattered across various formats, making it difficult to get a complete patient overview.',
  },
  {
    title: 'Overwhelmed Clinicians',
    description: 'Healthcare professionals had little time for in-depth data analysis during demanding shifts.',
  },
  {
    title: 'Missed Critical Signs',
    description: 'Critical symptoms and patterns were often overlooked, especially in high-risk patients.',
  },
];

const solutionDetails = [
  {
    title: 'Model Development',
    description: 'Utilized machine learning models like XGBoost and a BERT-based NLP engine to uncover hidden patterns and interpret unstructured notes.',
  },
  {
    title: 'Human-Centered Design',
    description: 'Designed the system to enhance clinician capabilities with timely alerts on potentially overlooked symptoms.',
  },
  {
    title: 'Pilot Testing',
    description: 'Integrated the model with existing hospital software via FHIR APIs and created a user-friendly web dashboard using React.js.',
  },
];

const techStack = [
  { tech: 'Languages & Libraries', name: 'Python, Scikit-learn, XGBoost, Hugging Face Transformers' },
  { tech: 'Frontend', name: 'React.js' },
  { tech: 'Backend/API', name: 'Flask, FastAPI, FHIR' },
  { tech: 'Infrastructure', name: 'Docker, Kubernetes, AWS' },
  { tech: 'Security', name: 'HIPAA-aligned anonymization and access control' },
];

const results = [
  { value: '12 hours', label: 'Sooner Sepsis Identification' },
  { value: '91%', label: 'Diagnostic Accuracy Improvement' },
  { value: '40%', label: 'Reduction in Diagnosis Time' },
];

export default function AIinHealthcareCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | AI in Healthcare</title>
        <meta name="description" content="A case study on an AI-powered clinical decision support system." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: AI in Healthcare
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Transforming Diagnosis with AI
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              The client faced significant challenges in patient care due to fragmented data, clinician burnout, and missed critical signs, leading to delayed diagnoses.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Key Issues</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {challengeIssues.map((issue, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#ff5010' }}>{issue.title}</h4>
                    <p className="text-sm" style={{ color: '#222222' }}>{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We developed an AI-powered clinical decision support system to act as a **clinical co-pilot**, assisting healthcare professionals by predicting disease risk and facilitating early diagnosis.
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
                  src="/CaseStudyImages/diagnosiswithaiaiml.png" // Placeholder image
                  alt="AI System Dashboard"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>Technologies Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {techStack.map((item, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-xl font-bold" style={{ color: '#ff5010' }}>{item.tech}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{item.name}</p>
                </div>
              ))}
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
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                &ldquo;It&apos;s akin to having a colleague who never tires — one who meticulously reviews every detail... and aids us in making timely decisions.&rdquo;
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}