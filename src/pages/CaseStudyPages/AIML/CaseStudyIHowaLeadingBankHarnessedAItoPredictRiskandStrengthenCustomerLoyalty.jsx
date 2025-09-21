

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const solutionEngines = [
  {
    title: 'Credit Risk Prediction Engine',
    description: 'Engineered advanced ML models (Random Forest, XGBoost) to predict risky loan applicants by analyzing over 40 data points.',
  },
  {
    title: 'Customer Churn Predictor',
    description: 'Trained a deep learning model to predict customer departure with over 82% accuracy, enabling proactive engagement.',
  },
  {
    title: 'Personalized Product Recommendation Engine',
    description: 'Created a hybrid recommendation system to align customers with the financial products that best suit their lifestyles.',
  },
];

const impactResults = [
  { value: '18%', label: 'Reduction in Non-Performing Assets' },
  { value: '25%', label: 'Decrease in Customer Churn' },
  { value: '33%', label: 'Increase in Offer Conversions' },
];

export default function BankAIUseCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Bank AI</title>
        <meta name="description" content="A case study on using AI to predict financial risk and strengthen customer loyalty." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Bank AI
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Predictive AI to Strengthen Customer Loyalty
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              A leading bank struggled with a rise in loan defaults and customer churn due to a lack of predictive data insights.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Key Issues</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                <li>Increasing customer churn, especially among mid-tier account holders.</li>
                <li>Ineffective marketing campaigns for cross-selling.</li>
                <li>A reactive rather than proactive approach to risk and customer behavior.</li>
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We developed a multi-faceted AI/ML framework to transform the bank’s data into a powerful asset. The solution included several key engines designed to predict and act on future trends.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {solutionEngines.map((engine, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{engine.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{engine.description}</p>
                    </div>
                  ))}
                  <div className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 col-span-full" style={{ backgroundColor: '#f5f5f5' }}>
                    <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>Streamlined Insights & Dashboards</h4>
                    <p className="text-sm" style={{ color: '#222222' }}>
                      Integrated all components into dynamic dashboards using Power BI and AWS, providing real-time, AI-driven insights to all departments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/CaseStudyImages/aimlBankai.png" // Placeholder image
                  alt="AI Prediction Models"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {impactResults.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The solution enabled a data-driven culture across the organization, shifting from reactive to proactive decision-making.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}